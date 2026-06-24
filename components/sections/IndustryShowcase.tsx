"use client";

import { motion } from "framer-motion";
import { Leaf, Truck, type LucideIcon } from "lucide-react";

export interface IndustryShowcaseSpecCard {
  imageUrl: string;
  productName: string;
  badgeLabel?: string;
  specs: string[];
}

export interface IndustryShowcaseHighlight {
  icon: string;
  title: string;
  description: string;
  accent?: "terracotta" | "green";
}

export interface IndustryShowcaseProps {
  card: IndustryShowcaseSpecCard;
  highlights: IndustryShowcaseHighlight[];
}

const iconMap: Record<string, LucideIcon> = { Truck, Leaf };

const accentClasses: Record<string, { border: string; icon: string }> = {
  terracotta: { border: "border-terracotta", icon: "text-terracotta" },
  green: { border: "border-sustainableGreen", icon: "text-sustainableGreen" },
};

export function IndustryShowcase({ card, highlights }: IndustryShowcaseProps) {
  return (
    <section className="bg-softSand py-xl">
      <div className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-xl px-gutter lg:grid-cols-2">
        <motion.div
          className="ambient-shadow overflow-hidden rounded-xl bg-warmCream p-md"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mb-md aspect-square overflow-hidden rounded-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={card.imageUrl} alt={card.productName} className="h-full w-full object-cover" />
          </div>
          <div className="flex items-end justify-between gap-md">
            <div>
              <h3 className="text-headline-md font-headline-md text-cocoaBrown">{card.productName}</h3>
              {card.badgeLabel && (
                <span className="mt-sm inline-flex items-center gap-1 rounded-full bg-sustainableGreen/10 px-sm py-xs text-label-sm font-label-sm text-sustainableGreen">
                  <Leaf className="h-4 w-4" />
                  {card.badgeLabel}
                </span>
              )}
            </div>
            <div className="text-right">
              <p className="text-label-sm font-label-sm uppercase tracking-widest text-terracotta">Specifications</p>
              <ul className="mt-xs text-body-md text-charcoal/70">
                {card.specs.map((spec) => (
                  <li key={spec}>{spec}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="space-y-lg"
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          {highlights.map((highlight) => {
            const Icon = iconMap[highlight.icon] ?? Leaf;
            const accent = accentClasses[highlight.accent ?? "terracotta"];
            return (
              <div
                key={highlight.title}
                className={`ambient-shadow rounded-xl border-l-4 bg-warmCream p-lg ${accent.border}`}
              >
                <div className="flex items-start gap-md">
                  <Icon className={`mt-1 h-7 w-7 shrink-0 ${accent.icon}`} />
                  <div>
                    <h4 className="mb-xs text-headline-md font-headline-md text-cocoaBrown">{highlight.title}</h4>
                    <p className="text-body-lg text-charcoal/70">{highlight.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
