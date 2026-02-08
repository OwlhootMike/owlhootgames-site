"use client"; // 1. REQUIRED for interactivity (clicking buttons)

import { useState } from "react"; // 2. Import the tool to manage state
import Link from "next/link";

export default function Navbar() {
  // 3. THE SWITCH:
  // isOpen = false (starts closed)
  // setIsOpen = the function we use to flip the switch
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-200 bg-white/75 backdrop-blur-md dark:border-zinc-800 dark:bg-black/75">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-80">
          Michael Figueroa
        </Link>

        {/* --- DESKTOP MENU --- */}
        {/* "md:flex" means: visible on medium screens and up. "hidden" on small. */}
        <div className="hidden gap-6 md:flex">
          <Link href="/" className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white">
            Home
          </Link>
          <Link href="/games/nightclubs" className="text-sm font-medium text-zinc-600 hover:text-purple-500 dark:text-zinc-400 dark:hover:text-purple-400">
            Nightclubs: PRSM
          </Link>
          <Link href="/games/nova-galactica" className="text-sm font-medium text-zinc-600 hover:text-blue-500 dark:text-zinc-400 dark:hover:text-blue-400">
            Nova Galactica
          </Link>
          <Link href="/games/detective-jane" className="text-sm font-medium text-zinc-600 hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-500">
            Detective Jane
          </Link>
          <Link href="/games/archives" className="text-sm font-medium text-zinc-600 hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-500">
            Other Work Archives
          </Link>
        </div>

        {/* --- MOBILE HAMBURGER BUTTON --- */}
        {/* "md:hidden" means: visible ONLY on small screens. */}
        <button 
          className="md:hidden p-2 text-zinc-600 dark:text-zinc-300"
          onClick={() => setIsOpen(!isOpen)} // Toggle: If true -> false. If false -> true.
        >
          {/* Simple Icon Logic: Show 'X' if open, 'Bars' if closed */}
          {isOpen ? (
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>

      </div>

      {/* --- MOBILE MENU DRAWER --- */}
      {/* "Condition && Result" -> Only renders if isOpen is TRUE */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full border-b border-zinc-200 bg-white dark:bg-black dark:border-zinc-800 p-4 flex flex-col gap-4 shadow-lg">
           
           {/* Note: We added onClick={() => setIsOpen(false)} to every link.
               This ensures the menu CLOSES after the user clicks a link. */}

           <Link href="/" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white">
             Home
           </Link>

           <Link href="/games/nightclubs" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-medium text-zinc-600 hover:text-purple-500 dark:text-zinc-400 dark:hover:text-purple-400">
             Nightclubs: PRSM
           </Link>

           <Link href="/games/nova-galactica" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-medium text-zinc-600 hover:text-blue-500 dark:text-zinc-400 dark:hover:text-blue-400">
             Nova Galactica
           </Link>

           <Link href="/games/detective-jane" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-medium text-zinc-600 hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-500">
             Detective Jane
           </Link>

           <Link href="/games/archives" onClick={() => setIsOpen(false)} className="block py-2 text-sm font-medium text-zinc-600 hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-500">
             Other Work Archives
           </Link>

        </div>
      )}
    </nav>
  );
}