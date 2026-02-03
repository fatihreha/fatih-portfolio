import React from 'react';
import { Code, Globe, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

interface SkillsProps {
  id?: string;
}

const Skills: React.FC<SkillsProps> = ({ id }) => {
  const skillCategories = [
    {
      title: 'Technical Skills',
      icon: <Wrench className="w-6 h-6" />,
      skills: ['SQL', 'Excel', 'Git', 'Linux', 'Cloud Computing', 'Shell Scripting', 'Docker', 'CI/CD'],
      color: 'bg-indigo-500',
      lightBg: 'bg-indigo-50 dark:bg-indigo-900/20'
    },
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: ['Python', 'Java', 'C'],
      color: 'bg-purple-500',
      lightBg: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      title: 'Languages',
      icon: <Globe className="w-6 h-6" />,
      skills: ['Turkish (Native)', 'English (B2)'],
      color: 'bg-pink-500',
      lightBg: 'bg-pink-50 dark:bg-pink-900/20'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id={id} className="py-16 section-cream">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and capabilities
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="dashed-card group"
              variants={cardVariants}
            >
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className={`${category.color} text-white p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className={`${category.lightBg} px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:scale-105 transition-transform cursor-default`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Competencies */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
            Core Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'Problem Solving', 'Team Collaboration', 'Project Management',
              'Agile Methodologies', 'Version Control', 'Testing & Debugging'
            ].map((competency, index) => (
              <motion.span
                key={index}
                className="pill-button hover:pill-button-active"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                {competency}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;