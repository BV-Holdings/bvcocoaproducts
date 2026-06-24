import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { IndustryHero } from "@/components/sections/IndustryHero";
import { IndustryBenefits, type IndustryBenefit } from "@/components/sections/IndustryBenefits";
import { IndustryShowcase, type IndustryShowcaseSpecCard, type IndustryShowcaseHighlight } from "@/components/sections/IndustryShowcase";
import { SupplyCTACard } from "@/components/sections/SupplyCTACard";

interface IndustryContentEntry {
  badge: string;
  heroTitle?: string;
  heroBody?: string;
  heroImageUrl: string;
  benefits: IndustryBenefit[];
  relatedProductSlug?: string;
  showcase?: { card: IndustryShowcaseSpecCard; highlights: IndustryShowcaseHighlight[] };
  cta?: {
    heading: string;
    body: string;
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
  };
}

// TODO: replace heroImageUrl/showcase imageUrl with licensed BV Holdings photography before launch.
const industryContent: Record<string, IndustryContentEntry> = {
  "horticulture-mulch": {
    badge: "Sustainable Horticulture",
    heroTitle: "Elevate Your Soil with Cocoa Essence",
    heroBody:
      "Premium cocoa shell mulch — a high-performance byproduct of ethical cocoa trade, engineered for modern agricultural excellence and landscape luxury.",
    heroImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCOEAEbmrq-gdp4FVr2YwDa2_IS08SLwyD7Vzp_VLG47-n0qXpBoq5EsMpGv42bzVzoi-mJBerh6eRsvbFizZMWYZiz4eWqpTG_YpFLRcn0iSC2qvKAnv_CvUJp1yWKtqmq33h39mF1U22D42khxjQc4Kt9a3cqzDLu6aK8fKwDtKA60llwgp3coUeNzRJAwQ3ATihVauZEUlBkC4NOaCZ4nYT2TQraD8y6AJXqYFT0zU2C9b6h4hDHWx5HSiHVQoD2tNArQjIPxlA",
    benefits: [
      {
        icon: "Leaf",
        title: "Superior Weed Suppression",
        description:
          "The interlocking nature of cocoa shells creates a dense, breathable barrier that naturally inhibits weed germination without the need for chemical intervention.",
      },
      {
        icon: "Droplets",
        title: "Hydration Mastery",
        description:
          "Cocoa shells act as a thermal blanket, reducing soil evaporation and retaining moisture during peak heat cycles for healthier root systems.",
      },
      {
        icon: "Sprout",
        title: "Slow-Release Nitrogen",
        description:
          "As the shells gradually decompose, they enrich the soil with essential nitrogen, potassium, and phosphorus — acting as a natural, long-term fertilizer.",
      },
    ],
    relatedProductSlug: "cocoa-husk-mulch",
  },
  "animal-feed": {
    badge: "Livestock Nutrition",
    heroTitle: "Nutrient-Rich Solutions for Modern Livestock",
    heroBody:
      "Leverage cocoa shell fiber as a sustainable, cost-effective ingredient for high-performance animal nutrition.",
    heroImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuApQ98pqQbXi3ZfgHj1NWYJap5BggdaKOThFgrnwXxZn8si_mVHmACw6ecXtoEY1f01czjiDkV5h3TVfLfof2b48Y_VoCMeRRkwK2eirRrAtwL4DLtmGslFWPFSItq-MHjZiwcG9pWe42-Xs45KnP1dBWYV1jx7eeQbaAh9-L7mkprQiSQFz3_ADkK372OXFkB_pVjodzK95AvjGi5uveqhC2cdHuz5Kq3rozI0yhhbo3eswpF3EzlDX6YpsHikbteXkGqppBQLcNk",
    benefits: [
      {
        icon: "Wheat",
        title: "High Dietary Fiber",
        description:
          "Supports rumen health and digestive efficiency in livestock, promoting natural bacterial growth and nutrient absorption.",
      },
      {
        icon: "Coins",
        title: "Maize Substitute",
        description:
          "A cost-effective alternative to traditional grain fillers, significantly reducing feed costs without compromising energy density.",
      },
      {
        icon: "HeartPulse",
        title: "Phytochemical Properties",
        description:
          "Contains natural compounds that support overall animal well-being and may help reduce methane emissions in ruminants.",
      },
    ],
    relatedProductSlug: "cocoa-shells",
    showcase: {
      card: {
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDhiAy4cZtafoLIzF62EvJ-8nhGPeJTUoIobHcD9uwd1ssnpi-V__etMG8EaPokptd1uDABpF2bhK4ZsJ5cAgmhR9w5EBJCaJbhPpw0CCAz4jSDZ4rpdkGSd0_91jqfKRiabtA_9KwkVMG8gpgPvXUTSCkfU39PWF2wNCQzg6spdRgcQfb14CzNFw52_9KvRSfJU1SGfWj1LZtD3ggrSzClYKz8W_8lvtGOWqFV7LyiYul2j4cH-vCRKCufUH7_aNeDobVnsNOvu5w",
        productName: "Cocoa Shell Meal & Pellets",
        badgeLabel: "Sustainably Sourced",
        specs: ["Nutrient Grade A+", "100% Natural Byproduct", "High Bioavailability"],
      },
      highlights: [
        {
          icon: "Truck",
          title: "Logistics",
          description: "Bulk shipment in 40ft containers, optimized for international export from Douala Port, Cameroon.",
          accent: "terracotta",
        },
        {
          icon: "Leaf",
          title: "Sustainability",
          description:
            "Upcycling waste into the food chain. We transform cocoa processing byproducts into essential nutrients for the next generation of livestock.",
          accent: "green",
        },
      ],
    },
    cta: {
      heading: "Ready to Enhance Your Feed Formulation?",
      body: "Join leading feed manufacturers in adopting sustainable, nutrient-rich alternatives. Our team is ready to provide technical support and volume quotes.",
      primaryCta: { label: "Request Supply Quote", href: "/contact" },
      secondaryCta: { label: "View Product Specs", href: "/products/cocoa-shells" },
    },
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const industry = await prisma.industry.findUnique({ where: { slug: params.slug } });
  if (!industry) return {};

  return { title: `${industry.name} | BV Holdings` };
}

export default async function IndustryDetailPage({ params }: { params: { slug: string } }) {
  const industry = await prisma.industry.findUnique({ where: { slug: params.slug } });

  if (!industry) notFound();

  const content = industryContent[industry.slug];
  const primaryCta = content?.relatedProductSlug
    ? { label: "View Product", href: `/products/${content.relatedProductSlug}` }
    : undefined;

  return (
    <div>
      <IndustryHero
        badge={content?.badge}
        title={content?.heroTitle ?? industry.name}
        body={content?.heroBody ?? industry.description}
        imageUrl={content?.heroImageUrl}
        primaryCta={primaryCta}
      />

      {content?.benefits && <IndustryBenefits benefits={content.benefits} />}

      {content?.showcase && <IndustryShowcase card={content.showcase.card} highlights={content.showcase.highlights} />}

      <SupplyCTACard
        heading={content?.cta?.heading}
        body={content?.cta?.body}
        primaryCta={content?.cta?.primaryCta}
        secondaryCta={content?.cta?.secondaryCta}
      />
    </div>
  );
}
