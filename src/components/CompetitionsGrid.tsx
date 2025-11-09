"use client";

import React from 'react';
import { motion } from "motion/react";

interface Competition {
  id: number;
  title: string;
  year: string;
  image: string;
  description?: string;
}

const CompetitionsGrid: React.FC = () => {
  const competitions: Competition[] = [
    {
      id: 1,
      title: 'Summer Championship',
      year: '2025',
      image: '/about-gladiatos.webp',
      description: 'Annual summer tournament featuring top gladiators'
    },
    {
      id: 2,
      title: 'Winter Games',
      year: '2024',
      image: '/about-gladiatos.webp',
      description: 'Elite winter competition'
    },
    {
      id: 3,
      title: 'Spring Tournament',
      year: '2024',
      image: '/about-gladiatos.webp',
      description: 'Regional championship event'
    },
    {
      id: 4,
      title: 'Autumn Classic',
      year: '2023',
      image: '/about-gladiatos.webp',
      description: 'Traditional autumn competition'
    },
    {
      id: 5,
      title: 'Autumn Classic',
      year: '2023',
      image: '/about-gladiatos.webp',
      description: 'Traditional autumn competition'
    }
  ];

  return (
    <section className="competitions-section px-2 py-16">
      <div className="container mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-3">
          {competitions.map((competition, index) => (
            <motion.div
              key={competition.id}
              className={`competition-card group relative overflow-hidden rounded-sm ${index === competitions.length - 1
                ? 'md:col-span-3 md:min-h-[400px]'
                : index % 4 === 0
                  ? 'md:col-span-2 md:row-span-2 md:min-h-[500px]'
                  : index % 4 === 1
                    ? 'md:col-span-1 md:row-span-2 md:min-h-[500px]'
                    : index % 4 === 2
                      ? 'md:col-span-1 md:min-h-[300px]'
                      : 'md:col-span-2 md:min-h-[300px]'
                }`}
              style={{ minHeight: '300px' }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${competition.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 h-full p-6 md:p-8 flex flex-col justify-between">
                {/* Year Badge */}
                <div className="flex justify-between items-start">
                  <span className="inline-block bg-primary text-white px-3 py-1 rounded-md text-xs font-semibold">
                    {competition.year}
                  </span>
                </div>

                {/* Info and Description */}
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-4xl font-semibold text-foreground">
                    {competition.title}
                  </h3>

                  <p className="text-text-muted text-sm md:text-base line-clamp-2">
                    {competition.description}
                  </p>
                </div>
              </div>

              {/* Hover Overlay Effect */}
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitionsGrid;