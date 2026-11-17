"use client";

import { useMemo, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import type { UpdatePost, UpdateReply } from "@/lib/prsm-updates";
import { authors, fallbackAuthor, tagStyles, defaultTagStyle, type Author } from "@/lib/prsm-authors";
import { PATREON_URL } from "@/app/components/Navbar";
import prsmImg from "@/app/PRSMPost.jpg";

const DISCORD_URL = "https://discord.gg/GfQScUK9Dm";

// "2026-11-15" -> "Nov 15, 2026" (UTC so the day never shifts by time zone)
export function formatDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

// Supports **bold**, [label](https://link) and @handles inside post text, nothing else.
export function renderInline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const pattern = /\*\*(.+?)\*\*|\[([^\]]+)\]\(((?:https?:\/\/|\/)[^)\s]+)\)|(?<![\w@])@([A-Za-z0-9_]+)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(text))) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    if (match[1]) {
      parts.push(<strong key={match.index} className="font-bold text-white">{match[1]}</strong>);
    } else if (match[4]) {
      parts.push(<span key={match.index} className="font-semibold text-cyan-300">@{match[4]}</span>);
    } else {
      const external = match[3].startsWith("http");
      parts.push(
        <a
          key={match.index}
          href={match[3]}
          className="text-cyan-300 underline decoration-cyan-500/50 underline-offset-2 hover:text-cyan-200"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {match[2]}
        </a>
      );
    }
    last = pattern.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

// Post text without formatting, for previews that are already a link.
export function plainText(text: string) {
  return text.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

export function tagClass(tag: string) {
  return tagStyles[tag.toLowerCase()] ?? defaultTagStyle;
}

export function Avatar({ author, size = 44 }: { author: Author; size?: number }) {
  return (
    <div
      className={`relative shrink-0 rounded-full border-2 bg-[#120f22] flex items-center justify-center font-black text-sm ${author.ring}`}
      style={{ width: size, height: size }}
    >
      {/* Vinyl grooves */}
      <div className="absolute inset-[3px] rounded-full border border-white/5" aria-hidden="true" />
      {author.avatar ? (
        <Image src={author.avatar} alt="" width={size - 8} height={size - 8} className="rounded-full object-cover" />
      ) : (
        <span>{author.initials}</span>
      )}
    </div>
  );
}

function Equalizer() {
  return (
    <div className="flex h-5 items-end gap-[3px]" aria-hidden="true">
      {[0, 0.25, 0.5, 0.15, 0.4].map((delay, i) => (
        <span
          key={i}
          className="block h-full w-[3px] origin-bottom animate-eq rounded-full bg-linear-to-t from-fuchsia-500 to-cyan-300"
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
    </div>
  );
}

function VerifiedBadge() {
  return (
    <svg className="h-4 w-4 shrink-0 text-cyan-400" viewBox="0 0 24 24" fill="currentColor" aria-label="Official account">
      <path d="M12 2l2.4 2.1 3.2-.4.9 3.1 2.9 1.5-1.2 3 1.2 3-2.9 1.5-.9 3.1-3.2-.4L12 22l-2.4-2.1-3.2.4-.9-3.1-2.9-1.5 1.2-3-1.2-3 2.9-1.5.9-3.1 3.2.4L12 2z" />
      <path d="M10.5 15.2l-3-3 1.4-1.4 1.6 1.6 4.1-4.1 1.4 1.4-5.5 5.5z" fill="#07060d" />
    </svg>
  );
}

// 1234 -> "1.2k", 452318 -> "452k", 2400000 -> "2.4M"
function compact(n: number) {
  const trim = (v: number) => v.toFixed(1).replace(/\.0$/, "");
  if (n >= 1_000_000) return `${trim(n / 1_000_000)}M`;
  if (n >= 100_000) return `${Math.round(n / 1000)}k`;
  if (n >= 1000) return `${trim(n / 1000)}k`;
  return String(n);
}

function VipBadge() {
  return (
    <span className="rounded-sm bg-linear-to-r from-amber-300 to-yellow-200 px-1 py-px font-mono text-[9px] font-black leading-none tracking-widest text-slate-950">
      VIP
    </span>
  );
}

// A tappable reaction count. Tapping adds the visitor's own reaction (not saved).
function Reaction({ kind, count, small = false }: { kind: "love" | "like"; count: number; small?: boolean }) {
  const [on, setOn] = useState(false);
  const label = kind === "love" ? "Love" : "Like";
  const activeColor = kind === "love" ? "text-pink-400" : "text-cyan-300";
  const icon = small ? "h-3.5 w-3.5" : "h-4 w-4";
  return (
    <button
      type="button"
      onClick={() => setOn((v) => !v)}
      aria-pressed={on}
      aria-label={`${label} (${count + (on ? 1 : 0)})`}
      className={`group flex items-center gap-1 rounded-full px-2 py-0.5 font-mono transition-colors hover:bg-white/5 ${
        small ? "text-[11px]" : "text-xs"
      } ${on ? activeColor : "text-[#8a83c4] hover:text-slate-200"}`}
    >
      {kind === "love" ? (
        <svg className={`${icon} transition-transform group-active:scale-125`} viewBox="0 0 24 24" fill={on ? "currentColor" : "none"} stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinejoin="round" d="M12 20.5s-7.5-4.6-9.3-9.2C1.4 7.9 3.6 4.5 7 4.5c2 0 3.7 1.1 5 2.8 1.3-1.7 3-2.8 5-2.8 3.4 0 5.6 3.4 4.3 6.8-1.8 4.6-9.3 9.2-9.3 9.2z" />
        </svg>
      ) : (
        <svg className={`${icon} transition-transform group-active:scale-125`} viewBox="0 0 24 24" fill={on ? "currentColor" : "none"} stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinejoin="round" d="M7 10v10H4V10h3zm0 0l4-7c1.7 0 2.6 1.3 2.2 3L12.5 9H19c1.2 0 2.1 1.1 1.9 2.3l-1.4 7c-.2 1-1 1.7-2 1.7H7" />
        </svg>
      )}
      <span>{compact(count + (on ? 1 : 0))}</span>
    </button>
  );
}

function Reply({ reply }: { reply: UpdateReply }) {
  const author = authors[reply.author] ?? fallbackAuthor;
  return (
    <div className="flex gap-2.5">
      <Avatar author={author} size={32} />
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex flex-wrap items-center gap-x-1.5">
          <span className="flex items-center gap-1 text-[13px] font-bold text-slate-100">
            {author.name}
            {author.verified && <VerifiedBadge />}
            {author.vip && <VipBadge />}
          </span>
          <span className="font-mono text-[11px] text-[#7d76b8]">
            {author.handle} · {reply.after}
          </span>
        </div>
        <div className="rounded-[4px_14px_14px_14px] border border-[#221d40] bg-[#0e0b1b] px-3 py-2">
          <div className="space-y-1.5 text-[13px] leading-relaxed text-[#bdb7e6]">
            {reply.paragraphs.map((p, i) => (
              <p key={i}>{renderInline(p)}</p>
            ))}
          </div>
        </div>
        <div className="-ml-2 mt-0.5">
          <Reaction kind="like" count={reply.likes} small />
        </div>
      </div>
    </div>
  );
}

function Post({ post }: { post: UpdatePost }) {
  const author = authors[post.author] ?? fallbackAuthor;
  return (
    <article className="flex gap-3 px-4 py-5">
      <Avatar author={author} />
      <div className="min-w-0 flex-1">
        <header className="mb-1.5 flex flex-wrap items-baseline gap-x-2">
          <span className="flex items-center gap-1 font-bold text-slate-100">
            {author.name}
            {author.verified && <VerifiedBadge />}
            {author.vip && <VipBadge />}
          </span>
          <span className="font-mono text-xs text-[#7d76b8]">
            {author.handle} · <time dateTime={post.date}>{formatDate(post.date)}</time>
          </span>
        </header>

        <div className="rounded-[4px_18px_18px_18px] border border-[#2a2450] bg-[#120f22]/90 px-4 py-3 shadow-[0_0_24px_rgba(168,85,247,0.08)]">
          <h2 className="mb-1.5 text-[15px] font-black uppercase tracking-wide text-fuchsia-200">{post.title}</h2>
          <div className="space-y-2 text-sm leading-relaxed text-[#cfcaf5]">
            {post.paragraphs.map((p, i) => (
              <p key={i}>{renderInline(p)}</p>
            ))}
          </div>
        </div>

        {post.image && (
          <div className="mt-2 overflow-hidden rounded-2xl border border-[#2a2450]">
            <Image src={post.image} alt={post.imageAlt ?? post.title} width={800} height={450} className="h-auto w-full" />
          </div>
        )}

        {post.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span key={tag} className={`rounded-full border px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider ${tagClass(tag)}`}>
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Reactions */}
        <div className="-ml-2 mt-2 flex items-center gap-1 border-t border-[#1b1830] pt-1.5">
          <Reaction kind="love" count={post.loves} />
          <Reaction kind="like" count={post.likes} />
          {post.replies.length > 0 && (
            <span className="ml-auto flex items-center gap-1 font-mono text-xs text-[#7d76b8]">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinejoin="round" d="M4 5h16v11H9l-5 4V5z" />
              </svg>
              {post.replies.length} {post.replies.length === 1 ? "reply" : "replies"}
            </span>
          )}
        </div>

        {/* Reply thread */}
        {post.replies.length > 0 && (
          <div className="mt-3 space-y-3 border-l-2 border-[#2a2450] pl-3">
            {post.replies.map((reply) => (
              <Reply key={reply.id} reply={reply} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

// Waveform-style divider between posts.
function WaveDivider() {
  return (
    <div className="flex h-3 items-center justify-center gap-[3px] px-6 opacity-40" aria-hidden="true">
      {[2, 5, 3, 8, 4, 10, 6, 3, 7, 11, 5, 8, 3, 6, 9, 4, 7, 2, 5, 3].map((h, i) => (
        <span key={i} className="w-[2px] rounded-full bg-fuchsia-400/70" style={{ height: h }} />
      ))}
    </div>
  );
}

// Skyline along the bottom of the page: [width, height] per building, plus lit windows.
const SKYLINE: [number, number][] = [
  [60, 90], [40, 140], [70, 110], [50, 190], [80, 120], [45, 160], [65, 100], [55, 210],
  [75, 130], [40, 170], [60, 95], [85, 150], [50, 120], [70, 200], [45, 110], [60, 160],
  [80, 105], [50, 180], [65, 125], [55, 145],
];

const WINDOW_COLORS = ["#e879f9", "#22d3ee", "#fcd34d"];

// Each building's x position (buildings sit 4 apart), worked out once.
const BUILDINGS = SKYLINE.map(([w, h], i) => ({
  x: SKYLINE.slice(0, i).reduce((sum, [bw]) => sum + bw + 4, 0),
  w,
  h,
  i,
}));
const SKYLINE_WIDTH = SKYLINE.reduce((sum, [w]) => sum + w + 4, 0);

function Skyline() {
  const buildings = BUILDINGS;
  return (
    <svg className="absolute inset-x-0 bottom-0 h-48 w-full" viewBox={`0 0 ${SKYLINE_WIDTH} 220`} preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      {buildings.map(({ x: bx, w, h, i }) => (
        <g key={i}>
          <rect x={bx} y={220 - h} width={w} height={h} fill="#0a0814" />
          {/* A few lit windows per building, always in the same spots */}
          {[0, 1, 2].map((n) => (
            <rect
              key={n}
              x={bx + 8 + ((i * 19 + n * 29) % (w - 16))}
              y={220 - h + 14 + ((i * 37 + n * 53) % (h - 30))}
              width={4}
              height={5}
              fill={WINDOW_COLORS[(i + n) % 3]}
              opacity={0.55}
            />
          ))}
        </g>
      ))}
    </svg>
  );
}

const SPOTLIGHT = "absolute top-[-10%] h-[90%] w-64 origin-top blur-2xl [clip-path:polygon(45%_0,55%_0,100%_100%,0_100%)] motion-safe:animate-sweep";

// Club atmosphere behind the phone: drifting lights, sweeping spotlights, grain and a skyline.
function ClubBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-[120px] motion-safe:animate-drift" />
      <div
        className="absolute -right-32 top-1/2 h-96 w-96 rounded-full bg-cyan-500/15 blur-[120px] motion-safe:animate-drift"
        style={{ animationDelay: "-11s", animationDirection: "alternate-reverse" }}
      />
      <div
        className="absolute bottom-0 left-1/3 hidden h-80 w-80 rounded-full bg-purple-600/15 blur-[120px] motion-safe:animate-drift sm:block"
        style={{ animationDelay: "-6s" }}
      />

      {/* Spotlights from the ceiling */}
      <div className="hidden sm:block">
        <div className={`${SPOTLIGHT} left-[16%] bg-linear-to-b from-fuchsia-400/20 to-transparent`} />
        <div
          className={`${SPOTLIGHT} right-[16%] bg-linear-to-b from-cyan-300/15 to-transparent`}
          style={{ animationDelay: "-4.5s", animationDirection: "alternate-reverse" }}
        />
      </div>

      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-15 mix-blend-overlay" />
      <div className="hidden sm:block">
        <Skyline />
      </div>
    </div>
  );
}

// Left-side "game profile" shown on wide screens.
function InfoPanel({
  posts,
  tags,
  filter,
  onFilter,
}: {
  posts: UpdatePost[];
  tags: string[];
  filter: string | null;
  onFilter: (tag: string | null) => void;
}) {
  const replyCount = posts.reduce((n, p) => n + p.replies.length, 0);
  const tagCounts = new Map<string, number>();
  posts.forEach((p) => p.tags.forEach((t) => tagCounts.set(t.toLowerCase(), (tagCounts.get(t.toLowerCase()) ?? 0) + 1)));
  const trending = [...tags].sort((a, b) => (tagCounts.get(b.toLowerCase()) ?? 0) - (tagCounts.get(a.toLowerCase()) ?? 0));
  const lastUpdate = posts[0]?.date;

  return (
    <aside className="hidden w-72 shrink-0 space-y-4 xl:block">
      <Link
        href="/games/nightclubsPRSM"
        className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-500 transition-colors hover:text-cyan-400"
      >
        ◄ Back to Nightclubs: PRSM
      </Link>

      {/* Game card */}
      <div className="overflow-hidden rounded-3xl border border-[#2a2450] bg-[#0b0916]/80 shadow-[0_0_40px_rgba(168,85,247,0.12)] backdrop-blur">
        <div className="relative aspect-video">
          <Image src={prsmImg} alt="Nightclubs: PRSM gameplay" fill sizes="288px" className="object-cover opacity-90" />
          <div className="absolute inset-0 bg-linear-to-t from-[#0b0916] via-transparent to-transparent" />
        </div>
        <div className="space-y-3 px-5 pb-5">
          <div>
            <h2 className="bg-linear-to-r from-cyan-300 via-purple-300 to-cyan-300 bg-clip-text text-xl font-black uppercase tracking-tight text-transparent">
              Nightclubs: PRSM
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-[#bdb7e6]">Serve the guests, play the music, and live the nights with the crowd.</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/60 bg-purple-950/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-purple-200">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" aria-hidden="true" />
            Phase 2 · Alpha Testing
          </span>

          {/* Stats */}
          <dl className="grid grid-cols-3 gap-2 border-t border-[#1b1830] pt-3 text-center">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-widest text-[#7d76b8]">Posts</dt>
              <dd className="text-lg font-black text-slate-100">{posts.length}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-widest text-[#7d76b8]">Replies</dt>
              <dd className="text-lg font-black text-slate-100">{replyCount}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-widest text-[#7d76b8]">Latest</dt>
              <dd className="pt-1.5 font-mono text-[11px] font-bold text-slate-100">{lastUpdate ? formatDate(lastUpdate).replace(/, \d{4}$/, "") : "—"}</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Trending tags (same filter as the chips inside the phone) */}
      {trending.length > 0 && (
        <div className="rounded-3xl border border-[#2a2450] bg-[#0b0916]/80 p-5 backdrop-blur">
          <h3 className="mb-3 font-mono text-[11px] uppercase tracking-widest text-[#7d76b8]">Trending on NightSpace</h3>
          <ul className="space-y-1">
            {trending.map((tag) => {
              const key = tag.toLowerCase();
              const active = filter === key;
              return (
                <li key={key}>
                  <button
                    type="button"
                    onClick={() => onFilter(active ? null : key)}
                    aria-pressed={active}
                    className={`flex w-full items-center justify-between rounded-xl border px-3 py-1.5 text-left font-mono text-xs uppercase tracking-wider transition-colors ${
                      active ? tagClass(tag) : "border-transparent text-[#bdb7e6] hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>#{tag}</span>
                    <span className="opacity-60">{tagCounts.get(key)}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Community links */}
      <div className="grid grid-cols-2 gap-2">
        <a
          href={DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-cyan-500/40 bg-cyan-950/40 px-3 py-2.5 text-center font-mono text-xs uppercase tracking-widest text-cyan-200 transition-colors hover:border-cyan-300 hover:text-white"
        >
          Discord ↗
        </a>
        <a
          href={PATREON_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-fuchsia-500/40 bg-fuchsia-950/40 px-3 py-2.5 text-center font-mono text-xs uppercase tracking-widest text-fuchsia-200 transition-colors hover:border-fuchsia-300 hover:text-white"
        >
          Patreon ↗
        </a>
      </div>
    </aside>
  );
}

export default function NightSpaceFeed({ posts }: { posts: UpdatePost[] }) {
  const [filter, setFilter] = useState<string | null>(null);

  const tags = useMemo(() => {
    const seen = new Map<string, string>();
    posts.forEach((p) => p.tags.forEach((t) => !seen.has(t.toLowerCase()) && seen.set(t.toLowerCase(), t)));
    return [...seen.values()];
  }, [posts]);

  const visible = filter ? posts.filter((p) => p.tags.some((t) => t.toLowerCase() === filter)) : posts;

  return (
    <div className="relative min-h-screen bg-[#05040a] pb-0 sm:py-10">
      <ClubBackdrop />

      <div className="relative z-10 flex w-full items-start justify-center gap-10">
        <InfoPanel posts={posts} tags={tags} filter={filter} onFilter={setFilter} />

        <div className="flex w-full flex-col sm:max-w-[420px]">
        <Link
          href="/games/nightclubsPRSM"
          className="mx-4 mb-4 hidden items-center gap-2 self-start font-mono text-xs uppercase tracking-widest text-slate-500 transition-colors hover:text-cyan-400 sm:flex xl:hidden"
        >
          ◄ Back to Nightclubs: PRSM
        </Link>

        {/* Phone frame on larger screens; full screen on phones */}
        <div className="flex flex-col overflow-hidden bg-[#07060d] sm:h-[min(860px,calc(100vh-10rem))] sm:rounded-[2.75rem] sm:border-[10px] sm:border-[#1b1830] sm:shadow-[0_0_60px_rgba(168,85,247,0.25)]">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-3 pb-1 font-mono text-[11px] text-[#9b95c9]">
            <span>23:47</span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
              PRSM // LIVE
            </span>
            <span aria-hidden="true">▮▮▮ ◔</span>
          </div>

          {/* App header */}
          <div className="border-b border-[#1b1830] px-4 pt-3 pb-3">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="bg-linear-to-r from-fuchsia-300 via-purple-300 to-cyan-300 bg-clip-text text-2xl font-black uppercase tracking-wider text-transparent">
                  NightSpace
                </h1>
                <p className="font-mono text-[11px] uppercase tracking-widest text-[#7d76b8]">A place for the night · PRSM updates</p>
              </div>
              <Equalizer />
            </div>

            {/* Tag filters */}
            {tags.length > 0 && (
              <div className="mt-3 flex gap-1.5 overflow-x-auto pb-1 [scrollbar-width:none]" role="group" aria-label="Filter posts by tag">
                <button
                  type="button"
                  onClick={() => setFilter(null)}
                  aria-pressed={filter === null}
                  className={`shrink-0 rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wider transition-colors ${
                    filter === null ? "border-fuchsia-400 bg-fuchsia-950 text-fuchsia-200" : "border-[#2a2450] text-[#9b95c9] hover:text-white"
                  }`}
                >
                  All
                </button>
                {tags.map((tag) => {
                  const key = tag.toLowerCase();
                  const active = filter === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setFilter(active ? null : key)}
                      aria-pressed={active}
                      className={`shrink-0 rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wider transition-colors ${
                        active ? tagClass(tag) : "border-[#2a2450] text-[#9b95c9] hover:text-white"
                      }`}
                    >
                      #{tag}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Feed */}
          <div className="flex-1 [scrollbar-color:#3b3470_transparent] [scrollbar-width:thin] sm:overflow-y-auto">
            {visible.length === 0 ? (
              <p className="px-6 py-16 text-center font-mono text-sm text-[#7d76b8]">No posts in this crate yet.</p>
            ) : (
              visible.map((post, i) => (
                <div key={post.id}>
                  {i > 0 && <WaveDivider />}
                  <Post post={post} />
                </div>
              ))
            )}
          </div>

          {/* Now playing bar */}
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 border-t border-[#1b1830] bg-[#0b0916] px-4 py-3 transition-colors hover:bg-[#120f22]"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-xs text-slate-950" aria-hidden="true">
              ▶
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-slate-100">Join the crowd on Discord</p>
              <div className="mt-1 h-[3px] rounded-full bg-[#2a2450]">
                <div className="h-[3px] w-2/5 rounded-full bg-linear-to-r from-fuchsia-500 to-cyan-400 transition-all duration-700 group-hover:w-4/5" />
              </div>
            </div>
            <span className="font-mono text-[11px] text-[#9b95c9]">LIVE</span>
          </a>
        </div>
        </div>

        {/* Keeps the phone centered; the cast panel can go here later */}
        <div className="hidden w-72 shrink-0 xl:block" aria-hidden="true" />
      </div>
    </div>
  );
}
