import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceProps {
  id: string;
}

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

const Experience: React.FC<ExperienceProps> = ({ id }) => {
  const jobs: Job[] = [
    {
      id: 1,
      title: "System Engineering Intern",
      company: "Yapi Kredi Technology",
      location: "Cayirova, Kocaeli",
      period: "Jan 2024 - Sep 2024",
      description: [
        "Analyzed and categorized over 1,000 IT support issues during the internship; insights gathered directly informed training sessions that enhanced team response times by an average of two hours per ticket resolution.",
        "Delivered presentations highlighting findings from monthly reports created between May and August, resulting in more informed decision-making processes among team members regarding technical support enhancements moving forward.",
        "Enhanced AI-driven automation in the BotYap AI Chatbot Project by designing an automated summary table and creating 30 customized prompts, improving data processing capabilities and response accuracy",
        "Enhanced system performance by working closely with end users and key stakeholders to analyze root causes.",
        "Completed intensive training in microservices, agile methodologies, and SDLC over 2 weeks, gaining in-depth knowledge and practical expertise to improve the execution of IT projects."
    ],
      technologies: ["Python", "Excel", "Jira"]
    },
  ];
  
  return (
    <section id={id} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-indigo-200 pl-8 ml-4">
            {jobs.map((job, index) => (
              <div 
                key={job.id} 
                className={`mb-12 ${index === jobs.length - 1 ? '' : ''}`}
              >
                <div className="absolute w-4 h-4 bg-indigo-600 rounded-full -left-[9px] mt-1.5"></div>
                
                <div className="flex items-center mb-2">
                  <div className="bg-indigo-100 text-indigo-600 p-2 rounded mr-3">
                    <Briefcase size={18} />
                  </div>
                  <h3 className="text-xl font-bold">{job.title}</h3>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mb-3">
                  <div className="flex items-center">
                    <span className="font-medium">{job.company}</span>
                    <span className="mx-2">•</span>
                    <span>{job.location}</span>
                  </div>
                  <span className="hidden sm:inline mx-2">•</span>
                  <div className="flex items-center mt-1 sm:mt-0">
                    <Calendar size={16} className="mr-1" />
                    <span>{job.period}</span>
                  </div>
                </div>
                
                <ul className="list-disc pl-5 mb-4 space-y-1 text-gray-700">
                  {job.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, i) => (
                    <span key={i} className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;