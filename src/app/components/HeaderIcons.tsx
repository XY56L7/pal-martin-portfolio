"use client";

import React from 'react';
import { FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';

const HeaderIcons: React.FC = () => {
  return (
    <div className="md:hidden flex justify-center space-x-6 mt-8 relative">
      <a
        href="https://www.linkedin.com/in/martin-pal-8b4212235/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full text-teal transition-colors duration-300 hover:text-lightBlue"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://github.com/XY56L7"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full text-teal transition-colors duration-300 hover:text-lightBlue"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="/Pal_Martin_CV_PDF.pdf"
        className="p-3 rounded-full text-teal transition-colors duration-300 hover:text-lightBlue"
      >
        <FaFileAlt size={24} />
      </a>
    </div>
  );
};

export default HeaderIcons;
