'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  hasProjects: (category: string) => boolean;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
  hasProjects,
}) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
            activeCategory === category
              ? 'bg-gray-100 text-gray-900'
              : 'bg-transparent text-gray-400 hover:text-gray-200 border border-gray-800'
          } ${!hasProjects(category) && category !== 'All' ? 'opacity-70' : ''}`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {category} 
        </motion.button>
      ))}
    </div>
  );
};

export default ProjectFilter; 