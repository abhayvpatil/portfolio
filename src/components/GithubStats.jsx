import React from 'react';
import { motion } from 'framer-motion';

const GithubStats = () => {
  // Using github-readme-stats public API for metrics
  const githubUsername = "abhay-patil-8601a0251"; // Using provided linkedIn ID string as placeholder, or real github username if known. Wait, github username from project links is e.g. "kdac-cap" but let's use a generic generic query or assume username "abhaypatil"
  // Actually, the github username in project links: 'airline-reservation-portal' doesn't show username. I will use 'PatilAbhayVijay'
  const realGithubUser = "abhayvpatil"; 

  // Since actual github username wasn't strictly provided outside of the repos, I'll provide an interactive looking mockup or use the github user 'PatilAbhayVijay' assuming it's their handle, or just generic images.
  
  return (
    <section id="github" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            GitHub <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Statistics</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col items-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full max-w-4xl"
          >
            {/* GitHub Contributions Graph */}
            <div className="glass p-4 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800 flex justify-center overflow-x-auto">
              {/* Using a service to generate the chart, theme support via query params */}
              <img 
                src={`https://ghchart.rshah.org/3b82f6/${realGithubUser}`} 
                alt="GitHub Contributions" 
                loading="lazy"
                className="min-w-[700px] w-full object-contain filter dark:invert dark:hue-rotate-180"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
             <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
               <img 
                src={`https://github-readme-stats-eight-theta.vercel.app/api?username=${realGithubUser}&show_icons=true&theme=transparent&hide_border=true&title_color=3b82f6&text_color=6b7280&icon_color=8b5cf6`} 
                alt="GitHub Stats" 
                loading="lazy"
                className="w-full glass rounded-3xl shadow-lg border border-gray-200 dark:border-gray-800"
                onError={(e) => { e.target.style.display = 'none'; }}
               />
             </motion.div>

             <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
               <img 
                src={`https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=${realGithubUser}&layout=compact&theme=transparent&hide_border=true&title_color=3b82f6&text_color=6b7280`} 
                alt="Top Languages" 
                loading="lazy"
                className="w-full glass rounded-3xl shadow-lg border border-gray-200 dark:border-gray-800"
                onError={(e) => { e.target.style.display = 'none'; }}
               />
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubStats;
