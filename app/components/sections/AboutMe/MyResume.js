import { motion } from 'framer-motion';

export default function MyResume() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-semibold mb-4">My Resume</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        View my professional experience, skills, and achievements.
      </p>
      <a
        href="/path-to-your-resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary inline-block"
      >
        Download Resume
      </a>
    </motion.div>
  );
}
