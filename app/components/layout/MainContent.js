// app/components/layout/MainContent.js
'use client';

import { motion } from 'framer-motion';
import IntroContent from '../IntroContent';
import Projects from '../Projects';
export default function MainContent({ selectedProject }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex-1 overflow-auto bg-vscode-bg text-vscode-text p-4"
    >
      {selectedProject ? (
        <Projects project={selectedProject} />
      ) : (
        <IntroContent />
      )}
    </motion.main>
  );
}
