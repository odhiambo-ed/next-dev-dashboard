import { motion } from 'framer-motion';

const articles = [
  {
    id: 'article1',
    title: 'The Future of AI in Web Development',
    description: 'Exploring how artificial intelligence is reshaping the landscape of web development and user experiences.'
  },
  {
    id: 'article2',
    title: 'Optimizing Performance in React Applications',
    description: 'Best practices and advanced techniques for building high-performance React applications at scale.'
  }
];

export default function HotTopics() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-semibold mb-4">Hot Topics</h3>
      <div className="space-y-6">
        {articles.map((article) => (
          <div key={article.id} className="card p-6">
            <h4 className="text-xl font-semibold mb-2">{article.title}</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{article.description}</p>
            <a href="#" className="btn-primary inline-block">Read More</a>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
