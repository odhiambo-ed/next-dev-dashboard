'use client';

import Image from 'next/image';
import { useTheme } from '../../contexts/ThemeContext';
import ThemeToggle from '../ui/ThemeToggle';
import { motion } from 'framer-motion';

function TopNavBar({ onMenuClick }) {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white lg:hidden"
              onClick={onMenuClick}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <Image
              src="/profile-picture.jpg"
              alt="Profile Picture"
              width={40}
              height={40}
              className="rounded-full ml-3 lg:ml-0"
            />
            <span className="ml-3 text-xl font-semibold text-gray-800 dark:text-white">
              Your Name
            </span>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}

export default TopNavBar;