import React from 'react';
import profileImage from '../assets/IMG_3797.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 flex items-center bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-2/3">
              <div className="mb-12">
                <p className="text-xl text-gray-400 font-bold mb-2">KNOW ABOUT ME</p>
                <h2 className="text-6xl font-bold text-white">
                  Full-Stack Developer and a little bit of{' '}
                  <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%] pr-1">
                    everything
                  </span>
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  I'm Shreyash Wadmalwar, a proactive full-stack developer passionate about creating dynamic web experiences. 
                  From frontend to backend, I thrive on solving complex problems with clean, efficient code. My expertise spans 
                  React, PHP (Laravel), and MySQL, and I'm always eager to learn more.
                </p>
                
                <p>
                  When I'm not immersed in work, I'm exploring new ideas and staying curious. Life's about balance, 
                  and I love embracing every part of it.
                </p>
                
                <p className="font-medium text-white">
                  I believe in waking up each day eager to make a difference!
                </p>
              </div>
              
              <div className="mt-8">
                <div className="flex gap-4">
                  <a 
                    href="https://www.linkedin.com/in/shreyash-wadmalwar/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/10 border border-white/20 text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://github.com/shreywadmalwar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/10 border border-white/20 text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <img 
                src={profileImage} 
                alt="Shreyash Wadmalwar" 
                className="w-full h-96 object-cover rounded-3xl transform rotate-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;