import React from 'react';
import { Code, Globe, Wrench } from 'lucide-react';

interface SkillsProps {
  id?: string;
}

const Skills: React.FC<SkillsProps> = ({ id }) => {
  const skillCategories = [
    {
      title: 'Technical Skills',
      icon: <Wrench className="w-6 h-6" />,
      skills: ['SQL', 'Excel', 'Git', 'Linux', 'Cloud Computing', 'Shell Scripting', 'Docker', 'CI/CD'],
      color: 'bg-blue-500'
    },
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: ['Python', 'Java', 'C'],
      color: 'bg-green-500'
    },
    {
      title: 'Languages',
      icon: <Globe className="w-6 h-6" />,
      skills: ['Turkish (Native)', 'English (B2)'],
      color: 'bg-purple-500'
    }
  ];

  return (
    <section id={id} className="py-16 bg-white dark:bg-dark-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-4 dark:text-white text-gradient hover-glow">Skills & Technologies</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-glow">
            A comprehensive overview of my technical expertise and capabilities
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-dark-secondary rounded-lg p-6 card-hover animate-fade-in-up hover-glow"
            >
              <div className="flex items-center mb-4 card-content">
                <div className={`${category.color} text-white p-3 rounded-lg mr-4 icon-bounce hover-rotate`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold dark:text-white text-glow">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="bg-white dark:bg-dark-primary px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover-lift hover-glow btn-ripple"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Skills Grid */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6 dark:text-white text-glow animate-fade-in-up">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'Problem Solving', 'Team Collaboration', 'Project Management', 
              'Agile Methodologies', 'Version Control', 'Testing & Debugging'
            ].map((competency, index) => (
              <span 
                key={index}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover-gradient hover-bounce btn-ripple animate-fade-in-up"
              >
                {competency}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;