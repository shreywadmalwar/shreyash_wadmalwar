import React, { useState, useEffect } from "react";

const Header = ({ activeSection, scrollToSection, openContactDrawer }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const sections = [
    { id: "hero", name: "Home" },
    { id: "about", name: "About" },
    { id: "skills", name: "Skills" },
    { id: "projects", name: "Experience" },
    { id: "education", name: "Education" },
  ];

  return (
    <>
      {/* Desktop Vertical Sidebar */}
      <header className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center">
        <nav className="glass-strong rounded-2xl px-3 py-6 flex flex-col items-center gap-1">
          {/* Logo */}
          <div className="text-lg font-bold bg-gradient-to-b from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            SW
          </div>

          {/* Nav items */}
          {sections.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative w-full text-xs font-medium px-3 py-2.5 rounded-lg transition-all duration-300 text-center whitespace-nowrap ${
                activeSection === item.id
                  ? "text-white bg-white/10 border border-white/20"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.name}
            </button>
          ))}

          {/* Divider */}
          <div className="w-8 h-px bg-white/10 my-2" />

          {/* Resume */}
          <a
            href={`${process.env.PUBLIC_URL}/resume.docx`}
            download="Shreyash_Wadmalwar_Resume.docx"
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors px-3 py-2.5 rounded-lg hover:bg-white/5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span className="text-[10px]">Resume</span>
          </a>

          {/* Contact */}
          <button
            onClick={openContactDrawer}
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors px-3 py-2.5 rounded-lg hover:bg-white/5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-[10px]">Contact</span>
          </button>
        </nav>
      </header>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50">
        <nav className="glass w-full px-6 py-4">
          <div className="flex items-center justify-between w-full">
            <div className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">SW</div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
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
            <a
              href={`${process.env.PUBLIC_URL}/resume.docx`}
              download="Shreyash_Wadmalwar_Resume.docx"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-left text-3xl py-4 border-b border-white/10 text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-3 truncate"
              style={{ transitionDelay: `${sections.length * 100}ms` }}
            >
              <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Resume
            </a>
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
