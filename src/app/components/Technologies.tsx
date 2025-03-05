"use client";

import React from 'react';
import {
  FaPython,
  FaGitAlt,
  FaAngular,
  FaJsSquare,
  FaDocker,
  FaWindows,
  FaCss3Alt,
  FaReact
} from 'react-icons/fa';
import { SiDjango, SiMongodb, SiMicrosoftsqlserver, SiCsharp, SiDotnet } from 'react-icons/si';
import BlurText from './BlurText';

const technologies = [
  { name: 'Python', icon: <FaPython size={48} className="text-yellow-500" /> },
  { name: 'Django', icon: <SiDjango size={48} className="text-green-700" /> },
  { name: 'Machine Learning', icon: <FaPython size={48} className="text-blue-500" /> },
  { name: 'Git', icon: <FaGitAlt size={48} className="text-orange-500" /> },
  { name: 'MSSQL', icon: <SiMicrosoftsqlserver size={48} className="text-red-600" /> },
  { name: 'MongoDB', icon: <SiMongodb size={48} className="text-green-500" /> },
  { name: 'Angular', icon: <FaAngular size={48} className="text-red-700" /> },
  { name: 'JavaScript', icon: <FaJsSquare size={48} className="text-yellow-300" /> },
  { name: 'C#', icon: <SiCsharp size={48} className="text-purple-600" /> },
  { name: 'ASP.NET Core', icon: <SiDotnet size={48} className="text-blue-600" /> },
  { name: 'WPF', icon: <FaWindows size={48} className="text-blue-500" /> },
  { name: 'Docker', icon: <FaDocker size={48} className="text-blue-400" /> },
  { name: 'Tailwind CSS', icon: <FaCss3Alt size={48} className="text-cyan-400" /> },
  { name: 'React', icon: <FaReact size={48} className="text-blue-600" />,}
    
];

const Technologies: React.FC = () => {
  return (
    <section id="technologies" className="py-20 bg-darkBlue text-lightestSlate">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <BlurText text="Technologies" delay={100} direction="bottom" />
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center w-32 h-32 p-4 bg-lightBlue rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
              <div className="flex items-center justify-center h-16">
                {tech.icon}
              </div>
              <span className="mt-2 text-center text-sm font-semibold text-white">
                <BlurText text={tech.name} delay={150 + index * 50} direction="bottom" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;