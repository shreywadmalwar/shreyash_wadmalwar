import React, { useState, useEffect, useMemo } from 'react';

const ScrollIndicator = ({ activeSection, scrollToSection }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = useMemo(() => [
    { id: 'hero', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'projects', name: 'Projects' },
    { id: 'contact', name: 'Contact' }
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const currentIndex = sections.findIndex(section => section.id === activeSection);
      const progress = currentIndex >= 0 ? (currentIndex + 1) / sections.length : 0;
      setScrollProgress(progress);
    };

    handleScroll(); // Initialize on mount.
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, sections]);

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
      {/* Background Progress Line */}
      <div className="relative w-1 h-64 bg-white/20 rounded-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full transition-all duration-300 ease-out"
          style={{ height: `${scrollProgress * 100}%` }}
        />
      </div>
      
      {/* Section Dots */}
      <div className="absolute inset-0 flex flex-col justify-between items-center py-4">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`relative w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 group ${
              activeSection === section.id 
                ? 'bg-white scale-125 shadow-lg shadow-white/50' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            title={section.name}
          >
            {/* Tooltip */}
            <span className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/80 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {section.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScrollIndicator;