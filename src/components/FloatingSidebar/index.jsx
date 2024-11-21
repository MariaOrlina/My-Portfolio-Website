// FloatingSidebar.jsx
import React from 'react';
import styles from './style.module.scss';
import { FiLinkedin, FiGithub, FiMail, FiBookOpen } from 'react-icons/fi';

export default function FloatingSidebar() {
  return (
    <div className={styles.floatingSidebar}>
      <a
        href="https://linkedin.com/in/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FiLinkedin size={24} />
      </a>
      <a
        href="https://github.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FiGithub size={24} />
      </a>
      <a
        href="https://medium.com/@your-profile"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Medium"
      >
        <FiBookOpen size={24} />
      </a>
      <a
        href="mailto:your-email@example.com"
        aria-label="Email"
      >
        <FiMail size={24} />
      </a>
    </div>
  );
}
