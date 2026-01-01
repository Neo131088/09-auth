import React from "react";
import { FiMail, FiCode } from "react-icons/fi";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <div className={css.wrap}>
          <p className={css.dev}>
            <FiCode className={css.icon} /> Developer: Igor Orikh
          </p>
          <p className={css.contact}>
            <FiMail className={css.icon} /> Contact us:{" "}
            <a
              className={css.email}
              href="mailto:neo131088@gmail.com"
            >
              neo131088@gmail.com
            </a>
          </p>
          <p className={css.copy}>
          © {new Date().getFullYear()} NoteHub. All rights reserved.
        </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;