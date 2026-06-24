import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const products = [
  {
    slug: "cocoa-shells",
    name: "Cocoa Shells",
    description:
      "Premium dried cocoa shells, byproduct of cocoa bean processing, suitable for animal feed, mulch, and biomass applications.",
    specifications: {
      moisture: "< 10%",
      particleSize: "5-20mm",
      moq: "1 x 20ft container",
      hsCode: "1802",
    },
    hsCode: "1802",
    available: true,
  },
  {
    slug: "cocoa-shell-flour",
    name: "Cocoa Shell Flour",
    description: "Finely milled cocoa shell flour for food ingredient and cosmetic applications. Coming soon.",
    specifications: {
      moisture: "< 8%",
      particleSize: "< 1mm",
      moq: "TBD",
      hsCode: "1802",
    },
    hsCode: "1802",
    available: false,
  },
  {
    slug: "cocoa-husk-mulch",
    name: "Cocoa Husk Mulch",
    description: "Processed cocoa husk mulch for horticulture and landscaping use. Coming soon.",
    specifications: {
      moisture: "< 12%",
      particleSize: "10-30mm",
      moq: "TBD",
      hsCode: "1802",
    },
    hsCode: "1802",
    available: false,
  },
];

const industries = [
  {
    slug: "animal-feed",
    name: "Animal Feed",
    description: "Cocoa shells as a fiber-rich additive in livestock and poultry feed formulations.",
    useCaseDetail:
      "Cocoa shells are used by feed manufacturers as a cost-effective fiber source in ruminant and poultry feed blends.",
    order: 1,
  },
  {
    slug: "horticulture-mulch",
    name: "Horticulture & Mulch",
    description: "Natural, weed-suppressing mulch for gardens, nurseries, and landscaping.",
    useCaseDetail:
      "Cocoa shell mulch improves soil moisture retention and suppresses weeds while breaking down into nutrient-rich compost.",
    order: 2,
  },
  {
    slug: "food-ingredients",
    name: "Food Ingredients",
    description: "Cocoa byproducts processed into ingredients for food and beverage manufacturing.",
    useCaseDetail:
      "Cocoa shell extracts and flour are used as flavoring agents and functional ingredients in food production.",
    order: 3,
  },
  {
    slug: "cosmetics-skincare",
    name: "Cosmetics & Skincare",
    description: "Cocoa byproduct extracts used in skincare formulations for their antioxidant properties.",
    useCaseDetail:
      "Cosmetics manufacturers use cocoa shell extracts for exfoliants and antioxidant-rich skincare formulations.",
    order: 4,
  },
  {
    slug: "biomass-energy",
    name: "Biomass Energy",
    description: "Cocoa shells as a renewable biomass fuel source for energy generation.",
    useCaseDetail:
      "Dried cocoa shells serve as a renewable solid fuel alternative for biomass boilers and energy plants.",
    order: 5,
  },
  {
    slug: "sustainable-packaging",
    name: "Sustainable Packaging",
    description: "Cocoa fiber byproducts used in the development of biodegradable packaging materials.",
    useCaseDetail:
      "Cocoa husk fiber is being explored as a raw material input for biodegradable and compostable packaging.",
    order: 6,
  },
];

async function main() {
  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: product,
      create: product,
    });
  }

  for (const industry of industries) {
    await prisma.industry.upsert({
      where: { slug: industry.slug },
      update: industry,
      create: industry,
    });
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
