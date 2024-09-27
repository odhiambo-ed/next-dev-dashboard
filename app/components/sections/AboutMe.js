// app/components/sections/AboutMe.js
import { motion } from 'framer-motion';

function AboutMe() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12"
    >
      <h2 className="text-3xl font-bold mb-8">About Me</h2>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Introduction</h3>
        <p className="text-gray-600 dark:text-gray-300">
          {/* Add your introduction here */}
          I'm a passionate developer with expertise in full-stack web development...
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4">Resume</h3>
        <a
          href="/path-to-your-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-block"
        >
          View Resume
        </a>
      </div>
    </motion.section>
  );
}

export default AboutMe;
