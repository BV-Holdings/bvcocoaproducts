"use client";

import { motion } from "framer-motion";
import { Handshake, Leaf, ShieldCheck, Truck, type LucideIcon } from "lucide-react";

export interface PillarStripItem {
  icon: string;
  label: string;
  caption: string;
}

export interface IndustryPillarsStripProps {
  pillars?: PillarStripItem[];
}

const iconMap: Record<string, LucideIcon> = { ShieldCheck, Leaf, Truck, Handshake };

const defaultPillars: PillarStripItem[] = [
  { icon: "ShieldCheck", label: "Traceability", caption: "Full supply chain mapping" },
  { icon: "ShieldCheck", label: "Quality", caption: "Rigorous quality control standards" },
  { icon: "Leaf", label: "Sustainability", caption: "EUDR-compliant upcycling" },
  { icon: "Truck", label: "Reliability", caption: "Consistent bulk global supply" },
];

export function IndustryPillarsStrip({ pillars = defaultPillars }: IndustryPillarsStripProps) {
  return (
    <section className="border-b border-charcoal/10 bg-warmCream py-xl">
      <div className="mx-auto max-w-container-max px-gutter">
        <div className="grid grid-cols-2 gap-md md:grid-cols-4">
          {pillars.map((pillar, i) => {
            const Icon = iconMap[pillar.icon] ?? ShieldCheck;
            return (
              <motion.div
                key={pillar.label}
                className="border-r border-charcoal/10 p-md text-center last:border-none"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
              >
                <Icon className="mx-auto mb-base h-6 w-6 text-terracotta" />
                <h4 className="mb-xs text-label-sm font-label-sm uppercase tracking-wide text-cocoaBrown">
                  {pillar.label}
                </h4>
                <p className="text-xs text-charcoal/60">{pillar.caption}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
