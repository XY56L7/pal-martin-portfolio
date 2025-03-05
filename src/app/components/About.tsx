"use client";

import React from 'react';
import GradientText from './GradientText';
import TiltedCard from './TiltedCard';
import SpotlightCard from './SpotlightCard';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 pb-1 bg-lightBlue text-darkBlue" 
    >
      <div className="container mx-auto px-4">
        <SpotlightCard className="text-lightestSlate flex flex-col items-center" spotlightColor="rgba(100, 255, 218, 0.3)">
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
          <div className="text-4xl md:text-6xl font-bold mb-8 text-center w-full">
            <GradientText>
              Hi, I'm Pál Martin.
            </GradientText>
          </div>
          <div className="text-2xl md:text-4xl font-medium mb-8 text-center w-full">
            <GradientText>
              Full-stack Developer.
            </GradientText>
          </div>
          <div className="text-slate max-w-xl text-center w-full">
            <GradientText>
              I'm passionate about developing modern web applications and using the latest technologies.
            </GradientText>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
};

export default About;
