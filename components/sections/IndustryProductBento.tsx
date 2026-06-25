"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Star } from "lucide-react";

export interface ProductBentoStatCard {
  heading: string;
  value: string;
  description: string;
  tone?: "dark" | "light";
}

export interface IndustryProductBentoProps {
  imageUrl: string;
  imageAlt: string;
  badgeLabel: string;
  available: boolean;
  productName: string;
  description: string;
  checklist: string[];
  statCards: ProductBentoStatCard[];
}

export function IndustryProductBento({
  imageUrl,
  imageAlt,
  badgeLabel,
  available,
  productName,
  description,
  checklist,
  statCards,
}: IndustryProductBentoProps) {
  return (
    <section className="bg-softSand py-xl" id="product-callout">
      <div className="mx-auto max-w-container-max px-gutter">
        <div className="grid grid-cols-1 gap-md lg:grid-cols-12">
          <motion.div
            className="ambient-shadow flex flex-col overflow-hidden rounded-xl border border-charcoal/10 bg-warmCream md:flex-row lg:col-span-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative h-64 md:h-auto md:w-1/2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imageUrl} alt={imageAlt} className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col justify-center p-xl md:w-1/2">
              <div className="mb-sm flex items-center gap-xs">
                {available ? (
                  <>
                    <Star className="h-4 w-4 fill-amber text-amber" />
                    <span className="text-label-sm font-label-sm text-amber">{badgeLabel}</span>
                  </>
                ) : (
                  <span className="rounded-full bg-terracotta/15 px-sm py-xs text-label-sm font-label-sm text-terracotta">
                    {badgeLabel}
                  </span>
                )}
              </div>
              <h2 className="mb-md text-headline-lg font-headline-lg font-serif leading-tight text-cocoaBrown">
                {productName}
              </h2>
              <p className="mb-lg text-body-md text-charcoal/70">{description}</p>
              <ul className="space-y-sm text-label-sm font-label-sm text-charcoal">
                {checklist.map((item) => (
                  <li key={item} className="flex items-center gap-sm">
                    <CheckCircle2 className="h-5 w-5 text-terracotta" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-rows-2 gap-md lg:col-span-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            {statCards.map((card) => {
              const isDark = (card.tone ?? "dark") === "dark";
              return (
                <div
                  key={card.heading}
                  className={
                    isDark
                      ? "ambient-shadow flex flex-col justify-center rounded-xl bg-cocoaBrown p-lg text-warmCream"
                      : "ambient-shadow flex flex-col justify-center rounded-xl border border-sustainableGreen/20 bg-sustainableGreen/10 p-lg"
                  }
                >
                  <h4 className={isDark ? "mb-sm text-label-sm font-label-sm text-amber" : "mb-sm text-label-sm font-label-sm text-sustainableGreen"}>
                    {card.heading}
                  </h4>
                  <div className={isDark ? "mb-xs text-headline-md font-headline-md" : "mb-xs text-headline-md font-headline-md text-cocoaBrown"}>
                    {card.value}
                  </div>
                  <p className={isDark ? "text-body-md text-warmCream/80" : "text-body-md text-charcoal/70"}>
                    {card.description}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
