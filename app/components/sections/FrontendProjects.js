// app/components/sections/FrontendProjects.js
import { motion } from 'framer-motion';

const frontendProjects = [
  { id: 'frontend1', title: 'Frontend Project 1', description: 'Description of Frontend Project 1' },
  { id: 'frontend2', title: 'Frontend Project 2', description: 'Description of Frontend Project 2' },
  // Add more frontend projects as needed
];

function FrontendProjects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12"
    >
      <h2 className="text-3xl font-bold mb-8">Frontend Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {frontendProjects.map((project) => (
          <div key={project.id} className="card p-6">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default FrontendProjects;
