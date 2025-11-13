"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Button from "./Button";
import styled from "styled-components";
import { useState, useEffect } from "react";
import NavIcon from "./NavIcon";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <StyledNav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2 transition-all duration-300 ${isScrolled ? 'glassy' : ''
          }`}
      >
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={50} height={50} draggable={false} className="md:w-[70px] md:h-[70px]" />
        </Link>
        <ul className="hidden md:flex not-last:gap-8 text-sm font-semibold uppercase tracking-wide">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/competitions">Competitions</Link></li>
          <li><Link href="/team">Team</Link></li>
          <li><Link href="/faq">FAQ</Link></li>
        </ul>
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link href="/contact">
            <Button text="CONTACT" />
          </Link>
        </div>
        <div className="md:hidden" onClick={toggleMobileMenu}>
          <NavIcon isOpen={isMobileMenuOpen} />
        </div>
      </StyledNav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-background transition-opacity duration-500 ease-in-out overflow-y-auto ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex flex-col items-center justify-center min-h-full px-8 py-20">
          {/* Navigation Links */}
          <ul className="flex flex-col items-center gap-8 text-xl font-semibold uppercase tracking-wide mb-8">
            <li>
              <Link href="/" onClick={closeMobileMenu} className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/projects" onClick={closeMobileMenu} className="text-foreground hover:text-primary transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/competitions" onClick={closeMobileMenu} className="text-foreground hover:text-primary transition-colors">
                Competitions
              </Link>
            </li>
            <li>
              <Link href="/team" onClick={closeMobileMenu} className="text-foreground hover:text-primary transition-colors">
                Team
              </Link>
            </li>
            <li>
              <Link href="/faq" onClick={closeMobileMenu} className="text-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
            </li>
          </ul>

          <div className="flex flex-col items-center gap-6">
            <ThemeToggle />
            <Link href="/contact" onClick={closeMobileMenu}>
              <Button text="CONTACT" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

const StyledNav = styled.nav`
  /* Transparent by default */
  background: transparent;

  /* Glassy effect when scrolled */
  &.glassy {
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  /* Dark mode glassy effect */
  .dark &.glassy {
    background: rgba(0, 0, 0, 0.3);
  }

  ul a {
    text-decoration: none;
    position: relative;
  }

  ul a::before,
  ul a::after {
    content: "";
    position: absolute;
    display: block;
    border: 0 solid transparent;
    width: 0%;
    height: 0%;
    transition: all 0.3s ease;
  }

  ul a::after {
    top: -8px;
    left: -8px;
    border-top: 2px solid transparent;
    border-left: 2px solid transparent;
  }

  ul a::before {
    right: -8px;
    bottom: -8px;
    border-bottom: 2px solid transparent;
    border-right: 2px solid transparent;
  }

  ul a:hover::before,
  ul a:hover::after {
    width: 10px;
    height: 10px;
    border-color: #ED1C24;
  }
`;

export default Navbar