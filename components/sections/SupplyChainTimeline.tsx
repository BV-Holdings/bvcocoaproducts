"use client";

import { motion } from "framer-motion";
import { Anchor, CheckCircle2, Factory, Leaf, Package, type LucideIcon } from "lucide-react";

export interface TimelineStep {
  icon: string;
  title: string;
  description: string;
  tag: string;
}

export interface SupplyChainTimelineProps {
  heading?: string;
  body?: string;
  steps?: TimelineStep[];
}

const iconMap: Record<string, LucideIcon> = { Leaf, Factory, Package, Anchor };

const defaultSteps: TimelineStep[] = [
  {
    icon: "Leaf",
    title: "Batch Collection",
    description: "Consolidation at BV origin hubs in Cameroon.",
    tag: "Verified Source",
  },
  {
    icon: "Factory",
    title: "Technical Milling",
    description: "Processing into high-grade shells, flour, and meal.",
    tag: "Quality Verified",
  },
  {
    icon: "Package",
    title: "Containerization",
    description: "Secure packaging and EUDR compliance tagging.",
    tag: "Digitally Tagged",
  },
  {
    icon: "Anchor",
    title: "Global Export",
    description: "Customs clearance and international dispatch.",
    tag: "Major Hub Access",
  },
];

export function SupplyChainTimeline({
  heading = "The Journey of Quality",
  body = "Tracing every metric ton from the farm gate to your manufacturing facility, ensuring compliance and accountability.",
  steps = defaultSteps,
}: SupplyChainTimelineProps) {
  return (
    <section className="bg-warmCream py-xl">
      <div className="mx-auto max-w-container-max px-gutter">
        <div className="mb-xl text-center">
          <h2 className="mb-sm text-headline-lg font-headline-lg font-serif text-cocoaBrown">{heading}</h2>
          <p className="mx-auto max-w-2xl text-body-md text-charcoal/70">{body}</p>
        </div>

        <div className="relative pt-lg">
          <div className="timeline-line absolute left-0 top-1/2 hidden h-1 w-full -translate-y-1/2 opacity-30 md:block" />
          <div className="relative grid grid-cols-1 gap-lg md:grid-cols-4">
            {steps.map((step, i) => {
              const Icon = iconMap[step.icon] ?? Leaf;
              return (
                <motion.div
                  key={step.title}
                  className="ambient-shadow z-10 rounded-xl border border-charcoal/10 bg-warmCream p-md text-center"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                >
                  <div className="mx-auto -mt-10 mb-md flex h-12 w-12 items-center justify-center rounded-full border-4 border-warmCream bg-terracotta text-warmCream shadow-lg">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="mb-xs text-headline-md font-headline-md text-cocoaBrown">{step.title}</h4>
                  <p className="text-body-md text-charcoal/70">{step.description}</p>
                  <div className="mt-sm border-t border-charcoal/10 pt-sm">
                    <span className="flex items-center justify-center gap-1 text-label-sm font-label-sm text-sustainableGreen">
                      <CheckCircle2 className="h-4 w-4" /> {step.tag}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
