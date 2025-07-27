import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FallingStars from './components/ShootingStars';
import ScrollIndicator from './components/ScrollIndicator';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isContactDrawerOpen, setIsContactDrawerOpen] = useState(false);

  const openContactDrawer = () => {
    setIsContactDrawerOpen(true);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <FallingStars />
      <Header activeSection={activeSection} scrollToSection={scrollToSection} openContactDrawer={openContactDrawer} />
      <ScrollIndicator activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Skills />
      <Projects />
      <Contact isDrawerOpen={isContactDrawerOpen} setIsDrawerOpen={setIsContactDrawerOpen} />
      <Footer />
    </div>
  );
}

export default App;