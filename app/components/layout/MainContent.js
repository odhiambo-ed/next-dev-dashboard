// app/components/layout/MainContent.js
'use client';

import { motion } from 'framer-motion';
import MyIntro from '../sections/AboutMe/MyIntro';
import MyResume from '../sections/AboutMe/MyResume';
import PassGen from '../sections/TopComponents/PassGen';
import PromptSearch from '../sections/TopComponents/PromptSearch';
import FrontendProjectList from '../sections/FrontendProjects/ProjectList';
import BackendProjectList from '../sections/BackendProjects/ProjectList';
import HotTopics from '../sections/TopArticles/HotTopics';

export default function MainContent({ selectedSection }) {
  const renderSection = () => {
    switch (selectedSection) {
      case 'about-0':
        return <MyIntro />;
      case 'about-1':
        return <MyResume />;
      case 'components-0':
        return <PassGen />;
      case 'components-1':
        return <PromptSearch />;
      case 'frontend-0':
        return <FrontendProjectList />;
      case 'backend-0':
        return <BackendProjectList />;
      case 'articles-0':
        return <HotTopics />;
      default:
        return <MyIntro />;
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
