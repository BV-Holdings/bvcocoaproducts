import { prisma } from "@/lib/prisma";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatStrip } from "@/components/sections/StatStrip";
import { WhatAreCocoaShells } from "@/components/sections/WhatAreCocoaShells";
import { MarketOpportunityStats } from "@/components/sections/MarketOpportunityStats";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { WhyBVHoldings } from "@/components/sections/WhyBVHoldings";
import { SustainabilityBand } from "@/components/sections/SustainabilityBand";
import { FarmToExportProcess } from "@/components/sections/FarmToExportProcess";
import { NewsletterBand } from "@/components/sections/NewsletterBand";
import { ClosingCTABand } from "@/components/sections/ClosingCTABand";

export default async function HomePage() {
  const industries = await prisma.industry.findMany({ orderBy: { order: "asc" } });

  return (
    <div>
      <HeroSection />
      <StatStrip />
      <WhatAreCocoaShells />
      <MarketOpportunityStats />
      <IndustriesGrid industries={industries} />
      <WhyBVHoldings />
      <SustainabilityBand />
      <FarmToExportProcess />
      <NewsletterBand source="homepage" />
      <ClosingCTABand />
    </div>
  );
}
