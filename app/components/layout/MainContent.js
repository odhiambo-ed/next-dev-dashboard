'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function MainContent() {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.from(contentRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      delay: 0.2,
    });
  }, []);

  return (
    <main ref={contentRef} className="flex-1 overflow-auto p-4 sm:p-6 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="mb-4">
        This is where you'll showcase your projects and skills. Add more sections and content as needed.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Add project cards or other content here */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Project 1</h2>
          <p>Description of Project 1</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Project 2</h2>
          <p>Description of Project 2</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Project 3</h2>
          <p>Description of Project 3</p>
        </div>
      </div>
    </main>
  );
}
