import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AboutProps {
  id?: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  const [text, setText] = useState('');
  const fullText = "Success! Loaded biography.txt\n\nI'm Fatih Reha Dişçi, an IT graduate specializing in DevOps and Cloud technologies.\n\nMy passion lies in building scalable infrastructure and automating workflows. I have experience with Docker, Kubernetes, AWS, and CI/CD pipelines.\n\nCurrently based in Üsküdar/Istanbul, TR.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 20); // Faster typing speed
    return () => clearInterval(interval);
  }, []);

  return (
    <section id={id} className="py-24 section-cream">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto">

          {/* ID Card / Photo Section */}
          <motion.div
            className="w-full md:w-1/3 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="window-card p-4 bg-white dark:bg-dark-tertiary transform rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
              <div className="aspect-square w-64 md:w-full overflow-hidden rounded-lg mb-4 border border-gray-200 bg-gray-100">
                <img
                  src="/fthrdsc.webp" // Added back optimized image source
                  onError={(e) => {
                    // Fallback if image fails
                    e.currentTarget.src = "https://ui-avatars.com/api/?name=Fatih+Reha&background=random";
                  }}
                />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-xl text-gray-800 dark:text-white">Fatih Reha Dişçi</h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium">DevOps Engineer</p>
                <div className="flex items-center justify-center gap-2 mt-2 text-sm text-gray-500">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Available for work
                </div>
              </div>
            </div>
          </motion.div>

          {/* Terminal Window */}
          <motion.div
            className="w-full md:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="window-card bg-[#1e1e1e] text-green-400 font-mono text-sm md:text-base leading-relaxed shadow-2xl h-[400px] flex flex-col">
              <div className="window-header bg-[#2d2d2d] border-b border-[#3d3d3d] flex-shrink-0">
                <div className="traffic-lights">
                  <div className="traffic-light traffic-light-red"></div>
                  <div className="traffic-light traffic-light-yellow"></div>
                  <div className="traffic-light traffic-light-green"></div>
                </div>
                <div className="text-gray-400 text-xs text-center flex-1">fatih@portfolio:~</div>
              </div>
              <div className="p-6 overflow-y-auto custom-scrollbar flex-grow">
                <p className="mb-4">
                  <span className="text-blue-400">➜</span> <span className="text-purple-400">~</span> <span className="text-yellow-400">whoami</span>
                </p>
                <p className="mb-6 whitespace-pre-wrap">{text}<span className="animate-pulse">_</span></p>

                {text.length === fullText.length && (
                  <div className="mt-8 pt-4 border-t border-gray-700 animate-fadeIn">
                    <p className="text-gray-500 mb-2"># System Specs</p>
                    <div className="grid grid-cols-2 gap-y-2 text-gray-300 text-xs md:text-sm">
                      <div><span className="text-blue-400">OS:</span> Windows 11 / Linux</div>
                      <div><span className="text-blue-400">Shell:</span> PowerShell / Bash</div>
                      <div><span className="text-blue-400">Editor:</span> VS Code</div>
                      <div><span className="text-blue-400">Location:</span> Istanbul, TR</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;