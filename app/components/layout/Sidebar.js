// app/components/layout/Sidebar.js
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import profilePic from '/public/images/profile-picture.jpeg';

const sections = [
  { id: 'about', name: 'About Me', subsections: ['My Intro', 'My Resume'] },
  { id: 'components', name: 'Top Components', subsections: ['Pass Gen', 'Prompt Search'] },
  { id: 'frontend', name: 'Frontend Projects', subsections: ['Project List'] },
  { id: 'backend', name: 'Backend Projects', subsections: ['Project List'] },
  { id: 'articles', name: 'Top Articles', subsections: ['Hot Topics'] },
];

function SectionItem({ section, onSectionSelect }) {
  return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
        >
            <button
        onClick={() => onSectionSelect(section.id)}
        className="block py-2 px-4 text-sm text-vscode-text hover:bg-gray-700 w-full text-left"
            >
        {section.name}
            </button>
      <div className="pl-4">
        {section.subsections.map((subsection, index) => (
          <button
            key={index}
            onClick={() => onSectionSelect(`${section.id}-${index}`)}
            className="block py-1 px-4 text-xs text-vscode-text hover:bg-gray-700 w-full text-left"
          >
            {subsection}
          </button>
                    ))}
      </div>
            </motion.div>
    );
}

function Sidebar({ isOpen, onClose, isMobile, onSectionSelect }) {
  return (
    <>
      <motion.aside
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-vscode-sidebar-bg text-vscode-text overflow-y-auto ${
          isMobile ? 'shadow-lg' : ''
        }`}
      >
        <div className="p-4">
          <div className="flex flex-col gap-3 items-center mb-4">
            <Image
              src={profilePic}
              alt="Profile Picture"
              width={100}
              height={100}
              className="rounded-full mr-2"
            />
            <span className="text-sm font-semibold">Edward Odhiambo</span>
          </div>
          <h2 className="text-lg font-semibold mb-4">Portfolio Sections</h2>
          {sections.map((section) => (
            <SectionItem key={section.id} section={section} onSectionSelect={onSectionSelect} />
          ))}
        </div>
        {isMobile && (
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-vscode-text hover:text-white"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </motion.aside>
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