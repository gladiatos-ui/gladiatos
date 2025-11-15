"use client";

import Image from 'next/image';
import { motion } from 'motion/react';

interface TeamMember {
  name: string;
  image: {
    url: string;
  };
}

interface TeamProps {
  teamData: {
    managerial: TeamMember[];
    programming: TeamMember[];
    electrical: TeamMember[];
    mechanical: TeamMember[];
  };
}

interface TeamSectionProps {
  title: string;
  members: TeamMember[];
  bgColor: '' | 'bg-background-muted';
}

function TeamSection({ title, members, bgColor }: TeamSectionProps) {
  return (
    <div className={`w-full ${bgColor} py-10 px-4 sm:px-8`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          className="uppercase text-[clamp(2rem,8vw,3.5rem)] md:text-6xl font-semibold font-orbitron text-primary mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {members.map((member, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image */}
              <div className="relative w-full max-w-xs">
                <Image
                  src={member.image.url}
                  alt={member.name}
                  width={1000}
                  height={1000}
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Name */}
              <h3 className="text-2xl font-semibold text-foreground text-center">
                {member.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function OurTeam({ teamData }: TeamProps) {
  return (
    <div className="w-full pb-20">
      <TeamSection
        title="Managerial"
        members={teamData.managerial}
        bgColor="bg-background-muted"
      />
      <TeamSection
        title="Programming"
        members={teamData.programming}
        bgColor=""
      />
      <TeamSection
        title="Electrical"
        members={teamData.electrical}
        bgColor="bg-background-muted"
      />
      <TeamSection
        title="Mechanical"
        members={teamData.mechanical}
        bgColor=""
      />
    </div>
  );
}

export default OurTeam;