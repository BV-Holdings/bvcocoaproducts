// TODO: replace with Stitch design — Sustainability/ESG band
export interface SustainabilityBandProps {
  heading?: string;
  body?: string;
}

export function SustainabilityBand({ heading, body }: SustainabilityBandProps) {
  return (
    <div className="border border-dashed border-sustainableGreen bg-softSand p-12">
      <p className="font-mono text-xs uppercase tracking-wide text-sustainableGreen">SustainabilityBand placeholder</p>
      {heading && <h2 className="mt-2 font-serif text-xl text-cocoaBrown">{heading}</h2>}
      {body && <p className="mt-2 text-charcoal">{body}</p>}
    </div>
  );
}
