"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion } from "framer-motion";

const faqs = [
  { question: "What is Divine Infotech, and what does it do?", answer: "Divine Infotech is a pioneering career education startup specializing in developing innovative solutions in Web applications, Android applications, and Data Science projects. Our programs offer advanced training, hands-on practice, and expert guidance to help individuals and businesses grow." },
  { question: "How can Divine Infotech technologies help my business?", answer: "We streamline your operations, enhance security, boost your online presence, and increase productivity, driving business growth." },
  { question: "How experienced is the Divine Infotech technologies team?", answer: "Our team consists of certified experts with extensive experience in various IT domains, ensuring top-notch service delivery." },
  { question: "What makes us different from other Service providers?", answer: "Our comprehensive offerings, experienced solutions, and commitment to excellence set us apart from other providers." },
  { question: "What kind of support does Divine Infotech technologies provide?", answer: "We offer 24/7 premium support to ensure seamless integration and continuous assistance for all our services." },
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
