import React from 'react';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
          Shreyash Wadmalwar
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
          React Developer | Full Stack Developer
        </p>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto font-light">
          Building scalable SaaS products with modern web technologies
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="glass text-white px-8 py-3 rounded-full hover:bg-white/20 transition-all"
          >
            View Experience
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="border border-white/30 text-white px-8 py-3 rounded-full hover:bg-white/10 transition-all"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;