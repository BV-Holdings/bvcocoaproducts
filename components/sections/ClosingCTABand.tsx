// TODO: replace with Stitch design — Closing CTA band
export interface ClosingCTABandProps {
  heading?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function ClosingCTABand({ heading, ctaLabel, ctaHref }: ClosingCTABandProps) {
  return (
    <div className="border border-dashed border-terracotta bg-cocoaBrown p-12 text-center">
      <p className="font-mono text-xs uppercase tracking-wide text-amber">ClosingCTABand placeholder</p>
      {heading && <h2 className="mt-2 font-serif text-xl text-warmCream">{heading}</h2>}
      {ctaLabel && ctaHref && (
        <p className="mt-2 text-sm text-amber">
          CTA: {ctaLabel} ({ctaHref})
        </p>
      )}
    </div>
  );
}
