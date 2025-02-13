"use client";

import React from 'react';
import Image from 'next/image';
import { FaPython, FaAngular, FaJsSquare, FaDatabase, FaDocker, FaReact, FaCss3Alt } from 'react-icons/fa';
import { SiCsharp, SiDotnet, SiDjango } from 'react-icons/si';
import { BsBootstrap } from 'react-icons/bs'; // Bootstrap ikon importálása

type Tech = 'Python' | 'Django' | 'Angular' | 'JavaScript' | 'CSharp' | 'DotNet' | 'Database' | 'Docker' | 'React' | 'Tailwind_CSS' | 'Bootstrap';

const techIcons: Record<Tech, JSX.Element> = {
  Python: <FaPython className="text-yellow-500 w-6 h-6" />,
  Django: <SiDjango className="text-green-700 w-6 h-6" />,
  Angular: <FaAngular className="text-red-700 w-6 h-6" />,
  JavaScript: <FaJsSquare className="text-yellow-300 w-6 h-6" />,
  CSharp: <SiCsharp className="text-purple-600 w-6 h-6" />,
  DotNet: <SiDotnet className="text-blue-600 w-6 h-6" />,
  Database: <FaDatabase className="text-blue-500 w-6 h-6" />,
  Docker: <FaDocker className="text-blue-400 w-6 h-6" />,
  React: <FaReact className="text-blue-400 w-6 h-6" />,
  Tailwind_CSS: <FaCss3Alt className="text-cyan-400 w-6 h-6" />,
  Bootstrap: <BsBootstrap className="text-purple-500 w-6 h-6" />, // Bootstrap ikon hozzáadása
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
    title: 'Dog Trainer Project',
    description: 'A website dedicated to a professional dog trainer',
    image: '/dogtrainer.png',
    link: 'https://lang-tamas-dog-trainer.vercel.app/',
    technologies: ['React', 'Bootstrap'],
  },
  {
    title: 'KasiTrans Kft.',
    description: 'A webpage of a transporting company',
    image: '/kasitrans.jpg',
    link: 'https://kasitrans.vercel.app/',
    technologies: ['React', 'Tailwind_CSS'], 
  },
  {
    title: 'Rating App',
    description: 'Application for rating any kind of service',
    image: '/rating.JPG',
    link: 'https://ratingapp-ten.vercel.app/',
    technologies: ['React', 'Bootstrap'],
  },
  {
    title: 'Rock Paper Scissor',
    description: 'Rock Paper Scissor using javascript',
    image: '/RPS.png',
    link: 'https://rock-paper-scissor-sandy-five.vercel.app/',
    technologies: ['JavaScript', 'Bootstrap'],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-lightBlue text-darkBlue">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-lightestSlate">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-darkBlue rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-lightestSlate">{project.title}</h3>
                <p className="text-slate mb-4">{project.description}</p>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;