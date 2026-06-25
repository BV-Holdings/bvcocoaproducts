import type { Metadata } from "next";
import { NewsletterHero } from "@/components/sections/NewsletterHero";
import { IndustryBenefits } from "@/components/sections/IndustryBenefits";
import { ClosingCTABand } from "@/components/sections/ClosingCTABand";

export const metadata: Metadata = {
  title: "West Africa Trade Digest | BV Holdings",
};

export default function NewsletterPage() {
  return (
    <div>
      <NewsletterHero />

      <IndustryBenefits
        heading="Strategic Insights for Global Exporters"
        body="Why subscribe to the digest?"
        anchorId="why-subscribe"
        benefits={[
          {
            icon: "TrendingUp",
            title: "Market Intelligence",
            description:
              "Real-time pricing trends and volume analysis from Cameroon and across West Africa. Stay ahead of commodity fluctuations.",
          },
          {
            icon: "Truck",
            title: "Logistics & Trade",
            description:
              "Updates on shipping schedules, port operations, and EUDR compliance requirements essential for the modern exporter.",
          },
          {
            icon: "Leaf",
            title: "Sustainable Innovation",
            description:
              "Case studies on upcycling cocoa byproducts, circular economy breakthroughs, and measurable farm-level impacts.",
          },
        ]}
      />

      <ClosingCTABand
        heading="Ready to stay ahead of the market?"
        body="Join traders and manufacturers receiving our monthly intelligence reports."
        primaryCta={{ label: "Subscribe Now", href: "#subscribe" }}
        secondaryCta={{ label: "Explore Our Industries", href: "/industries" }}
      />
    </div>
  );
}
