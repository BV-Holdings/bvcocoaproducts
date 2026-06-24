// TODO: replace with Stitch design — "Farm to Export" process steps section
export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface FarmToExportProcessProps {
  steps?: ProcessStep[];
}

export function FarmToExportProcess({ steps = [] }: FarmToExportProcessProps) {
  return (
    <div className="border border-dashed border-terracotta bg-softSand p-12">
      <p className="font-mono text-xs uppercase tracking-wide text-terracotta">FarmToExportProcess placeholder</p>
      <ol className="mt-4 space-y-2">
        {steps.map((step) => (
          <li key={step.step} className="text-charcoal">
            {step.step}. {step.title} — {step.description}
          </li>
        ))}
      </ol>
    </div>
  );
}
