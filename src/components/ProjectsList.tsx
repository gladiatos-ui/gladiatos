"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from "motion/react";

interface Projects {
    id: number;
    title: string;
    image: string;
    description?: string;
}

function ProjectsList() {
    const projects: Projects[] = [
        {
            id: 1,
            title: 'KRSBI 2024 Championship',
            image: '/about-gladiatos.webp',
            description: 'Our team competed in the **national robotics championship** using advanced **AI vision systems** and **dynamic motion control** to secure a top placement against universities nationwide.'
        },
        {
            id: 2,
            title: 'Humanoid Soccer Bot Development',
            image: '/about-gladiatos.webp',
            description: 'Developed a fully autonomous **humanoid robot** capable of playing soccer, featuring **real-time object detection**, **path planning algorithms**, and **bipedal locomotion** systems.'
        },
        {
            id: 3,
            title: 'International RoboCup Competition',
            image: '/about-gladiatos.webp',
            description: 'Represented Indonesia at the **RoboCup International** tournament, showcasing our **cutting-edge robotics technology** and competing against elite teams from around the world.'
        },
        {
            id: 4,
            title: 'Vision System Upgrade',
            image: '/about-gladiatos.webp',
            description: 'Implemented a state-of-the-art **computer vision system** using **machine learning** and **OpenCV** to improve ball detection accuracy by 40% and enhance gameplay performance.'
        },
        {
            id: 5,
            title: 'Community Robotics Workshop',
            image: '/about-gladiatos.webp',
            description: 'Organized a comprehensive **robotics workshop** for high school students, teaching fundamentals of **programming**, **electronics**, and **mechanical design** to inspire the next generation.'
        }
    ];

    // Parse description with **highlighted text**
    const renderDescription = (description: string) => {
        const parts = description.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                const text = part.slice(2, -2);
                return <span key={index} className="font-semibold text-primary">{text}</span>;
            }
            return <span key={index}>{part}</span>;
        });
    };

    return (
        <section className="py-4 md:py-16 pb-32">
            <div className="container mx-auto px-4">
                <div className="space-y-2">
                    {projects.map((project, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={project.id}
                                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-4 md:gap-12 items-center py-6`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                {/* Image Section */}
                                <motion.div
                                    className="md:w-1/2 w-full"
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    <div className="relative w-full h-full aspect-[4/3]">
                                        <Image
                                            src="/about-gladiatos.webp"
                                            alt="Our Team"
                                            fill
                                            className="object-contain"
                                            draggable={false}
                                        />
                                    </div>
                                </motion.div>
                                {/* Text Section */}
                                <motion.div
                                    className="w-full md:w-1/2 space-y-4"
                                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                    <h3 className="text-center text-3xl md:text-4xl font-semibold text-foreground">
                                        {project.title}
                                    </h3>
                                    <p className="text-center text-text-muted text-lg">
                                        {renderDescription(project.description || '')}
                                    </p>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default ProjectsList