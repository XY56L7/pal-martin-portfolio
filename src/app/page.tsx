// src/App.tsx
"use client";

import React from 'react';
import Head from 'next/head';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import HeaderIcons from './components/HeaderIcons';
import About from './components/About';
import Experience from './components/Experience';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import ChatbotIcon from './ChatbotIcon';
// import ChatbotComponent from './ChatbotComponent.jsx';

const App: React.FC = () => {
  return (
    <>
      
      <div>
        {/* <ChatbotComponent /> */}
        <Sidebar />
        <TopBar />
        <main className="pt-20 md:pt-0 md:ml-16">
          <HeaderIcons />
          <About />
          <Experience />
          <Technologies />
          <Projects />
          <Contact />
          <Footer />

        </main>
      </div> 
    </>
  );
};

export default App;
