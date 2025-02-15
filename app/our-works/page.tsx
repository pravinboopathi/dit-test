'use client';
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

import PageHeader from '@/components/common/PageHeader';
import Breadcrumb from '@/components/common/Breadcrumb';

import ProjectFilter from '@/components/works/ProjectFilter';
import ProjectCard from '@/components/works/ProjectCard';

import TechnologyStack from '@/components/works/TechnologyStack';
import IndustryImpact from '@/components/works/IndustryImpact';
import SuccessMetrics from '@/components/works/SuccessMetrics';
import FinalPitch from '../components/works/FinalPitch';




// Project data interface
interface Project {
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
}

const categories = ['All', 'Web Development', 'Mobile Apps', 'Cloud Solutions', 'AI Integration', 'UI/UX Design'];

// Enhanced projects data with more examples
const projectsData: Project[] = [
  {
    id: '1',
    title: 'Infinity PNG',
    category: 'Web Development',
    image: '/images/infinite.png',
    description: 'A platform offering a vast library of free PNG images for download, ensuring seamless integration into various projects.',
    technologies: ['Next.js', 'Node.js', 'MongoDB'],
    liveUrl: 'https://infinitypng.com/',
    metrics: {
      'Downloads': '100K+',
      'Image Library': '50K+',
      'Load Time': '0.8s'
    }
  },
  {
    id: '2',
    title: 'Resume Builder',
    category: 'Web Development',
    image: '/images/resumeBuilder.png',
    description: 'A user-friendly platform for creating and managing resumes across multiple devices.',
    technologies: ['React Js', 'Firebase', 'Redux'],
    liveUrl: 'https://resumebuilder-react-js.netlify.app/',
    metrics: {
      'Resumes Created': '10K+',
      'User Rating': '4.8/5',
      'Templates': '50+'
    }
  },
  {
    id: '3',
    title: 'Zen EV',
    category: 'Cloud Solutions',
    image: '/images/zen-ev.png',
    description: 'A comprehensive cloud-based platform for electric vehicle charging solutions.',
    technologies: ['React.js', 'Tailwind CSS', 'EmailJs', 'Framer Motion'],
    liveUrl: 'https://zen-ev.netlify.app/',
    metrics: {
      'Charging Points': '500+',
      'User Growth': '200%',
      'Response Time': '<1s'
    }
  },
  {
    id: '4',
    title: 'AI Customer Service',
    category: 'AI Integration',
    image: '/images/ai.jpeg',
    description: 'Intelligent customer service automation with natural language processing.',
    technologies: ['Python', 'TensorFlow', 'NLP', 'FastAPI'],
    liveUrl: 'https://ai-customer-service.netlify.app/',
    metrics: {
      'Query Resolution': '95%',
      'Response Time': '0.5s',
      'Active Users': '10K+'
    }
  },
  {
    id: '5',
    title: 'Financial Dashboard',
    category: 'UI/UX Design',
    image: '/images/financial.jpg',
    description: 'Intuitive financial analytics dashboard with real-time data visualization.',
    technologies: ['Figma', 'React', 'D3.js', 'Material-UI'],
    liveUrl: 'https://financial-dashboard-react-js.netlify.app/',
    metrics: {
      'Data Processing': '1M+/day',
      'Performance': '99.9%',
      'User Efficiency': '+75%'
    }
  },
  {
    id: '6',
    title: 'Johil Caterings',
    category: 'Web Development',
    image: '/images/johil.png',
    description: 'A comprehensive catering management system with real-time order tracking and inventory management.',
    technologies: ['React.js', 'Tailwind CSS', 'EmailJs', 'Framer Motion'],
    liveUrl: 'https://johil-caterings.netlify.app/',
    metrics: {
      'Orders Processed': '1000+',
      'Customer Rating': '4.9/5',
      'Menu Items': '200+'
    }
  }
];

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Our Works', href: '/our-works' }
];

const OurWorks = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = useMemo(() => {
    return activeCategory === 'All'
      ? projectsData
      : projectsData.filter(project => project.category === activeCategory);
  }, [activeCategory]);

  const visibleProjects = useMemo(() => {
    if (showAll) return filteredProjects;
    return filteredProjects.slice(0, 3); // Show only first 3 projects on mobile
  }, [filteredProjects, showAll]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#080808] to-[#0C0C0C]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="pt-8 sm:pt-10">
            <Breadcrumb 
              items={[
                { label: 'Home', href: '/' },
                { label: 'Our Works', href: '/our-works' }
              ]} 
            />
          </div>

          <div className="mt-20 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-8 tracking-tight">
                <span className="text-gray-100">
                  Transforming Vision
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-gray-300 to-gray-100">
                  Into Digital Reality
                </span>
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-400 font-light mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Showcasing Our Digital Excellence
            </motion.p>
            
            <motion.p 
              className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Explore our portfolio of innovative solutions that have empowered businesses to thrive in the digital landscape.
            </motion.p>

            <motion.div 
              className="flex justify-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <button 
                onClick={() => {
                  document.getElementById('projects-section')?.scrollIntoView({ 
                    behavior: 'smooth'
                  });
                }}
                className="px-8 py-4  border border-gray-800 text-gray-200 rounded-lg hover:bg-gray-900 transition-all duration-300 hover:border-gray-700 group"
              >
                Explore Our Works 
                <span className="inline-block ml-2 transform group-hover:translate-y-1 transition-transform">↓</span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Project Filter & Showcase - Added ID for scroll */}
      <section id="projects-section" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <AnimatePresence mode="wait">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
              layout
            >
              {visibleProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* View More Button */}
          {filteredProjects.length > 3 && !showAll && (
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                onClick={() => setShowAll(true)}
                className="px-4 py-4 border border-gray-800  text-white rounded-full hover:bg-gray-700 transition-colors duration-300"
              >
                View More Projects
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Industry Impact Section */}
      <IndustryImpact />

      {/* Technology Stack */}
      <TechnologyStack />

      {/* Success Metrics */}
      <SuccessMetrics />

      {/* Final Pitch Section */}
      <FinalPitch />
    </div>
  );
};

export default OurWorks; 