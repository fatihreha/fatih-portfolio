import React from 'react';
import { User, MapPin, Calendar, Briefcase } from 'lucide-react';

interface AboutProps {
  id: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <section id={id} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-10 items-center max-w-5xl mx-auto">
          <div className="w-full md:w-1/3">
            <div className="relative">
              <div className="aspect-square rounded-full overflow-hidden border-4 border-indigo-100">
                <img 
                  src="/fthrhdsc.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-indigo-600 text-white p-3 rounded-full">
                <Briefcase size={24} />
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-bold mb-4">Fatih Reha Dişçi</h3>
            <p className="text-gray-600 mb-6">
            Senior IT student aiming to specialize in DevOps and Cloud technologies, continuously developing skills in these fields, with curiosity about exploring other IT domains to broaden technical expertise.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-3">
                <div className="bg-indigo-100 p-2 rounded-md text-indigo-600">
                  <User size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Gender</p>
                  <p className="font-medium">Male</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-indigo-100 p-2 rounded-md text-indigo-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">Uskudar, Istanbul, TR</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-indigo-100 p-2 rounded-md text-indigo-600">
                  <Briefcase size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Current Role</p>
                  <p className="font-medium">Freelancer</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-indigo-100 p-2 rounded-md text-indigo-600">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Experience</p>
                  <p className="font-medium">0-1 Years</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Python</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Java</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">C/C++</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">SQL</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Linux</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Cloud</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">Shell Scripting</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;