import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  action?: () => void;
}

interface SocialLink {
  id: string;
  label: string;
  icon: React.ReactNode;
  url: string;
}

interface HeaderProps {
  navItems: NavItem[];
  socialLinks: SocialLink[];
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  navItems, 
  socialLinks, 
  mobileMenuOpen, 
  toggleMobileMenu 
}) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="text-2xl font-bold text-indigo-600">FRD</a>
          
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-gray-600 hover:text-indigo-600 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.id}
                href={item.action ? undefined : `#${item.id}`}
                onClick={item.action}
                className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer"
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
          
          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100">
              <div className="container mx-auto px-4 py-3">
                <nav className="flex flex-col space-y-3">
                  {navItems.map((item) => (
                    <a 
                      key={item.id}
                      href={item.action ? undefined : `#${item.id}`}
                      onClick={(e) => {
                        if (item.action) {
                          item.action();
                        }
                        toggleMobileMenu();
                      }}
                      className="flex items-center space-x-2 py-2 px-3 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors cursor-pointer"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </a>
                  ))}
                  
                  <div className="border-t border-gray-100 pt-3 mt-3 flex space-x-4">
                    {socialLinks.map((link) => (
                      <a 
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-indigo-600 transition-colors"
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