"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// We go up two levels to find the image. 
// NOTE: We are looking for the .jpg version here based on previous fixes.
import novaImg from '../../img-nova.jpg';

export default function NovaPage() {
  return (
    <div className="min-h-screen bg-[#050b14] text-slate-200 font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden">
      
      {/* --- BACKGROUND FX --- */}
      {/* Deep Space Gradient */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-[#050b14] to-[#050b14]"></div>
      
      {/* Starfield Noise */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none mix-blend-screen"
           style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
      />
      
      {/* Tech Grid Overlay */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none"
           style={{ 
             backgroundImage: "linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)",
             backgroundSize: "40px 40px"
           }}
      />

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-6 left-6 z-50">
        <Link href="/" className="group flex items-center gap-2 bg-slate-900/80 backdrop-blur-md border border-slate-700 px-4 py-2 text-sm font-bold uppercase tracking-widest text-slate-400 transition-all hover:border-blue-400 hover:text-blue-400">
          <span className="transition-transform group-hover:-translate-x-1">◄</span>
          <span>Return to Database</span>
        </Link>
      </nav>

      {/* --- HERO HEADER --- */}
      <header className="relative pt-32 pb-12 px-6 container mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block mb-4 px-3 py-1 bg-blue-900/30 border border-blue-500 text-blue-300 text-xs font-mono uppercase tracking-widest shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            Log Entry: Star Date 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] mb-6">
            Nova Galactica
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A sci-fi narrative RPG exploring the isolation of deep space.<br className="hidden md:block" />
            Cosmic beauty, interstellar drama, and the cost of survival.
          </p>
        </motion.div>
      </header>

      {/* --- MAIN SHOWCASE --- */}
      <main className="container mx-auto px-6 pb-24 relative z-10">
        
        {/* HERO IMAGE FRAME */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative w-full aspect-video md:aspect-[21/9] border-y border-blue-900/50 overflow-hidden mb-16 group bg-black"
        >
          <Image 
            src={novaImg} 
            alt="Nova Galactica Gameplay" 
            fill 
            className="object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
          {/* Holographic Scanline */}
          <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,255,0.05)_50%)] bg-[length:100%_4px] pointer-events-none"></div>
        </motion.div>

        {/* --- GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: SPECS (4 Columns) */}
          <div className="md:col-span-4 space-y-8">
            {/* Tech Stack Box */}
            <div className="bg-slate-900/60 border border-blue-900/50 p-6 backdrop-blur-sm relative overflow-hidden">
               {/* Decorative corner */}
               <div className="absolute top-0 left-0 w-2 h-2 bg-blue-500"></div>
               <div className="absolute top-0 right-0 w-2 h-2 bg-blue-500"></div>
               <div className="absolute bottom-0 left-0 w-2 h-2 bg-blue-500"></div>
               <div className="absolute bottom-0 right-0 w-2 h-2 bg-blue-500"></div>

               <h3 className="text-blue-400 font-bold uppercase tracking-widest mb-4 border-b border-blue-900/50 pb-2">Ship Specs</h3>
               <ul className="space-y-3 font-mono text-sm text-slate-300">
                 <li className="flex justify-between">
                   <span className="text-slate-500">Engine</span>
                   <span>RPG Maker MZ</span>
                 </li>
                 <li className="flex justify-between">
                   <span className="text-slate-500">Scripting</span>
                   <span>JavaScript (Plugins)</span>
                 </li>
                 <li className="flex justify-between">
                   <span className="text-slate-500">Art Style</span>
                   <span>Pixel / Digital Paint</span>
                 </li>
                 <li className="flex justify-between">
                   <span className="text-slate-500">Status</span>
                   <span className="text-green-400">In Development</span>
                 </li>
               </ul>
            </div>

            {/* My Role Box */}
            <div className="bg-slate-900/60 border border-blue-900/50 p-6 backdrop-blur-sm relative">
               <h3 className="text-cyan-400 font-bold uppercase tracking-widest mb-4 border-b border-blue-900/50 pb-2">Mission Parameters</h3>
               <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm leading-relaxed">
                 <li>Wrote the branching narrative script (30k+ words).</li>
                 <li>Designed custom <strong>Plugin Systems</strong> in JavaScript for unique combat mechanics.</li>
                 <li>Created custom UI layouts breaking the standard RPG Maker mold.</li>
               </ul>
            </div>
          </div>

          {/* RIGHT COLUMN: DESCRIPTION (8 Columns) */}
          <div className="md:col-span-8 space-y-12">
            
            {/* Narrative Section */}
            <div>
              <h2 className="text-3xl font-black text-white uppercase mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-blue-500"></span>
                The Odyssey
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                <strong>Nova Galactica</strong> moves away from traditional fantasy tropes to explore the cold, 
                isolating beauty of space. It is a story about a crew trying to keep their ship—and their sanity—intact 
                while traversing a hostile sector.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                The gameplay blends classic turn-based combat with <span className="text-blue-300">resource management</span>. 
                Every jump between star systems costs fuel and morale. Run out of either, and the void claims you.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="p-6 border border-slate-800 hover:border-blue-500/50 transition-colors bg-gradient-to-br from-slate-900 to-transparent">
                 <h4 className="text-xl font-bold text-white mb-2">Stellar Navigation</h4>
                 <p className="text-slate-500 text-sm">Non-linear map exploration. Choose your route carefully to avoid patrols or anomalies.</p>
               </div>
               <div className="p-6 border border-slate-800 hover:border-cyan-500/50 transition-colors bg-gradient-to-br from-slate-900 to-transparent">
                 <h4 className="text-xl font-bold text-white mb-2">Active Time Events</h4>
                 <p className="text-slate-500 text-sm">Cinematic moments require player input during cutscenes to determine outcomes.</p>
               </div>
               <div className="p-6 border border-slate-800 hover:border-indigo-500/50 transition-colors bg-gradient-to-br from-slate-900 to-transparent">
                 <h4 className="text-xl font-bold text-white mb-2">Crew Relationships</h4>
                 <p className="text-slate-500 text-sm">Dialogue choices affect crew loyalty, unlocking special combat abilities or endings.</p>
               </div>
            </div>

          </div>
        </div>
      </main>

    </div>
  );
}