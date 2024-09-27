'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ThemeToggle from '../ui/ThemeToggle';

function TopNavBar({ onMenuClick }) {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-vscode-inactive-tab text-vscode-text"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center">
            <button
              className="text-vscode-text hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white lg:hidden"
              onClick={onMenuClick}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <span className="ml-3 text-sm font-medium">Portfolio Dashboard</span>
          </div>
          <div className="flex items-center">
          <ThemeToggle />
            <Image
              src="/profile-picture.jpg"
              alt="Profile Picture"
              width={24}
              height={24}
              className="rounded-full ml-3"
            />
      </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default TopNavBar;