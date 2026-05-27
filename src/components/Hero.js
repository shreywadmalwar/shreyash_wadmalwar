import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '1,500+', label: 'Connected Services' },
  { value: '25%', label: 'Performance Gains' },
  { value: '16+', label: 'LLM Models' }
];

const Hero = ({ scrollToSection }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden pb-20">
      {/* Background orbs */}
      <div className="orb w-72 h-72 bg-blue-600/20 top-1/4 left-1/4" style={{ animationDelay: '0s' }} />
      <div className="orb w-96 h-96 bg-purple-600/15 bottom-1/4 right-1/4" style={{ animationDelay: '-3s' }} />
      <div className="orb w-48 h-48 bg-pink-600/10 top-1/2 right-1/3" style={{ animationDelay: '-5s' }} />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-6"
        >
          <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-blue-400 font-medium glass-strong px-5 py-2 rounded-full">
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 md:mb-6 tracking-tight"
        >
          Shreyash{' '}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
            Wadmalwar
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 font-light"
        >
          Full Stack Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-gray-400 mb-10 md:mb-14 max-w-2xl mx-auto font-light"
        >
          Shipping production SaaS features · React, Next.js, Node.js, PHP · MCP & AI integrations · 1,500+ connected services
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16 md:mb-20"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3.5 rounded-full hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 font-medium"
          >
            View Experience
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="glass-strong text-white px-8 py-3.5 rounded-full hover:bg-white/15 transition-all duration-300 hover:scale-105 font-medium"
          >
            Get In Touch
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="stat-value text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-gray-500 text-xs md:text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
