"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ArchivePage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-slate-300 font-sans selection:bg-emerald-500 selection:text-black pt-24 pb-12">
      
      {/* Background Noise */}
      <div className="fixed inset-0 z-0 opacity-5 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* --- HEADER --- */}
      <div className="container mx-auto px-6 mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-white uppercase mb-2 tracking-tight">
          Project Archive
        </h1>
        <p className="text-slate-500 font-mono text-sm uppercase tracking-widest border-b border-slate-800 pb-4">
          Experimental Builds // Game Jams // Past Credits
        </p>
      </div>

      {/* --- ARCHIVE GRID --- */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* CARD 1: GLOBAL GAME JAM 2026 */}
        <ArchiveCard 
           title="Rhythm Protocol"
           role="Lead Programmer"
           year="2026"
           platform="Global Game Jam"
           description="A rhythm-action game built in 48 hours. Created custom audio-sync mechanics and beat detection."
           link="https://globalgamejam.org/" // Update this!
           tech={["Unity", "C#", "FMOD"]}
        />

        {/* CARD 2: PARTYCLUB CITY */}
        <ArchiveCard 
           title="Partyclub City"
           role="Solo Developer"
           year="2025"
           platform="Itch.io"
           description="An incremental tycoon game about managing nightlife economy. Features distinct prestige layers."
           link="https://owlhootgames.itch.io/" // Update this!
           tech={["React", "TypeScript", "Tailwind"]}
        />

        {/* CARD 3: SPACE RHINO (QA) */}
        <ArchiveCard 
           title="Space Rhino Games"
           role="QA Tester Intern"
           year="2014-2015"
           platform="Professional Work"
           description="Performed regression testing and bug tracking for mobile titles. Assisted in gameplay balancing."
           link="#" 
           tech={["JIRA", "iOS", "Android"]}
        />

      </div>
      
      {/* RETURN BUTTON */}
      <div className="container mx-auto px-6 mt-12">
        <Link href="/" className="text-sm font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors">
           ◄ Return to Main Database
        </Link>
      </div>

    </div>
  );
}

// --- REUSABLE CARD COMPONENT ---
function ArchiveCard({ title, role, year, platform, description, link, tech }: any) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-neutral-900 border border-neutral-800 p-6 flex flex-col justify-between group hover:border-emerald-500/50 transition-colors"
    >
      <div>
        <div className="flex justify-between items-start mb-4">
           <div>
             <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">{title}</h3>
             <span className="text-xs font-mono text-emerald-600 uppercase">{platform}</span>
           </div>
           <span className="text-xs font-mono text-slate-600 border border-slate-800 px-2 py-1 rounded">{year}</span>
        </div>
        
        <p className="text-sm text-slate-400 leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div>
        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
           {tech.map((t: string) => (
             <span key={t} className="text-[10px] font-bold uppercase text-slate-500 bg-neutral-800 px-2 py-1 rounded">
               {t}
             </span>
           ))}
        </div>

        {/* Bottom Metadata */}
        <div className="pt-4 border-t border-neutral-800 flex justify-between items-center">
           <span className="text-xs text-slate-500 font-bold">{role}</span>
           <a href={link} target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase text-white bg-neutral-800 px-3 py-2 hover:bg-emerald-600 transition-colors">
             View Project
           </a>
        </div>
      </div>
    </motion.div>
  )
}