import React from 'react';

interface LoadingProps {
  size?: 'small' | 'medium' | 'large';
  text?: string;
  fullScreen?: boolean;
}

const Loading: React.FC<LoadingProps> = ({ 
  size = 'medium', 
  text = 'Loading...', 
  fullScreen = false 
}) => {
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-10 h-10',
    large: 'w-16 h-16'
  };

  const LoadingSpinner = () => (
    <div className="flex flex-col items-center justify-center">
      <div className={`${sizeClasses[size]} border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin`}></div>
      {text && (
        <p className="mt-4 text-gray-600 dark:text-gray-300 animate-pulse">
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white dark:bg-dark-primary bg-opacity-90 dark:bg-opacity-90 flex items-center justify-center z-50">
        <LoadingSpinner />
      </div>
    );
  }

  return <LoadingSpinner />;
};

export default Loading;