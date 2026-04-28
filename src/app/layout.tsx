import type { Metadata } from "next";
import "./globals.css";
import { Inter, Orbitron } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gladiatosui.com"),
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
  ],
  alternates: {
    canonical: "/"
  }
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light'){document.documentElement.classList.add(t)}else if(window.matchMedia('(prefers-color-scheme:dark)').matches){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body className={`${inter.className} ${orbitron.variable} bg-background text-text`}>
        <StyledComponentsRegistry>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}