import React from 'react';
import './global.css';
import Hero from './Hero';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

export default function App() {
  return (
    <>
      <Hero />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
