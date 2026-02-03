import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 dark:bg-black/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 py-2">
      <div className="container mx-auto px-4 flex justify-center items-center text-[10px] md:text-xs text-gray-500 dark:text-gray-400 font-medium">
        <div>
          © {new Date().getFullYear()} Fatih Reha Dişçi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;