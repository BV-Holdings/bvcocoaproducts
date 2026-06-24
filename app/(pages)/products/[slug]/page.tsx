import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

// TODO: replace with Stitch design — Product detail page
export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = await prisma.product.findUnique({ where: { slug: params.slug } });

  if (!product) notFound();

  return (
    <div className="border border-dashed border-terracotta bg-softSand p-12">
      <p className="font-mono text-xs uppercase tracking-wide text-terracotta">
        Product detail page placeholder
      </p>
      <h1 className="mt-2 font-serif text-xl text-cocoaBrown">{product.name}</h1>
      <p className="mt-2 text-charcoal">{product.description}</p>
    </div>
  );
}
