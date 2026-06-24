"use client";

import { motion } from "framer-motion";
import { NewsletterSignupForm } from "@/components/forms/NewsletterSignupForm";

export interface NewsletterBandProps {
  heading?: string;
  body?: string;
  source?: string;
}

export function NewsletterBand({
  heading = "West Africa Trade Digest",
  body = "Get monthly market insights, pricing trends, and logistics updates directly from our export hubs.",
  source,
}: NewsletterBandProps) {
  return (
    <section className="border-t border-softSand bg-softSand py-xl">
      <motion.div
        className="mx-auto flex max-w-container-max flex-col items-center gap-xl px-gutter md:flex-row"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="md:w-1/2">
          <h3 className="mb-sm text-headline-lg font-headline-lg font-serif text-cocoaBrown">{heading}</h3>
          <p className="text-body-lg text-charcoal/70">{body}</p>
        </div>
        <div className="w-full md:w-1/2">
          <NewsletterSignupForm source={source} />
          <p className="mt-sm text-label-sm text-charcoal/60">By subscribing, you agree to our Privacy Policy.</p>
        </div>
      </motion.div>
    </section>
  );
}
