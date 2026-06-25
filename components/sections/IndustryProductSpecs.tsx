"use client";

import { motion } from "framer-motion";

export interface ProductSpecRow {
  label: string;
  value: string;
}

export interface IndustryProductSpecsProps {
  heading: string;
  body: string;
  imageUrl: string;
  badgeLabel?: string;
  badgeValue?: string;
  specs: ProductSpecRow[];
}

export function IndustryProductSpecs({ heading, body, imageUrl, badgeLabel, badgeValue, specs }: IndustryProductSpecsProps) {
  return (
    <section className="bg-softSand py-xl">
      <div className="mx-auto max-w-container-max px-gutter">
        <div className="flex flex-col items-center gap-xl md:flex-row">
          <motion.div
            className="relative w-full md:w-1/2"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="ambient-shadow aspect-square overflow-hidden rounded-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imageUrl} alt={heading} className="h-full w-full object-cover" />
            </div>
            {badgeLabel && badgeValue && (
              <div className="absolute -bottom-6 -right-6 hidden rounded-lg bg-terracotta p-md text-warmCream shadow-xl md:block">
                <div className="text-label-sm font-label-sm uppercase tracking-widest opacity-80">{badgeLabel}</div>
                <div className="text-headline-md font-headline-md">{badgeValue}</div>
              </div>
            )}
          </motion.div>

          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <h2 className="mb-md text-headline-lg font-headline-lg font-serif text-cocoaBrown">{heading}</h2>
            <p className="mb-lg text-body-lg text-charcoal/70">{body}</p>
            <div className="space-y-sm">
              {specs.map((spec) => (
                <div key={spec.label} className="flex justify-between border-b border-charcoal/10 py-sm">
                  <span className="text-label-sm font-label-sm text-charcoal/60">{spec.label}</span>
                  <span className="text-body-md font-bold text-terracotta">{spec.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
