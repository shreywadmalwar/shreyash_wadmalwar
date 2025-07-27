import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaPhp, FaGitAlt, FaNpm, FaWordpress, FaDatabase 
} from 'react-icons/fa';
import { 
  SiRedux, SiTailwindcss, SiWebpack, SiMysql 
} from 'react-icons/si';
import { 
  MdDevices, MdApi, MdDataObject 
} from 'react-icons/md';

const calculateExperience = (startDate) => {
  const start = new Date(startDate);
  const now = new Date();
  const years = (now - start) / (1000 * 60 * 60 * 24 * 365.25);
  return `${years.toFixed(1)}+ years`;
};

const skillCategories = [
  {
    title: 'FrontEnd',
    skills: [
      { name: 'ReactJS', icon: FaReact, startDate: '2023-04-18', color: 'text-blue-400' },
      { name: 'JavaScript (ES6+)', icon: FaJs, startDate: '2023-04-18', color: 'text-yellow-400' },
      { name: 'Redux', icon: SiRedux, startDate: '2024-06-01', color: 'text-purple-400' },
      { name: 'HTML5', icon: FaHtml5, startDate: '2023-04-18', color: 'text-orange-400' },
      { name: 'CSS3', icon: FaCss3Alt, startDate: '2023-04-18', color: 'text-blue-400' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, startDate: '2023-07-01', color: 'text-teal-400' },
      { name: 'Responsive UI Design', icon: MdDevices, startDate: '2023-04-18', color: 'text-green-400' }
    ]
  },
  {
    title: 'BackEnd',
    skills: [
      { name: 'Node.js (Express)', icon: FaNodeJs, startDate: '2023-08-01', color: 'text-green-400' },
      { name: 'PHP (Laravel)', icon: FaPhp, startDate: '2023-04-18', color: 'text-indigo-400' },
      { name: 'RESTful APIs', icon: MdApi, startDate: '2023-04-18', color: 'text-cyan-400' },
      { name: 'WordPress plugins', icon: FaWordpress, startDate: '2023-05-01', color: 'text-blue-400' }
    ]
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git', icon: FaGitAlt, startDate: '2023-04-18', color: 'text-orange-400' },
      { name: 'npm/Yarn', icon: FaNpm, startDate: '2023-04-18', color: 'text-red-400' },
      { name: 'Webpack', icon: SiWebpack, startDate: '2023-08-01', color: 'text-blue-400' },
      { name: 'AJAX/JSON', icon: MdDataObject, startDate: '2023-04-18', color: 'text-yellow-400' }
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', icon: SiMysql, startDate: '2023-04-18', color: 'text-blue-400' },
      { name: 'SQLite', icon: FaDatabase, startDate: '2024-06-01', color: 'text-gray-400' }
    ]
  }
];

const SkillCard = ({ skill, skillIndex, categoryIndex }) => {
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
          transition: {
            duration: 0.5,
            delay: skillIndex * 0.1,
            ease: 'easeOut'
          }
        });
        setHasAnimated(true);
      } else if (!isVisible && hasAnimated) {
        controls.start({
          opacity: 0,
          y: 50,
          transition: {
            duration: 0.3,
            delay: (7 - skillIndex) * 0.05,
            ease: 'easeIn'
          }
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
      <div className="glass rounded-xl p-6 min-h-20 w-fit min-w-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10 cursor-pointer">
        <div className="flex items-center space-x-4">
          <skill.icon className={`text-4xl ${skill.color} flex-shrink-0`} />
          <h3 className="text-white font-light text-lg whitespace-nowrap">{skill.name}</h3>
        </div>
      </div>
      
      {showTooltip && (
        <div className={`absolute left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-2 py-1 rounded text-xs whitespace-nowrap z-20 ${
          cardPosition.isSecondRow ? '-bottom-10' : '-top-10'
        }`}>
          {calculateExperience(skill.startDate)}
          <div className={`absolute left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-transparent ${
            cardPosition.isSecondRow ? 'bottom-full border-b-2 border-b-black/90' : 'top-full border-t-2 border-t-black/90'
          }`}></div>
        </div>
      )}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 flex items-center bg-gradient-to-br from-black via-gray-900 to-black relative">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-white text-center mb-16">Skills</h2>
        <div className="max-w-6xl mx-auto p-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="flex">
                <div className="w-1/4">
                  <h3 className="text-4xl font-bold text-white font-mono">{category.title}</h3>
                </div>
                <div className="w-3/4">
                  <div className="flex flex-wrap gap-4">
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