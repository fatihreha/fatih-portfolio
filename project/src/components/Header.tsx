import React, { useState, useEffect } from 'react';
import { Wifi, BatteryMedium, Search, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  onSearchClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSearchClick }) => {
  const [time, setTime] = useState(new Date());
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);

    // Check system preference or localStorage
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }

    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50 h-8 flex items-center justify-between px-4 text-xs font-medium select-none shadow-sm transition-colors duration-300">
      {/* Left Menu Items */}
      <div className="flex items-center gap-4">
        <div className="font-bold text-sm hover:bg-gray-200/50 dark:hover:bg-gray-700/50 px-2 py-0.5 rounded cursor-pointer transition-colors dark:text-gray-200">
          
        </div>
        <div className="font-bold text-gray-800 dark:text-gray-100 hidden md:block hover:bg-gray-200/50 dark:hover:bg-gray-700/50 px-2 py-0.5 rounded cursor-pointer">
          Fatih Portfolio
        </div>
      </div>

      {/* Right Menu Items */}
      <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
        <div className="hidden sm:flex items-center gap-4 mr-2">
          <button
            onClick={toggleTheme}
            className="hover:bg-gray-200/50 dark:hover:bg-gray-700/50 p-1 rounded transition-colors focus:outline-none"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Moon size={14} /> : <Sun size={14} />}
          </button>
          <BatteryMedium size={14} className="opacity-80" />
          <Wifi size={14} className="opacity-80" />
          <button
            onClick={onSearchClick}
            className="hover:bg-gray-200/50 dark:hover:bg-gray-700/50 p-1 rounded transition-colors focus:outline-none"
            aria-label="Spotlight Search"
          >
            <Search size={14} className="opacity-80" />
          </button>
        </div>

        <div className="flex items-center gap-2 hover:bg-gray-200/50 dark:hover:bg-gray-700/50 px-2 py-0.5 rounded cursor-default transition-colors">
          <span className="hidden sm:inline">{formatDate(time)}</span>
          <span>{formatTime(time)}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;