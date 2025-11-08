"use client";

import Image from 'next/image';
import { motion } from "motion/react";

function AboutUs() {
    return (
        <div className="relative w-full">
            <div className="relative w-full h-[20dvh]">
                <Image
                    src="/hero-break.svg"
                    alt="Section divider"
                    fill
                    className="object-contain object-top"
                    priority
                    draggable={false}
                />
            </div>

            <div className="container mx-auto px-4 py-[10dvh]">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Team Image */}
                    <motion.div
                        className="md:w-1/2 w-full"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="relative w-full h-96">
                            <Image
                                src="/about-gladiatos.webp"
                                alt="Our Team"
                                fill
                                className="object-contain"
                                draggable={false}
                            />
                        </div>
                    </motion.div>

                    {/* Title and List */}
                    <motion.div
                        className="md:w-1/2 w-full"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <motion.div
                            className="mb-8 inline-block"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <h2 className="text-3xl lg:text-4xl font-semibold mb-3 text-foreground">
                                Building the Future of Soccer Robotics
                            </h2>
                            <motion.div
                                className="w-1/3 h-1 bg-primary"
                                initial={{ width: 0 }}
                                whileInView={{ width: "33.333333%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                            ></motion.div>
                        </motion.div>

                        <ul className="space-y-4">
                            <motion.li
                                className="flex items-start"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</span>
                                <span className="text-md lg:text-lg text-text">
                                    We develop <strong className="text-foreground">advanced humanoid robots</strong> and autonomous soccerbots, combining AI, real-time perception, and dynamic control to push technological boundaries.
                                </span>
                            </motion.li>

                            <motion.li
                                className="flex items-start"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</span>
                                <span className="text-md lg:text-lg text-text">
                                    Our team competes in leading robotics tournaments like <strong className="text-foreground">KRSBI</strong>, where precision, strategy, and teamwork are key to success.
                                </span>
                            </motion.li>

                            <motion.li
                                className="flex items-start"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</span>
                                <span className="text-md lg:text-lg text-text">
                                    Beyond competition, we value <strong className="text-foreground">learning through hands-on experience</strong>, fostering innovation, teamwork, and a lasting passion for robotics.
                                </span>
                            </motion.li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;