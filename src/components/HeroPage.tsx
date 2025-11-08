"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from 'next-themes';
import Button from "./Button";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

interface HeroPageProps {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
    bgColor: 'bg-background' | 'bg-background-muted';
}

function HeroPage({ title, description, buttonText, buttonHref, bgColor }: HeroPageProps) {
    const vantaRef = useRef<HTMLDivElement>(null);
    const vantaEffect = useRef<{ destroy: () => void } | null>(null);
    const { theme } = useTheme();
    const [vantaLoaded, setVantaLoaded] = useState(false);

    // Parse description with **highlighted text**
    const renderDescription = () => {
        const parts = description.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                const text = part.slice(2, -2);
                return <span key={index} className="font-bold text-primary">{text}</span>;
            }
            return <span key={index}>{part}</span>;
        });
    };

    useEffect(() => {
        // Load Three.js and Vanta.js scripts dynamically
        const loadScripts = async () => {
            if (typeof window !== 'undefined') {
                // Load Three.js
                if (!(window as Window & { THREE?: unknown }).THREE) {
                    const threeScript = document.createElement('script');
                    threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
                    document.head.appendChild(threeScript);
                    await new Promise(resolve => threeScript.onload = resolve);
                }

                // Load Vanta Dots
                if (!(window as Window & { VANTA?: unknown }).VANTA) {
                    const vantaScript = document.createElement('script');
                    vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.dots.min.js';
                    document.head.appendChild(vantaScript);
                    await new Promise(resolve => vantaScript.onload = resolve);
                }

                // Destroy existing effect if it exists
                if (vantaEffect.current) {
                    vantaEffect.current.destroy();
                }

                // Detect theme and set backgroundColor
                const isDark = theme === 'dark';
                const bgColor = isDark ? 0x121212 : 0xffffff;

                // Initialize Vanta and store reference
                const windowWithVanta = window as Window & {
                    VANTA?: {
                        DOTS: (config: Record<string, unknown>) => { destroy: () => void }
                    }
                };

                if (vantaRef.current && windowWithVanta.VANTA) {
                    vantaEffect.current = windowWithVanta.VANTA.DOTS({
                        el: vantaRef.current,
                        mouseControls: true,
                        touchControls: true,
                        gyroControls: false,
                        minHeight: 200.00,
                        minWidth: 200.00,
                        scale: 1.00,
                        scaleMobile: 1.00,
                        color: 0xff2020,
                        backgroundColor: bgColor,
                        showLines: false
                    });

                    // Fade in after Vanta initializes
                    setTimeout(() => setVantaLoaded(true), 200);
                }
            }
        };

        loadScripts();

        // Cleanup
        return () => {
            if (vantaEffect.current) {
                vantaEffect.current.destroy();
            }
        };
    }, [theme]); // Re-run when theme changes

    return (
        <>
            <div className="relative w-full h-screen">
                <div className="h-screen max-lg:landscape:pt-32">
                    {/* Vanta DOTS background with fade-in */}
                    <div
                        ref={vantaRef}
                        className={`absolute inset-0 transition-opacity duration-900 ${vantaLoaded ? 'opacity-100' : 'opacity-0'
                            }`}
                    />

                    {/* Hero content */}
                    <div className="relative z-20 flex items-center justify-center h-full w-full px-2 sm:px-16">
                        {/* Wrap the content in a 2-column layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-7xl w-full">
                            {/* Big Headline */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <motion.h1
                                    className="text-[clamp(3rem,9vw,4rem)] lg:text-7xl text-primary font-orbitron font-bold leading-none tracking-tight mb-10"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                >
                                    {title}
                                </motion.h1>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                >
                                    <Link href={buttonHref}>
                                        <Button text={buttonText} />
                                    </Link>
                                </motion.div>
                            </motion.div>
                            {/* Paragraph */}
                            <motion.div
                                className="flex flex-col items-start text-text space-y-6"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <p className="text-lg sm:text-xl md:text-2xl max-w-lg">
                                    {renderDescription()}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`relative w-full h-[20vh] ${bgColor}`}>
                <Image
                    src="/hero-break.svg"
                    alt="Section divider"
                    fill
                    className="object-contain object-top"
                    priority
                    draggable={false}
                />
            </div>
        </>
    );
}

export default HeroPage;