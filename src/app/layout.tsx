import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Gladiatos UI",
  description: "Humanoid robotics team from Tim Robotika Universitas Indonesia",
  icons: "/logo.png"
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
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}