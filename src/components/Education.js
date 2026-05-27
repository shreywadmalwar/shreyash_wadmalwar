import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    degree: 'Bachelor of Engineering (Computer Science)',
    institution: 'Savitribai Phule Pune University, Pune, India',
    period: 'Graduated: June 2023'
  },
  {
    degree: '12th HSC Boards',
    institution: 'St. George Jr. College, Nagpur, India',
    period: 'March 2019'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
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

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="text-left mb-16" variants={itemVariants}>
            <p className="text-xl text-gray-400 font-bold mb-2">The Foundation</p>
            <h2 className="text-6xl font-bold text-white">
              Education &{' '}
              <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%] pr-1">
                Academics
              </span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass rounded-2xl p-8 border-l-2 border-blue-400/30"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{item.degree}</h3>
                  <p className="text-gray-300">{item.institution}</p>
                  <p className="text-gray-400 text-sm mt-2">{item.period}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div className="max-w-4xl mx-auto mt-12" variants={itemVariants}>
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Additional</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-gray-400 text-sm font-medium">Languages: </span>
                  <span className="text-gray-300">English (Fluent), Marathi (Fluent), Hindi (Native)</span>
                </div>
                <div>
                  <span className="text-gray-400 text-sm font-medium">Strengths: </span>
                  <span className="text-gray-300">Problem-solving, cross-functional collaboration, technical documentation, ownership mentality</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
