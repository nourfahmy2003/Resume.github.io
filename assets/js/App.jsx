import React, { useEffect } from 'https://esm.sh/react@18';
import { createRoot } from 'https://esm.sh/react-dom@18/client';

import NavBar from './NavBar.jsx';
import Hero from './Hero.jsx';
import Experience from './Experience.jsx';
import Education from './Education.jsx';
import Skills from './Skills.jsx';
import ProjectsSection from './ProjectsSection.jsx';
import Contact from './Contact.jsx';

const App = () => {
  useEffect(() => {
    if (typeof initFadeSections === 'function') {
      initFadeSections();
    }
  }, []);
  return (
    <>
      <NavBar />
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <ProjectsSection />
      <Contact />
    </>
  );
};

export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);
