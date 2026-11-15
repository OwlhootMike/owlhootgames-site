import type { Metadata } from "next";
import { getPrsmUpdates } from "@/lib/prsm-updates";
import BackstageFeed from "./BackstageFeed";

export const metadata: Metadata = {
  title: { absolute: "PRSM Backstage | Owlhoot Games" },
  description: "Dev updates for Nightclubs: PRSM, straight from the booth at Owlhoot Games.",
};

export default function PrsmBackstagePage() {
  return <BackstageFeed posts={getPrsmUpdates()} />;
}
