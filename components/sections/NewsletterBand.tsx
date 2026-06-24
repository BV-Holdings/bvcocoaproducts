import { NewsletterSignupForm } from "@/components/forms/NewsletterSignupForm";

// TODO: replace with Stitch design — Newsletter signup band
export interface NewsletterBandProps {
  heading?: string;
  source?: string;
}

export function NewsletterBand({ heading, source }: NewsletterBandProps) {
  return (
    <div className="border border-dashed border-amber bg-softSand p-12">
      <p className="font-mono text-xs uppercase tracking-wide text-amber">NewsletterBand placeholder</p>
      {heading && <h2 className="mt-2 font-serif text-xl text-cocoaBrown">{heading}</h2>}
      <div className="mt-4">
        <NewsletterSignupForm source={source} />
      </div>
    </div>
  );
}
