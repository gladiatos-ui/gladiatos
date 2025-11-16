import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";

export const metadata: Metadata = {
  title: {
    default: "Gladiatos",
    template: "%s - Gladiatos"
  },
  description: "Humanoid robotics team from Tim Robotika Universitas Indonesia",
  twitter: {
    card: "summary_large_image"
  }
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-text`}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}