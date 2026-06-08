import React, { useState, useEffect } from 'react';

const Contact = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const [activeTab, setActiveTab] = useState('connect');
  // idle | sending | success | error — drives the submit button + status banner.
  const [formStatus, setFormStatus] = useState('idle');

  // FormSubmit.co needs no API key: it forwards submissions to the address in the
  // endpoint. The very first submission triggers a one-time activation email that
  // must be confirmed once; after that, messages arrive straight in the inbox.
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setFormStatus('sending');
    try {
      const res = await fetch('https://formsubmit.co/ajax/sdwadmalwar@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name.value,
          email: form.email.value,
          message: form.message.value,
          _subject: 'New message from your portfolio',
          _template: 'table',
          _captcha: 'false'
        })
      });
      if (!res.ok) throw new Error('Request failed');
      setFormStatus('success');
      form.reset();
    } catch {
      setFormStatus('error');
    }
  };

  useEffect(() => {
    if (!isDrawerOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsDrawerOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDrawerOpen, setIsDrawerOpen]);

  return (
    <>
      <section id="contact" className="py-24 mb-20 flex items-center bg-gradient-to-br from-black via-gray-900 to-black relative">
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm tracking-[0.3em] uppercase text-blue-400 font-medium mb-6">Get In Touch</p>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-3 leading-tight">
              From Concept to{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
                Creation
              </span>
            </h3>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Let's Make It Happen
            </h3>

            <p className="text-lg text-gray-300 mb-4 max-w-2xl mx-auto">
              From concept to scalable code, I build fast, reliable, and beautiful web experiences.
            </p>
            <p className="text-lg text-gray-400 mb-12">
              Open to full-time roles and freelance collaborations.
            </p>

            <button
              onClick={() => setIsDrawerOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 font-medium text-lg"
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center" role="dialog" aria-modal="true" aria-label="Contact options">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsDrawerOpen(false)}
            aria-hidden="true"
          />
          <div className="bg-white dark:bg-gray-900 fixed bottom-0 left-0 right-0 mx-auto w-full max-w-xl rounded-t-[10px] border border-gray-200 dark:border-gray-700 px-6 pb-6 sm:px-8 mb-10 z-50">
            <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-black/10 dark:bg-white/20" />
            
            <div className="flex my-6 justify-center gap-4">
              <a href="https://www.linkedin.com/in/shreyash-wadmalwar/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-gray-900 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white transition-colors">
                <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="https://github.com/shreywadmalwar" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-gray-900 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white transition-colors">
                <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <div className="grid w-full grid-cols-2 bg-gray-200/50 dark:bg-gray-800/50 rounded-lg p-[3px]">
                <button
                  onClick={() => setActiveTab('connect')}
                  className={`h-9 rounded-md px-2 py-1 text-sm font-medium transition-all ${
                    activeTab === 'connect' 
                      ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm' 
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  Quick connect
                </button>
                <button
                  onClick={() => setActiveTab('form')}
                  className={`h-9 rounded-md px-2 py-1 text-sm font-medium transition-all ${
                    activeTab === 'form' 
                      ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm' 
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  Fill a form
                </button>
              </div>

              {activeTab === 'connect' && (
                <div className="mt-6">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <a
                      href="mailto:sdwadmalwar@gmail.com?subject=Let's catch up for a cool opportunity!"
                      className="group block overflow-hidden rounded-lg border bg-white/40 dark:bg-gray-800/30 border-gray-300 dark:border-gray-700/50 hover:border-blue-400 dark:hover:border-blue-500/30 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex gap-x-3 border-b border-gray-200 dark:border-gray-700/30 bg-gradient-to-r from-blue-900/20 to-transparent p-4">
                        <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <h3 className="text-base font-medium text-black dark:text-white">Email</h3>
                      </div>
                      <div className="p-4">
                        <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white transition-all">
                          sdwadmalwar@gmail.com
                        </div>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Send me an email directly</p>
                      </div>
                    </a>

                    <a
                      href="tel:+917744889427"
                      className="group block overflow-hidden rounded-lg border bg-white/40 dark:bg-gray-800/30 border-gray-300 dark:border-gray-700/50 hover:border-purple-400 dark:hover:border-purple-500/30 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex gap-x-3 border-b border-gray-200 dark:border-gray-700/30 bg-gradient-to-r from-purple-900/20 to-transparent p-4">
                        <svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <h3 className="text-base font-medium text-black dark:text-white">Call</h3>
                      </div>
                      <div className="p-4">
                        <div className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white transition-all">
                          +91 7744889427
                        </div>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Give me a call</p>
                      </div>
                    </a>
                  </div>

                  <div className="mt-4 flex items-center justify-center rounded-md border border-green-400/20 bg-green-400/10 dark:border-green-900/30 dark:bg-green-900/10 p-2.5 text-center">
                    <div className="relative mr-2 flex h-3 w-3 items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-green-600 dark:bg-green-500" />
                      <div className="absolute h-3 w-3 animate-ping rounded-full bg-green-600 dark:bg-green-500 opacity-75" />
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-300">Currently available for new opportunities</p>
                  </div>
                </div>
              )}

              {activeTab === 'form' && (
                <div className="mt-6">
                  {formStatus === 'success' ? (
                    <div className="rounded-lg border border-green-400/30 bg-green-400/10 p-6 text-center">
                      <p className="text-green-700 dark:text-green-300 font-medium">Thanks! Your message is on its way.</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Shreyash will get back to you soon.</p>
                    </div>
                  ) : (
                    <form className="space-y-4" onSubmit={handleSubmit}>
                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="Wanna hear back? Add your email"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="name"
                          placeholder="Drop a name"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <textarea
                          name="message"
                          placeholder="Say hello or drop a message ..."
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                          required
                        />
                      </div>
                      {formStatus === 'error' && (
                        <p className="text-sm text-red-500 text-center">
                          Something went wrong. Email me directly at sdwadmalwar@gmail.com.
                        </p>
                      )}
                      <button
                        type="submit"
                        disabled={formStatus === 'sending'}
                        className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        {formStatus === 'sending' ? 'Sending…' : 'Send Message'}
                      </button>
                    </form>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;