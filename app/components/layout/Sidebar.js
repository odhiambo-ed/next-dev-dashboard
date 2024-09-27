'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  { name: 'Project 1', href: '/projects/1' },
  { name: 'Project 2', href: '/projects/2' },
  { name: 'Project 3', href: '/projects/3' },
];

function ProjectItem({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={project.href} className="block p-2 text-vscode-text hover:bg-gray-700">
        {project.name}
      </Link>
    </motion.div>
  );
}

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed inset-y-0 left-0 z-50 w-64 bg-vscode-sidebar-bg overflow-y-auto transition-all text-vscode-text lg:relative lg:translate-x-0"
      >
        <div className="flex items-center justify-between p-4 lg:hidden">
          <span className="text-xl font-semibold">Projects</span>
          <button onClick={onClose} className="text-vscode-text focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="mt-5 px-2">
          {projects.map((project, index) => (
            <ProjectItem key={project.href} project={project} index={index} />
          ))}
        </nav>
      </motion.div>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={onClose}
        ></div>
      )}
    </>
  );
}

export default Sidebar;