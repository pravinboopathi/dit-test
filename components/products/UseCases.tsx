'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const useCases = [
  {
    title: "E-commerce Support",
    description: "AI chatbot handling customer queries and order tracking",
    image: "/images/solutions/ecommerce.jpg",
    stats: ["70% reduced response time", "24/7 availability"]
  },
  {
    title: "Document Processing",
    description: "Automated invoice and document processing system",
    image: "/images/solutions/document-processing.jpg",
    stats: ["90% faster processing", "99% accuracy"]
  },
  {
    title: "HR Automation",
    description: "Smart resume screening and candidate matching",
    image: "/images/solutions/hr.jpg",
    stats: ["5x faster screening", "Better matches"]
  }
];

const UseCases = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Real-World Applications
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See how our AI solutions are transforming different industries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src={useCase.image}
                  alt={useCase.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{useCase.description}</p>
              <div className="flex flex-wrap gap-3">
                {useCase.stats.map((stat, idx) => (
                  <span 
                    key={idx}
                    className="text-xs px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full"
                  >
                    {stat}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases; 