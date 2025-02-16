'use client';
import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Custom AI Integration",
    description: "Seamlessly integrate AI solutions into your existing systems",
    icon: "🔌",
    color: "from-blue-500/10"
  },
  {
    title: "Automation Solutions",
    description: "Streamline workflows with intelligent automation",
    icon: "⚡",
    color: "from-green-500/10"
  },
  {
    title: "AI Consultation",
    description: "Expert guidance on implementing AI in your business",
    icon: "💡",
    color: "from-purple-500/10"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance",
    icon: "🛠️",
    color: "from-orange-500/10"
  }
];

const ProductFeatures = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our AI solutions come packed with features designed to enhance your business operations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} to-transparent rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity`} />
              <div className="relative bg-[#0C0C0C] rounded-2xl p-6 border border-gray-800 h-full">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures; 