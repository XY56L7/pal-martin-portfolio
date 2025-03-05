"use client";

import React from "react";
import BlurText from "./BlurText";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          <BlurText text="Martin Pál" delay={100} direction="bottom" />
        </h1>
        <p>
          <BlurText 
            text="Software Developer | ASP.NET Core Expert | Angular Enthusiast"
            delay={200}
            direction="bottom"
          />
        </p>
      </div>
    </section>
  );
};

export default Hero;
