import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24 md:py-32">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            <span className="block hover-bounce">Hi, I'm </span>
            <span className="text-gradient hover-glow">
              Fatih Reha Dişçi
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-indigo-100 animate-fade-in-up text-glow">
            IT graduate
          </p>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-fade-in-up">
            Welcome to my portfolio website.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up">
            <a 
              href="#projects" 
              className="bg-white text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-md font-medium btn-ripple hover-lift hover-glow"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-6 py-3 rounded-md font-medium btn-ripple hover-lift hover-slide"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white opacity-70 hover:opacity-100 transition-opacity icon-bounce hover-glow">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;