import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Personal projects sit just below paid experience: they're the artifacts that prove
// the agentic-AI claims rather than just asserting them. Each one is a live, deployed
// app, so we embed the real thing in a faux browser window - lazy-mounted only when it
// scrolls into view so the page never pays to boot two extra React apps up front.
const projects = [
  {
    title: 'AI Agent Playground',
    tagline: 'Multi-LLM agentic evaluation framework',
    description:
      'An eval harness that compares how 7 models reason through the same prompt using live tool-calling - built to measure agent behaviour, not just demo it.',
    highlights: [
      'Shared agentic driver loop (stream a turn -> execute tool calls -> feed results back -> loop) with live per-model status in the UI.',
      'Supports 7 providers via two streaming adapters: a shared OpenAI-compatible adapter and a custom Gemini SSE adapter that accumulates tool-call fragments.',
      'Four client-side tools defined from a single JSON Schema, converted per-provider; tool errors return as strings so models can self-correct.',
      'Leaderboard tracks response time and tool-call usage per model across sessions.'
    ],
    tech: ['React', 'Vite', 'Multi-LLM', 'Tool-Calling', 'SSE Streaming'],
    live: 'https://shreywadmalwar.github.io/ai-agent-playground/',
    github: 'https://github.com/shreywadmalwar/ai-agent-playground',
    note: 'Add your own API key inside the live app to run the agents.'
  },
  {
    title: 'Notion-Style Block Editor',
    tagline: 'Block-based rich text editor, fully client-side',
    description:
      'A Notion-inspired editor with no backend required - designed so persistence can be swapped to a server in a four-function change.',
    highlights: [
      'Nine block types with a slash-command picker for keyboard-driven insertion and filtering.',
      'Drag-and-drop reordering via @dnd-kit, a floating inline formatting toolbar, and Tab/Shift+Tab list nesting with per-level auto-numbering.',
      'Multi-document sidebar with create/rename/delete, autosave to localStorage, and export to Markdown and PDF.',
      'Persistence isolated behind a single storage.js service layer, making a backend swap-in a four-function change.'
    ],
    tech: ['React', '@dnd-kit', 'localStorage', 'Markdown', 'PDF Export'],
    live: 'https://shreywadmalwar.github.io/notion-block-editor/',
    github: 'https://github.com/shreywadmalwar/notion-block-editor'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

// Faux browser window that only mounts the iframe once it's near the viewport, so two
// full apps don't boot on initial page load. A skeleton holds the space until then.
const LivePreview = ({ url, title }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || inView) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [inView]);

  return (
    <div ref={ref} className="glass-strong rounded-2xl overflow-hidden gradient-border glow-blue">
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
        <span className="w-3 h-3 rounded-full bg-red-400/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
        <span className="w-3 h-3 rounded-full bg-green-400/80" />
        <div className="ml-3 flex-1 truncate rounded-md bg-black/30 px-3 py-1 text-xs text-gray-400 font-mono">
          {url.replace('https://', '')}
        </div>
      </div>
      <div className="relative h-72 md:h-[420px] bg-black/40">
        {inView ? (
          <iframe
            src={url}
            title={`${title} live demo`}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-3 text-gray-500 text-sm">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Loading live demo…
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const LiveIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const SideProjects = () => {
  return (
    <section id="side-projects" className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div className="text-left mb-16" variants={itemVariants}>
            <p className="text-sm tracking-[0.3em] uppercase text-blue-400 font-medium mb-3">Things I Build For Fun</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Selected{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%] pr-1">
                Projects
              </span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl">Live, embedded below - interact with the real apps right here.</p>
          </motion.div>

          <div className="max-w-6xl mx-auto space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col gap-8 lg:gap-12 lg:items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                }`}
              >
                {/* Live preview */}
                <div className="lg:w-3/5">
                  <LivePreview url={project.live} title={project.title} />
                </div>

                {/* Details */}
                <div className="lg:w-2/5">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-blue-400 text-sm font-medium mb-4">{project.tagline}</p>
                  <p className="text-gray-400 text-[15px] mb-5 leading-relaxed">{project.description}</p>

                  <ul className="space-y-2.5 mb-6">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start text-gray-300 leading-relaxed text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3 mt-1.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, tIndex) => (
                      <span key={tIndex} className="glass text-gray-300 px-3 py-1.5 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105"
                    >
                      <LiveIcon /> Open Live
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 glass-strong text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white/15 transition-all duration-300 hover:scale-105"
                    >
                      <GithubIcon /> Source
                    </a>
                  </div>

                  {project.note && (
                    <p className="text-gray-500 text-xs mt-4 italic">{project.note}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SideProjects;
