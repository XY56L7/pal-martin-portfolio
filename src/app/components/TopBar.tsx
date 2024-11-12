// src/components/TopBar.tsx
"use client";

import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const TopBar: React.FC = () => {
  return (
    <div className="hidden md:flex fixed top-0 right-0 h-16 bg-lightBlue text-teal items-center px-4 z-50">
      <a
        href="/path/to/your_cv.pdf"
        className="mr-4 bg-teal text-darkBlue px-4 py-2 rounded hover:bg-opacity-90"
        download
      >
        Download CV
      </a>
      <a
        href="https://www.linkedin.com/in/your-profile/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl hover:text-secondary mx-2"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/your-github"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl hover:text-secondary mx-2"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default TopBar;
