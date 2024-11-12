// src/App.tsx
"use client";

import React from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import HeaderIcons from './components/HeaderIcons';
import About from './components/About';
import Experience from './components/Experience';
import Technologies from './components/Technologies'; // Importáljuk a Technologies komponenst
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Sidebar />
      <TopBar />
      <main className="pt-20 md:pt-0 md:ml-16">
        <HeaderIcons />
        <About />
        <Experience />
        <Technologies /> {/* Hozzáadjuk a Technologies komponenst */}
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
