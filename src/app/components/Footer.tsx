// src/components/Footer.tsx
"use client";

import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import BlurText from './BlurText';

const Footer: React.FC = () => {
  return (
    <footer className="bg-lightBlue text-slate py-6">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.linkedin.com/in/your-profile/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal hover:text-secondary"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal hover:text-secondary"
          >
            <FaGithub size={24} />
          </a>
        </div>
        <p>
          <BlurText 
            text={`© ${new Date().getFullYear()} Pál Martin. All rights reserved.`}
            delay={100}
            direction="bottom"
          />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
