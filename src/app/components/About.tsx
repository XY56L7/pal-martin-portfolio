"use client";

import React from 'react';
import BlurText from './BlurText';
import TiltedCard from './TiltedCard';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 bg-lightBlue text-darkBlue" 
    >
      <div className="container mx-auto px-4">
        <div className="bg-darkBlue rounded-lg p-3 text-lightestSlate flex flex-col items-center">
          <div className="w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 mb-6">
            <TiltedCard
              imageSrc="/martin.jpg"
              altText="Pál Martin"
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              scaleOnHover={1.05}
              rotateAmplitude={10}
              showMobileWarning={false}
              showTooltip={false}
            />
          </div>
          <div className="text-teal text-4xl md:text-6xl font-bold mb-8 text-center w-full">
            <BlurText text="Hi, I'm Pál Martin." delay={100} direction="bottom" />
          </div>
          <div className="text-slate text-2xl md:text-4xl font-medium mb-8 text-center w-full">
            <BlurText text="Full-stack Developer." delay={100} direction="bottom" />
          </div>
          <div className="text-slate max-w-xl text-center w-full">
            <BlurText 
              text="I'm passionate about developing modern web applications and using the latest technologies."
              delay={50}
              direction="bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
