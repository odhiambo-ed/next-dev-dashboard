import { motion } from 'framer-motion';

export default function PromptSearch() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-semibold mb-4">Prompt Search</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        An intelligent prompt search component with autocomplete and relevance ranking.
      </p>
      {/* Add your prompt search component here */}
    </motion.div>
  );
}
