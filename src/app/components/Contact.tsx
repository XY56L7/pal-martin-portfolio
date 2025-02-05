// src/components/Contact.js
"use client";

import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-darkBlue text-lightestSlate">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-slate mb-8">
          Send a message if you would like to get in touch.
        </p>
        <a
          href="mailto:palmartin@example.com"
          className="bg-teal text-darkBlue px-6 py-3 rounded hover:bg-opacity-90"
        >
          Send a message
        </a>
      </div>
    </section>
  );
}

export default Contact;
