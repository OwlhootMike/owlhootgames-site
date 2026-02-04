import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// 1. Import the Navbar
import Navbar from "./components/Navbar"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // 1. The Base URL (Crucial for images to work)
  metadataBase: new URL('https://owlhootgames.com'),

  // 2. The Title (Browser Tab)
  title: {
    default: "Michael Figueroa Acosta | OwlHoot Games",
    template: "%s | OwlHoot Games" // Allows sub-pages to look like "Nightclubs | OwlHoot Games"
  },
  description: "Portfolio of a QA Lead & Indie Game Developer. Specialist in Unity (C#), RPG Maker, and Gameplay Engineering.",
  
  // 3. Open Graph (Facebook, Discord, LinkedIn, iMessage)
  openGraph: {
    title: "Michael Figueroa Acosta | Game Dev Portfolio",
    description: "QA Lead, Game Designer, and Full Stack Developer. Creator of Nightclubs: PRSM and Nova Galactica.",
    url: 'https://owlhootgames.com',
    siteName: 'OwlHoot Games',
    locale: 'en_US',
    type: 'website',
  },

  // 4. Twitter Card (Twitter/X)
  twitter: {
    card: 'summary_large_image',
    title: "Michael Figueroa Acosta | Game Dev Portfolio",
    description: "Building immersive experiences in Unity & RPG Maker. Check out the project database.",
    creator: '@OwlhootGames', // Optional: Put your handle here if you have one
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* 2. Place Navbar here so it sits at the top of every page */}
        <Navbar />
        {/* This "children" is where your page.tsx content loads */}
        <main className="pt-16"> 
          {children}
        </main>
      </body>
    </html>
  );
}