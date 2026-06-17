"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// EDIT: Import your friend's actual images here. 
// For testing, you can use a placeholder or keep your existing imports.
// import photo1 from '../../public/photo1.jpg';

export default function PhotographyPage() {
  return (
    // Forces a clean white background, overriding global dark themes
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-emerald-200 selection:text-emerald-900 overflow-x-hidden">
      
      {/* --- SUBTLE BACKGROUND ACCENT --- */}
      {/* A very light, blurry green gradient orb in the top right to give that "undertone" feel */}
      <div className="fixed top-[-10%] right-[-5%] w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50 pointer-events-none z-0"></div>

      {/* --- HEADER / NAVIGATION --- */}
      <header className="relative pt-12 pb-6 px-6 container mx-auto text-left z-10 flex flex-col md:flex-row gap-8 items-end border-b border-emerald-100 mb-12">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          {/* Back button, styled cleanly to match the new aesthetic */}
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-800 transition-colors text-xs font-semibold uppercase tracking-wider">
               <span>←</span> <span>Return to Main Site</span>
            </Link>
          </div>

          {/* EDIT: Replace with your friend's brand/name */}
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-slate-900 mb-2">
            Lens <span className="font-semibold text-emerald-600">&</span> Light
          </h1>
          <p className="text-slate-500 tracking-wide uppercase text-sm">Photography Portfolio</p>
        </motion.div>
        
      </header>

      {/* --- MAIN SHOWCASE / GALLERY --- */}
      <main className="container mx-auto px-6 pb-24 relative z-10">
        
        {/* INTRO TEXT */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-2xl mb-16"
        >
          {/* EDIT: Add your friend's bio or mission statement here */}
          <h2 className="text-2xl text-slate-800 font-medium mb-4">
            Capturing the beauty of the everyday.
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Welcome to my visual journal. I specialize in portrait, landscape, and event photography, 
            focusing on natural light and authentic moments. 
          </p>
        </motion.div>

        {/* PHOTO GRID */}
        {/* EDIT: Add or remove cards based on how many photos they want to show. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Image Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative aspect-[4/5] overflow-hidden bg-slate-100 rounded-sm"
          >
            {/* EDIT: Replace src with actual imported image object or path */}
            <Image 
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop" 
              alt="Photography sample 1" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Hover Overlay: light green tint with text */}
            <div className="absolute inset-0 bg-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
               {/* EDIT: Change the caption/category */}
               <span className="text-white font-medium drop-shadow-md">Editorial Portraits</span>
            </div>
          </motion.div>

          {/* Image Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative aspect-[4/5] overflow-hidden bg-slate-100 rounded-sm"
          >
            {/* EDIT: Replace src */}
            <Image 
              src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1000&auto=format&fit=crop" 
              alt="Photography sample 2" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
               <span className="text-white font-medium drop-shadow-md">Lifestyle & Travel</span>
            </div>
          </motion.div>

          {/* Image Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative aspect-[4/5] overflow-hidden bg-slate-100 rounded-sm"
          >
            {/* EDIT: Replace src */}
            <Image 
              src="https://images.unsplash.com/photo-1470071131384-001b85755536?q=80&w=1000&auto=format&fit=crop" 
              alt="Photography sample 3" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
               <span className="text-white font-medium drop-shadow-md">Nature Landscapes</span>
            </div>
          </motion.div>

        </div>
      </main>

      {/* --- FOOTER / SOCIALS --- */}
      <footer className="bg-emerald-50/50 border-t border-emerald-100 py-12">
        <div className="container mx-auto px-6 flex flex-col items-center">
          
          <h3 className="text-slate-800 font-medium mb-6">Connect with me</h3>
          
          <div className="flex gap-6 mb-8">
            {/* EDIT: Update the href links to your friend's actual profiles */}
            
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-600 transition-colors" aria-label="Instagram">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>

            {/* YouTube */}
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-600 transition-colors" aria-label="YouTube">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>

            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-600 transition-colors" aria-label="Facebook">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
            </a>

            {/* Threads */}
            <a href="https://threads.net" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-600 transition-colors" aria-label="Threads">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.247 16.488a4.912 4.912 0 0 1-2.42 1.324c-1.282.264-3.149.336-4.636-.217-1.636-.61-2.91-2.023-3.411-4.045-.333-1.344-.22-2.827.42-4.053.864-1.657 2.483-2.628 4.316-2.628 1.488 0 2.782.593 3.498 1.583.569.789.771 1.76.671 2.802-.016.17-.037.34-.066.516H7.135c.108 1.408.834 2.27 1.815 2.607 1.05.361 2.392.203 3.32-.239l1.977 1.35zM11.905 9.77c-.463-.642-1.22-.962-2.115-.962-1.303 0-2.28.847-2.601 2.05h4.945c.032-.423-.008-.75-.229-1.088zm8.71-3.693v11.846c0 1.94-1.574 3.514-3.514 3.514H6.901C4.961 21.437 3.387 19.863 3.387 17.923V6.077c0-1.94 1.574-3.514 3.514-3.514h10.198c1.94 0 3.514 1.574 3.514 3.514zm-2.091 0c0-.783-.635-1.418-1.418-1.418H6.896c-.783 0-1.418.635-1.418 1.418v11.85c0 .783.635 1.418 1.418 1.418h10.203c.783 0 1.418-.635 1.418-1.418V6.077z"/></svg>
            </a>
          </div>

          {/* EDIT: Update the copyright text */}
          <p className="text-sm text-slate-400">&copy; {new Date().getFullYear()} Lens & Light Photography. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}