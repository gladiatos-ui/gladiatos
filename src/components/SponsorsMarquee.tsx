"use client";

import Image from "next/image";
import styled, { keyframes } from "styled-components";

// Animasi berjalan tanpa henti
const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); } 
`;

const MarqueeContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  width: 100%;
  padding: 3rem 0;
  background: ${({ theme }) => theme.background}; // Sesuaikan jika ada tema gelap/terang

  /* Efek gradient di pinggir agar muncul/hilangnya smooth */
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 150px;
    height: 100%;
    z-index: 2;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, var(--background-color) 0%, transparent 100%);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, var(--background-color) 0%, transparent 100%);
  }
`;

const MarqueeContent = styled.div`
  display: flex;
  width: max-content;
  animation: ${scroll} 30s linear infinite;
  
  &:hover {
    animation-play-state: paused; /* Berhenti saat di-hover */
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  margin: 0 2rem;
  filter: grayscale(100%); 
  transition: filter 0.3s ease, transform 0.3s ease;

  &:hover {
    filter: grayscale(0%);
    transform: scale(1.1);
  }
`;

interface SponsorProps {
  sponsors: {
    name: string;
    logo: { url: string };
  }[];
}

export default function SponsorsMarquee({ sponsors }: SponsorProps) {
  if (!sponsors || sponsors.length === 0) return null;

  // Duplikasi array agar animasinya looping tanpa terputus
  const duplicatedSponsors = [...sponsors, ...sponsors];

  return (
    <section className="py-10 bg-background">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold uppercase tracking-wider text-gray-500">Supported By</h3>
      </div>
      <MarqueeContainer>
        <MarqueeContent>
          {duplicatedSponsors.map((sponsor, index) => (
            <LogoWrapper key={index}>
              <Image 
                src={sponsor.logo.url} 
                alt={sponsor.name} 
                width={150} 
                height={80} 
                className="object-contain w-auto h-16" 
              />
            </LogoWrapper>
          ))}
        </MarqueeContent>
      </MarqueeContainer>
    </section>
  );
}