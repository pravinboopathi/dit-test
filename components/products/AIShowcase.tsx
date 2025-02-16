'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const solutions = [
  {
    id: 1,
    name: "AI Chatbot Integration",
    description: "Custom chatbots trained on your business data for 24/7 customer support and engagement",
    features: ["Natural Language Processing", "Multi-platform Integration", "Custom Training"],
    image: "/images/solutions/chatbot.png",
    category: "Customer Service"
  },
  {
    id: 2,
    name: "Smart Document Processing",
    description: "Automated document analysis and data extraction for efficient workflow",
    features: ["OCR Technology", "Data Extraction", "Automated Processing"],
    image: "/images/solutions/document.png",
    category: "Process Automation"
  }
];

const AIShowcase = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            AI-Powered Solutions
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Cutting-edge AI products designed to transform your business operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-[#0C0C0C] rounded-2xl p-6 border border-orange-500/10 hover:border-orange-500/20 transition-all">
                <div className="flex items-start gap-6">
                  <div className="relative w-24 h-24 rounded-xl overflow-hidden">
                    <Image
                      src={solution.image}
                      alt={solution.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm text-orange-400">{solution.category}</span>
                    <h3 className="text-xl font-bold text-white mt-1 mb-2">{solution.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{solution.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {solution.features.map((feature, index) => (
                        <span 
                          key={index}
                          className="text-xs px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIShowcase; 