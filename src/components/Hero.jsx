import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiDownload, FiMail, FiArrowRight } from 'react-icons/fi';
import CanvasBg from './CanvasBg';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden pt-20">
      <CanvasBg />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6 text-center lg:text-left"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-blue-500 dark:text-blue-400 tracking-wide">
              Hello, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Abhay <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Patil</span>
            </h1>

            <div className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300 h-16">
              <Typewriter
                words={['Full Stack Developer', 'Java Specialist', 'Spring Boot Expert', 'React Enthusiast']}
                loop={true}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0">
              "Passionate about building scalable web applications and learning modern technologies."
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <Link to="projects" smooth={true} duration={500}>
                <button className="flex items-center px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-lg shadow-blue-500/30 transform hover:-translate-y-1">
                  View Projects <FiArrowRight className="ml-2" />
                </button>
              </Link>
              <a href="/updatedResumeNew.pdf" target="_blank" rel="noopener noreferrer">
                <button className="flex items-center px-8 py-3 rounded-full glass hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white font-medium transition-all shadow-md transform hover:-translate-y-1">
                  Download Resume <FiDownload className="ml-2" />
                </button>
              </a>
              <Link to="contact" smooth={true} duration={500}>
                <button className="flex items-center px-8 py-3 rounded-full border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 text-gray-900 dark:text-white font-medium transition-all transform hover:-translate-y-1">
                  Contact Me <FiMail className="ml-2" />
                </button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center relative"
          >
            {/* Visual element representing a dev profile in 3D-ish style */}
            <div className="w-96 h-96 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full blur-3xl opacity-30 animate-blob"></div>
              <div className="relative glass w-full h-full rounded-2xl flex items-center justify-center border border-white/40 dark:border-white/10 shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent dark:from-white/5 opacity-50 z-0 pointer-events-none"></div>
                <div className="z-10 text-center flex flex-col items-center p-8">
                  <div className="w-56 h-56 rounded-full mb-6 overflow-hidden shadow-inner border-4 border-white dark:border-gray-700 bg-gray-200 dark:bg-gray-800">
                    <img src="/profile.jpeg" alt="Abhay Patil" className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="font-mono text-sm text-gray-800 dark:text-gray-300 space-y-2 w-full">
                    <p><span className="text-pink-500">const</span> <span className="text-blue-500">dev</span> = {"{"}</p>
                    <p className="pl-4">name: <span className="text-green-500">'Abhay'</span>,</p>
                    <p className="pl-4">role: <span className="text-green-500">'Full Stack'</span>,</p>
                    <p className="pl-4">focus: <span className="text-green-500">'Java/React'</span></p>
                    <p>{"}"};</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
