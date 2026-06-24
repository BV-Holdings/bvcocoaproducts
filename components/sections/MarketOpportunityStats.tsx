"use client";

import { motion } from "framer-motion";

export interface MarketOpportunityStatsProps {
  heading?: string;
  body?: string;
  figure?: string;
  figureLabel?: string;
}

export function MarketOpportunityStats({
  heading = "The Market Opportunity",
  body = "Global demand for sustainable organic fillers and fertilizers is projected to grow by 18% annually. Secure your supply line now.",
  figure = "$2.4B",
  figureLabel = "Projected Market Cap 2027",
}: MarketOpportunityStatsProps) {
  return (
    <section className="relative overflow-hidden bg-cocoaBrown py-xl text-warmCream">
      <div className="relative z-10 mx-auto flex max-w-container-max flex-col items-center justify-between gap-lg px-gutter md:flex-row">
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="mb-md text-headline-lg font-headline-lg font-serif text-amber">{heading}</h2>
          <p className="text-body-lg text-warmCream/90">{body}</p>
        </motion.div>

        <motion.div
          className="min-w-[280px] rounded-xl border border-warmCream/20 bg-charcoal p-xl text-center"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          <div className="text-display-lg font-display-lg font-serif text-amber">{figure}</div>
          <div className="text-label-sm uppercase tracking-widest text-warmCream/70">{figureLabel}</div>
        </motion.div>
      </div>
    </section>
  );
}
