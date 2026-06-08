import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import {
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaPhp, FaPython, FaGitAlt, FaNpm, FaWordpress, FaDatabase, FaAws, FaRobot
} from 'react-icons/fa';
import {
  SiRedux, SiTailwindcss, SiWebpack, SiMysql, SiTypescript, SiNextdotjs, SiPostgresql, SiRedis, SiPostman, SiOpenai, SiGooglegemini, SiGraphql, SiJest
} from 'react-icons/si';
import {
  MdDevices, MdApi, MdDataObject, MdSmartToy, MdBolt, MdMemory, MdAccountTree
} from 'react-icons/md';

const calculateExperience = (startDate) => {
  const start = new Date(startDate);
  const now = new Date();
  const years = (now - start) / (1000 * 60 * 60 * 24 * 365.25);
  return `${years.toFixed(1)}+ years`;
};

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'ReactJS', icon: FaReact, startDate: '2023-04-18', color: 'text-blue-400' },
      { name: 'Next.js', icon: SiNextdotjs, startDate: '2023-04-18', color: 'text-white' },
      { name: 'JavaScript (ES6+)', icon: FaJs, startDate: '2023-04-18', color: 'text-yellow-400' },
      { name: 'TypeScript', icon: SiTypescript, startDate: '2023-04-18', color: 'text-blue-500' },
      { name: 'Redux', icon: SiRedux, startDate: '2024-06-01', color: 'text-purple-400' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, startDate: '2023-07-01', color: 'text-teal-400' },
      { name: 'HTML5', icon: FaHtml5, startDate: '2023-04-18', color: 'text-orange-400' },
      { name: 'CSS3', icon: FaCss3Alt, startDate: '2023-04-18', color: 'text-blue-400' },
      { name: 'Responsive UI', icon: MdDevices, startDate: '2023-04-18', color: 'text-green-400' }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js (Express)', icon: FaNodeJs, startDate: '2023-08-01', color: 'text-green-400' },
      { name: 'PHP (Laravel)', icon: FaPhp, startDate: '2023-04-18', color: 'text-indigo-400' },
      { name: 'Python', icon: FaPython, startDate: '2024-06-01', color: 'text-yellow-300' },
      { name: 'RESTful APIs', icon: MdApi, startDate: '2023-04-18', color: 'text-cyan-400' },
      { name: 'GraphQL', icon: SiGraphql, startDate: '2024-01-01', color: 'text-pink-400' },
      { name: 'WebSockets', icon: MdBolt, startDate: '2023-10-01', color: 'text-yellow-400' },
      { name: 'WordPress Plugins', icon: FaWordpress, startDate: '2023-05-01', color: 'text-blue-400' }
    ]
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git', icon: FaGitAlt, startDate: '2023-04-18', color: 'text-orange-400' },
      { name: 'npm/Yarn', icon: FaNpm, startDate: '2023-04-18', color: 'text-red-400' },
      { name: 'Jest', icon: SiJest, startDate: '2023-09-01', color: 'text-red-500' },
      { name: 'Webpack', icon: SiWebpack, startDate: '2023-08-01', color: 'text-blue-400' },
      { name: 'Postman', icon: SiPostman, startDate: '2023-04-18', color: 'text-orange-500' },
      { name: 'AWS Lambda', icon: FaAws, startDate: '2024-01-01', color: 'text-yellow-500' },
      { name: 'AJAX/JSON', icon: MdDataObject, startDate: '2023-04-18', color: 'text-yellow-400' }
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', icon: SiMysql, startDate: '2023-04-18', color: 'text-blue-400' },
      { name: 'PostgreSQL', icon: SiPostgresql, startDate: '2023-04-18', color: 'text-blue-300' },
      { name: 'Redis', icon: SiRedis, startDate: '2023-04-18', color: 'text-red-500' },
      { name: 'ClickHouse', icon: FaDatabase, startDate: '2023-04-18', color: 'text-yellow-400' }
    ]
  },
  {
    title: 'AI & LLM',
    skills: [
      { name: 'Agentic AI Systems', icon: MdAccountTree, startDate: '2024-06-01', color: 'text-purple-300' },
      { name: 'Tool-Calling Loops', icon: MdSmartToy, startDate: '2024-06-01', color: 'text-pink-400' },
      { name: 'Persistent Memory', icon: MdMemory, startDate: '2024-06-01', color: 'text-cyan-300' },
      { name: 'MCP Server Dev', icon: MdSmartToy, startDate: '2024-06-01', color: 'text-purple-400' },
      { name: 'OpenAI API', icon: SiOpenai, startDate: '2024-06-01', color: 'text-green-400' },
      { name: 'Anthropic Claude', icon: FaRobot, startDate: '2024-06-01', color: 'text-orange-300' },
      { name: 'Google Gemini', icon: SiGooglegemini, startDate: '2024-06-01', color: 'text-blue-400' }
    ]
  }
];

const SkillCard = ({ skill, skillIndex }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [cardPosition, setCardPosition] = useState({ top: 0 });
  const cardRef = useRef(null);
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const containerRect = cardRef.current.closest('.flex').getBoundingClientRect();
      const isSecondRow = rect.top > containerRect.top + 100;
      setCardPosition({ isSecondRow });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const isVisible = rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2;

      if (isVisible && !hasAnimated) {
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: skillIndex * 0.08, ease: 'easeOut' }
        });
        setHasAnimated(true);
      } else if (!isVisible && hasAnimated) {
        controls.start({
          opacity: 0,
          y: 50,
          transition: { duration: 0.3, delay: (7 - skillIndex) * 0.03, ease: 'easeIn' }
        });
        setHasAnimated(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls, skillIndex, hasAnimated]);

  return (
    <motion.div
      ref={cardRef}
      className="relative group"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      <div className="glass gradient-border rounded-xl p-4 md:p-5 w-full transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-white/5 cursor-pointer group">
        <div className="flex items-center space-x-3">
          <skill.icon className={`text-2xl md:text-3xl ${skill.color} flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_currentColor]`} />
          <h3 className="text-white font-light text-sm md:text-base truncate">{skill.name}</h3>
        </div>
      </div>

      {showTooltip && (
        <div className={`absolute left-1/2 transform -translate-x-1/2 glass-strong text-white px-3 py-1.5 rounded-lg text-xs whitespace-nowrap z-20 ${
          cardPosition.isSecondRow ? '-bottom-10' : '-top-10'
        }`}>
          {calculateExperience(skill.startDate)}
        </div>
      )}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 flex items-center bg-gradient-to-br from-black via-gray-900 to-black relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-blue-400 font-medium mb-3">What I Work With</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Skills &{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
              Technologies
            </span>
          </h2>
        </div>
        <div className="max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-14 md:mb-20">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                  <h3 className="text-2xl md:text-3xl font-bold text-white/90 font-mono">{category.title}</h3>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2" />
                </div>
                <div className="w-full md:w-3/4">
                  <div className="flex flex-wrap gap-3 md:gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillCard key={skillIndex} skill={skill} skillIndex={skillIndex} categoryIndex={categoryIndex} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
