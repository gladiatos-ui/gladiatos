"use client";

import React from 'react';
import Button from './Button';
import Image from 'next/image';
import ArrowLink from './ArrowLink';
import { motion } from "motion/react";
import Link from 'next/link';

function CTA() {
  return (
    <div className="relative w-full py-32 pb-48">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left section - Heading, Description, Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {/* Main heading */}
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 mt-2">
              Ready to dive into robotics?
            </h2>

            {/* Description */}
            <p className="text-md md:text-lg text-text mb-7">
              Learn about our team, check out our builds, and see how you can get involved.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/faq">
                <Button text="GET ANSWERS" />
              </Link>
            </div>
          </motion.div>

          {/* Right section - Feature cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <Image
                  src="/soccer-ball.png"
                  alt="Soccer ball"
                  width={50}
                  height={50}
                  className='object-contain mb-2'
                  priority
                  draggable={false}
                />
                <h3 className="text-md font-semibold text-foreground mb-2">
                  Jump into the arena
                </h3>
                <p className="text-md text-text mb-3">
                  Access past strategies to start competing with us.
                </p>
                <Link href="/competitions">
                  <ArrowLink text="Learn More" />
                </Link>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div>
                <Image
                  src="/robot-arm.png"
                  alt="Robot arm"
                  width={50}
                  height={50}
                  className='object-contain mb-2'
                  priority
                  draggable={false}
                />
                <h3 className="text-md font-semibold text-foreground mb-2">
                  Straight-up robotics
                </h3>
                <p className="text-md text-text mb-3">
                  See what we&apos;re working on right now.
                </p>
                <Link href="/projects">
                  <ArrowLink text="Get Started" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTA