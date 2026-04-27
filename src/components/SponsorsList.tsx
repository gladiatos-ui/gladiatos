"use client";

import Image from 'next/image';
import { motion } from 'motion/react';

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
    <section className="bg-background py-20 px-4">
      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-16 flex items-center gap-6">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <p className="font-orbitron text-xs tracking-[0.3em] uppercase text-text-muted whitespace-nowrap">
          Our Partners
        </p>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>

      {/* Sponsor grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {sponsors.map((sponsor, idx) => {
          const hasUrl = Boolean(sponsor.url);
          const Wrapper = hasUrl ? 'a' : 'div';
          const wrapperProps = hasUrl
            ? {
                href: sponsor.url,
                target: '_blank' as const,
                rel: 'noopener noreferrer',
                'aria-label': sponsor.name,
              }
            : {};

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
            >
              <Wrapper
                {...wrapperProps}
                className={`group block ${hasUrl ? 'cursor-pointer' : 'cursor-default'}`}
              >
                {/* Card */}
                <div className="
                  relative overflow-hidden rounded-xl
                  bg-background-muted
                  border border-transparent
                  transition-all duration-300
                  group-hover:border-primary/50
                  group-hover:shadow-[0_0_24px_0px_rgba(237,28,36,0.15)]
                  p-6 aspect-square
                  flex items-center justify-center
                ">
                  {/* Corner accent top-left */}
                  <span className="
                    absolute top-0 left-0 w-5 h-5
                    border-t-2 border-l-2 border-primary/0
                    group-hover:border-primary/60
                    transition-all duration-300 rounded-tl-xl
                  " />
                  {/* Corner accent bottom-right */}
                  <span className="
                    absolute bottom-0 right-0 w-5 h-5
                    border-b-2 border-r-2 border-primary/0
                    group-hover:border-primary/60
                    transition-all duration-300 rounded-br-xl
                  " />

                  <Image
                    src={sponsor.logo.url}
                    alt={sponsor.name}
                    width={200}
                    height={200}
                    className="
                      object-contain w-full h-full
                      grayscale opacity-60
                      group-hover:grayscale-0 group-hover:opacity-100
                      transition-all duration-300
                    "
                  />
                </div>

                {/* Sponsor name below card */}
                <p className="
                  mt-3 text-center text-xs font-orbitron tracking-widest uppercase
                  text-text-muted group-hover:text-primary
                  transition-colors duration-300
                ">
                  {sponsor.name}
                </p>
              </Wrapper>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}