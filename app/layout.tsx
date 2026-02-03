import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// 1. Import the Navbar
import Navbar from "./components/Navbar"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Owlhoot Games",
  description: "Portfolio of an Indie Game Developer & QA Specialist",
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