import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import SideProjects from './components/SideProjects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
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

  // On first load, jump straight to whatever section the URL hash points at, so a
  // refresh (or a shared deep link) lands the visitor where they left off. We use
  // 'auto' (instant) rather than smooth so the restore isn't a jarring animated scroll,
  // and defer a frame so every section has laid out before we measure its position.
  useEffect(() => {
    // Take over scroll restoration so the browser's native guess doesn't fight our
    // hash-driven restore below.
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    const id = window.location.hash.replace('#', '');
    if (!id) return;
    requestAnimationFrame(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'auto' });
        setActiveSection(id);
      }
    });
  }, []);

  useEffect(() => {
    const sections = ['hero', 'about', 'projects', 'side-projects', 'skills', 'achievements', 'education', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            // Mirror the current section into the URL without stacking history entries,
            // so a refresh restores this scroll position.
            const newHash = `#${sectionId}`;
            if (window.location.hash !== newHash) {
              window.history.replaceState(null, '', newHash);
            }
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
      <Projects />
      <SideProjects />
      <Skills />
      <Achievements />
      <Education />
      <Contact isDrawerOpen={isContactDrawerOpen} setIsDrawerOpen={setIsContactDrawerOpen} />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;