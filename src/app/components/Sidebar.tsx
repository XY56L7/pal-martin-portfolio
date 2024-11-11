// src/components/Sidebar.js
"use client";

import React from 'react';
import { FaUser, FaCode, FaEnvelope } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-full w-16 flex flex-col bg-lightBlue text-teal shadow-lg">
      <div className="sidebar-item group">
        <a href="#about" className="sidebar-icon">
          <FaUser size="28" />
        </a>
        <span className="sidebar-text">About</span>
      </div>
      <div className="sidebar-item group">
        <a href="#projects" className="sidebar-icon">
          <FaCode size="28" />
        </a>
        <span className="sidebar-text">Projects</span>
      </div>
      <div className="sidebar-item group">
        <a href="#contact" className="sidebar-icon">
          <FaEnvelope size="28" />
        </a>
        <span className="sidebar-text">Contact</span>
      </div>
    </div>
  );
}

export default Sidebar;
