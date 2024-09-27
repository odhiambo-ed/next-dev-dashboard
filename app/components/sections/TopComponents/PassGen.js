import { motion } from 'framer-motion';

export default function PassGen() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-semibold mb-4">Password Generator</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        A secure password generator component with customizable options for length and character types.
      </p>
      {/* Add your password generator component here */}
    </motion.div>
  );
}
