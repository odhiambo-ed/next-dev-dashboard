import { motion } from 'framer-motion';

const projects = [
  {
    id: 'frontend1',
    title: 'AI-Powered Task Management System',
    description: 'A React-based task management application with AI-driven task prioritization and resource allocation.'
  },
  {
    id: 'frontend2',
    title: 'Real-time Collaborative Code Editor',
    description: 'A web-based code editor supporting real-time collaboration, syntax highlighting, and version control integration.'
  }
];

export default function ProjectList() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-semibold mb-4">Frontend Projects</h3>
      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.id} className="card p-6">
            <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
            <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
