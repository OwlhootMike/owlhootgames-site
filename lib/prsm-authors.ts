import type { StaticImageData } from "next/image";
import owlLogo from "@/app/icon.png";

// Accounts that can post on NightSpace. A post's "Author:" line uses the key.
// To give a character a picture later, put it in public/updates/avatars/ and set
// avatar: "/updates/avatars/name.png".
export type Author = {
  name: string;
  handle: string;
  initials: string;
  avatar?: StaticImageData | string;
  verified?: boolean;
  ring: string; // Tailwind classes for the avatar ring and initials color
};

export const authors: Record<string, Author> = {
  owlhoot: {
    name: "Owlhoot Games",
    handle: "@owlhootgames",
    initials: "OG",
    avatar: owlLogo,
    verified: true,
    ring: "border-cyan-400 text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.45)]",
  },
  mike: {
    name: "Mike",
    handle: "@MikePRSM",
    initials: "MK",
    ring: "border-fuchsia-400 text-fuchsia-300 shadow-[0_0_12px_rgba(232,121,249,0.45)]",
  },
  daisy: {
    name: "Daisy",
    handle: "@DZ",
    initials: "DZ",
    ring: "border-pink-400 text-pink-300 shadow-[0_0_14px_rgba(244,114,182,0.55)]",
  },
  clara: {
    name: "Clara",
    handle: "@ClaraBelleSwings",
    initials: "CB",
    ring: "border-amber-300 text-amber-200 shadow-[0_0_12px_rgba(252,211,77,0.45)]",
  },
  sven: {
    name: "Sven",
    handle: "@NewMillenniaClub",
    initials: "SV",
    ring: "border-red-500 text-red-400 shadow-[0_0_12px_rgba(239,68,68,0.45)]",
  },
  brtny: {
    name: "BRTNY",
    handle: "@BRTNYHere",
    initials: "BR",
    ring: "border-lime-300 text-lime-200 shadow-[0_0_14px_rgba(190,242,100,0.5)]",
  },
};

// Older posts used "mike-a"; keep them working.
authors["mike-a"] = authors.mike;

export const fallbackAuthor: Author = {
  name: "NightSpace User",
  handle: "@nightspace",
  initials: "NS",
  ring: "border-slate-500 text-slate-300",
};

// Colors for known tags; anything else gets the neutral style.
export const tagStyles: Record<string, string> = {
  studio: "bg-cyan-950/70 text-cyan-300 border-cyan-500/40",
  audio: "bg-fuchsia-950/70 text-fuchsia-300 border-fuchsia-500/40",
  music: "bg-violet-950/70 text-violet-300 border-violet-500/40",
  gameplay: "bg-amber-950/70 text-amber-300 border-amber-500/40",
  art: "bg-pink-950/70 text-pink-300 border-pink-500/40",
  tech: "bg-emerald-950/70 text-emerald-300 border-emerald-500/40",
  fixes: "bg-rose-950/70 text-rose-300 border-rose-500/40",
};

export const defaultTagStyle = "bg-slate-900 text-slate-300 border-slate-600/50";
