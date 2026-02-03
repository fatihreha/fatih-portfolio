import React, { useState } from 'react';
import { Github } from 'lucide-react';
import LazyImage from './LazyImage';

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
      id: 3,
      title: "ElderAid",
      description: "ElderAid is a team project and mobile application designed to alleviate the challenges faced by elderly individuals in their daily lives while fostering social solidarity. The app enables elderly users to easily communicate their needs (such as shopping, cleaning, walking, or companionship) to young volunteers.",
      image: "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      tags: ["React Native", "Firebase", "TypeScript", "Google Maps API"],
      repoUrl: "https://github.com/ELDERAID431/elderaid431",
      category: "mobile"
    },
    {
      id: 4,
      title: "StudyBros",
      description: "StudyBros is a comprehensive study timer application based on the Pomodoro technique. It helps students and professionals optimize their work sessions with smart tracking, analytics, and personalized goal setting. The application features a database connection for storing user progress and statistics.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      tags: ["Flask", "SQLite", "JavaScript", "Pomodoro"],
      repoUrl: "https://github.com/fatihreha/StudyBros",
      category: "fullstack"
    },
    {
      id: 5,
      title: "AIAssistedCodeEditor",
      description: "An AI-powered code editor that leverages Gemini API to assist developers with code generation and suggestions. The application is containerized with Docker, deployed on Kubernetes, and features a CI/CD pipeline for automated deployment and synchronization between GitHub and GitLab repositories.",
      image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      tags: ["Docker", "Kubernetes", "CI/CD", "Gemini API", "Flask"],
      repoUrl: "https://github.com/fatihreha/AIAssistedCodeEditor",
      category: "devops"
    },
    {
      id: 6,
      title: "Sustainable for Future",
      description: "This project is a modern web application that introduces the United Nations Sustainable Development Goals (SDGs) through visually engaging, dedicated pages for each of the 17 goals. In addition to informative content and interactive design, the site features AI-powered tools—such as a Sustainable Product Recommender and a Carbon Calculator—that leverage artificial intelligence to provide personalized recommendations and insights, helping users make more sustainable choices.",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      tags: ["React", "TypeScript", "Tailwind CSS", "OpenAI", "Vite"],
      repoUrl: "https://github.com/fatihreha/SustainableForFuture",
      category: "frontend"
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
    { id: 'frontend', label: 'Frontend' },
    { id: 'devops', label: 'DevOps' },
    { id: 'cloud', label: 'Cloud' }
  ];

  return (
    <section id={id} className="py-16 section-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">My Projects</h2>

        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap justify-center gap-2">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`pill-button hover:scale-105 ${activeFilter === filter.id
                  ? 'pill-button-active'
                  : 'bg-white dark:bg-dark-tertiary hover:border-brand-primary'
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="window-card group h-full flex flex-col">
              {/* Window Header */}
              <div className="window-header">
                <div className="traffic-lights">
                  <div className="traffic-light traffic-light-red"></div>
                  <div className="traffic-light traffic-light-yellow"></div>
                  <div className="traffic-light traffic-light-green"></div>
                </div>
              </div>

              {/* Window Content */}
              <div className="flex-1 flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <LazyImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                <div className="p-6 flex flex-col flex-1 bg-white dark:bg-dark-primary">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-2.5 py-1 rounded-md bg-cream-200 dark:bg-dark-secondary text-gray-600 dark:text-gray-300 border border-cream-400 dark:border-dark-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full group/btn"
                  >
                    <Github size={18} className="mr-2 group-hover/btn:rotate-12 transition-transform" />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;