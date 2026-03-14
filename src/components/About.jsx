import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 border border-gray-200 dark:border-gray-800 shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 pb-4">Personal Details</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex"><span className="font-medium w-40 text-gray-500 dark:text-gray-400">Date of Birth:</span> <span className="text-gray-900 dark:text-white">11/02/2002</span></li>
              <li className="flex"><span className="font-medium w-40 text-gray-500 dark:text-gray-400">Gender:</span> <span className="text-gray-900 dark:text-white">Male</span></li>
              <li className="flex"><span className="font-medium w-40 text-gray-500 dark:text-gray-400">Nationality:</span> <span className="text-gray-900 dark:text-white">Indian</span></li>
              <li className="flex"><span className="font-medium w-40 text-gray-500 dark:text-gray-400">Languages:</span> <span className="text-gray-900 dark:text-white">English, Hindi, Marathi</span></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-3xl p-8 border border-gray-200 dark:border-gray-800 shadow-xl relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-2xl opacity-30 animate-blob"></div>
              <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>

              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100 relative z-10">Professional Summary</h3>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 relative z-10 italic">
                "Computer Engineering graduate with strong knowledge of full-stack web development using Java, Spring Boot, React, and MySQL. Possesses sound knowledge of Artificial Intelligence and Cybersecurity concepts, with a passion for building secure and scalable web applications. Interested in learning modern technologies, cloud computing, and solving real-world problems through innovative software solutions."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
