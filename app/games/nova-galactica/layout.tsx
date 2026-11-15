import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nova Galactica",
  description: "Nova Galactica is a sci-fi narrative game filled with cosmic beauty, drama, and heartbreak, from Owlhoot Games.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
