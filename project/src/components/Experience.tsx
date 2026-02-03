import React from 'react';
import { Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ExperienceProps {
  id?: string;
}

const Experience: React.FC<ExperienceProps> = ({ id }) => {
  const experiences = [
    {
      role: 'System Engineering Intern',
      company: 'Yapi Kredi Technology',
      period: 'June 2024 - Sep 2024',
      location: 'Cayirova, Kocaeli',
      description: [
        "Analyzed and categorized over 1,000 IT support issues, informing training sessions that enhanced team response times by an average of two hours per ticket resolution.",
        "Delivered presentations highlighting findings from monthly reports, resulting in more informed decision-making regarding technical support enhancements.",
        "Enhanced AI-driven automation in the BotYap AI Chatbot Project by designing an automated summary table and creating 30 customized prompts.",
        "Completed intensive training in microservices, agile methodologies, and SDLC over 2 weeks."
      ],
      stack: ['Python', 'Excel', 'Jira', 'Microservices', 'Agile'],
      color: 'bg-blue-500'
    },
    {
      role: 'Project Management Intern',
      company: 'Sca Social',
      period: 'July 2025 - Sep 2025',
      location: 'Istanbul, TR',
      description: [
        "Leveraged comprehensive training in Management & Organization, AI & Data Science, Project Management, and IT Law.",
        "Developed a final capstone project for presentation, demonstrating practical application of learned concepts."
      ],
      stack: ['Project Management', 'AI & Data Science', 'IT Law'],
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section id={id} className="py-24 section-cream">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-xl">
              <Briefcase className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Experience</h2>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-dashed border-gray-300 dark:border-gray-700 ml-4 md:ml-0 md:pl-0 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 md:gap-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Timeline node */}
                <div className="absolute -left-[9px] top-0 md:left-auto md:right-0 md:col-start-2 md:col-end-3 md:relative md:flex md:justify-center">
                  <div className={`w-5 h-5 rounded-full ${exp.color} border-4 border-white dark:border-dark-primary shadow-sm z-10`}></div>
                </div>

                {/* Content */}
                <div className="md:col-span-5 md:ml-8">
                  <div className="window-card p-6 bg-white dark:bg-dark-tertiary group hover:shadow-window-lg transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-brand-primary transition-colors">
                          {exp.role}
                        </h3>
                        <div className="text-lg font-medium text-gray-600 dark:text-gray-300">
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex flex-col items-start sm:items-end text-sm text-gray-500">
                        <div className="flex items-center gap-1 bg-gray-100 dark:bg-dark-secondary px-2 py-1 rounded">
                          <Calendar size={14} />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          <MapPin size={14} />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6 text-gray-600 dark:text-gray-300">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ArrowRight size={16} className="mt-1 text-gray-400 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.stack.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-50 dark:bg-dark-secondary border border-gray-100 dark:border-gray-700 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;