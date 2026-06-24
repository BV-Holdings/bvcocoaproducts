// TODO: replace with Stitch design — Stat Strip
export interface Stat {
  label: string;
  value: string;
}

export interface StatStripProps {
  stats?: Stat[];
}

export function StatStrip({ stats = [] }: StatStripProps) {
  return (
    <div className="border border-dashed border-terracotta bg-softSand p-8 text-center">
      <p className="font-mono text-xs uppercase tracking-wide text-terracotta">StatStrip placeholder</p>
      <div className="mt-4 flex justify-center gap-8">
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
