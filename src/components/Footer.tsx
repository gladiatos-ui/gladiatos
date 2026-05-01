"use client";

import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { useEffect, useState, useRef } from 'react';

interface Sponsor {
    name: string;
    url?: string;
    logo: { url: string };
}

interface FooterProps {
    slanted: boolean;
    sponsors?: Sponsor[];
}

interface LogoPosition {
    topPct: number;
    leftPct: number;
    size: number;
    opacity: number;
    duration: number;
    delay: number;
    rotate: number;
}

// Check if two placed logos overlap (with padding)
function overlaps(a: LogoPosition, b: LogoPosition, containerW: number, containerH: number, padding = 16): boolean {
    const ax = ((a.leftPct / 100) * containerW) + (a.size / 2);
    const ay = ((a.topPct / 100) * containerH) + (a.size / 2);
    const bx = ((b.leftPct / 100) * containerW) + (b.size / 2);
    const by = ((b.topPct / 100) * containerH) + (b.size / 2);
    
    const minDist = (a.size / 2) + (b.size / 2) + padding;
    const dx = ax - bx;
    const dy = ay - by;
    return Math.sqrt(dx * dx + dy * dy) < minDist;
}

// Menambahkan parameter 'slanted' agar bisa menghitung garis miring
function generatePositions(count: number, containerW: number, containerH: number, slanted: boolean): LogoPosition[] {
    const placed: LogoPosition[] = [];
    const MAX_ATTEMPTS = 200;

    for (let i = 0; i < count; i++) {
        const isLeftZone = i % 2 === 0;
        let candidate: LogoPosition | null = null;

        for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
            const size = Math.floor(Math.random() * 36) + 56; // 56-92px

            // 1. TENTUKAN POSISI X DAHULU (Kiri/Kanan)
            let minLeft, maxLeft;
            if (isLeftZone) {
                minLeft = 16; 
                maxLeft = (containerW * 0.25) - size; 
            } else {
                minLeft = containerW * 0.75; 
                maxLeft = containerW - size - 16; 
            }

            if (maxLeft < minLeft) maxLeft = minLeft;
            const leftPx = Math.random() * (maxLeft - minLeft) + minLeft;

            let minTop = 20; // Padding aman normal
            if (slanted) {
                const vw = typeof window !== 'undefined' ? window.innerWidth : containerW;
                const maxSlantDrop = 0.09 * vw; 
                
                const cutHeight = maxSlantDrop * (1 - (leftPx / containerW));
                
                // Tambahkan 24px agar aman saat animasi float naik-turun
                minTop = cutHeight + 24;
            }

            let maxTop = containerH - size - 20; 
            if (maxTop < minTop) maxTop = minTop;

            const topPx = Math.random() * (maxTop - minTop) + minTop;

            const topPct = (topPx / containerH) * 100;
            const leftPct = (leftPx / containerW) * 100;

            const c: LogoPosition = {
                topPct,
                leftPct,
                size,
                opacity: 1, 
                duration: Math.random() * 4 + 4,
                delay: Math.random() * 3,
                rotate: Math.random() * 20 - 10,
            };

            const hasCollision = placed.some(p => overlaps(c, p, containerW, containerH));
            if (!hasCollision) {
                candidate = c;
                break;
            }
        }

        if (candidate) placed.push(candidate);
    }

    return placed;
}

function Footer({ slanted, sponsors }: FooterProps) {
    const [positions, setPositions] = useState<LogoPosition[]>([]);
    const footerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sponsors?.length) return;

        const el = footerRef.current;
        const w = el?.offsetWidth ?? window.innerWidth;
        const h = el?.offsetHeight ?? 320;

        const generated = generatePositions(sponsors.length, w, h, slanted);
        setPositions(generated);
    }, [sponsors, slanted]);

    return (
        <div className="relative w-full">
            {/* Right decorative shapes */}
            {slanted && (
                <div className="absolute -top-26 right-0 w-full h-48 pointer-events-none z-10 hidden md:block">
                    <div className="absolute right-0 top-16 w-64 h-16 bg-secondary"
                        style={{ clipPath: 'polygon(0 35%, 100% 0, 100% 65%, 0 100%)' }} />
                    <div className="absolute right-0 top-24 w-36 h-12 bg-primary opacity-80"
                        style={{ clipPath: 'polygon(0 25%, 100% 0, 100% 75%, 0 100%)' }} />
                </div>
            )}

            {/* Left decorative shapes */}
            {slanted && (
                <div className="absolute -top-10 left-0 w-full h-48 pointer-events-none z-10">
                    <div className="absolute left-0 top-16 w-36 h-16 bg-secondary"
                        style={{ clipPath: 'polygon(0 30%, 100% 8%, 100% 63%, 0 85%)' }} />
                    <div className="absolute left-0 top-18 w-64 h-20 bg-primary opacity-80"
                        style={{ clipPath: 'polygon(0 45%, 100% 15%, 100% 70%, 0 100%)' }} />
                </div>
            )}

            <StyledFooter
                ref={footerRef}
                className={`relative w-full bg-background-muted pb-16 overflow-hidden ${slanted ? 'pt-48' : 'pt-18'}`}
                style={{ clipPath: slanted ? 'polygon(0 9vw, 100% 0, 100% 100%, 0 100%)' : 'none' }}
            >
                {/* Floating scattered sponsor logos — collision-free */}
                {sponsors && positions.length > 0 && (
                    <div className="absolute inset-0 pointer-events-none z-0">
                        {positions.map((pos, idx) => {
                            const sponsor = sponsors[idx];
                            if (!sponsor) return null;
                            return (
                                <div
                                    key={idx}
                                    className="absolute"
                                    style={{
                                        top: `${pos.topPct}%`,
                                        left: `${pos.leftPct}%`,
                                        width: `${pos.size}px`,
                                        height: `${pos.size}px`,
                                        opacity: pos.opacity,
                                        transform: `rotate(${pos.rotate}deg)`,
                                        animation: `float-logo-${idx} ${pos.duration}s ease-in-out ${pos.delay}s infinite alternate`,
                                    }}
                                >
                                <Image
                                    src={sponsor.logo.url}
                                    alt={sponsor.name}
                                    width={pos.size}
                                    height={pos.size}
                                    className="object-contain w-full h-full mix-blend-multiply"
                                />
                                </div>
                            );
                        })}
                    </div>
                )}

                <style>{`
                    ${positions.map((pos, idx) => `
                        @keyframes float-logo-${idx} {
                            0%   { transform: translateY(0px) rotate(${pos.rotate}deg); }
                            100% { transform: translateY(-12px) rotate(${pos.rotate}deg); }
                        }
                    `).join('')}
                `}</style>

                <div className="container mx-auto px-6 relative z-10">
                    {/* Nav */}
                    <div className="flex flex-col items-center justify-center gap-8 mb-12">
                        <nav>
                            <ul className="px-4 flex flex-wrap gap-8 text-sm font-semibold uppercase tracking-wide justify-center">
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/projects">Projects</Link></li>
                                <li><Link href="/competitions">Competitions</Link></li>
                                <li><Link href="/sponsors">Sponsors</Link></li>
                                <li><Link href="/team">Team</Link></li>
                                <li><Link href="/faq">FAQ</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>

                    {/* Social */}
                    <div className="flex gap-4 justify-center mb-12">
                        <SocialButton>
                            <Link href="https://instagram.com/gladiatos.ui" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="button">
                                <span className="shadow" />
                                <span className="edge" />
                                <div className="front">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </div>
                            </Link>
                        </SocialButton>

                        <SocialButton>
                            <Link href="https://linkedin.com/company/gladiatos" target="_blank" rel="noopener noreferrer" aria-label="Connect with us on LinkedIn" className="button">
                                <span className="shadow" />
                                <span className="edge" />
                                <div className="front">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </div>
                            </Link>
                        </SocialButton>

                        <SocialButton>
                            <Link href="https://github.com/Gladiatos-Programming" target="_blank" rel="noopener noreferrer" aria-label="View our code on GitHub" className="button">
                                <span className="shadow" />
                                <span className="edge" />
                                <div className="front">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </div>
                            </Link>
                        </SocialButton>
                    </div>

                    {/* Copyright */}
                    <div className="text-center">
                        <p className="text-md text-text-muted">
                            &copy; {new Date().getFullYear()} Gladiatos. All rights reserved.
                        </p>
                    </div>
                </div>
            </StyledFooter>
        </div>
    );
}

const StyledFooter = styled.footer`
  a {
    text-decoration: none;
    position: relative;
    color: inherit;
    transition: color 0.3s ease;
  }

  nav a::before,
  nav a::after {
    content: "";
    position: absolute;
    display: block;
    border: 0 solid transparent;
    width: 0%;
    height: 0%;
    transition: all 0.3s ease;
  }

  nav a::after {
    top: -8px;
    left: -8px;
    border-top: 2px solid transparent;
    border-left: 2px solid transparent;
  }

  nav a::before {
    right: -8px;
    bottom: -8px;
    border-bottom: 2px solid transparent;
    border-right: 2px solid transparent;
  }

  nav a:hover::before,
  nav a:hover::after {
    width: 10px;
    height: 10px;
    border-color: #ED1C24;
  }
`;

const SocialButton = styled.div`
  .button {
    position: relative;
    border: none;
    background: transparent;
    padding: 0;
    outline: none;
    cursor: pointer;
    font-family: inherit;
    display: inline-block;
    text-decoration: none;
  }

  .button .shadow {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    transform: translateY(2px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }

  .button .edge {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    border-radius: 8px;
    background: linear-gradient(
      to left,
      hsl(0, 85%, 35%) 0%,
      hsl(0, 85%, 50%) 8%,
      hsl(0, 85%, 50%) 92%,
      hsl(0, 85%, 35%) 100%
    );
  }

  .button .front {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 20px;
    font-weight: 600;
    font-size: 1rem;
    color: white;
    background: hsl(0, 85%, 45%);
    border-radius: 8px;
    transform: translateY(-4px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }

  .button:hover .shadow {
    transform: translateY(4px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  .button:hover .front {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  .button:active .shadow {
    transform: translateY(1px);
    transition: transform 34ms;
  }

  .button:active .front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }

  .button .front span {
    user-select: none;
  }
`;

export default Footer;