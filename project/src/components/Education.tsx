import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { motion } from 'framer-motion';

interface EducationProps {
  id?: string;
}

const Education: React.FC<EducationProps> = ({ id }) => {
  const educationHistory = [
    {
      degree: "Bachelor's Degree in Information Systems & Technologies",
      institution: "Yeditepe University",
      location: "Atasehir, Istanbul",
      period: "2021 - Present",
      description: "Currently pursuing senior year in the Information Systems and Technologies program.",
      stats: { label: 'GPA', value: '3.1/4.0', color: 'bg-green-500' },
      logoColor: 'bg-blue-600'
    },
    {
      degree: "High School of Science",
      institution: "Sehit Ilhan Varank",
      location: "Maltepe, Istanbul",
      period: "2017 - 2021",
      description: "Comprehensive program covering both hardware and software aspects of computing systems.",
      stats: { label: 'GPA', value: '91/100', color: 'bg-yellow-500' },
      logoColor: 'bg-red-600'
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
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl">
              <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Education</h2>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationHistory.map((edu, index) => (
            <motion.div
              key={index}
              className="window-card p-0 overflow-hidden group hover:border-brand-primary/50 transition-colors"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="window-header bg-gray-50 dark:bg-dark-secondary border-b border-gray-200 dark:border-gray-700">
                <div className="traffic-lights">
                  <div className="traffic-light traffic-light-red"></div>
                  <div className="traffic-light traffic-light-yellow"></div>
                  <div className="traffic-light traffic-light-green"></div>
                </div>
                <div className="flex-1 text-center text-xs text-gray-400 font-medium">
                  {edu.institution}
                </div>
                <div className="w-12"></div>
              </div>

              <div className="p-8 flex flex-col md:flex-row gap-8 items-start">
                <div className={`${edu.logoColor} p-4 rounded-2xl flex-shrink-0 text-white shadow-lg`}>
                  <GraduationCap size={32} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 bg-cream-100 dark:bg-dark-secondary px-3 py-1 rounded-full text-xs font-mono text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                      <Calendar size={12} />
                      {edu.period}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium mb-4">
                    <MapPin size={16} />
                    {edu.location}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {edu.description}
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-gray-50 dark:bg-dark-secondary px-4 py-2 rounded-lg border border-gray-100 dark:border-gray-700">
                      <Award size={16} className="text-yellow-500" />
                      <span className="font-bold text-gray-800 dark:text-white">{edu.stats.value}</span>
                      <span className="text-xs text-gray-500 uppercase tracking-wider ml-1">{edu.stats.label}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;