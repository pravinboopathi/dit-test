'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    category: string;
    image: string;
    description: string;
    liveUrl: string;
    technologies: string[];
    metrics: {
      [key: string]: string;
    };
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="group relative bg-[#0C0C0C] rounded-xl overflow-hidden"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-fit transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <span className="text-sm text-orange-400">{project.category}</span>
        <h3 className="text-xl font-semibold text-white mt-2">{project.title}</h3>
        <p className="text-gray-400 mt-2 line-clamp-2">{project.description}</p>
        
        {/* Metrics */}
        <div className="grid grid-cols-2 gap-4 mt-4 mb-4">
          {Object.entries(project.metrics).map(([key, value]) => (
            <div key={key} className="text-center">
              <p className="text-orange-400 font-semibold">{value}</p>
              <p className="text-gray-500 text-sm">{key}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="text-xs px-2 py-1 bg-white/10 rounded-full text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link 
          href={`/our-works/${project.liveUrl}`}
          className="inline-flex items-center mt-4 text-white font-medium hover:text-orange-400 transition-colors"
        >
          View Case Study 
          <svg 
            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 