import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nightclubs: PRSM",
  description: "Nightclubs: PRSM is a nightlife management simulation with a rhythm highway. Serve guests, play the music, and run the dancefloor.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
