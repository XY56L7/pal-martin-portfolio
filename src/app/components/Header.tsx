// src/app/components/Header.js
"use client";

import React, { useState } from 'react'; // Remove 'useEffect' if not used
import { FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="bg-primary fixed w-full z-10">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white">
          Pál Martin
        </a>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#about" className="hover:text-secondary">
            About
          </a>
          <a href="#projects" className="hover:text-secondary">
            Projects
          </a>
          <a href="#contact" className="hover:text-secondary">
            Contact
          </a>
          <a
            href="/path/to/your_cv.pdf"
            className="bg-secondary text-white px-4 py-2 rounded hover:bg-opacity-90"
            download
          >
            Download CV
          </a>
          <a
            href="https://www.linkedin.com/in/palmartin/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-secondary"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/palmartin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-secondary"
          >
            <FaGithub />
          </a>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? (
              <FaTimes className="text-white" size={24} />
            ) : (
              <FaBars className="text-white" size={24} />
            )}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {navOpen && (
        <div className="md:hidden bg-primary">
          <div className="flex flex-col items-center space-y-4 py-4">
            <a href="#about" className="hover:text-secondary" onClick={() => setNavOpen(false)}>
              About
            </a>
            <a href="#projects" className="hover:text-secondary" onClick={() => setNavOpen(false)}>
              Projects
            </a>
            <a href="#contact" className="hover:text-secondary" onClick={() => setNavOpen(false)}>
              Contact
            </a>
            <a
              href="/path/to/your_cv.pdf"
              className="bg-secondary text-white px-4 py-2 rounded hover:bg-opacity-90"
              download
              onClick={() => setNavOpen(false)}
            >
              Download CV
            </a>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/palmartin/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-secondary"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/palmartin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-secondary"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
