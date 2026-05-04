"use client";

import Image from "next/image";

interface SponsorProps {
  sponsors: {
    name: string;
    url?: string;
    logo: { url: string };
  }[];
}

export default function SponsorsMarquee({ sponsors }: SponsorProps) {
  if (!sponsors || sponsors.length === 0) return null;

  const duplicated = [...sponsors, ...sponsors, ...sponsors, ...sponsors];

  return (
    <section className="relative py-14 bg-background overflow-hidden">
      {/* Label */}
      <div className="flex items-center gap-4 max-w-7xl mx-auto px-6 mb-10">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <h2 className="text-3xl lg:text-4xl font-semibold text-foreground whitespace-nowrap">
          Supported By
        </h2>

        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      {/* Marquee track */}
      <div className="relative w-full overflow-hidden">
        {/* Fade left */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-40 z-10"
          style={{
            background:
              "linear-gradient(to right, var(--color-background, #ffffff) 0%, transparent 100%)",
          }}
        />

        {/* Fade right */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-40 z-10"
          style={{
            background:
              "linear-gradient(to left, var(--color-background, #ffffff) 0%, transparent 100%)",
          }}
        />

        {/* Marquee */}
        <div
          className="flex w-max"
          style={{ animation: "marquee-scroll 30s linear infinite" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.animationPlayState = "paused";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.animationPlayState = "running";
          }}
        >
          {duplicated.map((sponsor, idx) => (
            <a
              key={idx}
              href={sponsor.url ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={sponsor.name}
              className="group flex items-center justify-center mx-12 w-[150px] h-[70px] shrink-0"
            >
              <Image
                src={sponsor.logo.url}
                alt={sponsor.name}
                width={150}
                height={70}
                className="object-contain w-full h-full transition-all duration-300 opacity-70 group-hover:opacity-100 group-hover:scale-105"
              />
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }
      `}</style>
    </section>
  );
}