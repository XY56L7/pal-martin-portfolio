"use client";

import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center px-8 bg-darkBlue text-lightestSlate">
      <div className="w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 mb-6">
        <Image
          src="/martin.jpg"
          alt="Pál Martin"
          width={640} // Nagyobb méret a desktop eszközökhöz
          height={640}
          className="rounded-lg object-cover"
        />
      </div>
      <h1 className="text-teal text-4xl md:text-6xl font-bold mb-4 text-center">
        Szia, Pál Martin vagyok.
      </h1>
      <h2 className="text-slate text-2xl md:text-4xl font-medium mb-4 text-center">
        Full-stack fejlesztő.
      </h2>
      <p className="text-slate max-w-xl text-center">
        Szenvedélyem a modern webalkalmazások fejlesztése és a legújabb technológiák használata.
      </p>
    </section>
  );
};

export default About;
