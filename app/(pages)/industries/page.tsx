import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { IndustriesHero } from "@/components/sections/IndustriesHero";
import { IndustriesShowcaseGrid, type IndustryShowcaseItem } from "@/components/sections/IndustriesShowcaseGrid";
import { WhyPartnerSection } from "@/components/sections/WhyPartnerSection";
import { IndustriesCTABand } from "@/components/sections/IndustriesCTABand";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Industries | BV Holdings - Sustainable Cocoa Excellence",
};

// TODO: replace imageUrl with licensed BV Holdings photography before launch.
// sustainable-packaging has no photography yet — falls back to an icon treatment in the grid.
const cardContent: Record<string, { badgeLabel?: string; imageUrl?: string }> = {
  "food-ingredients": {
    badgeLabel: "Certified Grade",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDuHrlc_XHGTqBVNNqtPV2m6fbMTvFE_1Lnjvxct9MGz8h3_udepV_LklbP3IuI1xImceu0UnbBjG6YIt6WChDVKNezObS2yVk1krFHusd4HQSRJY_t_UCEIwENZGjRNxIbznHywC-cVprCNsBz6zHOFU6vuCF8QFeQdYZdovMCgm1NMbqNso5XqT1N3y-4LpPMY9aeAnqJw5oZb1CX7yJiCy2FJvTwvevMcmMSEQqykL1rAUc94h0Zh0_LUeXuF9ZsipeF7uSbl0o",
  },
  "animal-feed": {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA1aKwo_2l-86spDFV6GWzwXSgWAJvceoTnLgJEkxuko-qLn7CSOf6diKFAcUHc9P5fbG3edmWzUoRPTOELsXUvFtMaQZOfgXJkjR6OPUAjlrexVZTmfWu0cYLp6vGdf4oFuA1BA0tinzXlFgkS4ZVSKMYM_LykiWX8Li21IDgIbFGYJlRH-a8Ho0dUyJJrI_G6P1wSuzi0eCLAuH-izu-bsRJNINwoQk-cH1tf37NVTj6QOvvtP4h70CUDpZhyEcrE-r84KKDEze4",
  },
  "biomass-energy": {
    badgeLabel: "Eco-Efficient",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCJSCkY7199s3kDWdBQ5Qv5fI8g63g0lUiGwoLj3pITmFkCYYID6iUHQ5AiHpyaTLod4JXz8w91fCqxZ7dStgZJhAG6VVglgAiO6NH5qoBKsSqzgTlpnRaxQiaSvGL_61S--xs3Va0HF-5e0SCASN60FWZe1NEOBsMySEVPct4JdCC1r6hrTJCas3g4WM3Rk7yz25N80MAhhUv6e1Qri34wd_4BU_w3mzmx1kD965wxL8y6L6tlPrRdGjvKtSDO8U2Xid_5hNtIb9Y",
  },
  "cosmetics-skincare": {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDQRkvVyAykmcs5E8nudQz40BlIZGNNEvZCLRWbRGFrUWZQDvyhq6cUAWHOVJhXyNcxW00V0b5P2rpn7zTPv_6zbGVDaQrI6sAEmpsDfBbZrc6OZ86TRZkSdDF9LJ-cfYVd71Kd_wtymp7ox0RNuO5tQsEFwxSaF3OpH7nXgQaNNC-ocaJ7l0eRr46ntaPNzY-L5f6DJnTriTpcUlr6bJNDDVirPrJHeSpV1nZT9I3mj3dG0Eb8-pftiIxMZXaacuq0U2YiCBzI8d0",
  },
  "horticulture-mulch": {
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAqf2urU0u6HqafGHAygRIMIttsMdJZunsrSEX8VAYBuibvCzXnYpCb0HyeXpK8cVcrvFS9IQzqyND2Vxt6hDRyv4ao2EKGzdVOCNTosh1BA5yB0j6F4OIYOmaueBw74bp-_X0ycnWG3OIjzFsRjXc-79H4LnzQGpgMSR8n9SOqqdvI8PJj19zBS9EXJ3FU9602y0eVSs-3HKAzQ96Zx1UqguVWkFSYxsUJpRXr0wQfJokj1dO8wpFBi4VvhSrLuRBK7Bvz9F2DoSo",
  },
};

export default async function IndustriesPage() {
  const industries = await prisma.industry.findMany({ orderBy: { order: "asc" } });

  const items: IndustryShowcaseItem[] = industries.map((industry) => ({
    slug: industry.slug,
    name: industry.name,
    description: industry.description,
    icon: industry.icon ?? undefined,
    badgeLabel: cardContent[industry.slug]?.badgeLabel,
    imageUrl: cardContent[industry.slug]?.imageUrl,
  }));

  return (
    <div>
      <IndustriesHero />
      <IndustriesShowcaseGrid industries={items} />
      <WhyPartnerSection />
      <IndustriesCTABand />
    </div>
  );
}
