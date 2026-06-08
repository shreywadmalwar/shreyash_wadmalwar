import React from 'react';
import { motion } from 'framer-motion';

// Proof layer: kept tight per portfolio best-practice. Achievements lead (concrete numbers),
// certificates follow as named, credible credentials only.
const achievements = [
  { value: '500+', label: 'DSA problems solved across platforms' },
  { value: '150+', label: 'LeetCode problems solved' }
];

const certificates = [
  { name: 'Introduction to Artificial Intelligence (AI)', issuer: 'IBM' },
  { name: 'Generative AI: Introduction and Applications', issuer: 'IBM' },
  { name: 'Python Certificate of Accomplishment', issuer: 'HackerRank' },
  { name: 'Enterprise WordPress Security', issuer: 'WPVIP' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div className="text-left mb-16" variants={itemVariants}>
            <p className="text-sm tracking-[0.3em] uppercase text-blue-400 font-medium mb-3">Proof of Work</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Achievements &{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%] pr-1">
                Certifications
              </span>
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div className="grid grid-cols-2 gap-6 mb-12" variants={itemVariants}>
              {achievements.map((item, index) => (
                <div key={index} className="glass-strong rounded-2xl p-8 gradient-border text-center glow-blue">
                  <div className="stat-value text-4xl md:text-5xl font-bold mb-2">{item.value}</div>
                  <div className="text-gray-400 text-sm md:text-base">{item.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-5" variants={itemVariants}>
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-5 gradient-border flex items-center gap-4 transition-all duration-300 hover:bg-white/[0.06]"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl glass-strong flex items-center justify-center text-blue-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium leading-snug">{cert.name}</h3>
                    <p className="text-gray-400 text-sm mt-0.5">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
