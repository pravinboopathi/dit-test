'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
            activeCategory === category
              ? 'bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 text-gray-900 shadow-lg'
              : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};

export default ProjectFilter; 