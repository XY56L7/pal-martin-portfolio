// src/components/Experience.tsx
"use client";

import React from 'react';
import BlurText from './BlurText';
import { FaCheckCircle } from 'react-icons/fa';

type ExperienceItem = {
  date: string;
  company: string;
  location: string;
  position: string;
  responsibilities: string[];
};

type EducationItem = {
  date: string;
  institution: string;
  location: string;
  degree: string;
};

const experiences: ExperienceItem[] = [
  {
    date: 'Feb 2022 - Sept 2022',
    company: 'B. Braun Medical Kft',
    location: '1023 Budapest, Felhévízi utca 5',
    position: 'Software Developer Intern',
    responsibilities: [
      'Daily meetings with my team and my mentor',
      'Using JIRA to log my work',
      'Solving problems and communicating with my mentors',
      'Compiling C files into Python or Python to C',
      'Experience with Scrum: sprint planning, stand-ups',
      'Managed project code versions using Git',
    ],
  },
  {
    date: 'Sept 2022 - Sept 2024',
    company: 'Robert Bosch Kft.',
    location: '1103 Budapest, Gyömrői út 104',
    position: 'Software Developer Intern',
    responsibilities: [
      'Participated in the development of multiple projects, ensuring timely delivery and meeting project goals',
      'Daily meetings with my team and my mentor',
      'Using Azure and JIRA to log my work',
      'Solving problems and communicating with my mentors',
      'Developed user interfaces and features using Angular',
      'Built and maintained backend services using ASP.NET Core, ensuring integration with frontend and databases',
      'Used MSSQL and MongoDB databases',
      'Fixed bugs on different projects',
      'Reviewed colleagues\' pull requests',
      'Managed project code versions using Git',
    ],
  },
  {
    date: 'Feb 2024 - Jun 2024',
    company: 'Óbuda University, NIK',
    location: '1034 Budapest, Bécsi út 96/b',
    position: 'Demonstrator',
    responsibilities: ['Teaching the fundamentals of ASP.NET CORE'],
  },
  {
    date: 'Jan 2025 - Present',
    company: 'PwC Hungary Kft.',
    location: 'Budapest, Bajcsy-Zsilinszky út 78, 1055',
    position: 'Software Engineer',
    responsibilities: [
      'Managed project code versions using Git',
      'Built and maintained backend services using ASP.NET Core, ensuring integration with databases',
      'Daily meetings with my team and my mentor',
      'Using Azure for my PRs'

    ],
  }
];

const education: EducationItem[] = [
  {
    date: 'Sept 2020 - Feb 2025',
    institution: 'Óbuda University, NIK',
    location: '1034 Budapest, Bécsi út 96/b',
    degree: 'Bachelor of IT Engineering',
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-lightBlue">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-lightestSlate">
          <BlurText text="Experience" delay={100} direction="bottom" />
        </h2>
        <div className="space-y-8">
          {experiences.map((item, index) => (
            <div key={index} className="bg-darkBlue rounded-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:shadow-teal/20">
              <h3 className="text-center text-2xl font-semibold text-lightestSlate mb-4">
                <BlurText 
                  text={`${item.position} - ${item.company}`}
                  delay={150 + index * 50}
                  direction="bottom"
                />
              </h3>
              <p className="text-slate text-center mb-6">
                <BlurText 
                  text={`${item.date} | ${item.location}`}
                  delay={200 + index * 50}
                  direction="bottom"
                />
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {item.responsibilities.map((resp, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start space-x-3 p-3 rounded-lg bg-lightBlue/10 transform transition-all duration-300 hover:bg-lightBlue/20"
                  >
                    <FaCheckCircle className="text-teal mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <BlurText 
                        text={resp}
                        delay={250 + index * 50 + idx * 30}
                        direction="bottom"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-3xl font-bold mt-16 mb-12 text-center text-lightestSlate">
          <BlurText text="Study" delay={100} direction="bottom" />
        </h2>
        <div className="space-y-8 mb-16">
          {education.map((item, index) => (
            <div key={index} className="bg-darkBlue rounded-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:shadow-teal/20">
              <h3 className="text-2xl font-semibold text-lightestSlate text-center">
                <BlurText 
                  text={`${item.degree} - ${item.institution}`}
                  delay={150 + index * 50}
                  direction="bottom"
                />
              </h3>
              <p className="text-slate text-center mt-4">
                <BlurText 
                  text={`${item.date} | ${item.location}`}
                  delay={200 + index * 50}
                  direction="bottom"
                />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
