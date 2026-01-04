import { Metadata } from "next";
import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api/serverApi";
import NoteDetails from "./NoteDetails.client"; // 🔹 імпорт локальний

interface NotePageProps {
  params: { id: string };
}

// Генерація мета-даних для SEO та OpenGraph
export async function generateMetadata({ params }: NotePageProps): Promise<Metadata> {
  const { id } = params;
  const note = await fetchNoteById(id);

  return {
    title: note.title,
    description: note.content,
    openGraph: {
      title: note.title,
      description: note.content,
      url: `https://yourdomain.com/notes/${note.id}`,
      images: [
        {
          url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
          width: 1200,
          height: 630,
          alt: "NoteHub OpenGraph Image",
        },
      ],
    },
  };
}

// Серверна сторінка, яка робить prefetchQuery для React Query
async function NotePage({ params }: NotePageProps) {
  const { id } = params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetails id={id} /> {/* 🔹 передаємо id у клієнтський компонент */}
    </HydrationBoundary>
  );
}

export default NotePage;