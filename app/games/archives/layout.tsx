import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Archive",
  description: "Experimental builds, game jam entries, and past credits from the founder of Owlhoot Games.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
