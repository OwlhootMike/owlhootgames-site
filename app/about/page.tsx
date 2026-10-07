"use client";

import { motion, Variants } from "framer-motion"; // <-- Added 'Variants' here
import { Shield, Disc, Workflow, Users, Target, Lock } from "lucide-react"; 

// --- Animation Variants ---
// We added ': Variants' so TypeScript knows these are official Framer formats
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-purple-500/30">
      
      {/* 1. HERO / MANIFESTO */}
      <section className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            The <span className="text-purple-500">OwlHoot</span> Manifesto
          </h1>
          <p className="text-xl leading-relaxed text-slate-300 max-w-3xl mx-auto">
            Founded by Michael Figueroa Acosta, OwlHoot Games is an independent, preservation-first studio. 
            We are a structural antidote to the modern industry’s reliance on predatory monetization, 
            live-service fragility, and sudden software erasure.
          </p>
        </motion.div>
      </section>

      {/* 2. THE GENESIS & TIMELINE */}
      <section className="bg-slate-900/50 py-24 border-y border-slate-800">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Born from the Ashes of 2014</h2>
            <p className="text-lg text-slate-400">
              In July 2010, <span className="text-slate-200 font-semibold">Nightclub City</span> pioneered social simulation. By March 2014, corporate priorities shifted, servers went dark, and millions of players lost their progress overnight. OwlHoot Games was built to challenge this exact status quo. We believe in local-first architectures and perpetual play guarantees.
            </p>
          </motion.div>

          {/* Animated Timeline */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { year: "2019", title: "The Overwork Phase", desc: "Four simultaneous jobs across Universal, Disney, and GameStop, restricting dev time to midnight hours." },
              { year: "2020", title: "The Displacement", desc: "Contracted COVID-19 on Day 1 of lockdown. Financial crisis and housing instability halted all pipelines." },
              { year: "2023", title: "Texas & Data Loss", desc: "Relocated to Fort Worth as a Site Operations Manager. A catastrophic hard drive failure erased all source code." },
              { year: "2026", title: "Recovery & Shield", desc: "Formed OwlHoot Games LLC. Modernized the stack with Unity, Synty, and FMOD for a total codebase reboot." }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp} className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-purple-500/50 transition-colors relative overflow-hidden">
                <div className="text-purple-500 font-bold text-xl mb-2">{item.year}</div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. TECHNICAL ARCHITECTURE */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Technical Architecture</h2>
          <p className="text-slate-400">Clean boundaries to bypass historical development traps.</p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div variants={fadeInUp} className="p-8 rounded-2xl bg-gradient-to-b from-slate-800/50 to-slate-900 border border-slate-800">
            <Workflow className="w-10 h-10 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">The Unity Pivot</h3>
            <p className="text-slate-400 text-sm">Pivoted from GameMaker to utilize Unity's advanced NavMesh AI, solving the complex dynamic pathfinding required for massive nightclub crowds.</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="p-8 rounded-2xl bg-gradient-to-b from-slate-800/50 to-slate-900 border border-slate-800">
            <Disc className="w-10 h-10 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Hardware Reverse-Engineering</h3>
            <p className="text-slate-400 text-sm">Utilizing professional technician diagnostics on physical DJ turntable decks to ensure rhythm mechanics map with absolute physical accuracy.</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="p-8 rounded-2xl bg-gradient-to-b from-slate-800/50 to-slate-900 border border-slate-800">
            <Shield className="w-10 h-10 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">Intentional Restraint</h3>
            <p className="text-slate-400 text-sm">Benched Unreal Engine 5. We prioritize mid-tier accessibility and performance via modular Synty assets and FMOD audio over exclusionary visual bloat.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. THE ROADMAP */}
      <section className="bg-slate-900/50 py-24 border-y border-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white">The Version Roadmap</h2>
            <p className="text-slate-400 mt-2">A strike against sequel churn. One unified living client.</p>
          </motion.div>

          <div className="space-y-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col md:flex-row gap-6 items-start p-6 bg-slate-950 rounded-xl border border-slate-800">
              <div className="bg-purple-500/10 text-purple-400 px-4 py-2 rounded-lg font-mono font-bold whitespace-nowrap">
                v0.1 - v0.9
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">The Free Era: Establishment</h3>
                <p className="text-slate-400">100% Free Alpha. No paywalls. Community testing while we build our bespoke 3D art style.</p>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col md:flex-row gap-6 items-start p-6 bg-slate-950 rounded-xl border border-slate-800 border-l-4 border-l-purple-500">
              <div className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-lg font-mono font-bold whitespace-nowrap">
                v1.0 - v1.9
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">The Commercial Era: Season 1</h3>
                <p className="text-slate-400">Formal launch. Synty placeholders removed. Deep progression mechanics and world-building objectives introduced into the lore.</p>
              </div>
            </motion.div>

            {/* Redacted Section */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col md:flex-row gap-6 items-center justify-center p-6 bg-slate-900/40 rounded-xl border border-dashed border-slate-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-repeat bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-[0.03]"></div>
              <Lock className="w-8 h-8 text-slate-500 mb-2 md:mb-0 md:mr-2" />
              <div className="text-center md:text-left z-10">
                <h3 className="text-lg font-bold text-slate-500 tracking-widest uppercase mb-1">Milestones v2.0+ [Classified]</h3>
                <p className="text-slate-600 text-sm">Long-term seasonal mechanics and advanced platform expansions remain strictly under wraps until the Version 1.0 commercial launch.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. STUDIO ETHOS & DISTRIBUTION */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">Operational Ethics</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
            <Target className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">DRM-Free & Preservation First</h3>
            <p className="text-slate-400">
              We target Itch.io and GOG over algorithm-heavy platforms like Steam. We offer a Perpetual Play Guarantee—you own your software forever. We utilize crowdsourced QA with a "Fun-First" Exploit Policy: if a victimless bug brings joy, it becomes a feature.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="p-8 rounded-2xl bg-slate-900 border border-slate-800">
            <Users className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">The Immortalization Protocol</h3>
            <p className="text-slate-400">
              We reject the "Auteur" celebrity developer archetype. Freelance artists, indie composers, and early altruistic donors are permanently woven into the digital fabric of the universe as VIP patrons or lore characters, celebrated on the Master Studio Plaque.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}