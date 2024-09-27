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
      <Link href={project.href} className="block py-1 px-2 text-sm text-vscode-text hover:bg-gray-700">
        {project.name}
      </Link>
    </motion.div>
  );
}

function Sidebar({ isOpen, onClose, isMobile }) {
  return (
    <>
      <motion.div
        initial={isMobile ? { x: '-100%' } : { x: 0 }}
        animate={{ x: (isMobile && !isOpen) ? '-100%' : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-vscode-sidebar-bg overflow-y-auto transition-all text-vscode-text ${isMobile ? '' : 'lg:relative lg:translate-x-0'}`}
      >
        <nav className="mt-2 px-2">
          <h2 className="text-xs uppercase tracking-wide text-gray-500 mb-2 px-2">Projects</h2>
          {projects.map((project, index) => (
            <ProjectItem key={project.href} project={project} index={index} />
          ))}
        </nav>
      </motion.div>
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={onClose}
        ></div>
      )}
    </>
  );
}

export default Sidebar;