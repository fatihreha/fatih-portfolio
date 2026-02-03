import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import GraduationThesis from './components/GraduationThesis';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Dock from './components/Dock';
import Spotlight from './components/Spotlight';
import ErrorBoundary from './components/ErrorBoundary';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { Activity, Target } from 'lucide-react';

function App() {
  const [activeWindow, setActiveWindow] = useState('hero');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Handle scroll to highlight active section in Dock (optional implementation)
  useEffect(() => {
    const handleScroll = () => {
      // Logic to determine active section could be added here
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 60;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveWindow(id);
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-cream-200 dark:bg-dark-primary text-gray-800 dark:text-gray-200 font-sans selection:bg-brand-primary selection:text-white pb-32">
        {/* macOS Menu Bar */}
        <Header onSearchClick={() => setIsSearchOpen(true)} />
        <Spotlight
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onNavigate={scrollToSection}
        />

        <main className="pt-12 container mx-auto px-4 space-y-24">
          <ErrorBoundary fallback={<div className="p-4 text-center text-red-600">Hero section failed to load</div>}>
            <div id="hero">
              <Hero />
            </div>
          </ErrorBoundary>

          <ErrorBoundary fallback={<div className="p-4 text-center text-red-600">About section failed to load</div>}>
            <About id="about" />
          </ErrorBoundary>

          <ErrorBoundary fallback={<div className="p-4 text-center text-red-600">Skills section failed to load</div>}>
            <Skills id="skills" />
          </ErrorBoundary>

          <ErrorBoundary fallback={<div className="p-4 text-center text-red-600">Experience section failed to load</div>}>
            <Experience id="experience" />
          </ErrorBoundary>

          <ErrorBoundary fallback={<div className="p-4 text-center text-red-600">Education section failed to load</div>}>
            <Education id="education" />
          </ErrorBoundary>

          <ErrorBoundary fallback={<div className="p-4 text-center text-red-600">Graduation Thesis section failed to load</div>}>
            <GraduationThesis id="graduation-thesis" />
          </ErrorBoundary>

          <ErrorBoundary fallback={<div className="p-4 text-center text-red-600">Projects section failed to load</div>}>
            <Projects id="projects" />
          </ErrorBoundary>

          <ErrorBoundary fallback={<div className="p-4 text-center text-red-600">Certifications section failed to load</div>}>
            <Certifications id="certifications" />
          </ErrorBoundary>

          {/* Activities Section */}
          <section id="activities" className="py-8">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="bg-pink-100 dark:bg-pink-900/30 p-2 rounded-lg">
                  <Activity className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Activities</h2>
              </div>

              <div className="window-card p-8 bg-white dark:bg-dark-tertiary transform hover:-translate-y-1 transition-transform duration-300">
                <div className="window-header mb-4">
                  <div className="traffic-lights">
                    <div className="traffic-light traffic-light-red"></div>
                    <div className="traffic-light traffic-light-yellow"></div>
                    <div className="traffic-light traffic-light-green"></div>
                  </div>
                </div>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">42 Istanbul</h3>
                  <span className="text-sm font-mono text-gray-500 bg-gray-100 dark:bg-dark-secondary px-2 py-1 rounded">Jan 2024 - Feb 2024</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Developed skills by completing algorithmic challenges using C programming and Norminette rules in a peer-learning environment.
                </p>
              </div>
            </div>
          </section>

          {/* Aims Section */}
          <section id="aims" className="py-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-4">
                <Target className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">My Aims</h2>
            </div>

            <div className="window-card p-8 md:p-12 bg-white dark:bg-dark-tertiary text-center transform hover:-translate-y-1 transition-transform duration-300">
              <div className="window-header mb-6 justify-center">
                <span className="text-xs text-gray-400">goals.txt</span>
              </div>
              <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
                As a graduated IT specalist specializing in DevOps and Cloud technologies, I have a strong passion for leveraging technology to create meaningful solutions that positively impact people's lives. Continuously expanding my expertise, I aim to bridge the gap between emerging technologies and practical, user-centered applications.
              </p>
              <div className="h-px w-24 bg-gray-200 dark:bg-gray-700 mx-auto my-6"></div>
              <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
                In the short term, I am deepening my knowledge in cloud architecture while maintaining a solid foundation in software engineering principles. Long-term, I aspire to lead innovative projects that drive technological advancements.
              </p>
              <div className="h-px w-24 bg-gray-200 dark:bg-gray-700 mx-auto my-6"></div>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I'm committed to contributing to open-source communities and mentoring the next generation of developers, believing that knowledge sharing is essential for collective growth in our field.
              </p>
            </div>
          </section>

          <ErrorBoundary fallback={<div className="p-4 text-center text-red-600">Contact section failed to load</div>}>
            <Contact id="contact" />
          </ErrorBoundary>
        </main>

        <Footer />

        {/* macOS Dock Navigation */}
        <Dock onNavigate={scrollToSection} />

        <SpeedInsights />
        <Analytics />
      </div>
    </ErrorBoundary>
  );
}

export default App;