"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import Button from "@/components/Button";
import ArrowLink from "@/components/ArrowLink";

interface Sponsor {
  name: string;
  url?: string;
  logo: { url: string };
}

interface SponsorsListProps {
  sponsors: Sponsor[];
}

export default function SponsorsList({ sponsors }: SponsorsListProps) {
  if (!sponsors?.length) return null;

  return (
    <section className="bg-background py-24 px-4">

      {/* HEADER SPONSOR */}
      <div className="max-w-5xl mx-auto mb-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm text-primary uppercase tracking-widest mb-3 font-semibold"
        >
          Season 2026
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl lg:text-6xl font-semibold mb-3 text-foreground" 
        >
          Our Sponsors
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base md:text-lg text-text max-w-xl mx-auto leading-relaxed"
        >
          These organizations believe in the future of humanoid robotics and make Gladiatos possible.
        </motion.p>
      </div>

      {/* GRID SPONSOR */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4">
        {sponsors.map((sponsor, idx) => {
          const hasUrl = Boolean(sponsor.url);
          const Tag = hasUrl ? "a" : "div";

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <Tag
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="h-[120px] flex items-center justify-center px-4 rounded-xl bg-white/[0.03] border border-white/[0.06] transition-all duration-300 group-hover:border-primary/30 group-hover:bg-white/[0.05] group-hover:-translate-y-1">
                  
                  <Image
                    src={sponsor.logo.url}
                    alt={sponsor.name}
                    width={140}
                    height={70}
                    className="object-contain max-h-[60px] w-auto opacity-80 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>

                <p className="mt-3 text-center text-sm font-medium uppercase tracking-wide text-text-muted group-hover:text-primary transition-colors duration-300">
                  {sponsor.name}
                </p>
              </Tag>
            </motion.div>
          );
        })}
      </div>

      {/* CTA SECTION */}
      <div className="max-w-6xl mx-auto mt-32 px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 mt-2">
              Interested in Supporting Us?
            </h2>

            <p className="text-md md:text-lg text-text mb-7">
              Join the organizations that make Gladiatos possible and be part of the next era of humanoid robotics.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button text="BECOME A SPONSOR" />
              </Link>
            </div>
          </motion.div>

          {/* Right section */}
          <div className="grid md:grid-cols-2 gap-8 pt-4 lg:pt-0">
            
            {/* Card 1 */}
            <motion.div
              className="flex flex-col items-center text-center sm:items-start sm:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-primary/10 text-primary border border-primary/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                  <path d="M4 22h16"/>
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
                </svg>
              </div>
              <h3 className="text-md font-semibold text-foreground mb-2">
                Jump into the arena
              </h3>
              <p className="text-md text-text mb-3">
                Access past strategies to start competing with us.
              </p>
              <Link href="/competitions">
                <ArrowLink text="SEE COMPETITIONS" />
              </Link>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="flex flex-col items-center text-center sm:items-start sm:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-primary/10 text-primary border border-primary/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="16" height="16" x="4" y="4" rx="2"/>
                  <rect width="6" height="6" x="9" y="9" rx="1"/>
                  <path d="M15 2v2"/>
                  <path d="M15 20v2"/>
                  <path d="M2 15h2"/>
                  <path d="M2 9h2"/>
                  <path d="M20 15h2"/>
                  <path d="M20 9h2"/>
                  <path d="M9 2v2"/>
                  <path d="M9 20v2"/>
                </svg>
              </div>
              <h3 className="text-md font-semibold text-foreground mb-2">
                Straight-up robotics
              </h3>
              <p className="text-md text-text mb-3">
                See what we&apos;re working on right now.
              </p>
              <Link href="/projects">
                <ArrowLink text="GET STARTED" />
              </Link>
            </motion.div>

          </div>
        </div>
      </div>

    </section>
  );
}