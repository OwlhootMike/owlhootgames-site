"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// Ensure this path matches your file structure
import novaImg from '../../img-nova.jpg';

export default function NovaPage() {
  return (
    // Changed background to a distinct deep space indigo/blue
    <div className="min-h-screen bg-black text-slate-200 font-mono selection:bg-blue-500 selection:text-white overflow-x-hidden">
      
      {/* --- DISTINCT BACKGROUND: PLANETARY HORIZON --- */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_50%_-20%,#1e3a8a_0%,#000000_60%)]"></div>
      
      {/* Moving Stars Effect */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none"
           style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
      />
      
      {/* CRT Scanline Overlay - Gives it a retro-futuristic screen look */}
      <div className="fixed inset-0 z-50 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,6px_100%] opacity-20"></div>

      {/* --- HERO HEADER --- */}
      {/* --- HERO HEADER --- */}
      <header className="relative pt-24 pb-12 px-6 container mx-auto text-left z-10 flex flex-col md:flex-row gap-8 items-end border-b border-blue-900/30 mb-12">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          {/* MOVED NAVIGATION HERE - INLINE */}
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-blue-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-[0.2em]">
               <span>◄</span> <span>Abort / Return to Database</span>
            </Link>
          </div>

          <div className="flex items-center gap-4 mb-4">
             <span className="inline-block px-2 py-0.5 bg-blue-600 text-black text-xs font-black uppercase">Class: RPG</span>
             <span className="text-blue-500 text-xs uppercase tracking-widest">System: Sol-3</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white mb-2 leading-none">
            NOVA <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-transparent">GALACTICA</span>
          </h1>
        </motion.div>
        
        <div className="w-full md:w-64 text-right">
           <p className="text-xs text-blue-400 font-mono mb-1">STARDATE: 5630.10.04</p>
           <div className="h-1 w-full bg-blue-900 relative overflow-hidden">
             <div className="absolute inset-0 bg-blue-400 w-1/3 animate-pulse"></div>
           </div>
        </div>
      </header>

      {/* --- MAIN SHOWCASE --- */}
      <main className="container mx-auto px-6 pb-24 relative z-10">
        
        {/* HERO IMAGE - CYBERPUNK FRAME */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative w-full aspect-video md:aspect-[21/9] border-2 border-blue-600/30 bg-black/50 p-1 mb-16"
        >
           {/* Corner Brackets */}
           <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-blue-500 z-20"></div>
           <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-blue-500 z-20"></div>
           <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-blue-500 z-20"></div>
           <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-blue-500 z-20"></div>

          <div className="relative w-full h-full overflow-hidden">
            <Image 
                src={novaImg} 
                alt="Nova Galactica Gameplay" 
                fill 
                className="object-cover opacity-80"
            />
          </div>
        </motion.div>

        {/* --- DATA TERMINAL LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* COLUMN 1: NARRATIVE */}
          <div className="md:col-span-2 space-y-8">
            <div className="border-l-2 border-blue-500 pl-6">
               <h2 className="text-2xl text-white font-bold uppercase mb-4">Mission Profile</h2>
               <p className="text-blue-100/70 text-lg leading-relaxed mb-6 font-sans">
                 Humanity has traveled through space across the ages. In 2050, Humanity set sail to the stars, navigating the cosmos and viewing Pulsars across the galaxy.<strong className="text-blue-400">Engineer Edith Williams</strong> is an engineer that is stationed on a moon base that is established with one goal: watch the Eta Carinae and send the information back to the Humanity Centauri Spaceship floating back in the Sol system.
                 Edith has 2 jobs: maintain the outpost and take care of her child.
               </p>
               <p className="text-blue-100/70 text-lg leading-relaxed font-sans">
                 Edith will uncover space marvel as well as maintian the <span className="text-white border-b border-blue-500">Fuel, Oxygen, and Morale</span> of the society established in the outpost. 
                 What will she uncover?
               </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-900/10 border border-blue-800 p-4 hover:bg-blue-900/20 transition-colors">
                   <h3 className="text-blue-400 font-bold uppercase mb-2 text-sm">Outpost Map</h3>
                   <p className="text-xs text-slate-400">The Outpost is divided into 5 sections: East/West/North/South Outpost Wings, and Central Hub acting as main hub for living, education, recreation and market.</p>
                </div>
                <div className="bg-blue-900/10 border border-blue-800 p-4 hover:bg-blue-900/20 transition-colors">
                   <h3 className="text-blue-400 font-bold uppercase mb-2 text-sm">Maintain, Fix and Care for Child</h3>
                   <p className="text-xs text-slate-400">Being a mother is hard work. But everyone, including your child, depends on you.</p>
                </div>
            </div>
          </div>

          {/* COLUMN 2: TECH READOUT (Sidebar) */}
          <div className="md:col-span-1">
             <div className="bg-black border border-blue-800 p-6 relative">
                <div className="absolute -top-3 left-4 bg-black px-2 text-blue-500 text-xs font-bold uppercase tracking-widest">System Diagnostic</div>
                
                <div className="space-y-6">
                   <div>
                      <div className="text-xs text-slate-500 uppercase mb-1">Engine</div>
                      <div className="text-white font-bold">RPG Maker MZ</div>
                      <div className="w-full h-1 bg-gray-800 mt-1"><div className="w-full h-full bg-blue-500"></div></div>
                   </div>

                   <div>
                      <div className="text-xs text-slate-500 uppercase mb-1">Scripting</div>
                      <div className="text-white font-bold">JavaScript (Custom Plugins)</div>
                      <div className="w-full h-1 bg-gray-800 mt-1"><div className="w-3/4 h-full bg-blue-500"></div></div>
                   </div>

                   <div>
                      <div className="text-xs text-slate-500 uppercase mb-1">Asset Pipeline</div>
                      <div className="text-white font-bold">Aseprite / GraphicsGale</div>
                      <div className="w-full h-1 bg-gray-800 mt-1"><div className="w-1/2 h-full bg-blue-500"></div></div>
                   </div>

                   <div className="pt-6 border-t border-gray-800">
                      <div className="text-xs text-slate-500 uppercase mb-2">Dev Contributions</div>
                      <ul className="text-sm text-blue-200 space-y-2">
                         <li className="flex gap-2"><span className="text-blue-500">►</span> <span>Custom UI Implementation</span></li>
                         <li className="flex gap-2"><span className="text-blue-500">►</span> <span>Plugin Architecture</span></li>
                      </ul>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </main>

    </div>
  );
}