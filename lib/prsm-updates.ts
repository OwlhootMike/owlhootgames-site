import fs from "node:fs";
import path from "node:path";
import { authors } from "./prsm-authors";

export type UpdateReply = {
  id: string;
  author: string;
  after: string; // how long after the post, e.g. "3h", "1d"
  paragraphs: string[];
  likes: number;
};

export type UpdatePost = {
  id: string;
  date: string; // YYYY-MM-DD
  title: string;
  author: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
  paragraphs: string[];
  replies: UpdateReply[];
  likes: number;
  loves: number;
};

const FILE = path.join(process.cwd(), "content", "prsm-updates.md");

// Stable "random" number from a string, so counts never change between page loads.
function seeded(text: string, min: number, max: number) {
  let hash = 2166136261;
  for (let i = 0; i < text.length; i++) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return min + ((hash >>> 0) % (max - min + 1));
}

// VIP accounts (like Davie) pull in far bigger reaction counts.
function isVip(author: string) {
  return authors[author.toLowerCase()]?.vip === true;
}

function toParagraphs(text: string) {
  return text
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\s*\n\s*/g, " ").trim())
    .filter(Boolean);
}

// Reads content/prsm-updates.md at build time and returns posts, newest first.
export function getPrsmUpdates(): UpdatePost[] {
  const raw = fs.readFileSync(FILE, "utf8").replace(/\r\n/g, "\n");
  const chunks = raw.split(/^## /m).slice(1); // text before the first post is the guide

  const posts: UpdatePost[] = [];
  chunks.forEach((chunk, index) => {
    const lines = chunk.split("\n");
    const match = lines[0].match(/^(\d{4}-\d{2}-\d{2})\s*\|\s*(.+)$/);
    if (!match) {
      console.warn(`[prsm-updates] Skipping post with a bad heading: "${lines[0]}"`);
      return;
    }

    const fields: Record<string, string> = {};
    let i = 1;
    for (; i < lines.length; i++) {
      const field = lines[i].match(/^([A-Za-z-]+):\s*(.*)$/);
      if (!field) break;
      fields[field[1].toLowerCase()] = field[2].trim();
    }
    if (fields.visibility?.toLowerCase() === "internal") return;

    // Body lines vs reply blocks (lines starting with ">").
    const bodyLines: string[] = [];
    const replyBlocks: string[][] = [];
    let current: string[] | null = null;
    for (const line of lines.slice(i)) {
      if (line.startsWith(">")) {
        const text = line.replace(/^>\s?/, "");
        if (/^[a-z0-9-]+\s*\|\s*\S+\s*$/i.test(text)) {
          current = [text]; // "> author | 3h" starts a new reply
          replyBlocks.push(current);
        } else if (current) {
          current.push(text);
        }
      } else {
        current = null; // any non-">" line ends the current reply
        bodyLines.push(line);
      }
    }

    const id = `${match[1]}-${index}`;
    const title = match[2].trim();

    const replies: UpdateReply[] = replyBlocks.map((block, r) => {
      const [, author, after] = block[0].match(/^([a-z0-9-]+)\s*\|\s*(\S+)/i)!;
      const text = block.slice(1).join("\n");
      return {
        id: `${id}-r${r}`,
        author: author.toLowerCase(),
        after,
        paragraphs: toParagraphs(text),
        likes: isVip(author)
          ? seeded(`${title}|${r}|${text}`, 180_000, 950_000)
          : seeded(`${title}|${r}|${text}`, 1_200, 88_000),
      };
    });

    const author = (fields.author || "owlhoot").toLowerCase();
    const vip = isVip(author);

    posts.push({
      id,
      date: match[1],
      title,
      author,
      tags: (fields.tags || "").split(",").map((t) => t.trim()).filter(Boolean),
      image: fields.image || undefined,
      imageAlt: fields["image-alt"] || undefined,
      paragraphs: toParagraphs(bodyLines.join("\n")),
      replies,
      likes: Number(fields.likes) || (vip ? seeded(`likes|${title}`, 1_400_000, 4_800_000) : seeded(`likes|${title}`, 120_000, 880_000)),
      loves: Number(fields.loves) || (vip ? seeded(`loves|${title}`, 900_000, 3_600_000) : seeded(`loves|${title}`, 100_000, 640_000)),
    });
  });

  // Newest first; posts on the same day keep their order from the file.
  return posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}
