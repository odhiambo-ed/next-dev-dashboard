// app/components/Projects.js
import { motion } from 'framer-motion';

const projects = [
  { id: 'project1', title: 'Project 1', description: 'Description of Project 1' },
  { id: 'project2', title: 'Project 2', description: 'Description of Project 2' },
];

function Projects({ project }) {
  const selectedProject = projects.find(p => p.id === project);

  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12"
    >
      <h2 className="text-3xl font-bold mb-8">{selectedProject.title}</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedProject.description}</p>
      {/* Add more project details here */}
    </motion.section>
  );
}

export default Projects;
