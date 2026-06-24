// TODO: replace with Stitch design — Market Opportunity stats section
export interface MarketStat {
  label: string;
  value: string;
}

export interface MarketOpportunityStatsProps {
  stats?: MarketStat[];
}

export function MarketOpportunityStats({ stats = [] }: MarketOpportunityStatsProps) {
  return (
    <div className="border border-dashed border-terracotta bg-softSand p-12">
      <p className="font-mono text-xs uppercase tracking-wide text-terracotta">
        MarketOpportunityStats placeholder
      </p>
      <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-serif text-xl text-cocoaBrown">{stat.value}</p>
            <p className="text-sm text-charcoal">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
