// app/components/sections/TopComponents.js
import { motion } from 'framer-motion';

const components = [
  { id: 'component1', title: 'Component 1', description: 'Description of Component 1' },
  { id: 'component2', title: 'Component 2', description: 'Description of Component 2' },
  // Add more components as needed
];

function TopComponents() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12"
    >
      <h2 className="text-3xl font-bold mb-8">Top Components</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {components.map((component) => (
          <div key={component.id} className="card p-6">
            <h3 className="text-xl font-semibold mb-2">{component.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{component.description}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default TopComponents;
