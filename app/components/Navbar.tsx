"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../icon.png";

export const PATREON_URL = "https://www.patreon.com/c/OwlHootGames";

// Games shown in the "Games" dropdown. Add new titles here.
const games = [
  { name: "Nightclubs: PRSM", href: "/games/nightclubsPRSM", tag: "Flagship", hover: "hover:text-purple-400" },
  { name: "Nova Galactica", href: "/games/nova-galactica", tag: "Sci-Fi Narrative", hover: "hover:text-blue-400" },
  { name: "Detective Jane", href: "/games/detective-jane", tag: "Mystery Series", hover: "hover:text-amber-400" },
];

const linkBase = "text-sm font-semibold uppercase tracking-widest transition-colors";
const linkIdle = "text-slate-400 hover:text-cyan-400";
const linkActive = "text-cyan-400";

const cutCorners = {
  clipPath: "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
};

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [gamesOpen, setGamesOpen] = useState(false);
  const [mobileGamesOpen, setMobileGamesOpen] = useState(false);
  const gamesRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => pathname === href;
  const onGamePage = games.some((g) => pathname === g.href);

  // Close every menu (used when a link is clicked).
  const closeAll = () => {
    setMobileOpen(false);
    setGamesOpen(false);
    setMobileGamesOpen(false);
  };

  // Close the desktop Games menu on outside click or Escape.
  useEffect(() => {
    if (!gamesOpen) return;
    const onClick = (e: MouseEvent) => {
      if (gamesRef.current && !gamesRef.current.contains(e.target as Node)) setGamesOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setGamesOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [gamesOpen]);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
      {/* Thin cyan accent line along the bottom edge */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo + studio name */}
        <Link href="/" onClick={closeAll} className="group flex items-center gap-3" aria-label="Owlhoot Games home">
          <Image src={logo} alt="" width={32} height={32} priority className="h-8 w-8" />
          <span className="text-lg font-black uppercase tracking-wider text-slate-100 transition-colors group-hover:text-cyan-400">
            Owlhoot <span className="text-cyan-400">Games</span>
          </span>
        </Link>

        {/* --- DESKTOP MENU --- */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" onClick={closeAll} className={`${linkBase} ${isActive("/") ? linkActive : linkIdle}`}>
            Home
          </Link>
          <Link href="/about" onClick={closeAll} className={`${linkBase} ${isActive("/about") ? linkActive : linkIdle}`}>
            About Us
          </Link>

          {/* Games dropdown: opens on hover or click */}
          <div
            ref={gamesRef}
            className="relative"
            onMouseEnter={() => setGamesOpen(true)}
            onMouseLeave={() => setGamesOpen(false)}
          >
            <button
              type="button"
              // Mouse clicks keep it open (hover already opened it); keyboard Enter/Space toggles.
              onClick={(e) => (e.detail === 0 ? setGamesOpen((o) => !o) : setGamesOpen(true))}
              aria-haspopup="true"
              aria-expanded={gamesOpen}
              className={`${linkBase} flex items-center gap-1.5 ${onGamePage || gamesOpen ? linkActive : linkIdle}`}
            >
              Games <ChevronIcon open={gamesOpen} />
            </button>

            {gamesOpen && (
              // pt-4 keeps a hover bridge between the button and the panel
              <div className="absolute right-0 top-full pt-4">
                <div className="w-64 border border-slate-700 bg-slate-900/95 p-2 shadow-[0_0_30px_rgba(0,0,0,0.6)] backdrop-blur-md" style={cutCorners}>
                  {games.map((game) => (
                    <Link
                      key={game.href}
                      href={game.href}
                      onClick={closeAll}
                      className={`block border-l-2 px-4 py-3 transition-colors hover:bg-slate-800/70 ${
                        isActive(game.href) ? "border-cyan-400 bg-slate-800/50" : "border-transparent hover:border-cyan-500"
                      }`}
                    >
                      <span className={`block text-sm font-bold uppercase tracking-wider text-slate-100 transition-colors ${game.hover}`}>
                        {game.name}
                      </span>
                      <span className="block font-mono text-[11px] uppercase tracking-widest text-slate-500">{game.tag}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a
            href={PATREON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkBase} flex items-center gap-1.5 text-slate-400 hover:text-pink-400`}
          >
            Patreon <ExternalIcon />
          </a>
        </div>

        {/* --- MOBILE HAMBURGER BUTTON --- */}
        <button
          type="button"
          className="p-2 text-slate-300 transition-colors hover:text-cyan-400 md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* --- MOBILE MENU DRAWER --- */}
      {mobileOpen && (
        <div className="absolute left-0 top-16 flex w-full flex-col gap-1 border-b border-slate-800 bg-slate-950 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.6)] md:hidden">
          <Link href="/" onClick={closeAll} className={`${linkBase} block py-3 ${isActive("/") ? linkActive : linkIdle}`}>
            Home
          </Link>
          <Link href="/about" onClick={closeAll} className={`${linkBase} block py-3 ${isActive("/about") ? linkActive : linkIdle}`}>
            About Us
          </Link>

          <button
            type="button"
            onClick={() => setMobileGamesOpen((o) => !o)}
            aria-expanded={mobileGamesOpen}
            className={`${linkBase} flex items-center justify-between py-3 text-left ${onGamePage ? linkActive : linkIdle}`}
          >
            Games <ChevronIcon open={mobileGamesOpen} />
          </button>
          {mobileGamesOpen && (
            <div className="mb-2 ml-1 flex flex-col border-l-2 border-slate-800">
              {games.map((game) => (
                <Link
                  key={game.href}
                  href={game.href}
                  onClick={closeAll}
                  className={`py-2.5 pl-4 text-sm font-bold uppercase tracking-wider transition-colors ${
                    isActive(game.href) ? "text-cyan-400" : `text-slate-300 ${game.hover}`
                  }`}
                >
                  {game.name}
                </Link>
              ))}
            </div>
          )}

          <a
            href={PATREON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkBase} flex items-center gap-1.5 py-3 text-slate-400 hover:text-pink-400`}
          >
            Patreon <ExternalIcon />
          </a>
        </div>
      )}
    </nav>
  );
}
