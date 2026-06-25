import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { ProductsHero } from "@/components/sections/ProductsHero";
import { ProductCatalogGrid, type ProductCard } from "@/components/sections/ProductCatalogGrid";
import { TechnicalSuperiority } from "@/components/sections/TechnicalSuperiority";
import { CatalogCTABand } from "@/components/sections/CatalogCTABand";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Products | BV Holdings - Sustainable Cocoa Excellence",
};

// TODO: replace imageUrl with licensed BV Holdings product photography before launch.
const cardContent: Record<string, { badgeLabel: string; tags: string[]; imageUrl: string }> = {
  "cocoa-shells": {
    badgeLabel: "Raw Grade",
    tags: ["Animal Feed", "Biomass Energy"],
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-9UiCQaUKtnHdA3umY7eJ3P9ShSW1uGTk3DItKQ21vwoWJOYmzw02Jj-nGSdEZZ3908xflLfmNRE1_xjzRFebk5pltYghJewDcN0XqHDxJ_fPxaZU58F7XBjIi_MR2I1n-Lnui6JcfhgNn8FpYb-te5bjFwwrwvoWa_F_d28-MQdD06WRaOx3Z4jnWlpj-_-chS63icexVQ7S-wz_jFj38meRSrqVj-5ML_2EQ1RIjvfCQSUxdRpqZE0eoc6mp0CLhOuLljxFLWM",
  },
  "cocoa-shell-flour": {
    badgeLabel: "Milled Grade",
    tags: ["Food Ingredients", "Cosmetics"],
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA4ETrF2NH6X1peZtPT526jrgbRx-B98xv3C5sTO2SPYimE9JrviW5fQSlrAiTUXsQxNgqIseqXRHa56R6g8GRM2ZEomcyec4lKrpVP6DizSlQnrqDtWra2I0E5w7Ipqr1HD9UPPzEP9-Y5447AGvBompSKe2y-2nugyTIJWtYvY8ZlgTC_I_2gJKRNLJRrVT8br_HwEqFH1SOYp1cSIIDJLvNL8azw93Dqn61AUXYeq6PS7I65Reg7YAIw_CyIaaVoMNX5EtFddd0",
  },
  "cocoa-husk-mulch": {
    badgeLabel: "Husk Grade",
    tags: ["Horticulture", "Mulching"],
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCal6WY7ZJtMQpQ5f5cx8G5F_d8yElCFket758w6z0PqtLZOV3Uqrn_qRfqhl4G-Tr60G-23wATmGx4wNMYl-G1K17nwbaoUkgEKF1Wbl9Z65ywoi54w6-iBMfHDuD1Drfxy3xhOuvp_lzqMD1Onyvzfyz_-SZqX32Kyt1rNerivQ5_PXQdcYXpOCdZMTYuWvOxuQ3VUUhmGr00KMn2mQKzr3RjMhApOO2KWRdkMzuymgQ_5R0lI3X8rHIS-W05RvsaVUJamGB5O-U",
  },
  "cocoa-meal-pellets": {
    badgeLabel: "Pelletized",
    tags: ["Bulk Logistics", "Biomass Energy"],
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-dJfYT5ggEw3ugJ4qmNBfjzVA7RNOOYWLhA2clx22wULgkdL5t00ZCAoW6PM4J0HlL9QBAl-8uZkkKVO6pAde68_RG-XiqRb6hyhwvt20vvUpKSp6oOzo-UWU3a-HX1n7xQDtgtLmzen5ohKySUSo4x4T1rXkIvYnGxkyAuMr_0ZFU_vfB1XCIu1A1af0QWecfbcI1M-aXs033AbzjpL9AQI60r4S1OMUrx3C3rJmk8R163_YBkAJQy6j2RQKjkbUp8YNzpRvU6A",
  },
  "cocoa-micronized-powder": {
    badgeLabel: "Fine Grade",
    tags: ["Cosmetics", "Specialty"],
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAbPVvYpxNKsJL2b1KEshWxX9CB3bujGfkbzfKtI8wFFCmr7cyuqXRk9e93qgjnkJbLIJFZqAS24v3mpycYNmgpCz6pPCqMaa9IN0vT5sUp1ThMz1FNCnDbvaM28v1279s-fLKqg_XWr4OYPPkkBgOUAJdnIzKLHy6bILJplrjOlMv8UiGGA19g0yRgQB1O917CxD9a4TaGqtx7FbRjzW2LzEcNE5gQEsjQ93m5ksWZcBm-czvLiu2qa_nBdxJl4dm6KpUIR_gtB_c",
  },
};

export default async function ProductsPage() {
  const products = await prisma.product.findMany({ orderBy: { name: "asc" } });

  const productCards: ProductCard[] = products.map((product) => ({
    slug: product.slug,
    name: product.name,
    description: product.description,
    available: product.available,
    badgeLabel: cardContent[product.slug]?.badgeLabel,
    tags: cardContent[product.slug]?.tags,
    imageUrl: cardContent[product.slug]?.imageUrl,
  }));

  return (
    <div>
      <ProductsHero />
      <ProductCatalogGrid products={productCards} />
      <TechnicalSuperiority />
      <CatalogCTABand />
    </div>
  );
}
