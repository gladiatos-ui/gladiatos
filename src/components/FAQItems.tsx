"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Gladiatos?",
    answer: "Gladiatos is the only humanoid robotics team in Universitas Indonesia, specializing in soccer robotics competitions. We design, build, and program advanced humanoid robots to compete in national and international tournaments."
  },
  {
    question: "How can I join the team?",
    answer: "We welcome passionate students interested in robotics, programming, mechanical engineering, and electronics. Applications open at the beginning of each semester. Follow our social media for recruitment announcements and visit our team page for more information."
  },
  {
    question: "What competitions do you participate in?",
    answer: "We compete in various humanoid soccer robotics competitions including RoboCup, FIRA, and local Indonesian championships. Our robots participate in the KidSize and TeenSize leagues, facing teams from around the world."
  },
  {
    question: "Do I need prior robotics experience?",
    answer: "No prior experience is required! We provide training and mentorship for new members. Whether you're interested in programming, mechanical design, electronics, or team management, there's a place for you in Gladiatos."
  },
  {
    question: "What majors can join Gladiatos?",
    answer: "All majors are welcome! While we have many members from Computer Science and Engineering, we also value contributions from students in Mathematics, Physics, Design, and even Business for team management and sponsorship coordination."
  },
  {
    question: "How often does the team meet?",
    answer: "Regular team meetings are held twice a week, with additional workshop sessions and practice matches before competitions. During competition season, we may have more frequent meetings to fine-tune our robots."
  },
  {
    question: "What skills will I learn?",
    answer: "Members gain hands-on experience in robot mechanics, computer vision, artificial intelligence, embedded systems, motion control, and teamwork. You'll also develop soft skills like project management, presentation, and problem-solving under pressure."
  },
  {
    question: "Does Gladiatos provide funding for projects?",
    answer: "Yes! We receive support from Universitas Indonesia and actively seek sponsorships from industry partners. Members don't need to fund the robots themselves, though we encourage participation in fundraising activities."
  },
  {
    question: "Can I contribute if I'm not technical?",
    answer: "Absolutely! We need team members for documentation, social media management, sponsorship outreach, event coordination, and public relations. A successful robotics team requires diverse skills beyond just engineering."
  },
  {
    question: "What are your biggest achievements?",
    answer: "Gladiatos has represented Indonesia in international RoboCup competitions, won multiple national championships, and has been recognized for innovation in humanoid robotics. Check our Competitions page for our full track record."
  }
];

function FAQItems() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full py-20 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            className="border-b-3 border-primary overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
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