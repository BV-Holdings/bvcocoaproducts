"use client";

import { motion } from "framer-motion";

export interface TrustStat {
  value: string;
  label: string;
}

export interface TrustStatStripProps {
  stats?: TrustStat[];
}

const defaultStats: TrustStat[] = [
  { value: "100%", label: "Batches Inspected" },
  { value: "CoA", label: "Per Shipment" },
  { value: "EUDR", label: "Traceability" },
  { value: "48hrs", label: "Quote Time" },
];

export function TrustStatStrip({ stats = defaultStats }: TrustStatStripProps) {
  return (
    <section className="border-b border-charcoal/10 bg-softSand py-md">
      <div className="mx-auto max-w-container-max px-gutter">
        <div className="grid grid-cols-2 gap-md text-center md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
            >
              <span className="text-stat-numeric font-stat-numeric font-serif text-terracotta">{stat.value}</span>
              <span className="mt-xs text-label-sm font-label-sm uppercase text-charcoal/70">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
