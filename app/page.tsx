/**
 * @fileoverview Owlhoot Games Studio LLC Homepage
 * @author Michael Figueroa Acosta
 * @stack Next.js, TailwindCSS, Framer Motion
 * @created Feb 1, 2026
 * * LATEST UPDATE:
 * - Transitioned from personal portfolio to official Studio Hub
 * - Integrated Studio Manifesto, Roadmap, and Perpetual Play philosophy
 */

"use client"; 

import { motion } from "framer-motion"; 
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

// --- IMAGE IMPORTS ---
import nightclubImg from './PRSMPost.jpg';
import novaImg from './img-nova.jpg';
import janeImg from './img-jane2.png';

// --- DATA SOURCES ---
const projects = [
  {
    title: "Nightclubs: PRSM",
    description: "A high-fidelity simulation focused on nightlife management. Serve guests, play the rhythm highway, and actively control the energy of the dancefloor. (Our Flagship Title)",
    tech: "Unity / FMOD / C#", 
    image: nightclubImg,
    link: "/games/nightclubsPRSM" 
  },
  {
    title: "Nova Galactica",
    description: "A sci-fi narrative game, filled with cosmic beauty, drama, and heartbreak.",
    tech: "RPG Maker MZ",
    image: novaImg,
    link: "/games/nova-galactica"
  },
  {
    title: "The Detective Jane Case Series",
    description: "A narrative-driven mystery game solving complex cases revolving around the life of Jane Davies and veteran training officer Darren Mitts.",
    tech: "TBA",
    image: janeImg,
    link: "/games/detective-jane"
  },
];

const screenshots = [
  { title: "Action Shot 1", image: nightclubImg },
  { title: "Space View",    image: novaImg },
  { title: "Mystery Scene", image: janeImg },
];

function shuffleArray(array: any[]) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.2 } 
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

// --- CUSTOM CLIP PATHS ---
const techPanelStyle = {
  clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)"
};

const techButtonStyle = {
  clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)"
};

const smallTechCut = {
  clipPath: "polygon(5px 0, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%, 0 5px)"
};

export default function Home() {
  const [topRow, setTopRow] = useState(screenshots);
  const [bottomRow, setBottomRow] = useState(screenshots);

  useEffect(() => {
    setTopRow(shuffleArray(screenshots));
    setBottomRow(shuffleArray(screenshots));
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden">
      
      {/* Octagon Background Grid - Dark Mode Optimized */}
      <div className="fixed inset-0 z-0 pointer-events-none" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18 0 h24 l18 18 v24 l-18 18 h-24 l-18 -18 v-24 z' fill='none' stroke='%23334155' stroke-width='1' opacity='0.3'/%3E%3C/svg%3E")`,
             backgroundSize: '60px 60px'
           }}
      />
      
      {/* --- HERO SECTION --- */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden p-4 md:p-6 text-center">
        
        {/* BACKGROUND MARQUEE */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none">
           <div className="flex w-full -rotate-12 scale-100 md:scale-125 flex-col gap-4">
             {/* Top Row */}
             <div className="flex w-full overflow-hidden">
               <div className="flex animate-marquee whitespace-nowrap min-w-full flex-shrink-0">
                 {[...topRow, ...topRow, ...topRow].map((item, index) => (
                   <div key={`t1-${index}`} className="relative mx-2 md:mx-4 h-32 w-60 md:h-48 md:w-80 flex-shrink-0 overflow-hidden bg-slate-900 border border-slate-800" style={techPanelStyle}>
                     <Image src={item.image} alt={item.title} fill className="object-cover grayscale opacity-50" />
                   </div>
                 ))}
               </div>
               <div className="flex animate-marquee whitespace-nowrap min-w-full flex-shrink-0">
                 {[...topRow, ...topRow, ...topRow].map((item, index) => (
                   <div key={`t2-${index}`} className="relative mx-2 md:mx-4 h-32 w-60 md:h-48 md:w-80 flex-shrink-0 overflow-hidden bg-slate-900 border border-slate-800" style={techPanelStyle}>
                     <Image src={item.image} alt={item.title} fill className="object-cover grayscale opacity-50" />
                   </div>
                 ))}
               </div>
             </div>
             {/* Bottom Row */}
             <div className="flex w-full overflow-hidden">
               <div className="flex animate-marquee whitespace-nowrap min-w-full flex-shrink-0" style={{ animationDuration: '45s' }}>
                 {[...bottomRow, ...bottomRow, ...bottomRow].map((item, index) => (
                   <div key={`b1-${index}`} className="relative mx-2 md:mx-4 h-32 w-60 md:h-48 md:w-80 flex-shrink-0 overflow-hidden bg-slate-900 border border-slate-800" style={techPanelStyle}>
                     <Image src={item.image} alt={item.title} fill className="object-cover grayscale opacity-50" />
                   </div>
                 ))}
               </div>
               <div className="flex animate-marquee whitespace-nowrap min-w-full flex-shrink-0" style={{ animationDuration: '45s' }}>
                 {[...bottomRow, ...bottomRow, ...bottomRow].map((item, index) => (
                   <div key={`b2-${index}`} className="relative mx-2 md:mx-4 h-32 w-60 md:h-48 md:w-80 flex-shrink-0 overflow-hidden bg-slate-900 border border-slate-800" style={techPanelStyle}>
                     <Image src={item.image} alt={item.title} fill className="object-cover grayscale opacity-50" />
                   </div>
                 ))}
               </div>
             </div>
           </div>
        </div>

        {/* HERO CONTENT */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full max-w-4xl bg-slate-900/80 backdrop-blur-md p-6 md:p-10 border-2 border-slate-700 shadow-[0_0_30px_rgba(34,211,238,0.15)]"
          style={techPanelStyle} 
        >
          {/* Decorative Tech Lines */}
          <div className="absolute top-0 left-0 h-4 w-4 border-l-2 border-t-2 border-cyan-500"></div>
          <div className="absolute top-0 right-0 h-4 w-4 border-r-2 border-t-2 border-cyan-500"></div>
          <div className="absolute bottom-0 left-0 h-4 w-4 border-l-2 border-b-2 border-cyan-500"></div>
          <div className="absolute bottom-0 right-0 h-4 w-4 border-r-2 border-b-2 border-cyan-500"></div>

          <div className="mb-4 inline-flex items-center gap-2 border border-cyan-500/50 bg-cyan-950/50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-cyan-400">
             Independent Game Development & Tools Lab
          </div>

          <h1 className="mb-4 text-5xl md:text-7xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-slate-100 to-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)] leading-tight">
            OWLHOOT GAMES LLC
          </h1>
          
          <div className="mb-8 flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
            <span>HQ: Fort Worth, TX</span>
            <span>//</span>
            <span>Active Systems</span>
            <span>//</span>
            <span>Modular Design & Storytelling</span>
          </div>

          <p className="mb-10 text-base md:text-lg leading-relaxed text-slate-300 max-w-2xl mx-auto">
            Creating local experiences first, server based experienced second to bring back the soul of gaming. You buy, you own FOREVER! 
          </p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6"
          >
            {/* Primary Action */}
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34,211,238,0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="/games/nightclubsPRSM" 
              style={techButtonStyle}
              className="bg-cyan-500 px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-bold uppercase tracking-widest text-slate-950 transition-all hover:bg-cyan-400"
            >
              Explore our Flagship: PRSM
            </motion.a>

            {/* Secondary Action */}
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(147,51,234,0.2)" }}
              whileTap={{ scale: 0.95 }}
              href="#manifesto" 
              style={techButtonStyle}
              className="flex items-center gap-3 border-2 border-slate-700 bg-slate-900 px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-bold uppercase tracking-widest text-slate-300 transition-colors"
            >
              <span>Our Philosophy</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* --- STUDIO MANIFESTO SECTIONS --- */}
      <section id="manifesto" className="container mx-auto px-4 md:px-6 py-12 md:py-24 overflow-hidden relative z-10 space-y-20 md:space-y-32">
        
        {/* 1. PERPETUAL PLAY */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6 md:gap-10 md:flex-row md:items-center"
        >
          <div className="flex-1">
             <div className="mb-4 inline-flex items-center gap-2 border-2 border-cyan-800 bg-gradient-to-b from-slate-800 to-slate-900 px-4 py-1 text-xs font-bold uppercase tracking-widest text-cyan-400 shadow-md" style={smallTechCut}>
               <div className="h-2 w-2 bg-cyan-500 rounded-full animate-pulse"></div>
               <span>Pillar: 01</span>
             </div>
             
             {/* TEXT PLATE */}
             <div className="bg-slate-900/80 p-6 md:p-8 border-l-4 border-cyan-500 shadow-lg relative backdrop-blur-sm" style={techPanelStyle}>
                <h3 className="mb-2 md:mb-4 text-2xl md:text-4xl font-black uppercase text-white">The Perpetual Play Guarantee</h3>
                <p className="text-base md:text-lg leading-relaxed text-slate-400">
                  We build local-first games. You buy it, you own it. No always-online dependencies, no remote kill-switches, and zero server shutdowns that turn your game into an unplayable paperweight. If tertiary online features ever end, the core simulation gracefully decouples. 
                </p>
             </div>
          </div>
          {/* Tech Card */}
          <div className="flex-1 bg-slate-900/80 p-6 md:p-8 border border-slate-800 shadow-lg relative" style={techPanelStyle}>
             <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                   <span className="font-mono text-xs md:text-sm text-slate-500">REQUIREMENT_01</span>
                   <span className="font-bold text-sm md:text-base text-slate-300">Local Campaign</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                   <span className="font-mono text-xs md:text-sm text-slate-500">REQUIREMENT_02</span>
                   <span className="font-bold text-sm md:text-base text-slate-300">Offline Fallback</span>
                </div>
                <div className="flex items-center justify-between">
                   <span className="font-mono text-xs md:text-sm text-cyan-500">STATUS</span>
                   <span className="font-black text-sm md:text-base text-slate-900 bg-cyan-400 px-2">CONSUMER PROTECTED</span>
                </div>
             </div>
          </div>
        </motion.div>

        {/* 2. ACTIVE GAMEPLAY */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6 md:gap-10 md:flex-row-reverse md:items-center"
        >
          <div className="flex-1 text-left md:text-left">
             <div className="mb-4 inline-flex items-center gap-2 border-2 border-purple-800 bg-gradient-to-b from-slate-800 to-slate-900 px-4 py-1 text-xs font-bold uppercase tracking-widest text-purple-400 shadow-md" style={smallTechCut}>
               <div className="h-2 w-2 bg-purple-500 rounded-full animate-pulse"></div>
               <span>Pillar: 02</span>
             </div>

             {/* TEXT PLATE */}
             <div className="bg-slate-900/80 p-6 md:p-8 border-l-4 border-purple-500 shadow-lg relative backdrop-blur-sm" style={techPanelStyle}>
               <h3 className="mb-2 md:mb-4 text-2xl md:text-4xl font-black uppercase text-white">Active Systems</h3>
               <p className="text-base md:text-lg leading-relaxed text-slate-400">
                 Using FMOD systems to help us create better audio systems that are dynamic for our projects, especially for Nightclubs PRSM. AI Navmeshes helps us create dynamic and better AI NPCs for their behaviors and movements.
               </p>
             </div>
          </div>
          <div className="flex-1 bg-slate-900/80 p-6 md:p-8 border border-slate-800 shadow-lg" style={techPanelStyle}>
             <div className="text-center">
               <span className="block text-3xl md:text-5xl font-black text-purple-500 mb-2 drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]">FMOD + NavMesh</span>
               <span className="text-xs md:text-sm font-mono uppercase tracking-widest text-slate-500">Real-Time Audio & AI States</span>
             </div>
          </div>
        </motion.div>

        {/* 3. MODULAR ARCHITECTURE */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6 md:gap-10 md:flex-row md:items-center"
        >
           <div className="flex-1">
             <div className="mb-4 inline-flex items-center gap-2 border-2 border-emerald-800 bg-gradient-to-b from-slate-800 to-slate-900 px-4 py-1 text-xs font-bold uppercase tracking-widest text-emerald-400 shadow-md" style={smallTechCut}>
               <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></div>
               <span>Pillar: 03</span>
             </div>

             {/* TEXT PLATE */}
             <div className="bg-slate-900/80 p-6 md:p-8 border-l-4 border-emerald-500 shadow-lg relative backdrop-blur-sm" style={techPanelStyle}>
               <h3 className="mb-2 md:mb-4 text-2xl md:text-4xl font-black uppercase text-white">Modular Architecture</h3>
               <p className="text-base md:text-lg leading-relaxed text-slate-400">
                 We engineer reusable C# libraries and middleware tools before we build the game. By developing standalone parsing engines and proprietary toolsets, we ensure our games are built on rock-solid, bug-free foundations.
               </p>
             </div>
          </div>
          <div className="flex-1 bg-black p-6 md:p-8 border border-slate-800 shadow-lg flex items-center justify-center relative overflow-hidden" style={techPanelStyle}>
             <div className="absolute inset-0 bg-[linear-gradient(rgba(16,18,16,0)_50%,rgba(0,0,0,0.5)_50%),linear-gradient(90deg,rgba(0,255,100,0.03),rgba(0,255,100,0.01),rgba(0,255,100,0.03))] z-0 pointer-events-none bg-[length:100%_4px,6px_100%]"></div>
             <div className="text-left w-full z-10 font-mono text-xs md:text-sm text-emerald-500 space-y-2">
                <div className="border-b border-slate-800 pb-2 mb-2">&gt; INIT STANDALONE_LIBS...</div>
                <div>[OK] Chart_Parser.cs</div>
                <div>[OK] State_Machine_Core.dll</div>
                <div>[OK] Economy_Manager.cs</div>
                <div className="pt-2 text-white animate-pulse">Waiting for execution...</div>
             </div>
          </div>
        </motion.div>

        {/* 4. THE ROADMAP */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="w-full max-w-4xl mx-auto"
        >
          <div className="bg-slate-900/80 border border-slate-700 p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] relative" style={techPanelStyle}>
             <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 to-transparent pointer-events-none"></div>
             <h3 className="text-2xl font-black uppercase tracking-widest text-cyan-400 mb-6 text-center border-b border-slate-800 pb-4">Development Roadmap</h3>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="space-y-2 border-l-2 border-slate-700 pl-4 opacity-70">
                 <div className="font-bold text-white uppercase text-sm">Phase 1: Foundation (Complete)</div>
                 <p className="text-slate-400 text-sm">Established our social networks, defined the studio philosophy, and officially formed Owlhoot Games LLC to secure revenue-share contracts.</p>
               </div>
               <div className="space-y-2 border-l-2 border-cyan-500 pl-4">
                 <div className="font-bold text-white uppercase text-sm">Phase 2: Alpha Testing (Active)</div>
                 <p className="text-slate-400 text-sm">Game previews for Nightclubs PRSM, technical Unity/FMOD dev logs, and closed alpha testing of proprietary systems. Work-in-progress is being shared on Discord now, with Patreon and Facebook coming soon.</p>
               </div>
               <div className="space-y-2 border-l-2 border-slate-700 pl-4 opacity-70">
                 <div className="font-bold text-white uppercase text-sm">Phase 3: Season 0</div>
                 <p className="text-slate-400 text-sm">Free Community Early Access release of Nightclubs PRSM to gather feedback and stress-test the simulation economy.</p>
               </div>
               <div className="space-y-2 border-l-2 border-slate-700 pl-4 opacity-70">
                 <div className="font-bold text-white uppercase text-sm">Phase 4: Commercial Launch</div>
                 <p className="text-slate-400 text-sm">Season 1 full commercial release of Nightclubs PRSM with finalized episodic story content and advanced features.</p>
               </div>
             </div>
          </div>
        </motion.div>

      </section>

      {/* --- GAMES GRID SECTION --- */}
      <section id="games" className="container mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-24 relative z-10">
        <div className="mb-8 md:mb-12 flex items-center gap-4">
           <div className="h-[2px] w-8 md:w-12 bg-cyan-400"></div>
           <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-slate-100">Project_Database</h2>
           <div className="h-[2px] flex-1 bg-slate-800"></div>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} 
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.a 
              variants={itemVariants}
              key={index} 
              href={project.link} 
              className="group block relative bg-slate-900 border border-slate-800 transition-all hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
              style={techPanelStyle} 
            >
              {/* Image Container */}
              <div className="relative h-48 w-full bg-slate-950 overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100"/>
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80 transition-opacity group-hover:opacity-40"></div>
              </div>
              
              {/* Content */}
              <div className="p-6 border-l-4 border-transparent group-hover:border-cyan-400 transition-colors">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-bold uppercase text-slate-100">{project.title}</h3>
                </div>
                <p className="mb-4 text-sm text-slate-400 leading-relaxed">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/50 px-2 py-1 border border-cyan-500/30">{project.tech}</span>
                  <span className="text-slate-500 group-hover:text-cyan-400 transition-colors uppercase text-xs tracking-widest font-bold">► ACCESS</span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </section>

    </div>
  );
}
