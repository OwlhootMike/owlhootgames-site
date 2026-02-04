"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// Go up two levels to find the image
import janeImg from '../../img-jane2.png';

export default function DetectiveJanePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-amber-500 selection:text-black overflow-x-hidden">
      
      {/* --- BACKGROUND: DIGITAL EVIDENCE BOARD --- */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none"
           style={{ 
             backgroundImage: "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)",
             backgroundSize: "20px 20px"
           }}
      />
      {/* Vignette to darken edges */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#020617_90%)]"></div>

      {/* --- HERO HEADER --- */}
      <header className="relative pt-24 pb-10 px-6 container mx-auto z-10">
        
        {/* INLINE NAVIGATION (Does not overlap Navbar) */}
        <div className="mb-8 border-b border-slate-800 pb-4 flex justify-between items-center">
           <Link href="/" className="group flex items-center gap-2 text-slate-500 hover:text-amber-500 transition-colors text-xs font-bold uppercase tracking-widest">
             <span className="transition-transform group-hover:-translate-x-1">◄</span>
             <span>Close Case File</span>
           </Link>
           <div className="text-xs font-mono text-slate-600 uppercase">Secure Connection // SSL-Encrypted</div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
             <div className="flex items-center gap-3 mb-2">
                <span className="px-2 py-1 bg-amber-500 text-black text-xs font-black uppercase tracking-widest">Confidential</span>
                <span className="text-slate-500 text-xs font-mono uppercase">Case ID: #89-NOV-26</span>
             </div>
             <h1 className="text-4xl md:text-6xl font-black uppercase text-slate-100 mb-2 tracking-tight">
               Detective Jane
             </h1>
             <p className="text-lg text-slate-400 max-w-xl">
               A narrative-driven mystery thriller. <br/>
               Uncover the truth in a city that refuses to speak.
             </p>
          </div>
          
          {/* Decorative Stamp */}
          <div className="hidden md:block opacity-50 rotate-[-10deg] border-4 border-slate-700 p-2 rounded">
             <span className="text-3xl font-black text-slate-700 uppercase">Classified</span>
          </div>
        </motion.div>
      </header>

      {/* --- MAIN EVIDENCE LAYOUT --- */}
      <main className="container mx-auto px-6 pb-24 relative z-10">
        
        {/* HERO IMAGE: POLICE SCANNER STYLE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative w-full aspect-video md:aspect-[21/9] bg-black border-y-4 border-slate-800 overflow-hidden mb-12 group"
        >
          <Image 
            src={janeImg} 
            alt="Detective Jane Gameplay" 
            fill 
            className="object-cover opacity-90 transition-all duration-700 group-hover:scale-105"
          />
          {/* Scanning Line Animation */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/10 to-transparent h-[20%] w-full animate-scanline pointer-events-none"></div>
          
          {/* Image Overlay UI */}
          <div className="absolute bottom-4 left-4 flex gap-4">
             <div className="px-2 py-1 bg-black/70 backdrop-blur text-xs font-mono text-amber-500">CAM_01 [REC]</div>
          </div>
        </motion.div>

        {/* --- GRID SYSTEM --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* LEFT: INCIDENT REPORT */}
          <div className="md:col-span-2 space-y-8">
             <section className="bg-slate-900/50 p-8 border-l-4 border-amber-500">
                <h2 className="text-2xl font-bold text-white uppercase mb-4 flex items-center gap-2">
                   <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                   Incident Report
                </h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                   Players take on the role of Jane, a private investigator with a unique talent for reconstructing crime scenes. 
                   The game focuses on <strong>deductive reasoning</strong> rather than combat.
                </p>
                <p className="text-slate-400 leading-relaxed">
                   Every object tells a story. Use your toolkit to analyze ballistics, hack digital locks, and cross-reference witness testimonies.
                   Making the wrong accusation has permanent consequences on the narrative branch.
                </p>
             </section>

             {/* Mechanics Grid */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-900 border border-slate-800 p-5">
                   <h3 className="text-amber-500 font-bold uppercase text-sm mb-2">Evidence Board</h3>
                   <p className="text-xs text-slate-400">Drag and drop clues to connect the dots. Visualizing the mystery is key to solving it.</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-5">
                   <h3 className="text-amber-500 font-bold uppercase text-sm mb-2">Interrogation</h3>
                   <p className="text-xs text-slate-400">Read micro-expressions and press suspects when their story doesn't add up.</p>
                </div>
             </div>
          </div>

          {/* RIGHT: SUSPECT/TECH DATA */}
          <div className="md:col-span-1 space-y-6">
             {/* Tech Specs */}
             <div className="bg-slate-800/50 p-6 rounded-sm">
                <h3 className="text-slate-200 font-bold uppercase border-b border-slate-600 pb-2 mb-4">Technical Data</h3>
                <ul className="space-y-4 font-mono text-sm">
                   <li>
                      <span className="block text-slate-500 text-xs">Engine</span>
                      <span className="text-amber-500 font-bold">Unreal Engine 5? (TBA)</span>
                   </li>
                   <li>
                      <span className="block text-slate-500 text-xs">Genre</span>
                      <span className="text-white">Point & Click / Mystery</span>
                   </li>
                   <li>
                      <span className="block text-slate-500 text-xs">Dev Status</span>
                      <span className="text-white bg-slate-700 px-2 py-0.5 text-xs">Pre-Production</span>
                   </li>
                </ul>
             </div>

             {/* Dev Note */}
             <div className="p-6 border border-slate-700 bg-slate-900/30">
                <div className="flex items-center gap-2 mb-2">
                   <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                   <span className="font-bold text-slate-300 text-sm uppercase">Designer Note</span>
                </div>
                <p className="text-xs text-slate-400 italic">
                   "Inspired by classics like L.A. Noire and Disco Elysium. The goal is to make the player feel smart, not just guide them from waypoint to waypoint."
                </p>
             </div>
          </div>

        </div>
      </main>
    </div>
  );
}