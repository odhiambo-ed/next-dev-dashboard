import { motion } from 'framer-motion';

const projects = [
  {
    id: 'backend1',
    title: 'Scalable Microservices Architecture',
    description: 'A robust backend system using microservices architecture, demonstrating proficiency in distributed systems and cloud technologies.'
  },
  {
    id: 'backend2',
    title: 'AI-Driven Data Analysis Pipeline',
    description: 'An efficient data processing and analysis pipeline leveraging machine learning algorithms for predictive analytics.'
  }
];

export default function ProjectList() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-semibold mb-4">Backend Projects</h3>
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
