
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/store/authStore';
export default function EditProfilePage() {
  const router = useRouter();
  const { user } = useAuthStore();
  const [username, setUsername] = useState(user?.username ?? '');

  useEffect(() => {
    if (!user) {
      router.push('/sign-in');
    }
  }, [user, router]);

  if (!user) {
    return null; // або <Loader />
  }

  return (
    <main>
      <h1>Edit profile</h1>

      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </main>
  );
}