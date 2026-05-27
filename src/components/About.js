import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/IMG_3797.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const About = () => {
  return (
    <section id="about" className="py-24 flex items-center bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="flex flex-col lg:flex-row gap-16 items-center"
          >
            <div className="lg:w-2/3">
              <motion.div className="mb-10" variants={itemVariants}>
                <p className="text-sm tracking-[0.3em] uppercase text-blue-400 font-medium mb-3">Know About Me</p>
                <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  Full-Stack Developer and a little bit of{' '}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%] pr-1">
                    everything
                  </span>
                </h2>
              </motion.div>

              <div className="space-y-5 text-lg text-gray-300 leading-relaxed">
                <motion.p variants={itemVariants}>
                  Full Stack Developer with 3+ years of experience shipping production SaaS features at scale. Specialized in React, Next.js, Node.js, and PHP with expertise in building automation platforms, MCP servers, and AI-powered tooling across 1,500+ connected services.
                </motion.p>

                <motion.p variants={itemVariants}>
                  Built and shipped major features end-to-end: OttoKit Tables, Forms, a customer-facing MCP server platform with multi-LLM support, and led the SureDash migration from WordPress to Next.js with a 25% performance gain.
                </motion.p>

                <motion.p variants={itemVariants} className="font-medium text-white text-xl">
                  I believe in waking up each day eager to make a difference!
                </motion.p>
              </div>

              <motion.div className="mt-8 flex gap-3" variants={itemVariants}>
                <a
                  href="https://www.linkedin.com/in/shreyash-wadmalwar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="glass-strong text-white p-3.5 rounded-xl hover:bg-white/15 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/shreywadmalwar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="glass-strong text-white p-3.5 rounded-xl hover:bg-white/15 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="mailto:sdwadmalwar@gmail.com"
                  aria-label="Email"
                  className="glass-strong text-white p-3.5 rounded-xl hover:bg-white/15 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/20"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </motion.div>
            </div>

            <motion.div className="lg:w-1/3" variants={itemVariants}>
              <div className="image-glow inline-block rounded-3xl">
                <img
                  src={profileImage}
                  alt="Shreyash Wadmalwar"
                  className="w-full h-96 object-cover rounded-3xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
