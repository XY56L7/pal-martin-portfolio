// src/components/About.js
"use client";

import React from 'react';

function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-8 bg-darkBlue text-lightestSlate">
      <h1 className="text-teal text-4xl md:text-6xl font-bold mb-4">
        Szia, Pál Martin vagyok.
      </h1>
      <h2 className="text-slate text-2xl md:text-4xl font-medium mb-4">
        Full-stack fejlesztő.
      </h2>
      <p className="text-slate max-w-xl">
        Szenvedélyem a modern webalkalmazások fejlesztése és a legújabb technológiák használata.
      </p>
    </section>
  );
}

export default About;
