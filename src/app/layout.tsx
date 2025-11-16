import type { Metadata } from "next";
import "./globals.css";
import { Inter, Orbitron } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";

export const metadata: Metadata = {
  title: {
    default: "Gladiatos",
    template: "%s - Gladiatos"
  },
  description: "Gladiatos UI develops advanced humanoid robots and AI-powered autonomous soccerbots, combining real-time perception, dynamic control, and innovation in robotics.",
  twitter: {
    card: "summary_large_image"
  },
  keywords: [
    "humanoid robots",
    "autonomous soccerbots",
    "robotics team",
    "AI robotics",
    "robot perception",
    "dynamic robot control",
    "robotics innovation",
    "Gladiatos UI",
    "Tim Robotika UI",
    "Universitas Indonesia robotics",
    "soccer robotics",
    "autonomous robot systems",
    "robotics competitions",
    "KRSBI",
    "robot intelligence",
    "robotics research"
  ]
};

const inter = Inter({ subsets: ["latin"] });
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${orbitron.variable} bg-background text-text`}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}