import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiActivity, FiHeart } from 'react-icons/fi';

const ExtraSections = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800"
          >
            <div className="flex items-center mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
              <FiCheckCircle className="text-3xl text-blue-500 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 bg-blue-500 rounded-full"></span>
                <span className="text-lg text-gray-700 dark:text-gray-300">Core Java Certificate</span>
              </li>
            </ul>
          </motion.div>

          {/* Extra Curricular Activities */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800"
          >
            <div className="flex items-center mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
              <FiActivity className="text-3xl text-purple-500 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Activities</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 bg-purple-500 rounded-full flex-shrink-0"></span>
                <span className="text-lg text-gray-700 dark:text-gray-300">Member of Hyperion Electric Vehicle Club</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 bg-purple-500 rounded-full flex-shrink-0"></span>
                <span className="text-lg text-gray-700 dark:text-gray-300">Participated in Mr. Carnival (College Fest)</span>
              </li>
            </ul>
          </motion.div>

          {/* Hobbies */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800"
          >
            <div className="flex items-center mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
              <FiHeart className="text-3xl text-pink-500 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Hobbies</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 bg-pink-500 rounded-full flex-shrink-0"></span>
                <span className="text-lg text-gray-700 dark:text-gray-300">Kabaddi (team sport)</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 bg-pink-500 rounded-full flex-shrink-0"></span>
                <span className="text-lg text-gray-700 dark:text-gray-300">Learning new tools and technologies</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 mt-2 mr-3 bg-pink-500 rounded-full flex-shrink-0"></span>
                <span className="text-lg text-gray-700 dark:text-gray-300">Reading tech blogs and books</span>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ExtraSections;
