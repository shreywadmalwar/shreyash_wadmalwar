import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const knowledge = {
  name: 'Shreyash Wadmalwar',
  role: 'Full Stack Engineer',
  email: 'sdwadmalwar@gmail.com',
  phone: '+91-7744889427',
  linkedin: 'https://www.linkedin.com/in/shreyash-wadmalwar',
  github: 'https://github.com/shreywadmalwar',
  location: 'Pune, India (Remote)',
  company: 'Brainstorm Force',
  companyPeriod: 'April 2023 - Present',
  summary: 'Full Stack Engineer with 3+ years of production experience shipping AI-powered features on a SaaS platform used by 12 million+ users. He architected and owns a customer-facing AI Agent system - a multi-LLM, tool-calling loop with persistent memory - embedded in a no-code automation platform with 1,500+ integrations. Specializes in agentic AI systems, MCP server development, event-driven architecture, and high-performance API design.',
  skills: {
    frontend: ['React', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'Redux', 'Tailwind CSS', 'HTML5', 'CSS3', 'Responsive UI Design'],
    backend: ['Node.js (Express)', 'PHP (Laravel)', 'Python', 'RESTful APIs', 'GraphQL', 'WebSockets', 'WordPress plugin architecture'],
    databases: ['MySQL', 'PostgreSQL', 'Redis', 'ClickHouse', 'AWS', 'AWS Lambda'],
    tools: ['Git', 'GitHub', 'Jest', 'npm/Yarn', 'Postman', 'Webpack'],
    ai: ['Agentic AI Systems', 'Tool-Calling Loops', 'Persistent Memory Design', 'MCP Server Development', 'OpenAI API', 'Anthropic Claude API', 'Google Gemini API', 'Multi-LLM Provider Integration'],
    specializations: ['SaaS architecture', 'Agentic AI systems', 'Event-driven systems', 'Performance optimization', 'API design']
  },
  projects: [
    {
      name: 'OttoKit',
      description: 'No-code automation platform with 1,500+ integrations, used by 12 million+ users.',
      highlights: [
        'Architected and shipped a customer-facing AI Agent system: a multi-turn, tool-calling loop where the LLM autonomously selects from 1,500+ integration actions, executes them, processes results, and loops until the task is done or a run limit is hit',
        'Implemented persistent conversational memory per session: stores the last 20 messages in full, then compresses older history with a lightweight model (Claude Haiku) to keep context relevant without blowing token budgets',
        'Integrated 16+ LLM models across OpenAI, Anthropic, and Google via a unified provider abstraction, letting users bring their own key and pick their model per agent',
        'Built a customer-facing MCP server platform exposing 1,500+ integration actions as AI-callable tools, compatible with Claude Desktop, Cursor IDE, and ChatGPT',
        'Designed an event-driven system with 50+ domain events for real-time automation across 170+ integrations via WebSocket',
        'Improved API response time by 25% using REST refactoring, Redis caching, and async job queues',
        'Built OttoKit Forms and OttoKit Tables from scratch, plus a Global Variables system with encryption for managing secrets',
        'Fixed security vulnerabilities including SSRF, XSS, open redirects, and CSS injection; improved accessibility to WCAG 2.2 Level AA'
      ]
    },
    {
      name: 'SureDash',
      description: 'Community engagement platform for user discussions and content management.',
      highlights: [
        'Led the React to Next.js migration from a WordPress monolith, reducing page load time by 25% via code splitting, SSR, and lazy loading; improved Core Web Vitals across LCP, CLS, and FID',
        'Built a reusable component library with optimized PHP REST APIs, replacing legacy AJAX handlers',
        'Implemented SSG for static content and SSR for dynamic discussion threads, improving SEO and time-to-first-byte'
      ]
    }
  ],
  sideProjects: [
    {
      name: 'AI Agent Playground',
      description: 'A multi-LLM agentic evaluation framework that compares how 7 models reason through the same prompt using live tool-calling.',
      url: 'https://shreywadmalwar.github.io/ai-agent-playground/',
      highlights: [
        'Shared agentic driver loop with live per-model status, across 7 providers via two streaming adapters',
        'Four client-side tools from a single JSON Schema, converted per-provider; a leaderboard tracks response time and tool-call usage'
      ]
    },
    {
      name: 'Notion-Style Block Editor',
      description: 'A Notion-inspired, fully client-side block editor with no backend required.',
      url: 'https://shreywadmalwar.github.io/notion-block-editor/',
      highlights: [
        'Nine block types with a slash-command picker, drag-and-drop reordering via @dnd-kit, and list nesting',
        'Autosave to localStorage, export to Markdown and PDF, with persistence behind a single swappable service layer'
      ]
    }
  ],
  education: [
    { degree: 'B.Eng in Computer Science', institution: 'Savitribai Phule Pune University, Pune, India', year: '2019 - 2023 (Graduated June 2023)' },
    { degree: 'HSC (12th Grade), Science', institution: 'St. George Jr. College, Nagpur, India', year: '2017 - 2019' }
  ],
  certificates: ['Introduction to Artificial Intelligence (AI) - IBM', 'Generative AI: Introduction and Applications - IBM', 'Python Certificate of Accomplishment - HackerRank', 'Enterprise WordPress Security - WPVIP'],
  achievements: ['Solved 500+ DSA problems across multiple platforms', 'Solved 150+ LeetCode problems'],
  languages: 'English (Fluent), Hindi (Native), Marathi (Fluent)',
  strengths: 'Problem-solving, cross-functional collaboration, technical documentation, ownership mentality'
};

const qaPatterns = [
  {
    keywords: ['who', 'about', 'yourself', 'introduce', 'tell me about'],
    answer: () => `${knowledge.name} is a ${knowledge.role} at ${knowledge.company} with 3+ years of experience shipping AI-powered features on a SaaS platform used by 12 million+ users. He architected and owns a customer-facing AI Agent system - a multi-LLM, tool-calling loop with persistent memory - and specializes in agentic AI systems, MCP server development, event-driven architecture, and high-performance APIs.`
  },
  {
    keywords: ['contact', 'email', 'reach', 'mail', 'phone', 'call', 'number'],
    answer: () => `You can reach Shreyash at:\n📧 ${knowledge.email}\n📱 ${knowledge.phone}\n💼 LinkedIn: ${knowledge.linkedin}\n🐙 GitHub: ${knowledge.github}`
  },
  {
    keywords: ['skill', 'tech', 'stack', 'technology', 'what do you know', 'what can you do', 'languages'],
    answer: () => `Here's Shreyash's tech stack:\n\n**Frontend:** ${knowledge.skills.frontend.join(', ')}\n\n**Backend:** ${knowledge.skills.backend.join(', ')}\n\n**Databases:** ${knowledge.skills.databases.join(', ')}\n\n**AI & LLM:** ${knowledge.skills.ai.join(', ')}\n\n**Tools:** ${knowledge.skills.tools.join(', ')}`
  },
  {
    keywords: ['frontend', 'front-end', 'react', 'next', 'ui'],
    answer: () => `Shreyash's frontend skills: ${knowledge.skills.frontend.join(', ')}. He's built complex UIs including a visual workflow builder with React Flow, drag-and-drop form builders, and data table interfaces, all with responsive design and accessibility standards.`
  },
  {
    keywords: ['backend', 'back-end', 'server', 'api', 'laravel', 'node', 'php'],
    answer: () => `Shreyash's backend skills: ${knowledge.skills.backend.join(', ')}. He's improved API performance by 25% using REST refactoring, Redis caching, and async job queues. He also designed event-driven systems with 50+ domain events for real-time automation.`
  },
  {
    keywords: ['ai', 'llm', 'mcp', 'openai', 'claude', 'gemini', 'gpt', 'agent', 'agentic', 'memory', 'artificial intelligence', 'machine learning'],
    answer: () => `Shreyash specializes in agentic AI systems:\n\n• Architected a customer-facing AI Agent - a multi-turn, tool-calling loop where the LLM autonomously picks from 1,500+ actions and loops until done\n• Implemented persistent memory: last 20 messages kept in full, older history compressed with Claude Haiku\n• Integrated 16+ models across OpenAI, Anthropic, and Google with bring-your-own-key per agent\n• Built an MCP server platform exposing 1,500+ AI-callable tools (Claude Desktop, Cursor IDE, ChatGPT)\n• Skills: ${knowledge.skills.ai.join(', ')}`
  },
  {
    keywords: ['experience', 'work', 'job', 'company', 'where', 'brainstorm'],
    answer: () => `Shreyash works as a ${knowledge.role} at **${knowledge.company}** (${knowledge.companyPeriod}, ${knowledge.location}). He's worked on two major products:\n\n**OttoKit** - ${knowledge.projects[0].description}\n\n**SureDash** - ${knowledge.projects[1].description}`
  },
  {
    keywords: ['ottokit', 'automation', 'workflow', 'zapier'],
    answer: () => `**OttoKit** - ${knowledge.projects[0].description}\n\nKey achievements:\n${knowledge.projects[0].highlights.map(h => `• ${h}`).join('\n')}`
  },
  {
    keywords: ['suredash', 'community', 'dashboard', 'migration'],
    answer: () => `**SureDash** - ${knowledge.projects[1].description}\n\nKey achievements:\n${knowledge.projects[1].highlights.map(h => `• ${h}`).join('\n')}`
  },
  {
    keywords: ['project', 'built', 'build', 'portfolio', 'what have you', 'side project', 'playground', 'editor', 'eval', 'notion'],
    answer: () => `At ${knowledge.company}, Shreyash shipped **OttoKit** (an AI automation platform for 12M+ users) and led the **SureDash** Next.js migration.\n\nHe also builds personal projects:\n\n**${knowledge.sideProjects[0].name}** - ${knowledge.sideProjects[0].description}\n${knowledge.sideProjects[0].url}\n\n**${knowledge.sideProjects[1].name}** - ${knowledge.sideProjects[1].description}\n${knowledge.sideProjects[1].url}\n\nBoth are live and embedded in the Projects section above.`
  },
  {
    keywords: ['certificate', 'certification', 'certified', 'course', 'ibm', 'hackerrank'],
    answer: () => `Shreyash's certifications:\n${knowledge.certificates.map(c => `• ${c}`).join('\n')}`
  },
  {
    keywords: ['achievement', 'dsa', 'leetcode', 'competitive', 'problem solving'],
    answer: () => `Shreyash's achievements:\n${knowledge.achievements.map(a => `• ${a}`).join('\n')}`
  },
  {
    keywords: ['education', 'degree', 'college', 'university', 'study', 'school', 'qualification'],
    answer: () => `Shreyash's education:\n\n🎓 **${knowledge.education[0].degree}**\n${knowledge.education[0].institution}\n${knowledge.education[0].year}\n\n📚 **${knowledge.education[1].degree}**\n${knowledge.education[1].institution}\n${knowledge.education[1].year}`
  },
  {
    keywords: ['database', 'mysql', 'postgres', 'redis', 'clickhouse', 'data'],
    answer: () => `Shreyash works with: ${knowledge.skills.databases.join(', ')}. He built OttoKit Tables with fulltext search, filters, sorting, linked records, and background job processing. He also built ClickHouse analytics pipelines for user behavior tracking.`
  },
  {
    keywords: ['security', 'vulnerability', 'ssrf', 'xss', 'csrf', 'wcag', 'accessibility'],
    answer: () => `Shreyash has hands-on security experience. He's fixed vulnerabilities including SSRF, XSS, open redirects, and CSS injection. He also improved accessibility to WCAG 2.2 Level AA compliance.`
  },
  {
    keywords: ['performance', 'optimization', 'fast', 'speed', 'improve'],
    answer: () => `Shreyash has a strong track record in performance optimization:\n\n• Improved API performance by 25% using REST refactoring, Redis caching, and async job queues\n• Led SureDash migration from WordPress to Next.js with 25% performance gain\n• Built efficient background job processing for large data operations`
  },
  {
    keywords: ['hire', 'available', 'freelance', 'opportunity', 'open to', 'looking'],
    answer: () => `Yes! Shreyash is open to full-time roles and freelance collaborations. You can reach out at:\n\n📧 ${knowledge.email}\n📱 ${knowledge.phone}\n💼 LinkedIn: ${knowledge.linkedin}`
  },
  {
    keywords: ['location', 'where', 'based', 'city', 'country'],
    answer: () => `Shreyash is based in India and works remotely. He's currently at ${knowledge.company} (${knowledge.location}).`
  },
  {
    keywords: ['language', 'speak', 'marathi', 'hindi', 'english'],
    answer: () => `Shreyash speaks: ${knowledge.languages}.`
  },
  {
    keywords: ['strength', 'soft skill', 'quality', 'trait'],
    answer: () => `Shreyash's key strengths: ${knowledge.strengths}.`
  },
  {
    keywords: ['resume', 'cv', 'download'],
    answer: () => `You can download Shreyash's resume by clicking the "Resume" button in the navigation bar at the top of this page.`
  },
  {
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good evening', 'sup', 'yo'],
    answer: () => `Hey there! 👋 I'm Shreyash's portfolio assistant. Ask me anything about his skills, experience, projects, or how to get in touch!`
  },
  {
    keywords: ['thank', 'thanks', 'bye', 'goodbye', 'see you'],
    answer: () => `You're welcome! Feel free to come back anytime. If you'd like to connect with Shreyash, reach out at ${knowledge.email} or on LinkedIn!`
  }
];

const suggestedQuestions = [
  'Who is Shreyash?',
  'Tell me about the AI Agent system',
  'What are his side projects?',
  'What are his skills?',
  'How can I contact him?',
  'What\'s his education?'
];

function findAnswer(input) {
  const lower = input.toLowerCase().trim();

  if (lower.length < 2) {
    return "Could you ask something more specific? I know all about Shreyash's skills, experience, projects, and more!";
  }

  let bestMatch = null;
  let bestScore = 0;

  for (const pattern of qaPatterns) {
    let score = 0;
    for (const keyword of pattern.keywords) {
      if (lower.includes(keyword)) {
        score += keyword.split(' ').length;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = pattern;
    }
  }

  if (bestMatch && bestScore > 0) {
    return bestMatch.answer();
  }

  return `I'm not sure about that one, but I can tell you about Shreyash's **skills**, **experience**, **projects** (OttoKit, SureDash), **education**, **AI/MCP work**, or **contact info**. What would you like to know?`;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hi! I'm Shreyash's portfolio assistant. Ask me anything about his skills, experience, or projects!" }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSend = (text) => {
    const question = text || input.trim();
    if (!question) return;

    setMessages(prev => [...prev, { role: 'user', text: question }]);
    setInput('');

    setTimeout(() => {
      const answer = findAnswer(question);
      setMessages(prev => [...prev, { role: 'bot', text: answer }]);
    }, 400);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const renderMessage = (text) => {
    return text.split('\n').map((line, i) => {
      const formatted = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      return <span key={i}>{i > 0 && <br />}<span dangerouslySetInnerHTML={{ __html: formatted }} /></span>;
    });
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close chat' : 'Open chat assistant'}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 flex items-center justify-center"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] h-[500px] max-h-[calc(100vh-140px)] flex flex-col rounded-2xl border border-white/20 bg-gray-950/95 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden"
            role="dialog"
            aria-label="Chat assistant"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
                SW
              </div>
              <div>
                <p className="text-white text-sm font-medium">Shreyash's Assistant</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-gray-400 text-xs">Always online</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-3 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-blue-600 text-white rounded-br-md'
                        : 'bg-white/10 text-gray-200 rounded-bl-md'
                    }`}
                  >
                    {renderMessage(msg.text)}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                {suggestedQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(q)}
                    className="text-xs px-2.5 py-1.5 rounded-full border border-white/20 text-gray-300 hover:bg-white/10 hover:text-white transition-all"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-3 border-t border-white/10">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about Shreyash..."
                  className="flex-1 bg-white/10 border border-white/10 text-white placeholder-gray-500 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim()}
                  aria-label="Send message"
                  className="w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white flex items-center justify-center transition-colors flex-shrink-0"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
