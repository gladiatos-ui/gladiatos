"use client";

import Image from "next/image";
import { motion } from "motion/react";

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

      {/* Section header */}
      <div className="max-w-6xl mx-auto mb-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-orbitron text-[10px] tracking-[0.5em] uppercase text-primary mb-4"
        >
          Season 2026
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-orbitron text-3xl md:text-4xl font-bold text-text uppercase tracking-tight"
        >
          Our Partners
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-text-muted text-sm max-w-xl mx-auto leading-relaxed"
        >
          These organizations believe in the future of humanoid robotics. Their support makes Gladiatos possible.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 h-px w-24 mx-auto bg-primary/50 origin-center"
        />
      </div>

      {/* Sponsor grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {sponsors.map((sponsor, idx) => {
          const hasUrl = Boolean(sponsor.url);
          const Tag = hasUrl ? "a" : "div";
          const tagProps = hasUrl
            ? {
                href: sponsor.url,
                target: "_blank" as const,
                rel: "noopener noreferrer",
                "aria-label": sponsor.name,
              }
            : {};

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
            >
              <Tag
                {...tagProps}
                className={`group block ${hasUrl ? "cursor-pointer" : "cursor-default"}`}
              >
                <div className="relative overflow-hidden rounded-2xl aspect-square bg-background-muted border border-white/5 transition-all duration-300 ease-out group-hover:border-primary/40 group-hover:-translate-y-1 flex items-center justify-center p-7">
                  <span className="pointer-events-none absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 rounded-tl-2xl border-primary/0 group-hover:border-primary/70 transition-all duration-300" />
                  <span className="pointer-events-none absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 rounded-br-2xl border-primary/0 group-hover:border-primary/70 transition-all duration-300" />
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_center,rgba(237,28,36,0.06)_0%,transparent_70%)]" />
                  <Image
                    src={sponsor.logo.url}
                    alt={sponsor.name}
                    width={180}
                    height={180}
                    className="object-contain w-full h-full relative z-10 opacity-80 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"
                  />
                </div>
                <p className="mt-3 text-center text-[10px] font-orbitron tracking-[0.25em] uppercase text-text-muted group-hover:text-primary transition-colors duration-300">
                  {sponsor.name}
                </p>
              </Tag>
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-20 text-center"
      >
        <p className="text-text-muted text-sm mb-5">Interested in supporting us?</p>
        <a href="/contact" className="sponsor-cta inline-flex items-center gap-2 px-7 py-3 font-orbitron text-xs tracking-widest uppercase bg-primary text-white rounded-full transition-all duration-300 hover:opacity-90">
          Become a Sponsor
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </motion.div>

    </section>
  );
}