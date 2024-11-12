// src/components/HeaderIcons.tsx
"use client";

import React from 'react';
import { FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';

const HeaderIcons: React.FC = () => {
  return (
    <div className="md:hidden flex justify-center space-x-6 mt-8 relative">
    <a
        href="https://www.linkedin.com/in/your-profile/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-lightBlue p-3 rounded-full text-teal hover:bg-teal hover:text-lightBlue transition-colors duration-300"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://github.com/your-github"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-lightBlue p-3 rounded-full text-teal hover:bg-teal hover:text-lightBlue transition-colors duration-300"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="/path/to/your_cv.pdf"
        className="bg-lightBlue p-3 rounded-full text-teal hover:bg-teal hover:text-lightBlue transition-colors duration-300"
        download
      >
        <FaFileAlt size={24} />
      </a>
    </div>
  );
};

export default HeaderIcons;
