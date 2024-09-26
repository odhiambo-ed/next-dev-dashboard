'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution built with Next.js and Stripe.',
    image: '/images/projects/ecommerce.jpg',
    tags: ['Next.js', 'React', 'Node.js', 'Stripe'],
  },
  {
    title: 'Task Management App',
    description: 'A productivity app for managing tasks and projects, built with React and Firebase.',
    image: '/images/projects/taskmanager.jpg',
    tags: ['React', 'Firebase', 'Material-UI'],
  },
  {
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard that provides real-time weather information.',
    image: '/images/projects/weather.jpg',
    tags: ['JavaScript', 'API Integration', 'CSS3'],
  },
];

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.from(cardRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      delay: index * 0.1,
    });
  }, [index]);

  return (
    <div ref={cardRef} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
