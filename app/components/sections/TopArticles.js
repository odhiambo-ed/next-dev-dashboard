// app/components/sections/TopArticles.js
import { motion } from 'framer-motion';

const articles = [
  { id: 'article1', title: 'Article 1', description: 'Description of Article 1', link: '#' },
  { id: 'article2', title: 'Article 2', description: 'Description of Article 2', link: '#' },
  // Add more articles as needed
];

function TopArticles() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12"
    >
      <h2 className="text-3xl font-bold mb-8">Top Articles</h2>
      <div className="space-y-6">
        {articles.map((article) => (
          <div key={article.id} className="card p-6">
            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{article.description}</p>
            <a href={article.link} className="btn-primary inline-block">Read More</a>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default TopArticles;
