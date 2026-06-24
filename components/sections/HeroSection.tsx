// TODO: replace with Stitch design — Hero Section
export interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function HeroSection({ title, subtitle, ctaLabel, ctaHref }: HeroSectionProps) {
  return (
    <div className="border border-dashed border-terracotta bg-softSand p-12 text-center">
      <p className="font-mono text-xs uppercase tracking-wide text-terracotta">HeroSection placeholder</p>
      {title && <h1 className="mt-2 font-serif text-2xl text-cocoaBrown">{title}</h1>}
      {subtitle && <p className="mt-2 text-charcoal">{subtitle}</p>}
      {ctaLabel && ctaHref && (
        <p className="mt-2 text-sm text-amber">
          CTA: {ctaLabel} ({ctaHref})
        </p>
      )}
    </div>
  );
}
