// app/components/layout/MainContent.js
'use client';

import { motion } from 'framer-motion';
import AboutMe from '../sections/AboutMe';
import TopComponents from '../sections/TopComponents';
import FrontendProjects from '../sections/FrontendProjects';
import BackendProjects from '../sections/BackendProjects';
import TopArticles from '../sections/TopArticles';

export default function MainContent({ selectedSection }) {
  const renderSection = () => {
    switch (selectedSection) {
      case 'about':
        return <AboutMe />;
      case 'components':
        return <TopComponents />;
      case 'frontend':
        return <FrontendProjects />;
      case 'backend':
        return <BackendProjects />;
      case 'articles':
        return <TopArticles />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex-1 overflow-auto bg-vscode-bg text-vscode-text p-4"
    >
      {renderSection()}
    </motion.main>
  );
}
