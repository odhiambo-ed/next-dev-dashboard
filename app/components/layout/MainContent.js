'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Projects from '../Projects';
import Skills from '../Skills';

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
    <main ref={contentRef} className="flex-1 overflow-auto bg-gray-100 dark:bg-gray-900">
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4 text-center">Welcome to My Portfolio</h1>
        <p className="text-xl text-center mb-8 max-w-2xl mx-auto">
          I'm a passionate web developer specializing in creating modern, responsive, and user-friendly websites and applications.
        </p>
      </section>
      <Projects />
      <Skills />
    </main>
  );
}
