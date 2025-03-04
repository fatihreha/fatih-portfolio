import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
  id: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  repoUrl: string;
  category: string;
}

const Projects: React.FC<ProjectProps> = ({ id }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "EventfulExplorer",
      description: "EventfulExplorer is a web-based platform developed as a collaboratively project. It connects travelers with each other, allowing them to explore cities and countries together. Additionally, it provides an event tracker to help users discover local events during their travels.",
      image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      tags: ["React", "Node.js", "Django", "JavaScript"],
      repoUrl: "https://github.com/fatihreha/EventfulExplorer",
      category: "fullstack"
    },
    {
      id: 2,
      title: "Course Registration System",
      description: "A robust course registration system built with Spring Boot, enabling efficient management of student enrollments, course schedules, and academic records.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      tags: ["Java", "Spring Boot", "MySQL", "REST API"],
      repoUrl: "https://github.com/fatihreha/course_registration_system",
      category: "backend"
    },
    {
      id: 3,
      title: "ElderAid",
      description: "ElderAid is a mobile application designed to alleviate the challenges faced by elderly individuals in their daily lives while fostering social solidarity. The app enables elderly users to easily communicate their needs (such as shopping, cleaning, walking, or companionship) to young volunteers.",
      image: "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      tags: ["React Native", "Firebase", "TypeScript", "Google Maps API"],
      repoUrl: "https://github.com/ELDERAID431/elderaid431",
      category: "mobile"
    },
    {
      id: 4,
      title: "Yummai",
      description: "Yummai is a next-generation mobile app developed as a collaborative project to revolutionize how users discover and prepare food. Powered by DeepSeek AI, it offers a seamless and interactive culinary experience. Features include instant recipe identification through photo capture, smart ingredient recognition for tailored recipe suggestions, personalized AI chatbot for meal recommendations, cost-effective shopping with real-time ingredient price comparisons, and advanced DeepSeek AI integration for natural interactions. Yummai brings AI-driven cooking to your fingertips!",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      tags: ["React Native", "Node.js", "Babel", "DeepSeek AI"],
      repoUrl: "https://github.com/fatihreha/Yummai-0.1",
      category: "mobile"
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'cloud', label: 'Cloud' }
  ];
  
  return (
    <section id={id} className="py-16 bg-gray-50 dark:bg-dark-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap justify-center gap-2">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white dark:bg-dark-primary text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-hover'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-white dark:bg-dark-primary rounded-lg shadow-md overflow-hidden hover-scale animate-fade-in-up">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
                >
                  <Github size={20} className="mr-2" />
                  <span>View Repository</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;