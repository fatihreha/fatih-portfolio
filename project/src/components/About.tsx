import React from 'react';
import { User, MapPin, Calendar, Briefcase } from 'lucide-react';
import OpenStreetMap from './OpenStreetMap';

interface AboutProps {
  id: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <section id={id} className="py-16 bg-white dark:bg-dark-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-10 items-center max-w-5xl mx-auto">
          <div className="w-full md:w-1/3">
            <div className="relative">
              <div className="aspect-square rounded-full overflow-hidden border-4 border-indigo-100 dark:border-gray-700">
                <img 
                  src="/fthrhdsci.JPEG" 
                  alt="Profile" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-indigo-600 text-white p-3 rounded-full">
                <Briefcase size={24} />
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-bold mb-4 dark:text-white">Fatih Reha Dişçi</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
            Bachelor's degree of IT graduate specializing in DevOps and Cloud technologies, continuously developing expertise in these fields, with curiosity about exploring other IT domains to broaden technical knowledge and professional capabilities.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-3">
                <div className="bg-indigo-100 p-2 rounded-md text-indigo-600">
                  <User size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Gender</p>
                  <p className="font-medium dark:text-white">Male</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-indigo-100 p-2 rounded-md text-indigo-600">
                  <MapPin size={20} />
                </div>
                <div className="w-full">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <div className="w-full max-w-xs mt-2">
                    <OpenStreetMap 
                      center={[41.0233, 29.0244]} 
                      zoom={13} 
                      width="100%" 
                      height="150px" 
                    />
                    <div className="p-2 bg-gray-50 dark:bg-gray-800 text-xs text-center text-gray-500 dark:text-gray-400">
                      Üsküdar/Istanbul, Turkey
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-indigo-100 p-2 rounded-md text-indigo-600">
                  <Briefcase size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Current Role</p>
                  <p className="font-medium dark:text-white">Freelancer</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-indigo-100 p-2 rounded-md text-indigo-600">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Experience</p>
                  <p className="font-medium dark:text-white">0-1 Years</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full text-sm">Python</span>
              <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full text-sm">Java</span>
              <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full text-sm">C/C++</span>
              <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full text-sm">SQL</span>
              <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full text-sm">Linux</span>
              <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full text-sm">Cloud</span>
              <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full text-sm">Shell Scripting</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;