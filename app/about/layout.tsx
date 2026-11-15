import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet Owlhoot Games LLC: an independent, preservation-first game studio in Fort Worth, Texas, and the story behind it.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
