// src/App.tsx
"use client";

import React from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Sidebar />
      <TopBar />
      <main className="pt-16 md:pt-0 md:ml-16">
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
