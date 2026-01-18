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
    default: "Axel Castellano | Web Developer & WordPress Architect",
    template: "%s | Axel Castellano"
  },
  description: "Web Developer Portfolio specializing in Next.js, React, and modular WordPress architectures. Crafting high-performance digital experiences.",
  keywords: ["Next.js", "React", "WordPress Architect", "Web Development", "Portfolio", "Tailwind CSS", "Axel Castellano"],
  authors: [{ name: "Axel Castellano" }],
  creator: "Axel Castellano",
  themeColor: "#050505",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tu-url.vercel.app", // User should update this
    title: "Axel Castellano | Web Developer & WordPress Architect",
    description: "Crafting high-performance digital experiences with Next.js and WordPress.",
    siteName: "Axel Castellano Portfolio",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Axel Castellano Portfolio",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Axel Castellano | Web Developer",
    description: "Crafting high-performance digital experiences.",
    images: ["/og-image.png"],
  },
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
    <html lang="en" suppressHydrationWarning>
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
