'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "499",
    description: "Perfect for small businesses",
    features: [
      "Basic AI Analytics",
      "5 Custom Reports",
      "24/7 Support",
      "API Access"
    ]
  },
  {
    name: "Professional",
    price: "999",
    description: "Ideal for growing companies",
    features: [
      "Advanced AI Analytics",
      "Unlimited Reports",
      "Priority Support",
      "Full API Access",
      "Custom Integration",
      "Team Training"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Custom AI Solutions",
      "Dedicated Support Team",
      "Custom Development",
      "On-premise Deployment",
      "Advanced Security",
      "SLA Guarantee"
    ]
  }
];

const PricingSection = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Flexible Pricing
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative group ${plan.popular ? 'transform md:-translate-y-4' : ''}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-[#0C0C0C] rounded-2xl p-8 border border-orange-500/10 h-full">
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-orange-500 text-white text-sm rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">${plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-gray-400">/month</span>}
                </div>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-orange-400 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 