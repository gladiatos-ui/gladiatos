"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from "motion/react";

interface Projects {
    id: number;
    title: string;
    image: {
        url: string;
    }
    description?: string;
}

interface ProjectsListProps {
    projectData: Projects[];
}

function ProjectsList({ projectData }: ProjectsListProps) {
    const projects = projectData;

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
                                            src={project.image.url}
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
                                    <h2 className="text-center text-3xl md:text-4xl font-semibold text-foreground">
                                        {project.title}
                                    </h2>
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