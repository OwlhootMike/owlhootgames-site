import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// 1. Import the Navbar
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  // 1. The Base URL (Crucial for images to work)
  metadataBase: new URL('https://owlhootgames.com'),

  // 2. The Title (Browser Tab)
  title: {
    default: "Owlhoot Games | Independent Game Studio",
    // THE FIX: Added %s so Next.js knows where to put the page name
    template: "%s | Owlhoot Games" 
  },
  description: "Crafting high-fidelity simulations, active rhythm systems, and local-first experiences. You buy it, you own it. Forever.",
  
  // 3. Open Graph (Facebook, Discord, LinkedIn, iMessage)
  openGraph: {
    title: "Owlhoot Games Studio",
    description: "Independent Game Development & Tools Lab. Creators of Nightclubs: PRSM.",
    url: 'https://owlhootgames.com',
    siteName: 'Owlhoot Games',
    locale: 'en_US',
    type: 'website',
  },

  // 4. Twitter Card (Twitter/X)
  twitter: {
    card: 'summary_large_image',
    title: "Owlhoot Games Studio",
    description: "Independent Game Development & Tools Lab. Creators of Nightclubs: PRSM.",
    creator: '@OwlhootGames', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-slate-950 font-sans">
        {/* 2. Place Navbar here so it sits at the top of every page */}
        <Navbar />
        {/* This "children" is where your page.tsx content loads */}
        <main className="pt-16"> 
          {children}
        </main>
        {/* Shared footer (hidden automatically on the KTS test page) */}
        <Footer />
      </body>
    </html>
  );
}