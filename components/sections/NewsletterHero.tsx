"use client";

import { motion } from "framer-motion";
import { NewsletterSignupForm } from "@/components/forms/NewsletterSignupForm";

export interface NewsletterHeroProps {
  title?: string;
  body?: string;
  footnote?: string;
  imageUrl?: string;
  source?: string;
  anchorId?: string;
}

const DEFAULT_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC0Wbclia_3C7TTgY2fXgivW4S-500IkDr77NQ8rD4sqH1AE-VX2XlftseHh8JeCWo5OStBaAvINHaZC9wkE1KogArvDWuIuE9IgxwY4aPyvHX2gDzJIfjzVNvGCbykpkJrVRz6LCr8H48M0rtZ1BbP-M7dgxb-YVn50wniW-GmjpY-2Pa1ztPpTPOheahHqEnrHfq2Ex697OqLEiEGTksrLT4Wx3bhNI0Ch7s7pfLFy8ELwvJ6hhUBOatKzH4-wPXRoFsw9HEoHHU";

export function NewsletterHero({
  title = "West Africa Trade Digest",
  body = "Direct market intelligence from the heart of the cocoa supply chain. Monthly insights on pricing, logistics, and sustainability.",
  footnote = "Unsubscribe anytime.",
  imageUrl = DEFAULT_IMAGE,
  source = "newsletter-page",
  anchorId = "subscribe",
}: NewsletterHeroProps) {
  return (
    <section className="relative flex min-h-[819px] items-center overflow-hidden" id={anchorId}>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-cocoaBrown/40 mix-blend-multiply" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageUrl} alt="Cocoa plantation in Cameroon at dawn" className="h-full w-full object-cover" />
      </div>

      <div className="relative z-20 mx-auto grid w-full max-w-container-max grid-cols-1 gap-xl px-gutter py-xl lg:grid-cols-2">
        <motion.div
          className="relative overflow-hidden rounded-xl border border-charcoal/10 bg-warmCream/90 p-lg backdrop-blur-md md:p-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="fiber-texture pointer-events-none absolute inset-0" />
          <div className="relative z-10">
            <h1 className="mb-md text-display-lg font-display-lg font-serif text-cocoaBrown">{title}</h1>
            <p className="mb-lg max-w-xl text-body-lg text-charcoal/70">{body}</p>
            <NewsletterSignupForm source={source} />
            <p className="mt-sm text-label-sm text-charcoal/50">{footnote}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
