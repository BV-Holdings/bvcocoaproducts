import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

// TODO: replace with Stitch design — Industries listing page
export default async function IndustriesPage() {
  const industries = await prisma.industry.findMany({ orderBy: { order: "asc" } });

  return (
    <div className="border border-dashed border-terracotta bg-softSand p-12">
      <p className="font-mono text-xs uppercase tracking-wide text-terracotta">Industries page placeholder</p>
      <ul className="mt-4 space-y-2">
        {industries.map((industry) => (
          <li key={industry.id} className="text-charcoal">
            {industry.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
