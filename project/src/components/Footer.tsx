import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  socialLinks: {
    id: string;
    label: string;
    icon: React.ReactNode;
    url: string;
  }[];
}

const Footer: React.FC<FooterProps> = ({ socialLinks }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold text-white">Fatih</a>
            <p className="mt-2 text-gray-400 dark:text-gray-300">Personal Portfolio Design</p>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
            {socialLinks.map(link => (
              <a 
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 dark:bg-gray-700 hover:bg-indigo-600 dark:hover:bg-indigo-700 p-3 rounded-full transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <button 
            onClick={scrollToTop}
            className="bg-indigo-600 hover:bg-indigo-700 p-3 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
        
        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 dark:text-gray-300 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Fatih Reha Dişçi
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 dark:text-gray-300 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 dark:text-gray-300 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 dark:text-gray-300 hover:text-white text-sm transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;