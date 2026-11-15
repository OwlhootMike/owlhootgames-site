import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Detective Jane",
  description: "The Detective Jane Case Series: narrative-driven mysteries following Jane Davies and veteran training officer Darren Mitts.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
