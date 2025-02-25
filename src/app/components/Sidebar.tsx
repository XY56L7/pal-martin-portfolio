"use client";

import React, { useState } from 'react';
import { FaUser, FaCode, FaEnvelope, FaBars } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#about', icon: <FaUser size={24} />, label: 'About' },
    { href: '#projects', icon: <FaCode size={24} />, label: 'Projects' },
    { href: '#contact', icon: <FaEnvelope size={24} />, label: 'Contact' },
  ];

  return (
    <>
      <div className="md:hidden fixed top-0 left-0 right-0 bg-darkBlue text-teal flex items-center px-4 h-16 z-50">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-teal">
              <FaBars size={24} />
            </button>
            <span className="ml-2 text-xl font-bold">My Portfolio</span>
          </div>
        
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-darkBlue text-teal flex flex-col items-center z-40">
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