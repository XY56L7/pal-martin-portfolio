'use client';

import React from 'react';
import './GradientText.css';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={`animated-gradient-text ${className}`}>
      <div className="text-content">
        {children}
      </div>
    </div>
  );
};

export default GradientText; 