// src/components/Projects.js
"use client";

import React from 'react';
import Image from 'next/image';
import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaPython,
  FaDatabase,
} from 'react-icons/fa';

function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of project 1.',
      link: 'https://github.com/your-github/project1',
      imageUrl: '/images/project1.png',
      technologies: ['react', 'nodejs', 'database'],
    },
    {
      title: 'Project 2',
      description: 'Description of project 2.',
      link: 'https://github.com/your-github/project2',
      imageUrl: '/images/project2.png',
      technologies: ['angular', 'python'],
    },
    // Add more projects as needed
  ];

  const techIcons = {
    react: <FaReact size="24" className="text-blue-500" title="React" />,
    angular: <FaAngular size="24" className="text-red-500" title="Angular" />,
    nodejs: <FaNodeJs size="24" className="text-green-500" title="Node.js" />,
    python: <FaPython size="24" className="text-yellow-500" title="Python" />,
    database: <FaDatabase size="24" className="text-gray-500" title="Database" />,
    // Add more technologies and their icons
  };

  return (
    <section id="projects" className="py-20 bg-lightBlue text-lightestSlate">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-darkBlue p-6 rounded-lg shadow-lg">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={500}
                height={300}
                className="rounded"
              />
              <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>
              <p className="text-slate mt-2">{project.description}</p>
              <div className="flex space-x-2 mt-4">
                {project.technologies.map((tech, idx) => (
                  <div key={idx}>
                    {techIcons[tech]}
                  </div>
                ))}
              </div>
              <a
                href={project.link}
                className="text-teal mt-4 inline-block hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Details &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
