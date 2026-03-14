import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiAward } from 'react-icons/fi';

const educationData = [
  {
    degree: 'PG Diploma in Advance Computing',
    institution: 'Sunbeam Institute, Karad',
    university: 'C-DAC',
    year: '2024 - 2025',
    grade: '68%',
    icon: <FiAward className="text-2xl" />
  },
  {
    degree: 'BE Computer Engineering',
    institution: 'Sinhgad College of Engineering, Pune',
    university: 'Savitribai Phule Pune University',
    year: '2024',
    grade: '74.8%',
    icon: <FiBookOpen className="text-2xl" />
  },
  {
    degree: 'XII Science',
    institution: 'New English School & Junior College, Jamner',
    university: 'Maharashtra State Board',
    year: '2020',
    grade: '68.15%',
    icon: <FiAward className="text-2xl" />
  },
  {
    degree: 'X General',
    institution: 'New English School, Fattepur',
    university: 'Maharashtra State Board',
    year: '2018',
    grade: '88.2%',
    icon: <FiAward className="text-2xl" />
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 relative bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:-ml-0.5 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-800"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot with Icon */}
                <div className="absolute left-4 md:left-1/2 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/30">
                  {edu.icon}
                </div>

                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="glass p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 hover:-translate-y-2 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                      {edu.year}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">{edu.institution}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">{edu.university}</p>
                    <div className="inline-block mt-2 font-semibold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/20 px-4 py-2 rounded-lg">
                      Grade: {edu.grade}
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

export default Education;
