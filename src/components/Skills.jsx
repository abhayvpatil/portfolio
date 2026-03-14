import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'Java', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'C++', level: 75 },
    ]
  },
  {
    category: 'Frontend Technologies',
    items: [
      { name: 'React.js', level: 88 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3 / Tailwind', level: 90 },
    ]
  },
  {
    category: 'Backend Technologies',
    items: [
      { name: 'Spring Boot', level: 85 },
      { name: 'REST APIs', level: 90 },
      { name: 'J2EE', level: 80 },
    ]
  },
  {
    category: 'Tools & Databases',
    items: [
      { name: 'MySQL', level: 85 },
      { name: 'Git & GitHub', level: 88 },
      { name: 'JWT Authentication', level: 80 },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skills.map((skillGroup, groupIdx) => (
            <motion.div
              key={groupIdx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6 border-b border-gray-200 dark:border-gray-700 pb-3">{skillGroup.category}</h3>
              
              <div className="space-y-6">
                {skillGroup.items.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
