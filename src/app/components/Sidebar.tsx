// src/components/Sidebar.tsx
"use client";

import React, { useState } from 'react';
import { FaUser, FaCode, FaEnvelope, FaBars, FaLinkedin, FaGithub } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#about', icon: <FaUser size={24} />, label: 'About' },
    { href: '#projects', icon: <FaCode size={24} />, label: 'Projects' },
    { href: '#contact', icon: <FaEnvelope size={24} />, label: 'Contact' },
  ];

  return (
    <>
      {/* Mobil navigációs sáv */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-lightBlue text-teal flex justify-between items-center px-4 h-16 z-50">
        <div className="flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-teal">
            <FaBars size={24} />
          </button>
          <span className="ml-2 text-xl font-bold">My Portfolio</span>
        </div>
        <div className="flex space-x-4">
          <a
            href="/path/to/your_cv.pdf"
            className="bg-teal text-darkBlue px-2 py-1 rounded hover:bg-opacity-90"
            download
          >
            Download CV
          </a>
          <a
            href="https://www.linkedin.com/in/your-profile/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-secondary"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-secondary"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Mobil lenyitható menü */}
      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-lightBlue text-teal flex flex-col items-center z-40">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="py-4 border-b border-teal w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      {/* Asztali navigációs sáv */}
      <div className="hidden md:flex md:flex-col fixed top-0 left-0 h-full w-16 bg-lightBlue text-teal shadow-lg z-50">
        {navItems.map((item, index) => (
          <div key={index} className="sidebar-item group">
            <a href={item.href} className="sidebar-icon">
              {item.icon}
            </a>
            <span className="sidebar-text">{item.label}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
