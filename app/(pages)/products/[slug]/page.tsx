import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ProductHero } from "@/components/sections/ProductHero";
import { ProductApplications, type ProductApplication } from "@/components/sections/ProductApplications";
import { ProductSpecSheet } from "@/components/sections/ProductSpecSheet";
import { ProductCTACard } from "@/components/sections/ProductCTACard";
import type { ProductSpecifications } from "@/types";

interface ProductContentEntry {
  heroImageUrl: string;
  applications: ProductApplication[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

// TODO: replace heroImageUrl with licensed BV Holdings product photography before launch.
const productContent: Record<string, ProductContentEntry> = {
  "cocoa-shells": {
    heroImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDpGiu9okwKp8qIMHJphsJT-HnENY7rBCnLBnhM-HS3McmZOiQQF33x2BDG_bhar5AxEbnQQ7O_zfGzSqZvx2pW8wQXvqDoYlIfY-xbasEVmluZdsRzUF8i5HzcaNN8tBuyoh_zqhdWVP9ZDJyf63Kuwjz0UD7cALxguYFgnaksjMdOg3QmIb66mBnMvwjF1lIzMzhuH1fn-VL054gUTYKqhEOcCTtdHfvMMlqF9CTOGQUSCLWK6cf-ZmgIqIpVXZHAtZYOtm4hCyI",
    applications: [
      {
        icon: "Sprout",
        title: "Soil & Mulch",
        description:
          "High organic content makes cocoa shells an excellent organic mulch that suppresses weeds and retains moisture while adding nitrogen.",
      },
      {
        icon: "PawPrint",
        title: "Animal Feed",
        description:
          "A cost-effective supplement for ruminant livestock, providing essential fiber and unique phytochemical properties.",
        emphasized: true,
      },
      {
        icon: "Zap",
        title: "Biomass Energy",
        description:
          "With high calorific value, our shells are used as a sustainable alternative fuel source in industrial boiler systems.",
      },
    ],
  },
  "cocoa-husk-mulch": {
    heroImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCal6WY7ZJtMQpQ5f5cx8G5F_d8yElCFket758w6z0PqtLZOV3Uqrn_qRfqhl4G-Tr60G-23wATmGx4wNMYl-G1K17nwbaoUkgEKF1Wbl9Z65ywoi54w6-iBMfHDuD1Drfxy3xhOuvp_lzqMD1Onyvzfyz_-SZqX32Kyt1rNerivQ5_PXQdcYXpOCdZMTYuWvOxuQ3VUUhmGr00KMn2mQKzr3RjMhApOO2KWRdkMzuymgQ_5R0lI3X8rHIS-W05RvsaVUJamGB5O-U",
    applications: [
      {
        icon: "Leaf",
        title: "Superior Weed Suppression",
        description:
          "The interlocking nature of cocoa husks creates a dense, breathable barrier that naturally inhibits weed germination without chemical intervention.",
      },
      {
        icon: "Droplets",
        title: "Hydration Mastery",
        description:
          "Acts as a thermal blanket, reducing soil evaporation and retaining moisture during peak heat cycles for healthier root systems.",
        emphasized: true,
      },
      {
        icon: "Sprout",
        title: "Slow-Release Nitrogen",
        description:
          "As the husks gradually decompose, they enrich the soil with nitrogen, potassium, and phosphorus — a natural, long-term fertilizer.",
      },
    ],
    primaryCta: { label: "Request Updates", href: "/contact" },
    secondaryCta: { label: "View Logistics", href: "/buyers" },
  },
  "cocoa-meal-pellets": {
    heroImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-dJfYT5ggEw3ugJ4qmNBfjzVA7RNOOYWLhA2clx22wULgkdL5t00ZCAoW6PM4J0HlL9QBAl-8uZkkKVO6pAde68_RG-XiqRb6hyhwvt20vvUpKSp6oOzo-UWU3a-HX1n7xQDtgtLmzen5ohKySUSo4x4T1rXkIvYnGxkyAuMr_0ZFU_vfB1XCIu1A1af0QWecfbcI1M-aXs033AbzjpL9AQI60r4S1OMUrx3C3rJmk8R163_YBkAJQy6j2RQKjkbUp8YNzpRvU6A",
    applications: [
      {
        icon: "Zap",
        title: "Biomass Energy",
        description: "Compacted pellets optimized for high-efficiency thermal combustion in industrial boiler systems.",
        emphasized: true,
      },
    ],
    primaryCta: { label: "Request Updates", href: "/contact" },
    secondaryCta: { label: "View Logistics", href: "/buyers" },
  },
  "cocoa-micronized-powder": {
    heroImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAbPVvYpxNKsJL2b1KEshWxX9CB3bujGfkbzfKtI8wFFCmr7cyuqXRk9e93qgjnkJbLIJFZqAS24v3mpycYNmgpCz6pPCqMaa9IN0vT5sUp1ThMz1FNCnDbvaM28v1279s-fLKqg_XWr4OYPPkkBgOUAJdnIzKLHy6bILJplrjOlMv8UiGGA19g0yRgQB1O917CxD9a4TaGqtx7FbRjzW2LzEcNE5gQEsjQ93m5ksWZcBm-czvLiu2qa_nBdxJl4dm6KpUIR_gtB_c",
    applications: [
      {
        icon: "Sparkles",
        title: "Cosmetics & Skincare",
        description: "High-potency micronized powder engineered for premium cosmetic and specialty formulations.",
        emphasized: true,
      },
    ],
    primaryCta: { label: "Request Updates", href: "/contact" },
    secondaryCta: { label: "View Logistics", href: "/buyers" },
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = await prisma.product.findUnique({ where: { slug: params.slug } });
  if (!product) return {};

  return {
    title: `${product.name} | BV Holdings - Sustainable Cocoa Excellence`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = await prisma.product.findUnique({ where: { slug: params.slug } });

  if (!product) notFound();

  const content = productContent[product.slug];

  return (
    <div>
      <ProductHero
        badge={product.available ? undefined : "Coming Soon"}
        title={product.name}
        description={product.description}
        imageUrl={content?.heroImageUrl}
        imageAlt={`${product.name} texture close-up`}
        primaryCta={content?.primaryCta}
        secondaryCta={content?.secondaryCta}
      />

      {content?.applications && <ProductApplications applications={content.applications} />}

      <ProductSpecSheet specifications={product.specifications as ProductSpecifications} />

      <ProductCTACard
        heading={`Scale Your Supply Chain`}
        body={`Ready to integrate ${product.name} into your production or trade portfolio? Contact our logistics experts for current pricing and export timelines.`}
      />
    </div>
  );
}
