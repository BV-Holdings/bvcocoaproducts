"use client";

import { motion } from "framer-motion";
import { Coins, Droplets, HeartPulse, Leaf, Sparkles, Sprout, TrendingUp, Truck, Wheat, Zap, type LucideIcon } from "lucide-react";

export interface IndustryBenefit {
  icon: string;
  title: string;
  description: string;
}

export interface IndustryBenefitsProps {
  heading?: string;
  body?: string;
  benefits: IndustryBenefit[];
  anchorId?: string;
}

const iconMap: Record<string, LucideIcon> = {
  Leaf,
  Droplets,
  Sprout,
  Wheat,
  Coins,
  HeartPulse,
  Zap,
  Sparkles,
  TrendingUp,
  Truck,
};

export function IndustryBenefits({
  heading = "The Science Behind the Byproduct",
  body = "More than just a byproduct, cocoa byproducts provide a unique nutritional profile and physical structure that outperform conventional alternatives.",
  benefits,
  anchorId = "benefits",
}: IndustryBenefitsProps) {
  return (
    <section className="relative overflow-hidden bg-warmCream py-xl" id={anchorId}>
      <div className="fiber-texture pointer-events-none absolute inset-0" />
      <div className="relative z-10 mx-auto max-w-container-max px-gutter">
        <div className="mb-xl text-center">
          <h2 className="mb-md text-headline-lg font-headline-lg font-serif text-cocoaBrown">{heading}</h2>
          <p className="mx-auto max-w-3xl text-body-lg text-charcoal/70">{body}</p>
        </div>

        <div className="grid grid-cols-1 gap-lg md:grid-cols-3">
          {benefits.map((benefit, i) => {
            const Icon = iconMap[benefit.icon] ?? Leaf;
            return (
              <motion.div
                key={benefit.title}
                className="hover-glow ambient-shadow rounded-xl bg-softSand p-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              >
                <div className="mb-md flex h-16 w-16 items-center justify-center rounded-lg bg-amber/30 text-terracotta">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mb-sm text-headline-md font-headline-md text-cocoaBrown">{benefit.title}</h3>
                <p className="text-body-md text-charcoal/70">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
