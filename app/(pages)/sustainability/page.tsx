import type { Metadata } from "next";
import { SustainabilityHero } from "@/components/sections/SustainabilityHero";
import { EUDRCompliance } from "@/components/sections/EUDRCompliance";
import { TraceabilityProcess } from "@/components/sections/TraceabilityProcess";
import { CircularEconomyBand } from "@/components/sections/CircularEconomyBand";
import { CertificationsGrid } from "@/components/sections/CertificationsGrid";

export const metadata: Metadata = {
  title: "Sustainability & Traceability | BV Holdings",
};

export default function SustainabilityPage() {
  return (
    <div>
      <SustainabilityHero />
      <EUDRCompliance />
      <TraceabilityProcess />
      <CircularEconomyBand />
      <CertificationsGrid />
    </div>
  );
}
