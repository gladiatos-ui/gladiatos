"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

function HeroHome() {
    const vantaRef = useRef<HTMLDivElement>(null);
    const vantaEffect = useRef<{ destroy: () => void } | null>(null);
    const [vantaLoaded, setVantaLoaded] = useState(false);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        // Detect theme from document and watch for changes
        const detectTheme = () => {
            const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
            setTheme(currentTheme);
        };

        // Initial detection
        detectTheme();

        // Watch for theme changes
        const observer = new MutationObserver(detectTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => observer.disconnect();
    }, []);

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

                // Detect theme and set Vanta backgroundColor
                const isDark = theme === 'dark';
                const vantaBgColor = isDark ? 0x121212 : 0xffffff;

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
                        backgroundColor: vantaBgColor,
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

    // Animation variants for stagger effect
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.03, // Delay between each letter
                delayChildren: 0.2
            }
        }
    };

    const letterVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    const subtitle = "The Only Humanoid Robotic Team In Universitas Indonesia";
    const title = "GLADIATOS";

    return (
        <div className="relative w-full h-[45rem]">
            <div className="h-[45rem]">
                {/* Vanta DOTS background with fade-in */}
                <div
                    ref={vantaRef}
                    className={`absolute inset-0 transition-opacity duration-900 ${vantaLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                />

                {/* Robot image */}
                <div className="absolute bottom-0 left-0 right-0 h-[25rem] z-10">
                    <Image
                        src="/robot-hero.webp"
                        alt="Hero background"
                        fill
                        className="object-contain object-bottom dark:brightness-90 dark:contrast-110 dark:saturate-90"
                        loading="eager"
                        draggable={false}
                    />
                </div>

                {/* Hero content */}
                <div className="relative z-20 flex flex-col items-center justify-start h-full px-2 sm:px-8 pt-[10rem] sm:pt-[8rem] pb-20">
                    {/* Subtitle with fade animation */}
                    <motion.p
                        className="text-[clamp(0.5rem,2.4vw,0.875rem)] sm:text-sm md:text-base lg:text-lg font-bold tracking-wider uppercase text-text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        {subtitle}
                    </motion.p>

                    {/* Title with letter-by-letter animation */}
                    <motion.h1
                        className="text-[clamp(2.5rem,14vw,5rem)] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] text-primary font-orbitron font-bold leading-none tracking-tight"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {title.split("").map((char, index) => (
                            <motion.span
                                key={`title-${index}`}
                                variants={letterVariants}
                                style={{ display: 'inline-block' }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.h1>
                </div>
            </div>
        </div>
    );
}

export default HeroHome;