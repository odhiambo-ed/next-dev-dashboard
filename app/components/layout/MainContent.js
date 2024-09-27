'use client';

import { motion } from 'framer-motion';

export default function MainContent() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex-1 overflow-auto bg-vscode-bg text-vscode-text p-6 ml-64"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Welcome to My VS Code-like Portfolio</h1>
        <p className="text-lg mb-6">
          This dashboard resembles a VS Code editor interface. Navigate through projects using the sidebar.
        </p>
        <div className="bg-vscode-inactive-tab p-4 rounded-lg">
          <pre><code>{`
// Example code
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}

greet('Developer');
          `}</code></pre>
        </div>
      </div>
    </motion.main>
  );
}
