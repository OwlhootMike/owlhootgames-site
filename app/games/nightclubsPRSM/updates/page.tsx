import type { Metadata } from "next";
import { getPrsmUpdates } from "@/lib/prsm-updates";
import NightSpaceFeed from "./NightSpaceFeed";

export const metadata: Metadata = {
  title: { absolute: "NightSpace · PRSM Updates | Owlhoot Games" },
  description: "NightSpace, a place for the night: dev updates and nightlife chatter from the world of Nightclubs: PRSM.",
};

export default function NightSpacePage() {
  return <NightSpaceFeed posts={getPrsmUpdates()} />;
}
