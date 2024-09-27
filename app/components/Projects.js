import { motion } from 'framer-motion';

const projects = [
  { title: 'Project 1', description: 'Description of Project 1', link: '#' },
  { title: 'Project 2', description: 'Description of Project 2', link: '#' },
  // Add more projects as needed
];

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card p-6"
    >
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
      <a href={project.link} className="btn-primary">View Project</a>
    </motion.div>
  );
}

function Projects() {
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

export default Projects;
