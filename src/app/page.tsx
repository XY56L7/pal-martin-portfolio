// src/App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Sidebar />
      <TopBar />
      <main className="ml-16 mt-16">
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
