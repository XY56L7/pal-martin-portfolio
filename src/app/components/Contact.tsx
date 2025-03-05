"use client";

import React from 'react';
import BlurText from './BlurText';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-darkBlue text-lightestSlate">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">
          <BlurText text="Contact" delay={100} direction="bottom" />
        </h2>
        <p className="text-slate mb-8">
          <BlurText 
            text="Send a message if you would like to get in touch."
            delay={150}
            direction="bottom"
          />
        </p>
        <div className="inline-block">
          <a
            href="mailto:palmartin@example.com"
            className="inline-block bg-teal text-darkBlue px-6 py-3 rounded hover:bg-opacity-90"
          >
            Send a message
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
