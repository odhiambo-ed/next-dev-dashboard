// app/components/sections/BackendProjects.js
import { motion } from 'framer-motion';

const backendProjects = [
  { id: 'backend1', title: 'Backend Project 1', description: 'Description of Backend Project 1' },
  { id: 'backend2', title: 'Backend Project 2', description: 'Description of Backend Project 2' },
  // Add more backend projects as needed
];

function BackendProjects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12"
    >
      <h2 className="text-3xl font-bold mb-8">Backend Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {backendProjects.map((project) => (
          <div key={project.id} className="card p-6">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default BackendProjects;
