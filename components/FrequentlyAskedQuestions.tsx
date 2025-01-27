"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

// Add the icon to the library
library.add(faAnglesRight);

const FrequentlyAskedQuestions = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is AI SaaS, and how can it benefit my business?",
      answer:
        "We provide digital banking, payment processing, financial management tools, investment platforms, lending solutions, and fraud detection services.",
    },
    {
      question: "How does your AI SaaS platform integrate?",
      answer:
        "Our platform offers seamless integration through APIs and webhooks, ensuring compatibility with your existing systems.",
    },
    {
      question: "Is my data secure on your platform?",
      answer:
        "Yes, we implement top-tier security measures, including encryption and compliance with GDPR and ISO standards.",
    },
    {
      question: "How easy is it to get started with your AI SaaS platform?",
      answer:
        "Getting started is simple with our step-by-step onboarding process and dedicated support team to guide you.",
    },
    {
      question: "Can I customize the AI models to fit my specific needs?",
      answer:
        "Absolutely! Our AI models are designed to be flexible, enabling customization to suit your unique business requirements.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white text-black/80">
      <div className="container mx-auto px-6 py-12 lg:flex lg:justify-between lg:items-start">
        {/* Left Section */}
        <div className="lg:max-w-lg mb-10 lg:mb-0">
          <div>
            <button className="text-gray-700 text-lg border border-gray-300 py-2 px-4 rounded-lg font-semibold ">
              FAQs
            </button>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mt-6">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Have any questions? Don&apos;t hesitate to contact us!
          </p>
          <button className="mt-6 bg-gray-900 text-white py-2 px-6 rounded-lg flex items-center font- hover:bg-gray-800 transition">
            Get A Quote{" "}
            <span className="ml-2">
              <FontAwesomeIcon icon={faAnglesRight} />
            </span>
          </button>
        </div>

        {/* Right Section */}
        <div className="lg:max-w-2xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleFAQ(index)}
              className={`p-4 rounded-lg border cursor-pointer ${
                activeIndex === index ? "border-gray-200" : "border-gray-00"
              }`}
            >
              {/* Question */}
              <h2 className="flex justify-between items-center text-lg font-semibold">
                {index + 1}. {faq.question}
                <span className="text-xl font-medium">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </h2>
              {/* Answer */}
              {activeIndex === index && faq.answer && (
                <p className="mt-3 text-sm text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;