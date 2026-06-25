import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const products = [
  {
    slug: "cocoa-shells",
    name: "Cocoa Shells",
    description:
      "A versatile, nutrient-rich byproduct sourced from premium Cameroonian cocoa beans. Ideal for mulch, animal feed, and biomass energy.",
    specifications: {
      moisture: "8.0% - 12.0% (Max)",
      particleSize: "Flakes (2mm - 15mm)",
      packaging: "25kg PP Bags / 500kg Jumbo Bags",
      moq: "1 Full Container Load (FCL - 20ft)",
      hsCode: "1802.00",
      origin: "Cameroon (Littoral & South-West Regions)",
      calorificValue: "18.5 MJ/kg",
      ashContent: "< 5%",
      bulkDensity: "~450 kg/m³",
    },
    hsCode: "1802",
    available: true,
  },
  {
    slug: "cocoa-shell-flour",
    name: "Cocoa Shell Flour",
    description: "Finely milled cocoa shell flour for food ingredient and cosmetic applications. Coming soon.",
    specifications: {
      moisture: "< 5%",
      particleSize: "Super Fine (< 75 microns)",
      packaging: "25kg Multi-layer Paper Bags",
      moq: "TBD",
      hsCode: "1802.00",
      origin: "Cameroon (Littoral & South-West Regions)",
    },
    hsCode: "1802",
    available: false,
  },
  {
    slug: "cocoa-husk-mulch",
    name: "Cocoa Husk Mulch",
    description:
      "Premium cocoa husk mulch for horticulture and landscaping — a natural weed suppressant and slow-release soil conditioner. Coming soon.",
    specifications: {
      moisture: "< 12%",
      particleSize: "10-30mm",
      packaging: "20kg Bags / Bulk Tote",
      moq: "1 x 40ft Container",
      hsCode: "1802.00",
      origin: "Cameroon (Littoral & South-West Regions)",
    },
    hsCode: "1802",
    available: false,
  },
  {
    slug: "cocoa-meal-pellets",
    name: "Cocoa Meal & Pellets",
    description:
      "Compacted cocoa shell meal, pelletized for bulk transportation and high-efficiency thermal combustion. Coming soon.",
    specifications: {
      moisture: "8.0% - 12.0%",
      particleSize: "Pelletized (6-8mm)",
      packaging: "500kg Jumbo Bags / Bulk",
      moq: "1 Full Container Load (FCL - 20ft)",
      hsCode: "1802.00",
      origin: "Cameroon (Littoral & South-West Regions)",
      calorificValue: "17 - 19 MJ/kg",
    },
    hsCode: "1802",
    available: false,
  },
  {
    slug: "cocoa-micronized-powder",
    name: "Cocoa Shell Micronized Powder",
    description:
      "High-purity micronized cocoa shell powder for cosmetic and specialty industrial formulations. Coming soon.",
    specifications: {
      moisture: "< 5%",
      particleSize: "< 50 microns (Micronized)",
      packaging: "25kg Multi-layer Paper Bags",
      moq: "TBD",
      hsCode: "1802.00",
      origin: "Cameroon (Littoral & South-West Regions)",
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
    icon: "PawPrint",
    order: 1,
  },
  {
    slug: "horticulture-mulch",
    name: "Horticulture & Mulch",
    description: "Natural, weed-suppressing mulch for gardens, nurseries, and landscaping.",
    useCaseDetail:
      "Cocoa shell mulch improves soil moisture retention and suppresses weeds while breaking down into nutrient-rich compost.",
    icon: "Sprout",
    order: 2,
  },
  {
    slug: "food-ingredients",
    name: "Food Ingredients",
    description: "Cocoa byproducts processed into ingredients for food and beverage manufacturing.",
    useCaseDetail:
      "Cocoa shell extracts and flour are used as flavoring agents and functional ingredients in food production.",
    icon: "UtensilsCrossed",
    order: 3,
  },
  {
    slug: "cosmetics-skincare",
    name: "Cosmetics & Skincare",
    description: "Cocoa byproduct extracts used in skincare formulations for their antioxidant properties.",
    useCaseDetail:
      "Cosmetics manufacturers use cocoa shell extracts for exfoliants and antioxidant-rich skincare formulations.",
    icon: "Sparkles",
    order: 4,
  },
  {
    slug: "biomass-energy",
    name: "Biomass Energy",
    description: "Cocoa shells as a renewable biomass fuel source for energy generation.",
    useCaseDetail:
      "Dried cocoa shells serve as a renewable solid fuel alternative for biomass boilers and energy plants.",
    icon: "Flame",
    order: 5,
  },
  {
    slug: "sustainable-packaging",
    name: "Sustainable Packaging",
    description: "Cocoa fiber byproducts used in the development of biodegradable packaging materials.",
    useCaseDetail:
      "Cocoa husk fiber is being explored as a raw material input for biodegradable and compostable packaging.",
    icon: "Recycle",
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
