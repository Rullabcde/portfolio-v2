"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
      {/* Background Gradient Orbs */}
      <div className="bg-gradient-orb bg-gradient-orb-red w-[600px] h-[600px] top-1/4 -left-1/4" />
      <div className="bg-gradient-orb bg-gradient-orb-purple w-[500px] h-[500px] top-1/3 right-0" />
      <div className="bg-gradient-orb bg-gradient-orb-blue w-[400px] h-[400px] bottom-1/4 left-1/3" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF1E56] animate-pulse" />
          <span className="text-sm text-gray-400">System Administrator • DevOps</span>
        </motion.div>

        {/* Main Headline - Turbo Style */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="text-white">Muhammad </span>
          <span className="gradient-text">Choirul</span>
          <br />
          <span className="gradient-text-red">Rasyid</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
        >
          Crafting high-performance systems with Linux, Kubernetes, and automation. 
          Making infrastructure reliable, scalable, and efficient.
        </motion.p>

        {/* Command Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-[#FF1E56] text-white font-semibold rounded-xl hover:bg-[#FF1E56]/90 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,30,86,0.3)]"
          >
            View Projects
          </a>
          <div className="command-box px-6 py-4 flex items-center gap-3 cursor-pointer group">
            <span className="text-gray-500">$</span>
            <span className="text-gray-300">ssh choirul@portfolio</span>
            <button 
              onClick={() => navigator.clipboard.writeText('ssh choirul@portfolio')}
              className="text-gray-500 hover:text-[#FF1E56] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-6 text-sm"
        >
          <a href="#skills" className="text-gray-500 hover:text-white transition-colors">
            Skills →
          </a>
          <a href="#experience" className="text-gray-500 hover:text-white transition-colors">
            Experience →
          </a>
          <a href="#contact" className="text-gray-500 hover:text-white transition-colors">
            Contact →
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/10 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-[#FF1E56] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
