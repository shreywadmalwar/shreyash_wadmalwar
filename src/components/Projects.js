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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experience = {
    period: 'APR 2023 - Present',
    company: 'Brainstorm Force',
    location: 'Remote, India',
    role: 'Full Stack Engineer',
    projects: [
      {
        title: 'OttoKit - AI Automation Platform',
        description: 'No-code automation platform with 1,500+ integrations, used by 12 million+ users.',
        achievements: [
          'Architected and shipped a customer-facing AI Agent system: a multi-turn, tool-calling loop where the LLM autonomously selects from 1,500+ integration actions, executes them, processes results, and loops until the task is complete or a configurable run limit is hit.',
          'Implemented persistent conversational memory per session: stores the last 20 messages in full, then compresses older history with a lightweight model (Claude Haiku) to keep context relevant without blowing token budgets.',
          'Integrated 16+ LLM models across OpenAI, Anthropic, and Google via a unified provider abstraction, letting users bring their own key and pick their model (GPT-4o, Claude Sonnet 4, Gemini 2.5 Flash) per agent.',
          'Built a customer-facing MCP server platform exposing 1,500+ integration actions as AI-callable tools, compatible with Claude Desktop, Cursor IDE, and ChatGPT.',
          'Designed an event-driven system with 50+ domain events powering real-time automation across 170+ integrations via WebSocket.',
          'Improved API response time by 25% through REST refactoring, Redis caching, and async job queues.',
          'Built OttoKit Forms and OttoKit Tables from scratch: drag-and-drop builder with AI form generation, plus CSV import/export, fulltext search, filters, linked records, and plan-based limits via background jobs.',
          'Built a Global Variables system with encryption for managing secrets securely across workflow executions.',
          'Identified and fixed security vulnerabilities (SSRF, XSS, open redirects, CSS injection) and improved platform accessibility to WCAG 2.2 Level AA.'
        ]
      },
      {
        title: 'SureDash - Community Platform',
        description: 'Community engagement platform for user discussions and content management.',
        achievements: [
          'Led the React to Next.js migration from a WordPress monolith, reducing page load time by 25% via code splitting, SSR, and lazy loading; improved Core Web Vitals across LCP, CLS, and FID.',
          'Built a reusable component library with optimized PHP REST APIs, replacing legacy AJAX handlers and reducing bundle size via tree-shaking and dynamic imports.',
          'Implemented SSG for static content and SSR for dynamic discussion threads, improving SEO and time-to-first-byte.',
          'Integrated authentication and authorization flows with secure session handling via Next.js middleware.'
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
    <section id="projects" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="text-left mb-16" variants={itemVariants}>
            <p className="text-sm tracking-[0.3em] uppercase text-blue-400 font-medium mb-3">The Experience</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Experience That<br />
              Brings{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%] pr-1">
                Ideas to Life
              </span>
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div variants={itemVariants} className="flex flex-col lg:flex-row gap-12">
              {/* Left sidebar */}
              <div className="lg:w-1/3">
                <div className="sticky top-24">
                  <div className="glass-strong rounded-2xl p-6 glow-blue">
                    <div className="text-blue-400 text-sm font-medium mb-3 tracking-wide">{experience.period}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{experience.company}</h3>
                    <div className="text-gray-400 text-sm mb-4">{experience.location}</div>
                    <div className="w-full h-px bg-gradient-to-r from-blue-500/50 to-transparent mb-4" />
                    <div className="text-white font-medium">{experience.role}</div>
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="hidden lg:flex flex-col items-center self-stretch">
                <div className="relative w-1 bg-white/10 rounded-full overflow-hidden h-full">
                  <div
                    className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-300 ease-out"
                    style={{ height: `${scrollProgress * 100}%` }}
                  />
                </div>
              </div>

              {/* Right content */}
              <div className="lg:w-2/3">
                <div className="space-y-8">
                  {experience.projects.map((project, index) => (
                    <div key={index} className="glass rounded-2xl p-8 gradient-border transition-all duration-300 hover:bg-white/[0.06]">
                      <h5 className="text-xl font-bold text-white mb-2">{project.title}</h5>
                      {project.description && (
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">{project.description}</p>
                      )}
                      <ul className="space-y-3">
                        {project.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-gray-300 leading-relaxed text-[15px]">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3 mt-2 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2.5 pt-4">
                    {['React', 'Next.js', 'TypeScript', 'PHP (Laravel)', 'Node.js', 'Python', 'MySQL', 'PostgreSQL', 'Redis', 'ClickHouse', 'GraphQL', 'WebSockets', 'Tailwind CSS', 'REST APIs', 'WordPress', 'MCP', 'OpenAI', 'Claude API', 'Gemini', 'AWS'].map((tech, index) => (
                      <span
                        key={index}
                        className="glass text-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-white/10 hover:text-white transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
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
