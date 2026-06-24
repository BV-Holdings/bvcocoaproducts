import type { Metadata } from "next";
import { OriginHero } from "@/components/sections/OriginHero";
import { OriginStory } from "@/components/sections/OriginStory";
import { CorePillars } from "@/components/sections/CorePillars";
import { ValueChainProcess } from "@/components/sections/ValueChainProcess";
import { ClosingCTABand } from "@/components/sections/ClosingCTABand";

export const metadata: Metadata = {
  title: "Our Origin | BV Holdings - Sustainable Cocoa Excellence",
};

export default function AboutPage() {
  return (
    <div>
      <OriginHero />
      <OriginStory />
      <CorePillars />
      <ValueChainProcess />
      <ClosingCTABand
        heading="Ready to secure your supply chain?"
        body="Join the network of global manufacturers who trust BV Holdings for premium, sustainable West African cocoa byproducts."
        primaryCta={{ label: "Request Custom Quote", href: "/contact" }}
        secondaryCta={{ label: "View Product Catalog", href: "/products" }}
      />
    </div>
  );
}
