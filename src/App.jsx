import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';

export default function App(){
  return (
    <>
      <Navbar />
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
