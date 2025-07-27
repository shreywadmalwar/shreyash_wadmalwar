import React, { useState } from "react";

const Header = ({ activeSection, scrollToSection, openContactDrawer }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { id: "hero", name: "Home" },
    { id: "about", name: "About" },
    { id: "skills", name: "Skills" },
    { id: "projects", name: "Projects" },
  ];

  const activeIndex = sections.findIndex(
    (section) => section.id === activeSection
  );

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:block fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
        {/* Animated pulse underline */}
        {activeIndex !== -1 && (
          <div
            className="absolute -top-2 h-2 bg-gradient-to-r from-white/30 via-white/90 to-white/30 backdrop-blur-md rounded-t-full shadow-lg shadow-white/50 animate-pulse transition-all duration-300"
            style={{
              left: `${100 + activeIndex * 80}px`,
              width: `${sections[activeIndex].name.length * 8 + 24}px`,
            }}
          />
        )}

        <nav className="glass rounded-full px-8 py-3 relative z-50">
          <div className="flex items-center space-x-8">
            <div className="text-lg font-semibold text-white">SW</div>
            <div className="flex space-x-6">
              {sections.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm transition-colors relative px-3 py-1 ${
                    activeSection === item.id
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
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
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
                Contact Me
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50">
        <nav className="glass w-full px-6 py-4">
          <div className="flex items-center justify-between w-full">
            <div className="text-lg font-semibold text-white">SW</div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 transition-transform duration-300 hover:scale-110"
            >
              <svg
                className="w-6 h-6 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                    className="animate-pulse"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Full-Screen Menu */}
      <div className={`fixed inset-0 z-40 md:hidden bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
        isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div className={`fixed left-0 top-0 w-full h-screen bg-black px-6 pt-24 pb-8 transform transition-transform duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="flex flex-col items-start justify-start space-y-8 max-w-full">
            {sections.map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMenuOpen(false);
                }}
                className={`w-full text-left text-3xl py-4 border-b border-white/10 transition-all duration-300 truncate ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => {
                openContactDrawer();
                setIsMenuOpen(false);
              }}
              className="w-full text-left text-3xl py-4 text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-3 truncate"
              style={{ transitionDelay: `${sections.length * 100}ms` }}
            >
              <svg
                className="w-6 h-6 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
