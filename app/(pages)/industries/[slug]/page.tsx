import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { IndustryHero } from "@/components/sections/IndustryHero";
import { IndustryBenefits, type IndustryBenefit } from "@/components/sections/IndustryBenefits";
import { IndustryShowcase, type IndustryShowcaseSpecCard, type IndustryShowcaseHighlight } from "@/components/sections/IndustryShowcase";
import { IndustryProductSpecs, type ProductSpecRow } from "@/components/sections/IndustryProductSpecs";
import { IndustryProductTable } from "@/components/sections/IndustryProductTable";
import { IndustryLogisticsBand, type LogisticsBadge } from "@/components/sections/IndustryLogisticsBand";
import { SustainabilityCallout } from "@/components/sections/SustainabilityCallout";
import { SupplyCTACard } from "@/components/sections/SupplyCTACard";
import { IndustryPillarsStrip, type PillarStripItem } from "@/components/sections/IndustryPillarsStrip";
import { ProductFeatureBento, type ProductFeatureChecklistItem } from "@/components/sections/ProductFeatureBento";
import { IndustryCapacityPanel, type CapacityListItem, type CapacityBar } from "@/components/sections/IndustryCapacityPanel";
import { ComplianceProcessBand, type ComplianceBadge, type ProcessStep } from "@/components/sections/ComplianceProcessBand";
import { ApplicationImageGrid, type ApplicationImageItem } from "@/components/sections/ApplicationImageGrid";
import type { ProductSpecifications } from "@/types";

interface IndustryContentEntry {
  badge: string;
  heroTitle?: string;
  heroBody?: string;
  heroImageUrl: string;
  benefits: IndustryBenefit[];
  relatedProductSlug?: string;
  pillars?: PillarStripItem[];
  showcase?: { card: IndustryShowcaseSpecCard; highlights: IndustryShowcaseHighlight[] };
  productSpecs?: {
    heading: string;
    body: string;
    imageUrl: string;
    badgeLabel?: string;
    badgeValue?: string;
    specKeys: { key: string; label: string }[];
  };
  productFeature?: {
    imageUrl: string;
    imageAlt: string;
    statValue?: string;
    statLabel?: string;
    badgeLabel?: string;
    heading: string;
    body: string;
    checklist: ProductFeatureChecklistItem[];
    cta?: { label: string; href: string };
  };
  productTable?: {
    heading: string;
    body: string;
    imageUrl: string;
    imageAlt: string;
    specKeys: { key: string; label: string }[];
  };
  complianceProcess?: {
    heading?: string;
    badges?: ComplianceBadge[];
    processHeading?: string;
    steps?: ProcessStep[];
  };
  applicationGrid?: { heading?: string; body?: string; items: ApplicationImageItem[] };
  logistics?: { icon?: string; heading?: string; body?: string; badges?: LogisticsBadge[]; tone?: "dark" | "light" };
  capacityPanel?: {
    heading?: string;
    body?: string;
    listItems?: CapacityListItem[];
    capacityHeading?: string;
    bars?: CapacityBar[];
    ctaLabel?: string;
  };
  sustainability?: { badgeLabel?: string; heading?: string; body?: string; statTitle?: string; statSubtitle?: string };
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
  "biomass-energy": {
    badge: "Renewable Energy",
    heroTitle: "Sustainable Bio-Energy from West African Cocoa",
    heroBody:
      "High-calorific, carbon-conscious fuel solutions for industrial boiler systems and global energy markets.",
    heroImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBnXltgUaEE38dUvSNLor3LqizE64UEpgYv60osW9eV0vt7aW_vuMxbGCztzc-hxUtZKx0qyxqOLfF1l2IskfNTwx4VuG79ZFa0bn5DRMJj-7pGfqe3dtOI1O4ZD7gR3A4fnL_rCEDcs_lssZYmM1qWd2_59rFF3P_kWVsw2yA3PGTn2cqfFBXRpsXwfwIKhtP79R51NRt1tUwFtqSEDsFBRcmv-lsKmNG9NHLybbadZqrLvbm44-JV4W_CJO9-LknpeVv_UwcfGKg",
    benefits: [
      {
        icon: "Zap",
        title: "High Energy Density",
        description: "Cocoa shells provide a consistent heating value comparable to high-grade wood pellets.",
      },
      {
        icon: "Sparkles",
        title: "Low Ash Content",
        description: "Minimal residue levels ensure reduced maintenance and higher efficiency in specialized biomass boilers.",
      },
      {
        icon: "Leaf",
        title: "Renewable Resource",
        description: "A fully renewable byproduct that helps industrial partners work toward emissions-reduction targets.",
      },
    ],
    relatedProductSlug: "cocoa-shells",
    productSpecs: {
      heading: "Cocoa Shells for Biomass",
      body: "Our shells are meticulously screened and dried to ensure optimal performance in international energy markets.",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCVJxUO3p_UQlmjHmNvDRAzdA1AK9wTJ4xq-vp4ZYnebJqop8j21vTHOg4of4A_GrwhDyV9z3HFdrNzDwAsbtHru5BaZryXl_qiIg8qJCIee0ZJlE46qJ8DhP6cyq9jqXbcKZUBRqL0FWo33CYcN8Rf2YiwHKMTEKBgay5posZNZKRKLj9IkyvR3o8HD7CCuje-es6iqEJVsFcqi7B8GhP9djh2CR47swOgf4LlXeCunJ2WTur5x5X7Tnd5Yw1if7osbTo4GTm24B0",
      badgeLabel: "Premium Grade",
      badgeValue: "Cocoa Shells",
      specKeys: [
        { key: "calorificValue", label: "Calorific Value" },
        { key: "ashContent", label: "Ash Content" },
        { key: "moisture", label: "Moisture Content" },
        { key: "bulkDensity", label: "Bulk Density" },
      ],
    },
    logistics: {
      heading: "Bulk Supply Logistics",
      body: "Bulk shipments (FCL - 20ft/40ft) optimized for international energy traders. We ensure seamless chain-of-custody from Douala Port to your facility.",
    },
    sustainability: {
      heading: "Closing the Loop",
      body: "Upcycling the cocoa husk to displace fossil fuels in the global energy mix. We transform agricultural waste into industrial-grade energy assets.",
      statTitle: "Renewable Byproduct",
      statSubtitle: "Sustainable Cocoa Excellence",
    },
    cta: {
      heading: "Ready to Power Your Industrial Operations?",
      body: "Partner with BV Holdings for reliable, high-volume biomass supply tailored to your technical specifications.",
      primaryCta: { label: "Request Energy Quote", href: "/contact" },
      secondaryCta: { label: "View Product Specs", href: "/products/cocoa-shells" },
    },
  },
  "cosmetics-skincare": {
    badge: "B2B Industrial Solutions",
    heroTitle: "Refined Ingredients for Natural Beauty",
    heroBody:
      "Supplying high-potency cocoa shell extracts and micronized powders engineered for the global cosmetics industry. Sustainable, traceability-verified, and rich in natural bio-actives.",
    heroImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDHkwwKfvM3a_vMbfRj-j9DiqIQjP_FBZK8zVt9kDSPt6-47ANgIIEv-suSK-P42-BXBxIQzrtkQ7yfOAklTbRLB0SvJw67Gd32PFZPypG_y7aKxbx4QUzThe0z5crvj8-Dm3oZgloW3afYradXgltu6a40_wKzJIpfh2GsOh9XMvk5mABn9yp-Zy-hZP5_TKO_FQ7UpMtm1k8dw2lw8_2Fiz4aHkgktcbPFafEvWZzjLqhVHbC1ojKjZ74VyAcFM7BV2NPSKXwtQw",
    relatedProductSlug: "cocoa-micronized-powder",
    pillars: [
      { icon: "ShieldCheck", label: "Traceability", caption: "Full supply chain mapping" },
      { icon: "ShieldCheck", label: "Quality", caption: "Rigorous quality control standards" },
      { icon: "Leaf", label: "Sustainability", caption: "EUDR-compliant upcycling" },
      { icon: "Truck", label: "Reliability", caption: "Consistent bulk global supply" },
    ],
    benefits: [
      {
        icon: "Sparkles",
        title: "Rich in Antioxidants",
        description:
          "Exceptionally high polyphenol and flavonoid content. Neutralizes free radicals and supports anti-aging formulation efficacy by protecting skin against oxidative stress.",
      },
      {
        icon: "Droplets",
        title: "Natural Exfoliant",
        description:
          "Micro-milled shells provide a biodegradable, plastic-free alternative to synthetic microbeads. Gentle mechanical exfoliation with a rich, sensory appeal.",
      },
      {
        icon: "Zap",
        title: "Caffeine & Theobromine",
        description:
          "Stimulates microcirculation when applied topically. Ideal for skin-firming creams, eye contour gels, and revitalizing body treatments.",
      },
    ],
    productFeature: {
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBwP5ZdmCBqSJ2oHPdrJjW9GgbCyCwsIBkqQdePEV2FHJYQGu428N_Q4sSkcS8K9jkokF_XffUhkgdpgR08DX2Yxgho-JdE4xRy0DHYGJdOPDvFu-uogrMWZA7VXgjpy0ihiiI2roYXyf6GtUoYaZ1zWql8Rl3nGpTHdPmj7o8f0pNfKA7fKOME0mxhTLEZ01IO7hk3RFu-tUP9XCl2MyXq67IhuR6wiiteQxRapHWVFhtfgfe2HAdPbvgzRY7Y0Ztdk2LJPvP8cvQ",
      imageAlt: "Cocoa shell micronized powder in a laboratory glass container",
      statValue: "<50μ",
      statLabel: "PARTICLE SIZE",
      badgeLabel: "Upcycled Byproduct",
      heading: "Cocoa Shell Micronized Powder",
      body: "Our flagship cosmetic-grade byproduct. Sourced from premium Cameroonian beans and processed to meet the rigorous demands of global beauty brands.",
      checklist: [
        { title: "100% Natural", description: "No additives or chemicals" },
        { title: "Ethically Sourced", description: "Direct farmer relationships" },
        { title: "High Solubility", description: "Optimized for emulsions" },
        { title: "Micro-Batch Tested", description: "Consistent COA per shipment" },
      ],
      cta: { label: "Request Specification Sheet", href: "/contact" },
    },
    capacityPanel: {
      heading: "Global Cosmetic Supply Chain",
      body: "We specialize in the bulk fulfillment of cosmetic-grade cocoa materials, ensuring just-in-time delivery for industrial-scale manufacturing from Douala Port, Cameroon.",
    },
    logistics: {
      icon: "Leaf",
      heading: "EUDR-Compliant & Circular",
      body: "Our upcycling model eliminates waste and ensures every cocoa shell used in your formulations is fully compliant with the European Union Deforestation Regulation (EUDR). We provide full due diligence documentation for every shipment.",
      badges: [],
      tone: "light",
    },
    cta: {
      heading: "Formulate with Excellence",
      body: "Join leading skincare innovators who are transitioning to premium, sustainable cocoa-based actives. Our trade desk is ready to assist with sampling and logistics.",
      primaryCta: { label: "Request Sample COA", href: "/contact" },
      secondaryCta: { label: "Consult Our Trade Desk", href: "/contact" },
    },
  },
  "food-ingredients": {
    badge: "Premium Ingredients",
    heroTitle: "Pure Cocoa Essence for the Global Food Industry",
    heroBody:
      "Traceable, high-fiber, and antioxidant-rich cocoa shell ingredients engineered for flavor enhancement and nutritional fortification.",
    heroImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDBK8Ebal0Rr6B9jNlIFLrIRJ2ix9ZIy29Zx2EytojuTkP8ArTb6YRm5RbGWHYz9c2cEUbr7SD9kSmpoAa7Wm_FJlawj7eYy2OgHI7EhEVWY7RHuznCi4i72XzJDw8aqsDsJjTrIszsEkIRyJr6MMQV_9n1BYI_-SYX8w-UkourNxmBgwCqKSxmidUJFPt2zbRHDRmc5ltDUBhNiMg-tbQvXBWZATWpbQiuhpqK3F3yBVMZcZih464Biz5PTYqROiZ0Ai6mIglxvCo",
    relatedProductSlug: "cocoa-shell-flour",
    benefits: [
      {
        icon: "Wheat",
        title: "High Dietary Fiber",
        description: "Our finely milled cocoa shells provide a sustainable source of insoluble fiber, ideal for digestive wellness products.",
      },
      {
        icon: "HeartPulse",
        title: "Rich Polyphenol Content",
        description: "Retain natural antioxidants through our specialized low-heat processing techniques, ensuring nutritional integrity.",
      },
      {
        icon: "Sparkles",
        title: "Natural Flavor Enhancement",
        description: "Deepen color profiles and intensify cocoa notes without adding sugar, creating a cleaner label for your brand.",
      },
    ],
    productTable: {
      heading: "Cocoa Shell Flour",
      body: "A sustainable breakthrough in food science. Our fine-milled cocoa shell flour serves as a high-performance bulking agent and colorant for the modern bakery and confectionery sectors.",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCshkmRQS2VrMzZRFRV4kkGj8xTXPO8djNSdHMVlfP_-eQ1Gquq-yrnXsHRcRqLM6zUkH1SPQ-9X_L8HL-qc7FgEX5dq61FcOnODY_ajnbH9tKoreqGyyE3ZKJ6iXnMFsnv6RRpheph_77sywj8WCvxjU_jMvrijJtOJsI6X17KQyn6IF2_NVX7xspELL13JlI_xU7U-rr6KetmQRRrkhfkhq-GWIX9rIGyt75zIBW6hZqTDWX6gm2zdHlh9dipRypie1QBwV056NU",
      imageAlt: "Fine cocoa shell flour being poured from an industrial scoop",
      specKeys: [
        { key: "moisture", label: "Moisture" },
        { key: "particleSize", label: "Particle Size" },
        { key: "packaging", label: "Packaging" },
      ],
    },
    complianceProcess: {
      badges: [
        { icon: "Gavel", label: "Quality Tested" },
        { icon: "ScanSearch", label: "Non-GMO Sourcing" },
        { icon: "MapPin", label: "Full Traceability" },
        { icon: "Leaf", label: "Sustainable Sourcing" },
      ],
    },
    applicationGrid: {
      items: [
        {
          imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCo2WvbdQkOLEDPq5CeZDot8_JZ2ojS3UQd76ITRZIwqgdhZ_cqdzI8prUi65XoO_EErTwPQWdP8zPFQbJdNeuMiYDIjVqifgaZfC2IKGLgRH4FznuR10hHxqcpfwv2CNY3cQt0aYZebfxKtRmY77ck_d5vFJCKNof4eIFUcUWHWzbDWTbiQlCWN_lgurEKUQo-OgV5ATigb0NbIx4slCWc2w3unvvjKSbLKyzCIjhiWdPJ5D4jnw1-or67bxQsFYON_KFG7BAxFJM",
          label: "Confectionery",
        },
        {
          imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAxmJFiZfSoE0bt3sdsnO1wn_K222n2FeDSazkJSDBQXPXoZfxc7K8OFSBOMA9Y9yg7_OV9HR4ynB9Hc6h9GzTkfpGZUefhBxddxrnNQcjxkk9fSmZVjTo3iQHjcK44qwQej9IwAgyhloBRt-hqGhF5F5DyAjKUgjP5j3AfsjyHviMxvOXV0DTJyHSJK2DFNLppHmy6hBZPzeh6brLkmmBW1n7ByiiNYtV5Jh12vLpGhj9f_pY7WD_tdiHlLI7qpkATrAFmkfyp7XM",
          label: "Bakery",
        },
        {
          imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDEFH7HzE56rUw43Vrtoko9SS43tiT-FYQHKHDLO2GKTxfZDAhHn1gKezb2sjULFBjKVTCBd6SGJDrW89wCWpAm_nsFsz0c5FUCvFyG5vBYEAPLFWO_rJ9D20-aH8Jub840HbnF1NbF9_WFsFzAS2iryXHmY96OkR_edooY9_vn371L2OObHUF7OGk-IS912PczWAOIgMAV3lJnB-htSgssrR_aWGEl8Zekg5cl4CX326oxCnnoDKSwniU70GWR-QtqJiBksLOnJOM",
          label: "Functional Foods",
        },
        {
          imageUrl:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCnbCEKBNAbegl09si-wT1K4sOrRiNwJPly5QqBbTMI83dfITNMnDIeMk0vvbXLz9ZKTTQ67fzgfSqRNqOsnS1YaW2jrYNKGD7P43HY0hFew9A_O-6bEFcNJJ-y-dpNAb6c8fhUK0qsZZwClgWnG4RGgNylUfQLFQ25HIYNUDIpyEW9je6sCTWcQ9JbUQG6xUFE-Gtn6kjV0dVkrcGoqrz7CNV8MYseaRBqnlIG4oV0zO2WKCZUigPJ_hqOJVI7D35Q6B9VfIEHMpU",
          label: "Beverages",
        },
      ],
    },
    cta: {
      heading: "Ready to Innovate Your Product Line?",
      body: "Access our full technical dossier and explore how BV Holdings can optimize your ingredient profile with sustainable cocoa shells.",
      primaryCta: { label: "Request Sample COA", href: "/contact" },
      secondaryCta: { label: "Contact Trade Desk", href: "/contact" },
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

  let productSpecRows: ProductSpecRow[] = [];
  let productTableRows: ProductSpecRow[] = [];
  if ((content?.productSpecs || content?.productTable) && content.relatedProductSlug) {
    const relatedProduct = await prisma.product.findUnique({ where: { slug: content.relatedProductSlug } });
    const specifications = (relatedProduct?.specifications as ProductSpecifications) ?? {};

    if (content.productSpecs) {
      productSpecRows = content.productSpecs.specKeys
        .map(({ key, label }) => ({ label, value: specifications[key] }))
        .filter((row): row is ProductSpecRow => Boolean(row.value));
    }

    if (content.productTable) {
      productTableRows = content.productTable.specKeys
        .map(({ key, label }) => ({ label, value: specifications[key] }))
        .filter((row): row is ProductSpecRow => Boolean(row.value));
    }
  }

  return (
    <div>
      <IndustryHero
        badge={content?.badge}
        title={content?.heroTitle ?? industry.name}
        body={content?.heroBody ?? industry.description}
        imageUrl={content?.heroImageUrl}
        primaryCta={primaryCta}
      />

      {content?.pillars && <IndustryPillarsStrip pillars={content.pillars} />}

      {content?.benefits && <IndustryBenefits benefits={content.benefits} />}

      {content?.showcase && <IndustryShowcase card={content.showcase.card} highlights={content.showcase.highlights} />}

      {content?.productFeature && (
        <ProductFeatureBento
          imageUrl={content.productFeature.imageUrl}
          imageAlt={content.productFeature.imageAlt}
          statValue={content.productFeature.statValue}
          statLabel={content.productFeature.statLabel}
          badgeLabel={content.productFeature.badgeLabel}
          heading={content.productFeature.heading}
          body={content.productFeature.body}
          checklist={content.productFeature.checklist}
          cta={content.productFeature.cta}
        />
      )}

      {content?.productSpecs && productSpecRows.length > 0 && (
        <IndustryProductSpecs
          heading={content.productSpecs.heading}
          body={content.productSpecs.body}
          imageUrl={content.productSpecs.imageUrl}
          badgeLabel={content.productSpecs.badgeLabel}
          badgeValue={content.productSpecs.badgeValue}
          specs={productSpecRows}
        />
      )}

      {content?.productTable && productTableRows.length > 0 && (
        <IndustryProductTable
          heading={content.productTable.heading}
          body={content.productTable.body}
          imageUrl={content.productTable.imageUrl}
          imageAlt={content.productTable.imageAlt}
          specs={productTableRows}
        />
      )}

      {content?.complianceProcess && (
        <ComplianceProcessBand
          heading={content.complianceProcess.heading}
          badges={content.complianceProcess.badges}
          processHeading={content.complianceProcess.processHeading}
          steps={content.complianceProcess.steps}
        />
      )}

      {content?.applicationGrid && (
        <ApplicationImageGrid
          heading={content.applicationGrid.heading}
          body={content.applicationGrid.body}
          items={content.applicationGrid.items}
        />
      )}

      {content?.capacityPanel && (
        <IndustryCapacityPanel
          heading={content.capacityPanel.heading}
          body={content.capacityPanel.body}
          listItems={content.capacityPanel.listItems}
          capacityHeading={content.capacityPanel.capacityHeading}
          bars={content.capacityPanel.bars}
          ctaLabel={content.capacityPanel.ctaLabel}
        />
      )}

      {content?.logistics && (
        <IndustryLogisticsBand
          icon={content.logistics.icon}
          heading={content.logistics.heading}
          body={content.logistics.body}
          badges={content.logistics.badges}
          tone={content.logistics.tone}
        />
      )}

      {content?.sustainability && (
        <SustainabilityCallout
          badgeLabel={content.sustainability.badgeLabel}
          heading={content.sustainability.heading}
          body={content.sustainability.body}
          statTitle={content.sustainability.statTitle}
          statSubtitle={content.sustainability.statSubtitle}
        />
      )}

      <SupplyCTACard
        heading={content?.cta?.heading}
        body={content?.cta?.body}
        primaryCta={content?.cta?.primaryCta}
        secondaryCta={content?.cta?.secondaryCta}
      />
    </div>
  );
}
