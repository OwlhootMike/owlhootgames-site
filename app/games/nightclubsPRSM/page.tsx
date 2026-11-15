import { getPrsmUpdates } from "@/lib/prsm-updates";
import PrsmContent from "./PrsmContent";

export default function NightclubsPage() {
  const [latestUpdate = null] = getPrsmUpdates();
  return <PrsmContent latestUpdate={latestUpdate} />;
}
