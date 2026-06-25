import type { Metadata } from "next";
import { LogisticsHero } from "@/components/sections/LogisticsHero";
import { NetworkMapPanel } from "@/components/sections/NetworkMapPanel";
import { SupplyChainTimeline } from "@/components/sections/SupplyChainTimeline";
import { PortDocumentationBento } from "@/components/sections/PortDocumentationBento";

export const metadata: Metadata = {
  title: "BV Holdings | Global Logistics & Tracking",
};

export default function BuyersPage() {
  return (
    <div>
      <LogisticsHero />
      <NetworkMapPanel />
      <SupplyChainTimeline />
      <PortDocumentationBento />
    </div>
  );
}
