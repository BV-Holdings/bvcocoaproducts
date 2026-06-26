import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { TrustStatStrip } from "@/components/sections/TrustStatStrip";
import { QualityProcessTimeline } from "@/components/sections/QualityProcessTimeline";
import { DocumentDownloadSection } from "@/components/sections/DocumentDownloadSection";
import { QualityCertificationsGrid } from "@/components/sections/QualityCertificationsGrid";
import { ContaminantTestingSection } from "@/components/sections/ContaminantTestingSection";
import { ClosingCTABand } from "@/components/sections/ClosingCTABand";

export const metadata: Metadata = {
  title: "Quality & Certifications | BV Holdings",
  description:
    "Every BV Holdings cocoa shell shipment is independently inspected, lab tested, and fully documented. Download our spec sheet and CoA.",
};

// TODO: replace imageUrl with licensed BV Holdings photography before launch.
const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCC67IHAYkywXKigYf2ZtJEptL3M6uc04_-63E1NZZF-fxv-X7r7cdHbfLJntz9n72h0UBbW3-FzIrJb7Zx3HmP2HeZbhSsnCpqABFXTVqVDEtKWVNN0cyUhMK7iW9v736YGeTjzVOeudtotzuhg0DqEBRKuNc6N_q5WkhGgIF5PbAokque9pDS_uxqjuhsauoYMKnZAbAnugl_vCUvFe2RhNO1N3cBAvWIUHv58i_akoKkDbzP1Tdca-UriGuMjF454eKZ-KJs9D8";

export default function QualityPage() {
  return (
    <div>
      <PageHeader
        title="Quality Without Compromise"
        body="Rigorous multi-stage laboratory testing and field inspections ensure every shipment meets premium global industrial standards."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Quality & Certifications" }]}
        imageUrl={HERO_IMAGE}
        imageAlt="Laboratory technician examining cocoa byproduct samples"
      />

      <TrustStatStrip />

      <QualityProcessTimeline />

      <DocumentDownloadSection />

      <QualityCertificationsGrid />

      <ContaminantTestingSection />

      <ClosingCTABand
        heading="Ready to Verify Quality for Yourself?"
        body="We welcome independent audits and facility visits for serious enterprise partners. Let's discuss your specific grading requirements."
        primaryCta={{ label: "Request a Sample", href: "/contact" }}
        secondaryCta={{ label: "Book Facility Tour", href: "/contact" }}
        tertiaryCta={{ label: "Talk to QA Team", href: "/contact" }}
      />
    </div>
  );
}
