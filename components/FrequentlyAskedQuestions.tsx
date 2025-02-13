"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion } from "framer-motion";

const faqs = [
  { question: "What is the Product, and how does it work?", answer: "Our product is a powerful tool designed to simplify your workflow and enhance productivity." },
  { question: "Is my data secure with the Product?", answer: "Yes, we use top-tier encryption and security measures to protect your data." },
  { question: "Can I integrate the Product with other tools I use?", answer: "Absolutely! Our product seamlessly integrates with a variety of third-party applications." },
  { question: "Do you offer a free trial or demo?", answer: "Yes, we provide a free trial so you can experience our product before committing." },
  { question: "What kind of support does the Product provide?", answer: "We offer 24/7 customer support to assist you with any issues or queries." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex justify-center items-center pt-16 bg-[#080808] px-4">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-5xl font-extralight text-[#d0d0d0] mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-400 mb-8">
          Explore our FAQs to learn more about how our product works, what it offers, and how it can help you achieve your team&apos;s goals.
        </p>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-[#1c1c1c] rounded-lg p-4 cursor-pointer transition-all px-4 py-5
                ${openIndex === index ? "bg-gradient-to-b from-[#101010] via-[#080808] to-[#080808]" : "bg-[#080808]"}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-[#d0d0d0] text-lg">{faq.question}</h3>
                {openIndex === index ? (
                  <FaMinus className="text-[#d0d0d0] text-sm" />
                ) : (
                  <FaPlus className="text-[#d0d0d0] text-sm" />
                )}
              </div>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: openIndex === index ? 1 : 0,
                  height: openIndex === index ? "auto" : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                {openIndex === index && (
                  <p className="text-[#9e9d9d] mt-3 text-left">{faq.answer}</p>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
