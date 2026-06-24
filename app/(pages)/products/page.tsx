import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

// TODO: replace with Stitch design — Products listing page
export default async function ProductsPage() {
  const products = await prisma.product.findMany({ orderBy: { name: "asc" } });

  return (
    <div className="border border-dashed border-terracotta bg-softSand p-12">
      <p className="font-mono text-xs uppercase tracking-wide text-terracotta">Products page placeholder</p>
      <ul className="mt-4 space-y-2">
        {products.map((product) => (
          <li key={product.id} className="text-charcoal">
            {product.name} {product.available ? "" : "(coming soon)"}
          </li>
        ))}
      </ul>
    </div>
  );
}
