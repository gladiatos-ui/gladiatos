"use client";

import { motion } from "motion/react";

interface QuoteData {
  id: string;
  leaderName: string;
  quote: string;
  year: string;
}

interface QuoteProps {
  quoteData: QuoteData;
}

function Quote({ quoteData }: QuoteProps) {
  const { quote, leaderName, year } = quoteData;

  return (
    <div className="relative w-full bg-background-muted py-32 pt-48 overflow-hidden"
      style={{
        clipPath: 'polygon(0 9vw, 100% 0, 100% 100%, 0 100%)'
      }}
    >
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Larger slanted rectangle */}
        <motion.div
          className="absolute right-0 top-6 w-64 h-16 bg-secondary"
          style={{
            clipPath: 'polygon(0 35%, 100% 0, 100% 65%, 0 100%)'
          }}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />

        {/* Smaller slanted rectangle */}
        <motion.div
          className="absolute right-0 top-14 w-36 h-12 bg-primary opacity-80"
          style={{
            clipPath: 'polygon(0 25%, 100% 0, 100% 75%, 0 100%)'
          }}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 0.8, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Decorative line top */}
        <motion.div 
          className="w-40 md:w-80 h-1 bg-primary mx-auto mb-16"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        ></motion.div>

        {/* Quote text */}
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-3xl md:text-4xl lg:text-5xl font-medium italic mb-10 leading-snug text-foreground">
            &quot;{quote}&quot;
          </p>

          {/* Author */}
          <motion.p 
            className="text-primary text-lg md:text-xl font-semibold tracking-[0.2em] uppercase mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {leaderName}
          </motion.p>
          {/* Title */}
          <motion.p 
            className="text-text-muted text-sm md:text-base font-medium tracking-[0.15em] uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Ketua Gladiatos {year}
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}

export default Quote;