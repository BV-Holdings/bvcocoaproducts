"use client";

import { motion } from "framer-motion";
import { Leaf, Recycle } from "lucide-react";

export interface SustainabilityCalloutProps {
  badgeLabel?: string;
  heading?: string;
  body?: string;
  statTitle?: string;
  statSubtitle?: string;
}

export function SustainabilityCallout({
  badgeLabel = "Sustainability Commitment",
  heading = "Closing the Loop",
  body = "Upcycling the cocoa husk to displace fossil fuels in the global energy mix. We transform agricultural waste into industrial-grade energy assets.",
  statTitle = "Renewable Byproduct",
  statSubtitle = "Sustainable Cocoa Excellence",
}: SustainabilityCalloutProps) {
  return (
    <section className="relative overflow-hidden py-xl">
      <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-terracotta/5 blur-3xl" />
      <motion.div
        className="relative z-10 mx-auto max-w-container-max px-gutter text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mb-md inline-flex items-center gap-2 rounded-full bg-terracotta/10 px-md py-1 text-label-sm font-label-sm text-terracotta">
          <Recycle className="h-4 w-4" />
          {badgeLabel.toUpperCase()}
        </div>
        <h2 className="mb-md text-headline-lg font-headline-lg font-serif text-cocoaBrown">{heading}</h2>
        <p className="mx-auto mb-lg max-w-3xl text-body-lg text-charcoal/70">{body}</p>
        <div className="flex justify-center">
          <div className="flex items-center gap-md rounded-lg bg-amber/20 p-md">
            <Leaf className="h-9 w-9 text-terracotta" />
            <div className="text-left">
              <div className="font-bold text-cocoaBrown">{statTitle}</div>
              <div className="text-sm text-charcoal/60">{statSubtitle}</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
