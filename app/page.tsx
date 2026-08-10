/**
 * @fileoverview OwlHoot Games Studio Homepage
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
    link: "/games/nightclubs" 
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
            OWLHOOT GAMES
          </h1>
          
          <div className="mb-8 flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
            <span>New HQ: Fort Worth, TX</span>
            <span>//</span>
            <span>Active Systems</span>
            <span>//</span>
            <span>Modular Design</span>
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
              href="/games/nightclubs" 
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
               <div className="space-y-2 border-l-2 border-cyan-500 pl-4">
                 <div className="font-bold text-white uppercase text-sm">Phase 1: Foundation (Active)</div>
                 <p className="text-slate-400 text-sm">Establish social networks, define studio philosophy, and hit our $300 LLC goal to secure revenue-share contracts.</p>
               </div>
               <div className="space-y-2 border-l-2 border-slate-700 pl-4 opacity-70">
                 <div className="font-bold text-white uppercase text-sm">Phase 2: Alpha Testing</div>
                 <p className="text-slate-400 text-sm">Game previews, technical Unity/FMOD dev logs, and closed alpha testing of proprietary systems.</p>
               </div>
               <div className="space-y-2 border-l-2 border-slate-700 pl-4 opacity-70">
                 <div className="font-bold text-white uppercase text-sm">Phase 3: Season 0</div>
                 <p className="text-slate-400 text-sm">Free Community Early Access release to gather feedback and stress-test the simulation economy.</p>
               </div>
               <div className="space-y-2 border-l-2 border-slate-700 pl-4 opacity-70">
                 <div className="font-bold text-white uppercase text-sm">Phase 4: Commercial Launch</div>
                 <p className="text-slate-400 text-sm">Season 1 full commercial release with finalized episodic story content and advanced features.</p>
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

      {/* --- CONTACT / COMMUNITY SECTION --- */}
      <section id="contact" className="bg-slate-900/50 py-12 md:py-24 text-center relative z-10 border-t border-slate-800">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 md:px-6 max-w-2xl"
        >
          <div className="mx-auto mb-8 h-16 w-16 bg-cyan-500 text-slate-950 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.4)]" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
             <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <h2 className="mb-6 text-2xl md:text-3xl font-black uppercase text-white">Join the Network</h2>
          <p className="mb-10 text-slate-400">
            Phase 1 is active. Support our LLC goal, join the VIP Discord, and help shape the future of PRSM.
          </p>
          <div className="flex justify-center gap-4 md:gap-6 flex-wrap">
            
            {/* Patreon */}
            <a href="https://www.patreon.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-950 border border-slate-700 text-pink-500 hover:text-pink-400 hover:border-pink-500 transition-all shadow-sm transform hover:scale-110 group" style={techButtonStyle}>
               <span className="sr-only">Patreon</span>
               <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M15.386 1c-4.757 0-8.618 3.86-8.618 8.618 0 4.757 3.86 8.618 8.618 8.618 4.757 0 8.614-3.861 8.614-8.618C24 4.86 20.143 1 15.386 1zM2.614 23h3.535V1H2.614v22z"/></svg>
            </a>

            {/* Reddit */}
            <a href="https://www.reddit.com/r/NightclubsPRSM/" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-950 border border-slate-700 text-orange-500 hover:text-orange-400 hover:border-orange-500 transition-all shadow-sm transform hover:scale-110" style={techButtonStyle}>
               <span className="sr-only">Reddit</span>
               <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 11.779c0-1.459-1.192-2.645-2.657-2.645-.715 0-1.363.286-1.84.746-1.81-1.191-4.259-1.949-6.971-2.046l1.483-4.669 4.016.941-.006.12c0 1.258 1.026 2.277 2.288 2.277 1.261 0 2.285-1.019 2.285-2.277 0-1.259-1.024-2.277-2.285-2.277-1.036 0-1.916.688-2.2 1.637l-4.238-.992c-.22-.051-.439.066-.51.277l-1.68 5.289c-2.822.05-5.38.809-7.25 2.033-.473-.46-1.121-.745-1.834-.745-1.465 0-2.657 1.186-2.657 2.645 0 .977.537 1.835 1.336 2.283-.021.203-.035.41-.035.618 0 3.753 5.372 6.8 12 6.8s12-3.047 12-6.8c0-.208-.014-.415-.034-.618.799-.448 1.336-1.306 1.336-2.283zm-16.711 3.518c0-1.257 1.026-2.276 2.288-2.276 1.262 0 2.286 1.019 2.286 2.276 0 1.259-1.024 2.278-2.286 2.278-1.262 0-2.288-1.019-2.288-2.278zm10.74 3.655c-1.32.997-3.666 1.218-5.74 1.218-2.072 0-4.42-.221-5.74-1.218-.31-.232-.375-.68-.141-.991.233-.31.68-.373.99-.139 1.008.756 2.946.993 4.891.993 1.947 0 3.885-.237 4.893-.993.31-.234.757-.171.99.139.234.311.169.759-.141.991zm-1.056-1.377c-1.261 0-2.286-1.019-2.286-2.278 0-1.257 1.025-2.276 2.286-2.276 1.262 0 2.287 1.019 2.287 2.276 0 1.259-1.025 2.278-2.287 2.278z"/></svg>
            </a>
            
            {/* Discord */}
            <a href="https://discord.gg" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-950 border border-slate-700 text-indigo-500 hover:text-indigo-400 hover:border-indigo-500 transition-all shadow-sm transform hover:scale-110" style={techButtonStyle}>
               <span className="sr-only">Discord</span>
               <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
            </a>

            {/* Email */}
            <a href="mailto:macosta@owlhootgames.com" className="p-4 bg-slate-950 border border-slate-700 text-slate-400 hover:text-cyan-500 hover:border-cyan-400 transition-all shadow-sm transform hover:scale-110" style={techButtonStyle}>
               <span className="sr-only">Email</span>
               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </a>
          </div>
          <div className="mt-12 text-sm text-slate-600 font-mono">
            // STUDIO STATUS: PHASE 1 ACTIVE <br/>
            &copy; {new Date().getFullYear()} OwlHoot Games. All rights reserved. <br/>
            Founded by Michael Figueroa Acosta
          </div>
        </motion.div>
      </section>

    </div>
  );
}