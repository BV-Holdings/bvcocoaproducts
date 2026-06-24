import { NewsletterSignupForm } from "@/components/forms/NewsletterSignupForm";

// TODO: replace with Stitch design — Newsletter page
export default function NewsletterPage() {
  return (
    <div className="border border-dashed border-amber bg-softSand p-12">
      <p className="font-mono text-xs uppercase tracking-wide text-amber">Newsletter page placeholder</p>
      <div className="mt-6">
        <NewsletterSignupForm source="newsletter-page" />
      </div>
    </div>
  );
}
