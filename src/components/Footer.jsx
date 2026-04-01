import React from 'react';
import { Link } from 'react-scroll';
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-gray-200 dark:border-gray-800 pb-8">
          
          <div className="col-span-1 md:col-span-2">
            <Link to="home" smooth={true} duration={500} className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 cursor-pointer inline-block mb-4">
              Patil Abhay Vijay
            </Link>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm">
              Passionate about building scalable web applications and learning modern technologies.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Education', 'Projects', 'Skills'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item.toLowerCase()} 
                    smooth={true} 
                    duration={500} 
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/abhayvpatil/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white hover:bg-gray-900 dark:hover:bg-white dark:hover:text-gray-900 transition-all border border-gray-200 dark:border-gray-800"
              >
                <FiGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/abhay-patil-8601a0251" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white hover:bg-blue-600 transition-all border border-gray-200 dark:border-gray-800"
              >
                <FiLinkedin />
              </a>
              <a 
                href="mailto:abhaypatil@gmail.com" 
                className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white hover:bg-purple-600 transition-all border border-gray-200 dark:border-gray-800"
              >
                <FiMail />
              </a>
            </div>
          </div>
          
        </div>

        <div className="flex flex-col items-center justify-center text-sm text-gray-500 dark:text-gray-400 relative w-full">
          <p className="text-center">&copy; {new Date().getFullYear()} Patil Abhay Vijay. All rights reserved.</p>
          
          <Link 
            to="home" 
            smooth={true} 
            duration={500} 
            className="mt-4 md:mt-0 md:absolute md:right-0 p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-all animate-bounce"
            aria-label="Scroll to top"
          >
            <FiArrowUp />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
