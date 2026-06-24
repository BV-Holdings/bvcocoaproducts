"use client";

import { motion } from "framer-motion";
import { Handshake, Leaf, MapPin, ShieldCheck, type LucideIcon } from "lucide-react";

export interface CorePillar {
  icon: string;
  title: string;
  description: string;
}

export interface CorePillarsProps {
  heading?: string;
  body?: string;
  pillars?: CorePillar[];
}

const iconMap: Record<string, LucideIcon> = { MapPin, ShieldCheck, Leaf, Handshake };

const defaultPillars: CorePillar[] = [
  {
    icon: "MapPin",
    title: "Traceability",
    description: "Complete visibility from the specific farm cluster in Cameroon to the final shipping container.",
  },
  {
    icon: "ShieldCheck",
    title: "Quality",
    description: "Strict moisture control and purity standards that exceed international industrial requirements.",
  },
  {
    icon: "Leaf",
    title: "Sustainability",
    description: "Pioneering a circular economy that increases farmer income and reduces environmental footprint.",
  },
  {
    icon: "Handshake",
    title: "Reliability",
    description: "Consistent supply chains backed by robust logistics and long-term buyer partnerships.",
  },
];

export function CorePillars({
  heading = "Our Core Pillars",
  body = "The foundation of our operations ensures reliability and excellence at every stage of the trade.",
  pillars = defaultPillars,
}: CorePillarsProps) {
  return (
    <section className="relative bg-softSand py-xl">
      <div className="fiber-texture absolute inset-0" />
      <div className="relative z-10 mx-auto mb-xl max-w-container-max px-gutter text-center">
        <h2 className="mb-sm text-headline-lg font-headline-lg font-serif text-cocoaBrown">{heading}</h2>
        <p className="mx-auto max-w-xl text-charcoal/70">{body}</p>
      </div>

      <div className="relative z-10 mx-auto grid max-w-container-max grid-cols-1 gap-md px-gutter md:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar, i) => {
          const Icon = iconMap[pillar.icon] ?? Leaf;
          return (
            <motion.div
              key={pillar.title}
              className="hover-glow ambient-shadow rounded-xl bg-warmCream p-lg transition-all"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            >
              <div className="mb-md flex h-12 w-12 items-center justify-center rounded-lg bg-amber/20">
                <Icon className="h-6 w-6 text-terracotta" />
              </div>
              <h3 className="mb-sm text-headline-md font-headline-md text-cocoaBrown">{pillar.title}</h3>
              <p className="text-body-md text-charcoal/70">{pillar.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
