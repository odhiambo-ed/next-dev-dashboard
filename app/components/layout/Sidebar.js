"use client";

import { useState } from 'react';
import Link from 'next/link';

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

function MenuItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
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
          {item.submenu.map((subItem) => (
            <MenuItem key={subItem.href} item={subItem} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav>
        {menuItems.map((item) => (
          <MenuItem key={item.href} item={item} />
        ))}
      </nav>
    </aside>
  );
}
