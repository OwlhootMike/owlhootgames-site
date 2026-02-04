/**
 * @fileoverview Main Portfolio Homepage
 * @author Michael Figueroa Acosta
 * @stack Next.js, TailwindCSS, Framer Motion
 * @created Feb 1, 2026
 * * LATEST UPDATE:
 * - Optimized mobile responsiveness (Breakpoints & Overflow fix)
 * - Updated "Legacy" Log text for accuracy
 */

"use client"; 

import { motion } from "framer-motion"; 
import Image from "next/image";
import { useState, useEffect } from "react";

// --- IMAGE IMPORTS ---
import nightclubImg from './img-nightclub.png';
import novaImg from './img-nova.jpg';
import janeImg from './img-jane2.png';

// --- DATA SOURCES ---
const projects = [
  {
    title: "Nightclubs: PRSM",
    description: "A simulation game focused on nightlife management and social dynamics.",
    tech: "Unity", 
    image: nightclubImg,
    link: "/games/nightclubs" 
  },
  {
    title: "Nova Galactica",
    description: "A sci-fi narrative game, filled with cosmic beauty, drama, and heatbreak.",
    tech: "RPG Maker MZ",
    image: novaImg,
    link: "/games/nova-galactica"
  },
  {
    title: "The Detective Jane Case Series",
    description: "A narrative-driven mystery game solving complex cases revolving the life of Jane Davies, her sister Captain Jill Davies, and veteran and trainer officer Darren Mitts.",
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
    // MOBILE FIX: Added overflow-x-hidden to prevent horizontal scrolling glitches
    <div className="flex min-h-screen flex-col bg-slate-200 text-slate-800 font-sans selection:bg-cyan-400 selection:text-white overflow-x-hidden">
      
      {/* Octagon Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18 0 h24 l18 18 v24 l-18 18 h-24 l-18 -18 v-24 z' fill='none' stroke='%2394a3b8' stroke-width='1' opacity='0.4'/%3E%3C/svg%3E")`,
             backgroundSize: '60px 60px'
           }}
      />
      
      {/* --- HERO SECTION --- */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden p-4 md:p-6 text-center">
        
        {/* BACKGROUND MARQUEE */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
           {/* MOBILE FIX: Removed scale-125 on mobile to keep it contained, added md:scale-125 for desktop */}
           <div className="flex w-full -rotate-12 scale-100 md:scale-125 flex-col gap-4">
             {/* Top Row */}
             <div className="flex w-full overflow-hidden">
               <div className="flex animate-marquee whitespace-nowrap min-w-full flex-shrink-0">
                 {[...topRow, ...topRow, ...topRow].map((item, index) => (
                   <div key={`t1-${index}`} className="relative mx-2 md:mx-4 h-32 w-60 md:h-48 md:w-80 flex-shrink-0 overflow-hidden bg-slate-200" style={techPanelStyle}>
                     <Image src={item.image} alt={item.title} fill className="object-cover grayscale opacity-70" />
                   </div>
                 ))}
               </div>
               <div className="flex animate-marquee whitespace-nowrap min-w-full flex-shrink-0">
                 {[...topRow, ...topRow, ...topRow].map((item, index) => (
                   <div key={`t2-${index}`} className="relative mx-2 md:mx-4 h-32 w-60 md:h-48 md:w-80 flex-shrink-0 overflow-hidden bg-slate-200" style={techPanelStyle}>
                     <Image src={item.image} alt={item.title} fill className="object-cover grayscale opacity-70" />
                   </div>
                 ))}
               </div>
             </div>
             {/* Bottom Row */}
             <div className="flex w-full overflow-hidden">
               <div className="flex animate-marquee whitespace-nowrap min-w-full flex-shrink-0" style={{ animationDuration: '45s' }}>
                 {[...bottomRow, ...bottomRow, ...bottomRow].map((item, index) => (
                   <div key={`b1-${index}`} className="relative mx-2 md:mx-4 h-32 w-60 md:h-48 md:w-80 flex-shrink-0 overflow-hidden bg-slate-200" style={techPanelStyle}>
                     <Image src={item.image} alt={item.title} fill className="object-cover grayscale opacity-70" />
                   </div>
                 ))}
               </div>
               <div className="flex animate-marquee whitespace-nowrap min-w-full flex-shrink-0" style={{ animationDuration: '45s' }}>
                 {[...bottomRow, ...bottomRow, ...bottomRow].map((item, index) => (
                   <div key={`b2-${index}`} className="relative mx-2 md:mx-4 h-32 w-60 md:h-48 md:w-80 flex-shrink-0 overflow-hidden bg-slate-200" style={techPanelStyle}>
                     <Image src={item.image} alt={item.title} fill className="object-cover grayscale opacity-70" />
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
          // MOBILE FIX: Reduced padding p-6 for mobile, p-10 for desktop
          className="relative z-10 w-full max-w-4xl bg-white/80 backdrop-blur-md p-6 md:p-10 border-2 border-slate-200 shadow-[0_0_30px_rgba(34,211,238,0.2)]"
          style={techPanelStyle} 
        >
          {/* Decorative Tech Lines */}
          <div className="absolute top-0 left-0 h-4 w-4 border-l-2 border-t-2 border-cyan-500"></div>
          <div className="absolute top-0 right-0 h-4 w-4 border-r-2 border-t-2 border-cyan-500"></div>
          <div className="absolute bottom-0 left-0 h-4 w-4 border-l-2 border-b-2 border-cyan-500"></div>
          <div className="absolute bottom-0 right-0 h-4 w-4 border-r-2 border-b-2 border-cyan-500"></div>

          {/* MOBILE FIX: Text size 4xl for mobile, 6xl for desktop to prevent wrapping */}
          <h1 className="mb-4 text-4xl md:text-6xl font-black uppercase tracking-widest text-slate-900 leading-tight">
            MICHAEL FIGUEROA ACOSTA
          </h1>
          {/* MOBILE FIX: Flex-wrap allows tags to stack on small screens */}
          <div className="mb-8 flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
            <span>Dev_Ops</span>
            <span>//</span>
            <span>QA_Lead</span>
            <span>//</span>
            <span>Architect</span>
            <span>//</span>
            <span>AI Programmer</span>
            <span>//</span>
            <span>Hobby Artist</span>
          </div>

          <p className="mb-10 text-base md:text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
            Building immersive experiences with <span className="font-bold text-slate-900">Unity (C#), UE5 (Blueprints), GameMaker Studio</span> & <span className="font-bold text-slate-900">RPG Maker</span>.<br className="hidden md:block"/>
            Creator of <span className="font-bold text-cyan-600">OwlHoot Games</span>.
          </p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6"
          >
            {/* Primary Action - Tech Button */}
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34,211,238,0.6)" }}
              whileTap={{ scale: 0.95 }}
              href="#games" 
              style={techButtonStyle}
              // MOBILE FIX: Adjusted padding and font size for buttons
              className="bg-cyan-500 px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-bold uppercase tracking-widest text-white transition-all hover:bg-cyan-400"
            >
              Database of Games
            </motion.a>

            {/* Resume Button */}
            <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(34,211,238,0.1)" }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/mfa-gamedev/" 
              target="_blank"
              rel="noopener noreferrer"
              style={techButtonStyle}
              className="flex items-center gap-3 border-2 border-slate-300 bg-white px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-bold uppercase tracking-widest text-slate-700 transition-colors"
            >
              <span>Resume</span>
            </motion.a>

             {/* Contact Button */}
             <motion.a 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(34,211,238,0.1)" }}
              whileTap={{ scale: 0.95 }}
              href="mailto:michaelacosta41@gmail.com" 
              style={techButtonStyle}
              className="flex items-center border-2 border-slate-300 bg-white px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-bold uppercase tracking-widest text-slate-700 transition-colors"
            >
              Contact
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* --- SCROLL-TRIGGERED NARRATIVE SECTIONS --- */}
      <section className="container mx-auto px-4 md:px-6 py-12 md:py-24 overflow-hidden relative z-10 space-y-20 md:space-y-32">
        
        {/* 1. ORIGINS */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6 md:gap-10 md:flex-row md:items-center"
        >
          <div className="flex-1">
             <div className="mb-4 inline-flex items-center gap-2 border-2 border-slate-400 bg-gradient-to-b from-slate-200 to-slate-300 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-700 shadow-md" style={smallTechCut}>
               <div className="h-2 w-2 bg-orange-500 rounded-full"></div>
               <span>Log: 001</span>
             </div>
             
             {/* TEXT PLATE */}
             <div className="bg-white p-6 md:p-8 border-l-4 border-orange-500 shadow-lg relative" style={techPanelStyle}>
                <h3 className="mb-2 md:mb-4 text-2xl md:text-4xl font-black uppercase text-slate-800">Origins</h3>
                <p className="text-base md:text-lg leading-relaxed text-slate-600">
                  Born in Puerto Rico. Route: Graphic Design → IT → Engineering → Game Design. <br/>
                  Final compilation at <strong>Full Sail University</strong>.
                </p>
             </div>
          </div>
          {/* Tech Card */}
          <div className="flex-1 bg-white p-6 md:p-8 border border-slate-200 shadow-lg relative" style={techPanelStyle}>
             <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                   <span className="font-mono text-xs md:text-sm text-slate-400">MODULE_01</span>
                   <span className="font-bold text-sm md:text-base text-slate-800">Graphic Design</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                   <span className="font-mono text-xs md:text-sm text-slate-400">MODULE_02</span>
                   <span className="font-bold text-sm md:text-base text-slate-800">Computer Eng.</span>
                </div>
                <div className="flex items-center justify-between">
                   <span className="font-mono text-xs md:text-sm text-orange-500">CURRENT</span>
                   <span className="font-black text-sm md:text-base text-slate-900 bg-orange-100 px-2">GAME DESIGN</span>
                </div>
             </div>
          </div>
        </motion.div>

        {/* 2. LEGACY */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6 md:gap-10 md:flex-row-reverse md:items-center"
        >
          <div className="flex-1 text-left md:text-left">
             <div className="mb-4 inline-flex items-center gap-2 border-2 border-slate-400 bg-gradient-to-b from-slate-200 to-slate-300 px-4 py-1 text-xs font-bold uppercase tracking-widest text-cyan-700 shadow-md" style={smallTechCut}>
               <div className="h-2 w-2 bg-cyan-500 rounded-full"></div>
               <span>Log: 002</span>
             </div>

             {/* TEXT PLATE */}
             <div className="bg-white p-6 md:p-8 border-l-4 border-cyan-500 shadow-lg relative" style={techPanelStyle}>
               <h3 className="mb-2 md:mb-4 text-2xl md:text-4xl font-black uppercase text-slate-800">Legacy</h3>
               <p className="text-base md:text-lg leading-relaxed text-slate-600">
                 Ex Indie Journalist for <em>Yo Soy Un Gamer</em> and current Webmaster, VP and Journalist for <em>Tu Zona Gamer</em>. First 5 Game Jams: <strong>3 Podiums</strong> (1st, 2nd, 3rd).
                 Internship: Space Rhino Games. Testing: Degica Games.
               </p>
             </div>
          </div>
          <div className="flex-1 bg-white p-6 md:p-8 border border-slate-200 shadow-lg" style={techPanelStyle}>
             <div className="text-center">
               <span className="block text-3xl md:text-5xl font-black text-cyan-500 mb-2 drop-shadow-sm">Industry Rising Star</span>
               <span className="text-xs md:text-sm font-mono uppercase tracking-widest text-slate-400">Journalism, Game Jams & Internships</span>
             </div>
          </div>
        </motion.div>

        {/* 3. CURRENT WORK */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6 md:gap-10 md:flex-row md:items-center"
        >
           <div className="flex-1">
             <div className="mb-4 inline-flex items-center gap-2 border-2 border-slate-400 bg-gradient-to-b from-slate-200 to-slate-300 px-4 py-1 text-xs font-bold uppercase tracking-widest text-red-700 shadow-md" style={smallTechCut}>
               <div className="h-2 w-2 bg-red-500 rounded-full"></div>
               <span>Log: 003</span>
             </div>

             {/* TEXT PLATE */}
             <div className="bg-white p-6 md:p-8 border-l-4 border-red-500 shadow-lg relative" style={techPanelStyle}>
               <h3 className="mb-2 md:mb-4 text-2xl md:text-4xl font-black uppercase text-slate-800">Active Task</h3>
               <p className="text-base md:text-lg leading-relaxed text-slate-600">
                 Developing successor to classic Facebook title. Two visual novels in production.<br/>
                 <strong>Honor Games</strong>: Designer (Ex-QA Lead) for Project <em>Vultures</em>.
               </p>
             </div>
          </div>
          <div className="flex-1 bg-white p-6 md:p-8 border border-slate-200 shadow-lg flex items-center justify-center relative overflow-hidden" style={techPanelStyle}>
             {/* Scanline effect */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(255,0,0,0.02),rgba(255,0,0,0.06))] z-0 pointer-events-none bg-[length:100%_4px,6px_100%]"></div>
             <div className="text-center z-10">
                <div className="text-2xl md:text-3xl font-black text-red-500 mb-1 tracking-widest">HONOR GAMES</div>
                <div className="inline-block bg-red-600 text-white text-xs font-bold px-2 py-1 uppercase">Role: Designer</div>
             </div>
          </div>
        </motion.div>

        {/* 4. AI SYSTEMS */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6 md:gap-10 md:flex-row-reverse md:items-center"
        >
          <div className="flex-1">
             <div className="mb-4 inline-flex items-center gap-2 border-2 border-slate-400 bg-gradient-to-b from-slate-200 to-slate-300 px-4 py-1 text-xs font-bold uppercase tracking-widest text-indigo-700 shadow-md" style={smallTechCut}>
               <div className="h-2 w-2 bg-indigo-500 rounded-full"></div>
               <span>Log: 004</span>
             </div>

             {/* TEXT PLATE */}
             <div className="bg-white p-6 md:p-8 border-l-4 border-indigo-500 shadow-lg relative" style={techPanelStyle}>
               <h3 className="mb-2 md:mb-4 text-2xl md:text-4xl font-black uppercase text-slate-800">AI Logic</h3>
               <p className="text-base md:text-lg leading-relaxed text-slate-600">
                 Architecting intelligent behaviors. Enemy pathfinding, combat tactics, and reactive NPC states using advanced Behavior Trees.
               </p>
             </div>
          </div>
          <div className="flex-1 bg-zinc-900 p-6 md:p-8 border border-zinc-700 shadow-lg" style={techPanelStyle}>
             <div className="space-y-3 font-mono text-xs md:text-sm text-green-400">
                <div className="flex justify-between border-b border-zinc-700 pb-2">
                  <span>&gt; SYSTEM.AI_ROOT</span>
                  <span className="animate-pulse">ONLINE</span>
                </div>
                <div className="pl-4 border-l border-zinc-700">├─ Patrol_Nodes (Vector3)</div>
                <div className="pl-4 border-l border-zinc-700">├─ Detect_Player (Raycast)</div>
                <div className="pl-4 border-l border-zinc-700">└─ Execute_Flank (State)</div>
             </div>
          </div>
        </motion.div>

        {/* 5. 3D FABRICATION */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6 md:gap-10 md:flex-row md:items-center"
        >
          <div className="flex-1">
             <div className="mb-4 inline-flex items-center gap-2 border-2 border-slate-400 bg-gradient-to-b from-slate-200 to-slate-300 px-4 py-1 text-xs font-bold uppercase tracking-widest text-teal-700 shadow-md" style={smallTechCut}>
               <div className="h-2 w-2 bg-teal-500 rounded-full"></div>
               <span>Log: 005</span>
             </div>

             {/* TEXT PLATE */}
             <div className="bg-white p-6 md:p-8 border-l-4 border-teal-500 shadow-lg relative" style={techPanelStyle}>
               <h3 className="mb-2 md:mb-4 text-2xl md:text-4xl font-black uppercase text-slate-800">Fabrication</h3>
               <p className="text-base md:text-lg leading-relaxed text-slate-600">
                 Bridging digital and physical. Utilizing <strong>Blender</strong> for modeling and blueprints, converting assets for game environments and 3D printing.
               </p>
             </div>
          </div>
          <div className="flex-1 bg-white p-6 md:p-8 border border-slate-200 shadow-lg grid grid-cols-2 gap-4" style={techPanelStyle}>
             <div className="bg-slate-50 p-4 border border-slate-100 text-center">
                <span className="block text-lg md:text-xl font-bold text-slate-700">Blender</span>
                <span className="text-xs font-mono text-slate-400 uppercase">Modeling</span>
             </div>
             <div className="bg-slate-50 p-4 border border-slate-100 text-center">
                <span className="block text-lg md:text-xl font-bold text-slate-700">Cura</span>
                <span className="text-xs font-mono text-slate-400 uppercase">Slicing</span>
             </div>
             <div className="col-span-2 bg-teal-500 text-white p-2 text-center text-xs font-bold uppercase tracking-widest">
                Physical_Asset_Pipeline
             </div>
          </div>
        </motion.div>

        {/* 6. QA FIRST */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6 md:gap-10 md:flex-row-reverse md:items-center"
        >
          <div className="flex-1">
             <div className="mb-4 inline-flex items-center gap-2 border-2 border-slate-400 bg-gradient-to-b from-slate-200 to-slate-300 px-4 py-1 text-xs font-bold uppercase tracking-widest text-blue-700 shadow-md" style={smallTechCut}>
               <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
               <span>Log: 006</span>
             </div>

             {/* TEXT PLATE */}
             <div className="bg-white p-6 md:p-8 border-l-4 border-blue-500 shadow-lg relative" style={techPanelStyle}>
               <h3 className="mb-2 md:mb-4 text-2xl md:text-4xl font-black uppercase text-slate-800">Stability</h3>
               <p className="text-base md:text-lg leading-relaxed text-slate-600">
                 Great games are broken and rebuilt. My "stability-first" mindset ensures mechanics are robust. 
                 QA isn't just bug hunting; it's protecting the player experience.
               </p>
             </div>
          </div>
          <div className="flex-1 bg-slate-800 p-6 md:p-8 border border-slate-600 shadow-lg" style={techPanelStyle}>
             <code className="block text-xs md:text-sm text-green-400 font-mono">
               // QA_Log: Integrity<br/>
               <span className="text-slate-500">------------------</span><br/>
               [PASS] Player_Trust<br/>
               [PASS] Client_Promise<br/>
               [PASS] Core_Mechanics<br/>
               <span className="animate-pulse font-bold text-blue-400">STATUS: GOLD_MASTER</span>
             </code>
          </div>
        </motion.div>

        {/* 7. FULL STACK */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6 md:gap-10 md:flex-row md:items-center"
        >
          <div className="flex-1">
             <div className="mb-4 inline-flex items-center gap-2 border-2 border-slate-400 bg-gradient-to-b from-slate-200 to-slate-300 px-4 py-1 text-xs font-bold uppercase tracking-widest text-purple-700 shadow-md" style={smallTechCut}>
               <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
               <span>Log: 007</span>
             </div>

             {/* TEXT PLATE */}
             <div className="bg-white p-6 md:p-8 border-l-4 border-purple-500 shadow-lg relative" style={techPanelStyle}>
               <h3 className="mb-2 md:mb-4 text-2xl md:text-4xl font-black uppercase text-slate-800">Full Stack</h3>
               <p className="text-base md:text-lg leading-relaxed text-slate-600">
                 From pixel art in Aseprite and GraphicsGale to complex C# logic in Unity. Wiring UI systems, optimizing shaders, and wearing every hat in the pipeline.
               </p>
             </div>
          </div>
          <div className="flex-1 bg-white p-6 md:p-8 border border-slate-200 shadow-lg grid grid-cols-2 gap-4" style={techPanelStyle}>
             <div className="p-4 bg-slate-50 text-center border-l-2 border-purple-500"><span className="font-bold text-sm md:text-base text-slate-700">Unity</span></div>
             <div className="p-4 bg-slate-50 text-center border-l-2 border-purple-500"><span className="font-bold text-sm md:text-base text-slate-700">Src Ctrl</span></div>
             <div className="p-4 bg-slate-50 text-center border-l-2 border-purple-500"><span className="font-bold text-sm md:text-base text-slate-700">G. Gale</span></div>
             <div className="p-4 bg-slate-50 text-center border-l-2 border-purple-500"><span className="font-bold text-sm md:text-base text-slate-700">Jira</span></div>
          </div>
        </motion.div>

      </section>

      {/* --- GAMES GRID SECTION --- */}
      <section id="games" className="container mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-24 relative z-10">
        <div className="mb-8 md:mb-12 flex items-center gap-4">
           <div className="h-[2px] w-8 md:w-12 bg-cyan-400"></div>
           <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest text-slate-800">Project_Database</h2>
           <div className="h-[2px] flex-1 bg-slate-200"></div>
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
              className="group block relative bg-white transition-all hover:-translate-y-2"
              style={techPanelStyle} 
            >
              {/* Image Container */}
              <div className="relative h-48 w-full bg-slate-200 overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"/>
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              </div>
              
              {/* Content */}
              <div className="p-6 border-l-4 border-transparent group-hover:border-cyan-400 transition-colors">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-bold uppercase text-slate-800">{project.title}</h3>
                </div>
                <p className="mb-4 text-sm text-slate-500 leading-relaxed">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs font-bold text-cyan-600 bg-cyan-50 px-2 py-1">{project.tech}</span>
                  <span className="text-slate-300 group-hover:text-cyan-400 transition-colors">► ACCESS</span>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="bg-slate-100 py-12 md:py-24 text-center relative z-10 border-t border-slate-200">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 md:px-6 max-w-2xl"
        >
          <div className="mx-auto mb-8 h-16 w-16 bg-cyan-400 text-white flex items-center justify-center" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
             <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
          </div>
          <h2 className="mb-6 text-2xl md:text-3xl font-black uppercase text-slate-800">Establish Comms</h2>
          <p className="mb-10 text-slate-600">
            Currently open to new opportunities in Game QA and Development. 
            Initialize connection protocol below.
          </p>
          <div className="flex justify-center gap-4 md:gap-6 flex-wrap">
            <a href="https://www.linkedin.com/in/mfa-gamedev/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white border border-slate-200 text-slate-600 hover:text-cyan-500 hover:border-cyan-400 transition-all shadow-sm transform hover:scale-110" style={techButtonStyle}>
               <span className="sr-only">LinkedIn</span>
               <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://github.com/OwlhootMike" className="p-4 bg-white border border-slate-200 text-slate-600 hover:text-cyan-500 hover:border-cyan-400 transition-all shadow-sm transform hover:scale-110" style={techButtonStyle}>
               <span className="sr-only">GitHub</span>
               <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="mailto:michaelacosta41@gmail.com" className="p-4 bg-white border border-slate-200 text-slate-600 hover:text-cyan-500 hover:border-cyan-400 transition-all shadow-sm transform hover:scale-110" style={techButtonStyle}>
               <span className="sr-only">Email</span>
               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </a>
          </div>
          <div className="mt-12 text-sm text-slate-400 font-mono">
            // SYSTEM STATUS: OPTIMAL <br/>
            &copy; {new Date().getFullYear()} OwlHoot Games. All rights reserved.
            Site created by: Michael Figueroa Acosta. Part of Portfolio.
          </div>
        </motion.div>
      </section>

    </div>
  );
}