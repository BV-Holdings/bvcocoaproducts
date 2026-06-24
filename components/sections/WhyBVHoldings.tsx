// TODO: replace with Stitch design — "Why BV Holdings" section
export interface WhyBVHoldingsReason {
  title: string;
  description: string;
}

export interface WhyBVHoldingsProps {
  reasons?: WhyBVHoldingsReason[];
}

export function WhyBVHoldings({ reasons = [] }: WhyBVHoldingsProps) {
  return (
    <div className="border border-dashed border-terracotta bg-softSand p-12">
      <p className="font-mono text-xs uppercase tracking-wide text-terracotta">WhyBVHoldings placeholder</p>
      <div className="mt-4 space-y-2">
        {reasons.map((reason) => (
          <div key={reason.title}>
            <p className="font-serif text-cocoaBrown">{reason.title}</p>
            <p className="text-sm text-charcoal">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
