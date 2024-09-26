'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

const menuItems = [
  {
    title: 'Dashboard',
    href: '/',
  },
  {
    title: 'Projects',
    href: '/projects',
    submenu: [
      {
        title: 'Web Development',
        href: '/projects/web-development',
        submenu: [
          { title: 'Frontend', href: '/projects/web-development/frontend' },
          { title: 'Backend', href: '/projects/web-development/backend' },
        ],
      },
      { title: 'Mobile Apps', href: '/projects/mobile-apps' },
      { title: 'Design', href: '/projects/design' },
    ],
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

function MenuItem({ item, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    gsap.from(itemRef.current, {
      opacity: 0,
      x: -20,
      duration: 0.5,
      delay: index * 0.1,
    });
  }, [index]);

  return (
    <div ref={itemRef}>
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
    </div>
  );
}

export default function Sidebar() {
  const sidebarRef = useRef(null);

  useEffect(() => {
    gsap.from(sidebarRef.current, {
      x: -100,
      opacity: 0,
      duration: 0.5,
    });
  }, []);

  return (
    <aside ref={sidebarRef} className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav>
        {menuItems.map((item, index) => (
          <MenuItem key={item.href} item={item} index={index} />
        ))}
      </nav>
    </aside>
  );
}
