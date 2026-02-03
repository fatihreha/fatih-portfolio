import React from 'react';
import { ArrowDown, FileText, Terminal, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #D0D1C9 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* MacBook-style Window */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="window-card">
            {/* Window Header with Traffic Lights */}
            <div className="window-header">
              <div className="traffic-lights">
                <div className="traffic-light traffic-light-red"></div>
                <div className="traffic-light traffic-light-yellow"></div>
                <div className="traffic-light traffic-light-green"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  portfolio.tsx
                </span>
              </div>
              <div className="w-12"></div>
            </div>

            {/* Window Content */}
            <div className="p-8 md:p-12 bg-white dark:bg-dark-tertiary">
              {/* Code-style comment */}
              <motion.div
                className="text-gray-400 dark:text-gray-500 font-mono text-sm mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                // Welcome to my portfolio
              </motion.div>

              {/* Name */}
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span className="text-gray-800 dark:text-white">Hi, I'm </span>
                <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-float">
                  Fatih Reha Dişçi
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                IT Graduate & DevOps Enthusiast
              </motion.p>

              {/* Description */}
              <motion.p
                className="text-gray-500 dark:text-gray-400 max-w-2xl mb-10 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Building modern solutions with cloud technologies and automation.
                Welcome to my personal space on the web.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <a
                  href="#projects"
                  className="btn-primary group"
                >
                  <Code2 size={20} className="mr-2 group-hover:animate-wiggle" />
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="btn-secondary group"
                >
                  <Terminal size={20} className="mr-2 group-hover:animate-bounce-gentle" />
                  Get In Touch
                </a>
              </motion.div>
            </div>
          </div>

          {/* Floating Desktop Icons - PostHog style */}
          <motion.div
            className="hidden md:flex justify-center gap-8 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <a href="#about" className="desktop-icon group">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center group-hover:animate-bounce-gentle">
                <FileText className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">About</span>
            </a>
            <a href="#skills" className="desktop-icon group">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center group-hover:animate-bounce-gentle">
                <Code2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">Skills</span>
            </a>
            <a href="#experience" className="desktop-icon group">
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-xl flex items-center justify-center group-hover:animate-bounce-gentle">
                <Terminal className="w-6 h-6 text-pink-600 dark:text-pink-400" />
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">Experience</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator Removed */}
      </div>
    </section>
  );
};

export default Hero;