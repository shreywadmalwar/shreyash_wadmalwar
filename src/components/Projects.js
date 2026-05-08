import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const experienceSection = document.getElementById('projects');
      if (!experienceSection) return;
      
      const sectionTop = experienceSection.offsetTop;
      const sectionHeight = experienceSection.offsetHeight;
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      
      const sectionStart = sectionTop - windowHeight;
      const sectionEnd = sectionTop + sectionHeight;
      
      if (scrollTop >= sectionStart && scrollTop <= sectionEnd) {
        const progress = Math.min((scrollTop - sectionStart) / (sectionEnd - sectionStart), 1);
        setScrollProgress(progress);
      } else if (scrollTop < sectionStart) {
        setScrollProgress(0);
      } else {
        setScrollProgress(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount.
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experience = {
    period: 'APR 2023 - Present',
    company: 'Brainstorm Force',
    location: 'Pune, India',
    role: 'Software Developer',
    projects: [
      {
        title: 'OttoKit — Automation Platform',
        achievements: [
          'Engineered AI-powered OttoKit Forms with drag-and-drop builder and public form deployment.',
          'Built OttoKit Tables (Zapier-style data management) with CRUD operations, field customization, and plan-based tiering.',
          'Architected Global Variables system with encryption for secure secret management across workflows.',
          'Optimized API performance by 25% through REST refactoring, Redis caching, and async job queue optimization.',
          'Designed event-driven architecture with 50+ domain events enabling real-time automation across 170+ integrations via WebSocket.',
          'Built WordPress plugin integrations for Store Engine, LatePoint, and SureDash enabling e-commerce and booking automation.'
        ]
      },
      {
        title: 'SureDash — Community Dashboard',
        achievements: [
          'Led React migration from WordPress monolith to Next.js, improving performance by 25%.',
          'Developed reusable React components with optimized PHP REST APIs replacing legacy AJAX.',
          'Integrated Giphy for GIF insertion and built post duplication feature for content creators.'
        ]
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
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

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div 
            className="text-left mb-16"
            variants={itemVariants}
          >
            <p className="text-xl text-gray-400 font-bold mb-2">The Experience</p>
            <h2 className="text-6xl font-bold text-white">
              Experience That<br />
              Brings{' '}
              <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%] pr-1">
                Ideas to Life
              </span>
            </h2>
          </motion.div>
          
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={itemVariants}
              className="flex flex-col lg:flex-row gap-12"
            >
              <div className="lg:w-1/3">
                <div className="sticky top-24">
                  <div className="text-gray-400 text-sm font-medium mb-2">{experience.period}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{experience.company}</h3>
                  <div className="text-gray-400 text-sm">{experience.location}</div>
                </div>
              </div>

              <div className="hidden lg:flex flex-col items-center">
                <div className="relative w-1 h-96 bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full transition-all duration-300 ease-out"
                    style={{ height: `${scrollProgress * 100}%` }}
                  />
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="glass rounded-2xl p-8">
                  <h4 className="text-2xl font-bold text-white mb-6">{experience.role}</h4>
                  
                  <div className="space-y-8">
                    {experience.projects.map((project, index) => (
                      <div key={index} className="border-l-2 border-blue-400/30 pl-6">
                        <h5 className="text-xl font-semibold text-white mb-4">{project.title}</h5>
                        <ul className="space-y-3">
                          {project.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start text-gray-300 leading-relaxed">
                              <span className="text-blue-400 mr-3 mt-2 text-xs">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex flex-wrap gap-3">
                      {['React', 'Next.js', 'TypeScript', 'PHP (Laravel)', 'Node.js', 'MySQL', 'PostgreSQL', 'Redis', 'Tailwind CSS', 'REST APIs', 'WordPress'].map((tech, index) => (
                        <span
                          key={index}
                          className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;