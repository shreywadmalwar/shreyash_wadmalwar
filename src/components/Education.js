import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    degree: 'Bachelor of Engineering (Computer Science)',
    institution: 'Savitribai Phule Pune University, Pune, India',
    period: 'Graduated: June 2023',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    )
  },
  {
    degree: '12th HSC Boards',
    institution: 'St. George Jr. College, Nagpur, India',
    period: 'March 2019',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    )
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
    <section id="education" className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="text-left mb-16" variants={itemVariants}>
            <p className="text-sm tracking-[0.3em] uppercase text-blue-400 font-medium mb-3">The Foundation</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Education &{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%] pr-1">
                Academics
              </span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent hidden md:block" />

              <div className="space-y-8">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative flex gap-6 md:gap-8"
                  >
                    {/* Timeline dot */}
                    <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full glass-strong items-center justify-center text-blue-400 z-10">
                      {item.icon}
                    </div>

                    <div className="flex-1 glass rounded-2xl p-8 gradient-border transition-all duration-300 hover:bg-white/[0.06]">
                      <div className="flex items-start justify-between flex-wrap gap-2">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{item.degree}</h3>
                          <p className="text-gray-300">{item.institution}</p>
                        </div>
                        <span className="text-blue-400 text-sm font-medium glass-strong px-3 py-1 rounded-full">{item.period}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Additional info */}
            <motion.div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6" variants={itemVariants}>
              <div className="glass rounded-2xl p-6 gradient-border transition-all duration-300 hover:bg-white/[0.06]">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                  </svg>
                  <h4 className="text-white font-semibold">Languages</h4>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">English (Fluent), Marathi (Fluent), Hindi (Native)</p>
              </div>
              <div className="glass rounded-2xl p-6 gradient-border transition-all duration-300 hover:bg-white/[0.06]">
                <div className="flex items-center gap-3 mb-3">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                  </svg>
                  <h4 className="text-white font-semibold">Strengths</h4>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">Problem-solving, cross-functional collaboration, technical documentation, ownership mentality</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
