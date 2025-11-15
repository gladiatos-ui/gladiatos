"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";

interface FAQItem {
  answer: string;
  question: string;
}

interface FAQItemsProps {
  faqData: FAQItem[];
}

function FAQItems({ faqData }: FAQItemsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full py-16 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            className="border-b-3 border-primary overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ x: 8, transition: { duration: 0.2 } }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full py-8 flex items-center justify-between text-left group"
            >
              <span className="text-xl sm:text-2xl md:text-3xl text-foreground pr-8">
                {item.question}
              </span>

              <motion.div
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex-shrink-0"
              >
                <svg
                  className="w-8 h-8 text-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0, x: 20, y: 20 }}
                  animate={{ opacity: 1, height: "auto", x: 0, y: 0 }}
                  exit={{ opacity: 0, height: 0, x: 20, y: 20 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 pr-16">
                    <p className="text-base sm:text-lg text-text leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default FAQItems;