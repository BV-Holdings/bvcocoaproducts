import type { IndustryType } from "@/types";

// TODO: replace with Stitch design — Industries Grid
export interface IndustriesGridProps {
  industries?: IndustryType[];
}

export function IndustriesGrid({ industries = [] }: IndustriesGridProps) {
  return (
    <div className="border border-dashed border-terracotta bg-softSand p-12">
      <p className="font-mono text-xs uppercase tracking-wide text-terracotta">IndustriesGrid placeholder</p>
      <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3">
        {industries.map((industry) => (
          <div key={industry.slug} className="rounded-brand bg-warmCream p-4">
            <p className="font-serif text-cocoaBrown">{industry.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
