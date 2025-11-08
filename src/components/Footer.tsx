"use client";

import Link from 'next/link';
import styled from 'styled-components';

interface FooterProps {
    slanted: boolean;
}

function Footer({ slanted }: FooterProps) {
    return (
        <div className="relative w-full">
            {/* Right decorative shapes */}
            {slanted && <div className="absolute -top-26 right-0 w-full h-48 pointer-events-none z-10 hidden md:block">
                {/* Larger slanted rectangle */}
                <div
                    className="absolute right-0 top-16 w-64 h-16 bg-secondary"
                    style={{
                        clipPath: 'polygon(0 35%, 100% 0, 100% 65%, 0 100%)'
                    }}
                />

                {/* Smaller slanted rectangle */}
                <div
                    className="absolute right-0 top-24 w-36 h-12 bg-primary opacity-80"
                    style={{
                        clipPath: 'polygon(0 25%, 100% 0, 100% 75%, 0 100%)'
                    }}
                />
            </div>
            }

            {/* Left decorative shapes */}
            {slanted && <div className="absolute -top-10 left-0 w-full h-48 pointer-events-none z-10">
                {/* Smaller slanted rectangle */}
                <div
                    className="absolute left-0 top-16 w-36 h-16 bg-secondary"
                    style={{
                        clipPath: 'polygon(0 30%, 100% 8%, 100% 63%, 0 85%)'
                    }}
                />

                {/* Larger slanted rectangle */}
                <div
                    className="absolute left-0 top-18 w-64 h-20 bg-primary opacity-80"
                    style={{
                        clipPath: 'polygon(0 45%, 100% 15%, 100% 70%, 0 100%)'
                    }}
                />
            </div>
            }

            <StyledFooter
                className={`relative w-full bg-background-muted pb-16 ${slanted ? 'pt-48' : 'pt-18'}`}
                style={{
                    clipPath: slanted ? 'polygon(0 9vw, 100% 0, 100% 100%, 0 100%)' : 'none'
                }}
            >
                <div className="container mx-auto">
                    {/* Main Footer Content */}
                    <div className="flex flex-col items-center justify-center gap-8 mb-12">
                        {/* Navigation Links */}
                        <nav>
                            <ul className="px-2 flex flex-wrap gap-8 text-sm font-semibold uppercase tracking-wide justify-center">
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/projects">Projects</Link></li>
                                <li><Link href="/competitions">Competitions</Link></li>
                                <li><Link href="/team">Team</Link></li>
                                <li><Link href="/faq">FAQ</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex gap-4 justify-center mb-12">
                        <Link href="https://instagram.com/gladiatos.ui" target="_blank" rel="noopener noreferrer">
                            <SocialButton>
                                <button className="button">
                                    <span className="shadow" />
                                    <span className="edge" />
                                    <div className="front">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </div>
                                </button>
                            </SocialButton>
                        </Link>

                        <Link href="https://linkedin.com/company/gladiatos" target="_blank" rel="noopener noreferrer">
                            <SocialButton>
                                <button className="button">
                                    <span className="shadow" />
                                    <span className="edge" />
                                    <div className="front">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </div>
                                </button>
                            </SocialButton>
                        </Link>

                        <Link href="https://github.com/Gladiatos-Programming" target="_blank" rel="noopener noreferrer">
                            <SocialButton>
                                <button className="button">
                                    <span className="shadow" />
                                    <span className="edge" />
                                    <div className="front">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </div>
                                </button>
                            </SocialButton>
                        </Link>
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
    )
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
  }

  /* Shadow layer */
  .button .shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    transform: translateY(2px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }

  /* Edge layer */
  .button .edge {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background: linear-gradient(
      to left,
      hsl(0, 85%, 35%) 0%,
      hsl(0, 85%, 50%) 8%,
      hsl(0, 85%, 50%) 92%,
      hsl(0, 85%, 35%) 100%
    );
  }

  /* Front layer */
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

  /* Hover and active states */
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

  /* Disable text selection */
  .button .front span {
    user-select: none;
  }
`;

export default Footer;