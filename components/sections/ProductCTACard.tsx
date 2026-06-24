"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export interface ProductCTACardProps {
  heading?: string;
  body?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function ProductCTACard({
  heading = "Scale Your Supply Chain",
  body = "Ready to integrate this product into your production or trade portfolio? Contact our logistics experts for current pricing and export timelines.",
  primaryCta = { label: "Request Quote", href: "/contact" },
  secondaryCta = { label: "Speak to Expert", href: "/contact" },
}: ProductCTACardProps) {
  return (
    <section className="mx-auto max-w-container-max px-gutter py-xl">
      <motion.div
        className="relative flex flex-col items-center space-y-md overflow-hidden rounded-[32px] bg-cocoaBrown p-lg text-center md:p-xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="fiber-texture absolute inset-0" />
        <div className="relative z-10 max-w-2xl space-y-md">
          <h2 className="text-headline-lg font-headline-lg font-serif text-amber">{heading}</h2>
          <p className="text-body-lg text-warmCream/90">{body}</p>
          <div className="flex flex-col justify-center gap-md pt-md sm:flex-row">
            <Link
              href={primaryCta.href}
              className="rounded-xl bg-terracotta px-xl py-md text-label-sm font-label-sm text-warmCream transition-all duration-300 hover:bg-amber hover:text-charcoal"
            >
              {primaryCta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className="rounded-xl border-2 border-warmCream/30 bg-transparent px-xl py-md text-label-sm font-label-sm text-warmCream transition-all duration-300 hover:border-amber hover:text-amber"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
