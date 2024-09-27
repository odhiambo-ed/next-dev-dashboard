'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ThemeToggle from '../ui/ThemeToggle';

// app/components/layout/TopNavBar.js
function TopNavBar({ onMenuClick }) {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-vscode-inactive-tab text-vscode-text"
    >
      <div className="mx-auto px-2">
        <div className="flex items-center justify-between h-8">
          <div className="flex items-center">
            <button
              className="text-vscode-text hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white lg:hidden"
              onClick={onMenuClick}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <span className="ml-2 text-xs font-medium">Portfolio Dashboard</span>
          </div>
          <div className="flex items-center">
          <ThemeToggle />
            <Image
              src="/profile-picture.jpg"
              alt="Profile Picture"
              width={16}
              height={16}
              className="rounded-full ml-2"
            />
      </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default TopNavBar;