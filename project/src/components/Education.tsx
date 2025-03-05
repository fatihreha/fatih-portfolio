import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

interface EducationProps {
  id: string;
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  achievements?: string[];
}

const Education: React.FC<EducationProps> = ({ id }) => {
  const educationHistory: Education[] = [
    {
      id: 1,
      degree: "Bachelor's Degree in Information Systems&Technologies",
      institution: "Yeditepe University",
      location: "Atasehir, Istanbul",
      period: "2021 - Present",
      description: "I'm currently pursuing my senior year in the Information Systems and Technologies program.",
      achievements: [
        "GPA: 3.1/4.0",
      ]
    },
    {
      id: 2,
      degree: "Sehit Ilhan Varank",
      institution: "High School of Science",
      location: "Maltepe, Istanbul",
      period: "2017 - 2021",
      description: "Comprehensive program covering both hardware and software aspects of computing systems.",
      achievements: [
        "GPA: 91/100",
      ]
    }
  ];
  
  return (
    <section id={id} className="py-16 bg-gray-50 dark:bg-dark-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Education</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-10">
            {educationHistory.map((edu) => (
              <div key={edu.id} className="bg-white dark:bg-dark-primary p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-3">
                  <div className="bg-indigo-100 dark:bg-dark-hover text-indigo-600 dark:text-indigo-400 p-2 rounded mr-3">
                    <GraduationCap size={20} />
                  </div>
                  <h3 className="text-xl font-bold dark:text-white">{edu.degree}</h3>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 dark:text-gray-300 mb-4">
                  <div className="flex items-center">
                    <span className="font-medium">{edu.institution}</span>
                    <span className="mx-2">•</span>
                    <span>{edu.location}</span>
                  </div>
                  <span className="hidden sm:inline mx-2">•</span>
                  <div className="flex items-center mt-1 sm:mt-0">
                    <Calendar size={16} className="mr-1" />
                    <span>{edu.period}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">{edu.description}</p>
                
                {edu.achievements && (
                  <div>
                    <h4 className="font-semibold mb-2 dark:text-white">Achievements & Activities</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;