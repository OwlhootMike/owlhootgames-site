"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { PATREON_URL } from "./Navbar";

const DISCORD_URL = "https://discord.gg/GfQScUK9Dm";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61561833126548";

const techButtonStyle = {
  clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)"
};

// Shared site footer ("Join the Network"). Shown on every page except the KTS test page,
// which keeps its own footer.
export default function Footer() {
  const pathname = usePathname();
  if (pathname?.toLowerCase().startsWith("/games/kts")) return null;

  return (
    <footer id="contact" className="relative z-10 bg-slate-950">
      <div className="bg-slate-900/50 py-12 md:py-24 text-center border-t border-slate-800">
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
          Phase 2 is active. Owlhoot Games is officially an LLC. Follow along on Discord and Facebook, with Patreon updates coming soon. Join in and help shape the future of PRSM.
        </p>
        <div className="flex justify-center gap-4 md:gap-6 flex-wrap">
          
          {/* Patreon */}
          <a href={PATREON_URL} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-950 border border-slate-700 text-pink-500 hover:text-pink-400 hover:border-pink-500 transition-all shadow-xs transform hover:scale-110 group" style={techButtonStyle}>
             <span className="sr-only">Patreon</span>
             <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M15.386 1c-4.757 0-8.618 3.86-8.618 8.618 0 4.757 3.86 8.618 8.618 8.618 4.757 0 8.614-3.861 8.614-8.618C24 4.86 20.143 1 15.386 1zM2.614 23h3.535V1H2.614v22z"/></svg>
          </a>

          {/* Reddit */}
          <a href="https://www.reddit.com/r/NightclubsPRSM/" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-950 border border-slate-700 text-orange-500 hover:text-orange-400 hover:border-orange-500 transition-all shadow-xs transform hover:scale-110" style={techButtonStyle}>
             <span className="sr-only">Reddit</span>
             <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 11.779c0-1.459-1.192-2.645-2.657-2.645-.715 0-1.363.286-1.84.746-1.81-1.191-4.259-1.949-6.971-2.046l1.483-4.669 4.016.941-.006.12c0 1.258 1.026 2.277 2.288 2.277 1.261 0 2.285-1.019 2.285-2.277 0-1.259-1.024-2.277-2.285-2.277-1.036 0-1.916.688-2.2 1.637l-4.238-.992c-.22-.051-.439.066-.51.277l-1.68 5.289c-2.822.05-5.38.809-7.25 2.033-.473-.46-1.121-.745-1.834-.745-1.465 0-2.657 1.186-2.657 2.645 0 .977.537 1.835 1.336 2.283-.021.203-.035.41-.035.618 0 3.753 5.372 6.8 12 6.8s12-3.047 12-6.8c0-.208-.014-.415-.034-.618.799-.448 1.336-1.306 1.336-2.283zm-16.711 3.518c0-1.257 1.026-2.276 2.288-2.276 1.262 0 2.286 1.019 2.286 2.276 0 1.259-1.024 2.278-2.286 2.278-1.262 0-2.288-1.019-2.288-2.278zm10.74 3.655c-1.32.997-3.666 1.218-5.74 1.218-2.072 0-4.42-.221-5.74-1.218-.31-.232-.375-.68-.141-.991.233-.31.68-.373.99-.139 1.008.756 2.946.993 4.891.993 1.947 0 3.885-.237 4.893-.993.31-.234.757-.171.99.139.234.311.169.759-.141.991zm-1.056-1.377c-1.261 0-2.286-1.019-2.286-2.278 0-1.257 1.025-2.276 2.286-2.276 1.262 0 2.287 1.019 2.287 2.276 0 1.259-1.025 2.278-2.287 2.278z"/></svg>
          </a>
          
          {/* Discord */}
          <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-950 border border-slate-700 text-indigo-500 hover:text-indigo-400 hover:border-indigo-500 transition-all shadow-xs transform hover:scale-110" style={techButtonStyle}>
             <span className="sr-only">Discord</span>
             <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
          </a>

          {/* Facebook */}
          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-950 border border-slate-700 text-blue-500 hover:text-blue-400 hover:border-blue-500 transition-all shadow-xs transform hover:scale-110" style={techButtonStyle}>
             <span className="sr-only">Facebook</span>
             <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
          </a>

          {/* Email */}
          <a href="mailto:macosta@owlhootgames.com" className="p-4 bg-slate-950 border border-slate-700 text-slate-400 hover:text-cyan-500 hover:border-cyan-400 transition-all shadow-xs transform hover:scale-110" style={techButtonStyle}>
             <span className="sr-only">Email</span>
             <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </a>
        </div>
        <div className="mt-12 text-sm text-slate-600 font-mono">
          {"// STUDIO STATUS: PHASE 2 ACTIVE"} <br/>
          &copy; {new Date().getFullYear()} Owlhoot Games LLC. All rights reserved. <br/>
          Founded by Michael Figueroa Acosta
        </div>
      </motion.div>
      </div>
    </footer>
  );
}
