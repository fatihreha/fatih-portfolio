import { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Menu,
  X, 
  User, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code, 
  Target, 
  Activity,
  FileDown
} from 'lucide-react';
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
import ScrollProgress from './components/ScrollProgress';
import ErrorBoundary from './components/ErrorBoundary';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { id: 'about', label: 'About', icon: <User size={18} /> },
    { id: 'skills', label: 'Skills', icon: <Code size={18} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={18} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={18} /> },
    { id: 'graduation-thesis', label: 'Graduation Thesis', icon: <GraduationCap size={18} /> },
    { id: 'projects', label: 'Projects', icon: <Code size={18} /> },
    { id: 'certifications', label: 'Certifications', icon: <Award size={18} /> },
    { id: 'activities', label: 'Activities', icon: <Activity size={18} /> },
    { id: 'aims', label: 'Aims', icon: <Target size={18} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={18} /> },
    { 
      id: 'resume', 
      label: 'Resume', 
      icon: <FileDown size={18} />,
      action: () => window.open(resumeUrl, '_blank')
    }
  ];

  const socialLinks = [
    { id: 'github', label: 'GitHub', icon: <Github size={20} />, url: 'https://github.com/fatihreha' },
    { id: 'linkedin', label: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/fatihrehadisci/' },
    { id: 'email', label: 'Email', icon: <Mail size={20} />, url: 'mailto:fatihreha@proton.me' },
  ];

  const resumeUrl = 'https://drive.google.com/file/d/135D--JhjJFVkjFuslJznimgf3vQAsZ8E/view?usp=sharing';

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50 dark:bg-dark-secondary text-gray-800 dark:text-gray-200">
        <ScrollProgress />
        <Header 
          navItems={navItems} 
          socialLinks={socialLinks} 
          mobileMenuOpen={mobileMenuOpen} 
          toggleMobileMenu={toggleMobileMenu} 
          menuIcon={<Menu size={20} />}
          closeIcon={<X size={20} />}
        />
        
        <main>
          <ErrorBoundary fallback={<div className="p-4 text-center text-red-600">Hero section failed to load</div>}>
            <Hero />
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
        <section id="activities" className="py-16 bg-white dark:bg-dark-primary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Activities</h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white dark:bg-dark-primary p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 dark:text-white">42 Istanbul</h3>
                <ul className="list-disc pl-5 space-y-2 dark:text-gray-300">
                  <li>Jan 2024 - Feb 2024</li>
                  <li>Developed skills by completing algorithmic challenges using C programming and Norminette rules in a peerlearning environment.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="aims" className="py-16 bg-gray-50 dark:bg-dark-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">My Aims</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg mb-6 dark:text-gray-300">
                As a bachelor's degree of IT graduate specializing in DevOps and Cloud technologies, I have a strong passion for leveraging technology to create meaningful solutions that positively impact people's lives. Continuously expanding my expertise, I aim to bridge the gap between emerging technologies and practical, user-centered applications.
              </p>
              <p className="text-lg mb-6 dark:text-gray-300">
                In the short term, I am deepening my knowledge in cloud architecture. while maintaining a solid foundation in software engineering principles. Long-term, I aspire to lead innovative projects that drive technological advancements.
              </p>
              <p className="text-lg dark:text-gray-300">
                I'm committed to contributing to open-source communities and mentoring the next generation of developers, believing that knowledge sharing is essential for collective growth in our field.
              </p>
            </div>
          </div>
        </section>
        <ErrorBoundary fallback={<div className="p-4 text-center text-red-600">Contact section failed to load</div>}>
          <Contact id="contact" socialLinks={socialLinks} />
        </ErrorBoundary>
      </main>
      
      <Footer socialLinks={socialLinks} />
      <SpeedInsights />
      <Analytics />
    </div>
    </ErrorBoundary>
  );
}

export default App;