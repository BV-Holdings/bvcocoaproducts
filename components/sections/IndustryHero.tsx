"use client";

import { motion } from "framer-motion";

export interface IndustryHeroProps {
  badge?: string;
  title: string;
  body: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageUrl?: string;
  imageAlt?: string;
}

export function IndustryHero({
  badge = "Industry Focus",
  title,
  body,
  primaryCta = { label: "Explore Product", href: "#product-callout" },
  secondaryCta = { label: "Core Benefits", href: "#benefits" },
  imageUrl,
  imageAlt = "",
}: IndustryHeroProps) {
  return (
    <section className="relative flex h-[716px] w-full items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {imageUrl && (
          <motion.div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url('${imageUrl}')` }}
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
          />
        )}
        <div className="absolute inset-0 bg-cocoaBrown/30 mix-blend-multiply" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-container-max px-gutter">
        <motion.div
          className="max-w-2xl text-warmCream"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <span className="mb-md inline-block rounded-full bg-amber px-sm py-1 text-label-sm font-label-sm uppercase tracking-wider text-charcoal">
            {badge}
          </span>
          <h1 className="mb-md text-display-lg font-display-lg font-serif leading-tight">{title}</h1>
          <p className="mb-lg text-body-lg text-warmCream/90">{body}</p>
          <div className="flex gap-md">
            <a
              href={primaryCta.href}
              className="rounded-lg bg-terracotta px-xl py-md text-label-sm font-label-sm text-warmCream shadow-lg transition-all hover:bg-terracotta/90 active:scale-95"
            >
              {primaryCta.label}
            </a>
            <a
              href={secondaryCta.href}
              className="rounded-lg border border-warmCream/50 px-xl py-md text-label-sm font-label-sm text-warmCream backdrop-blur-sm transition-all hover:bg-warmCream/10 active:scale-95"
            >
              {secondaryCta.label}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
