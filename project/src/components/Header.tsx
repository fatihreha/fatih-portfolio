import React from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

interface HeaderProps {
  navItems: {
    id: string;
    label: string;
    icon: React.ReactElement;
    action?: () => Window | null;
  }[];
  socialLinks: {
    id: string;
    label: string;
    icon: React.ReactElement;
    url: string;
  }[];
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  menuIcon: React.ReactElement;  // Add this line
  closeIcon: React.ReactElement; // Add this line
}

const Header: React.FC<HeaderProps> = ({ 
  navItems, 
  socialLinks, 
  mobileMenuOpen, 
  toggleMobileMenu 
}) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  
  return (
    <header className="bg-white dark:bg-dark-primary shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">FRD</a>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a 
                key={item.id}
                href={item.action ? undefined : `#${item.id}`}
                onClick={item.action}
                className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
          
          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white dark:bg-dark-primary border-t border-gray-100 dark:border-gray-700">
              <div className="container mx-auto px-4 py-3">
                <nav className="flex flex-col space-y-3">
                  {navItems.map((item) => (
                    <a 
                      key={item.id}
                      href={item.action ? undefined : `#${item.id}`}
                      onClick={() => {
                        if (item.action) {
                          item.action();
                        }
                        toggleMobileMenu();
                      }}
                      className="flex items-center space-x-2 py-2 px-3 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors cursor-pointer"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </a>
                  ))}
                  
                  <div className="border-t border-gray-100 dark:border-gray-700 pt-3 mt-3 flex space-x-4">
                    {socialLinks.map((link) => (
                      <a 
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        aria-label={link.label}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;