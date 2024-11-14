// src/components/Projects.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { FaPython, FaAngular, FaJsSquare, FaDatabase,FaDocker,FaReact, FaCss3Alt } from 'react-icons/fa';
import { SiCsharp, SiDotnet, SiDjango } from 'react-icons/si';

type Tech = 'Python' | 'Django' | 'Angular' | 'JavaScript' | 'CSharp' | 'DotNet' | 'Database' | 'Docker' | 'React' | 'Tailwind_CSS';

const techIcons: Record<Tech, JSX.Element> = {
  Python: <FaPython className="text-yellow-500" />,
  Django: <SiDjango className="text-green-700" />,
  Angular: <FaAngular className="text-red-700" />,
  JavaScript: <FaJsSquare className="text-yellow-300" />,
  CSharp: <SiCsharp className="text-purple-600" />,
  DotNet: <SiDotnet className="text-blue-600" />,
  Database: <FaDatabase className="text-blue-500" />,
  Docker : <FaDocker className="text-blue-400" />,
  React : <FaReact className="text-blue-400" />,
  Tailwind_CSS: <FaCss3Alt 4 className="text-cyan-400" />  // Added Tailwind CSS

};

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: Tech[];
};

const projects: Project[] = [
  {
    title: 'Szakdolgozat',
    description: 'Energy Community Platform',
    image: '/energy_community.jpg',
    link: 'https://github.com/XY56L7/Szakdolgozat_Projekt',
    technologies: ['Python', 'Django', 'Angular','Docker'],
  },{
    title: 'KasiTrans Kft.',
    description: 'Egy fuvarozó cég honlapja',
    image: '/kasitrans.jpg',
    link: 'https://kasitrans.vercel.app/',
    technologies: ['React','Tailwind_CSS'],
  }
  // További projektek...
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-lightBlue text-darkBlue">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-lightestSlate">Projektek</h2>
        <div className="flex flex-wrap">
          {projects.map((project, index) => (
            <div key={index} className="w-full md:w-1/2 mb-8">
              <div className="bg-darkBlue rounded-lg overflow-hidden shadow-lg mx-4">
              <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}  // Nagyobb felbontású kép, ami desktop verzióban élesebb
                  height={600}  // Nagyobb magasság a jobb arányért
                  className="w-full h-auto object-cover"  // Reszponzív, arányos megjelenítés
                />

                <div className="p-4 md:p-6">
                  <h3 className="text-xl font-bold mb-2 text-lightestSlate">{project.title}</h3>
                  <p className="text-slate mb-4">{project.description}</p>
                  {/* Technológiai ikonok megjelenítése */}
                  <div className="flex space-x-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx}>{techIcons[tech]}</span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal hover:text-lightestSlate"
                  >
                    Tovább &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
