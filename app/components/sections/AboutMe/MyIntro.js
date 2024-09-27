import { motion } from 'framer-motion';

export default function MyIntro() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-semibold mb-4">My Intro</h3>
      <p className="text-gray-600 dark:text-gray-300">
        Hi, I'm [Your Name], a passionate full-stack developer with expertise in modern web technologies.
        I specialize in creating efficient, scalable, and user-friendly applications using React, Node.js, and cloud technologies.
        With a keen eye for detail and a problem-solving mindset, I strive to deliver high-quality code and innovative solutions.
      </p>
    </motion.div>
  );
}
