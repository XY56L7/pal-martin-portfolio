// src/components/Footer.js
"use client";

import React from 'react';

function Footer() {
  return (
    <footer className="bg-lightBlue text-slate py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Pál Martin. Minden jog fenntartva.</p>
      </div>
    </footer>
  );
}

export default Footer;
