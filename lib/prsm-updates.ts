import fs from "node:fs";
import path from "node:path";

export type UpdatePost = {
  id: string;
  date: string; // YYYY-MM-DD
  title: string;
  author: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
  paragraphs: string[];
};

const FILE = path.join(process.cwd(), "content", "prsm-updates.md");

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

    const paragraphs = lines
      .slice(i)
      .join("\n")
      .split(/\n\s*\n/)
      .map((p) => p.replace(/\s*\n\s*/g, " ").trim())
      .filter(Boolean);

    posts.push({
      id: `${match[1]}-${index}`,
      date: match[1],
      title: match[2].trim(),
      author: (fields.author || "owlhoot").toLowerCase(),
      tags: (fields.tags || "").split(",").map((t) => t.trim()).filter(Boolean),
      image: fields.image || undefined,
      imageAlt: fields["image-alt"] || undefined,
      paragraphs,
    });
  });

  // Newest first; posts on the same day keep their order from the file.
  return posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}
