import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Portfolio | Web Developer",
    template: "%s | Portfolio"
  },
  description: "Web Developer Portfolio specializing in Next.js, React, and modular architecture.",
  keywords: ["Next.js", "React", "Web Development", "Portfolio", "Tailwind CSS"],
  icons: {
    icon: "/icon.png",
  },
};

import { Navbar, Footer } from "@/components/layout";
import { CustomCursor } from "@/components/ui";
import { LanguageProvider } from "@/hooks/useLanguage";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <LanguageProvider>
          <div className="grain-overlay" />
          <CustomCursor />
          <Navbar />
          <main className="min-h-screen md:pl-20">
            {children}
            <Footer />
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
