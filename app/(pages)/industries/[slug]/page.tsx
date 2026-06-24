import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

// TODO: replace with Stitch design — Industry detail page
export default async function IndustryDetailPage({ params }: { params: { slug: string } }) {
  const industry = await prisma.industry.findUnique({ where: { slug: params.slug } });

  if (!industry) notFound();

  return (
    <div className="border border-dashed border-terracotta bg-softSand p-12">
      <p className="font-mono text-xs uppercase tracking-wide text-terracotta">
        Industry detail page placeholder
      </p>
      <h1 className="mt-2 font-serif text-xl text-cocoaBrown">{industry.name}</h1>
      <p className="mt-2 text-charcoal">{industry.useCaseDetail}</p>
    </div>
  );
}
