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
  Heart, 
  Target, 
  Activity,
  FileDown,
  Sun,
  Moon
} from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { useTheme } from './context/ThemeContext';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { id: 'about', label: 'About', icon: <User size={18} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={18} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={18} /> },
    { id: 'projects', label: 'Projects', icon: <Code size={18} /> },
    { id: 'certifications', label: 'Certifications', icon: <Award size={18} /> },
    { id: 'aims', label: 'Aims', icon: <Target size={18} /> },
    { id: 'activities', label: 'Activities', icon: <Activity size={18} /> },
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
    <div className="min-h-screen bg-gray-50 dark:bg-dark-secondary text-gray-800 dark:text-gray-200">
      <Header 
        navItems={navItems} 
        socialLinks={socialLinks} 
        mobileMenuOpen={mobileMenuOpen} 
        toggleMobileMenu={toggleMobileMenu} 
        menuIcon={<Menu size={20} />}
        closeIcon={<X size={20} />}
      />
      
      <main>
        <Hero />
        <About id="about" />
        <Experience id="experience" />
        <Education id="education" />
        <Projects id="projects" />
        <Certifications id="certifications" />
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
                I am a senior IT student aiming to specialize in DevOps and Cloud technologies, with a strong passion for leveraging technology to create meaningful solutions that positively impact people's lives. Continuously expanding my expertise, I aim to bridge the gap between emerging technologies and practical, user-centered applications.
              </p>
              <p className="text-lg mb-6 dark:text-gray-300">
                In the short term, I am deepening my knowledge in cloud architecture and machine learning, while maintaining a solid foundation in software engineering principles. Long-term, I aspire to lead innovative projects that drive technological advancements.
              </p>
              <p className="text-lg dark:text-gray-300">
                I'm committed to contributing to open-source communities and mentoring the next generation of developers, believing that knowledge sharing is essential for collective growth in our field.
              </p>
            </div>
          </div>
        </section>
        <Contact id="contact" socialLinks={socialLinks} />
      </main>
      
      <Footer socialLinks={socialLinks} />
      <SpeedInsights />
      <Analytics />
    </div>
  );
};

export default App;