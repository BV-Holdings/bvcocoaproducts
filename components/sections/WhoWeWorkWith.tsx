// TODO: replace with Stitch design — "Who We Work With" buyer segments section
export interface BuyerSegment {
  title: string;
  description: string;
}

export interface WhoWeWorkWithProps {
  segments?: BuyerSegment[];
}

export function WhoWeWorkWith({ segments = [] }: WhoWeWorkWithProps) {
  return (
    <div className="border border-dashed border-terracotta bg-softSand p-12">
      <p className="font-mono text-xs uppercase tracking-wide text-terracotta">WhoWeWorkWith placeholder</p>
      <div className="mt-4 space-y-2">
        {segments.map((segment) => (
          <div key={segment.title}>
            <p className="font-serif text-cocoaBrown">{segment.title}</p>
            <p className="text-sm text-charcoal">{segment.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
