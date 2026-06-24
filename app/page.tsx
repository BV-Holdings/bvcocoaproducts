import { HeroSection } from "@/components/sections/HeroSection";
import { StatStrip } from "@/components/sections/StatStrip";
import { WhatAreCocoaShells } from "@/components/sections/WhatAreCocoaShells";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { WhyBVHoldings } from "@/components/sections/WhyBVHoldings";
import { FarmToExportProcess } from "@/components/sections/FarmToExportProcess";
import { SustainabilityBand } from "@/components/sections/SustainabilityBand";
import { MarketOpportunityStats } from "@/components/sections/MarketOpportunityStats";
import { WhoWeWorkWith } from "@/components/sections/WhoWeWorkWith";
import { NewsletterBand } from "@/components/sections/NewsletterBand";
import { ClosingCTABand } from "@/components/sections/ClosingCTABand";

// TODO: replace with Stitch homepage design — section order per Stitch prompt
export default function HomePage() {
  return (
    <div className="flex flex-col gap-px">
      <HeroSection />
      <StatStrip />
      <WhatAreCocoaShells />
      <IndustriesGrid />
      <WhyBVHoldings />
      <FarmToExportProcess />
      <SustainabilityBand />
      <MarketOpportunityStats />
      <WhoWeWorkWith />
      <NewsletterBand source="homepage" />
      <ClosingCTABand />
    </div>
  );
}
