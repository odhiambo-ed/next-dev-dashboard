'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const menuItems = [
  { title: 'Home', href: '/' },
  { title: 'Projects', href: '/projects' },
  { title: 'Skills', href: '#skills' },
  { title: 'Contact', href: '#contact' },
];

function MenuItem({ item, index }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-center justify-between p-2 hover:bg-gray-700">
        <Link href={item.href} className="text-gray-300 hover:text-white">
          {item.title}
        </Link>
        {item.submenu && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white"
          >
            {isOpen ? '-' : '+'}
          </button>
        )}
      </div>
      {item.submenu && isOpen && (
        <div className="pl-4">
          {item.submenu.map((subItem, subIndex) => (
            <MenuItem key={subItem.href} item={subItem} index={subIndex} />
          ))}
        </div>
      )}
    </motion.div>
  );
}

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 overflow-y-auto transition-all text-white lg:relative lg:translate-x-0"
      >
        <div className="flex items-center justify-between p-4 lg:hidden">
          <span className="text-xl font-semibold">Menu</span>
          <button onClick={onClose} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="mt-5 px-2">
          {menuItems.map((item, index) => (
            <MenuItem key={item.href} item={item} index={index} />
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