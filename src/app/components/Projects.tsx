"use client";

import React from 'react';
import Image from 'next/image';
import { FaPython, FaAngular, FaJsSquare, FaDatabase, FaDocker, FaReact, FaCss3Alt } from 'react-icons/fa';
import { SiCsharp, SiDotnet, SiDjango, SiThreedotjs } from 'react-icons/si';
import { BsBootstrap } from 'react-icons/bs';
import { useInView } from 'react-intersection-observer';

type Tech = 'Python' | 'Django' | 'Angular' | 'JavaScript' | 'CSharp' | 'DotNet' | 'Database' | 'Docker' | 'React' | 'Tailwind_CSS' | 'Bootstrap' | 'ThreeJS';

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
  Bootstrap: <BsBootstrap className="text-purple-500 w-6 h-6" />,
  ThreeJS: <SiThreedotjs className="text-black w-6 h-6" />,
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
  {
    title: '3D hangman game',
    description: '3D hangman game using three.js',
    image: '/image.png',
    link: 'https://3d-hangman.vercel.app/',
    technologies: ['React', 'ThreeJS', 'Bootstrap'],
  },
  {
    title: 'Interview questions for frontend developers',
    description: 'Prepare yourself for your interview and get the job easily',
    image: '/ang.PNG',
    link: 'https://angular-react-interview-questions.vercel.app/',
    technologies: ['Angular', 'Bootstrap'],
  },
  {
    title: 'Learn German easily',
    description: 'If you are learning German, this website is for you.',
    image: '/ger.PNG',
    link: 'https://german-cards-angular.vercel.app/',
    technologies: ['Angular', 'Bootstrap'],
  },
];

// Animáció definíciója
const projectCardStyle = `
  @keyframes slideInFade {
    0% {
      opacity: 0;
      transform: translateY(100px) scale(0.9); /* Nagyobb elmozdulás és enyhe kicsinyítés */
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  .project-card {
    opacity: 0; /* Kezdetben láthatatlan */
  }
  .project-card.visible {
    animation: slideInFade 0.8s ease-out forwards; /* Animáció csak látható állapotban */
  }
`;

const Projects: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Csak egyszer indul
    threshold: 0.1, // Amikor a szekció 10%-a látható
    rootMargin: '0px 0px -50px 0px', // Finomhangolás: 50px-el korábban indul
  });

  return (
    <section id="projects" className="py-20 bg-lightBlue text-darkBlue">
      <style>{projectCardStyle}</style>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-lightestSlate">Projects</h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-darkBlue rounded-lg overflow-hidden shadow-lg project-card ${inView ? 'visible' : ''}`}
              style={{
                animationDelay: `${inView ? index * 0.25 : 0}s`, // 0.25s késleltetés minden kártyánál
              }}
            >
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
                  Tovább →
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