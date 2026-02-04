"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// We go up two levels (../../) to find the image in the 'app' folder
import nightclubImg from '../../img-nightclub.png';

export default function NightclubsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
      
      {/* --- BACKGROUND FX --- */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none"
           style={{
             backgroundImage: "linear-gradient(rgba(18, 18, 18, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))",
             backgroundSize: "100% 4px, 6px 100%"
           }}
      />
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 z-50 shadow-[0_0_20px_rgba(168,85,247,0.5)]"></div>

      {/* --- HERO HEADER --- */}
      {/* --- HERO HEADER --- */}
      <header className="relative pt-24 pb-12 px-6 container mx-auto text-center z-10">
        
        {/* MOVED NAVIGATION HERE - INLINE */}
        <div className="flex justify-center mb-8">
           <Link href="/" className="group flex items-center gap-2 bg-black/50 backdrop-blur-md border border-slate-800 px-4 py-2 text-sm font-bold uppercase tracking-widest text-slate-400 transition-all hover:border-cyan-500 hover:text-cyan-400">
             <span className="transition-transform group-hover:-translate-x-1">◄</span>
             <span>Return to Database</span>
           </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block mb-4 px-3 py-1 bg-purple-900/30 border border-purple-500 text-purple-300 text-xs font-mono uppercase tracking-widest shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            Project Status: Alpha Build
          </span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] mb-6">
            Nightclubs: PRSM
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A high-fidelity simulation of nightlife management. <br className="hidden md:block" />
            Control the lights, the music, and the crowd psychology.
          </p>
        </motion.div>
      </header>
      {/* --- MAIN SHOWCASE --- */}
      <main className="container mx-auto px-6 pb-24 relative z-10">
        
        {/* HERO IMAGE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative w-full aspect-video md:aspect-[21/9] rounded-none border-y-2 border-slate-800 overflow-hidden mb-16 group"
        >
          <Image 
            src={nightclubImg} 
            alt="Nightclubs Gameplay" 
            fill 
            className="object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
          />
          {/* Overlay Grid */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </motion.div>

        {/* --- GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: SPECS (4 Columns) */}
          <div className="md:col-span-4 space-y-8">
            {/* Tech Stack Box */}
            <div className="bg-slate-900/50 border border-slate-800 p-6 backdrop-blur-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-cyan-500/10 to-transparent"></div>
               <h3 className="text-cyan-400 font-bold uppercase tracking-widest mb-4 border-b border-slate-800 pb-2">Technical Specs</h3>
               <ul className="space-y-3 font-mono text-sm text-slate-300">
                 <li className="flex justify-between">
                   <span className="text-slate-500">Engine</span>
                   <span>Unity 2022 LTS</span>
                 </li>
                 <li className="flex justify-between">
                   <span className="text-slate-500">Language</span>
                   <span>C# (CSharp)</span>
                 </li>
                 <li className="flex justify-between">
                   <span className="text-slate-500">Perspective</span>
                   <span>Top-Down / Iso</span>
                 </li>
                 <li className="flex justify-between">
                   <span className="text-slate-500">Audio</span>
                   <span>FMOD Middleware</span>
                 </li>
               </ul>
            </div>

            {/* My Role Box */}
            <div className="bg-slate-900/50 border border-slate-800 p-6 backdrop-blur-sm">
               <h3 className="text-purple-400 font-bold uppercase tracking-widest mb-4 border-b border-slate-800 pb-2">My Contributions</h3>
               <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm leading-relaxed">
                 <li>Designed the <strong className="text-white">Crowd AI</strong> system using NavMesh agents.</li>
                 <li>Programmed the dynamic <strong className="text-white">Music Sync</strong> system.</li>
                 <li>Implemented UI/UX for the management dashboard.</li>
                 <li>Optimized lighting rendering for mobile performance.</li>
               </ul>
            </div>
          </div>

          {/* RIGHT COLUMN: DESCRIPTION (8 Columns) */}
          <div className="md:col-span-8 space-y-12">
            
            {/* Narrative Section */}
            <div>
              <h2 className="text-3xl font-black text-white uppercase mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-cyan-500"></span>
                The Simulation
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                <strong>PRSM</strong> is not just a tycoon game; it's a social physics sandbox. 
                Players don't just build walls—they engineer vibes. The core loop revolves around balancing 
                three pillars: <span className="text-cyan-300">Music Intensity</span>, <span className="text-purple-300">Lighting Atmosphere</span>, and <span className="text-pink-300">Crowd Density</span>.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed">
                As the architect, you must adapt to procedural events. A fight breaks out? Kick out the aggressor. 
                VIPs arriving? Switch the lighting rig to "Gold Mode." Every choice impacts the club's reputation meter in real-time.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="p-6 border border-slate-800 hover:border-cyan-500/50 transition-colors bg-gradient-to-br from-slate-900 to-transparent">
                 <h4 className="text-xl font-bold text-white mb-2">Dynamic Audio</h4>
                 <p className="text-slate-500 text-sm">Music stems fade in/out based on crowd energy levels, powered by FMOD.</p>
               </div>
               <div className="p-6 border border-slate-800 hover:border-purple-500/50 transition-colors bg-gradient-to-br from-slate-900 to-transparent">
                 <h4 className="text-xl font-bold text-white mb-2">Crowd Fluidity</h4>
                 <p className="text-slate-500 text-sm">NPCs feature individual desires (Thirst, Dance, Social) driving the economy.</p>
               </div>
               <div className="p-6 border border-slate-800 hover:border-pink-500/50 transition-colors bg-gradient-to-br from-slate-900 to-transparent">
                 <h4 className="text-xl font-bold text-white mb-2">Lighting Engine</h4>
                 <p className="text-slate-500 text-sm">Volumetric lighting effects that react to the beat of the music.</p>
               </div>
            </div>

          </div>
        </div>
      </main>

    </div>
  );
}