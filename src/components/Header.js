import React from 'react';

const Header = ({ activeSection, scrollToSection, openContactDrawer }) => {
  const sections = [{id: 'hero', name: 'Home'}, {id: 'about', name: 'About'}, {id: 'skills', name: 'Skills'}, {id: 'projects', name: 'Projects'}];
  const activeIndex = sections.findIndex(section => section.id === activeSection);
  
  return (
    <header className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
      {activeIndex !== -1 && (
        <div 
          className="absolute -top-2 h-2 bg-gradient-to-r from-white/30 via-white/90 to-white/30 backdrop-blur-md rounded-t-full shadow-lg shadow-white/50 animate-pulse transition-all duration-300"
          style={{
            left: `${100 + activeIndex * 80}px`,
            width: `${sections[activeIndex].name.length * 8 + 24}px`
          }}
        />
      )}
      <nav className="glass rounded-full px-8 py-3">
        <div className="flex items-center space-x-8">
          <div className="text-lg font-semibold text-white">SW</div>
          <div className="flex space-x-6">
            {sections.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm transition-colors relative px-3 py-1 ${
                  activeSection === item.id ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 shadow-lg" />
                )}
              </button>
            ))}
            <button
              onClick={openContactDrawer}
              className="text-sm text-gray-300 hover:text-white transition-colors px-3 py-1 flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              Contact Me
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;