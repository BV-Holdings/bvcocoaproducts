"use client";

import { motion } from "framer-motion";
import { Boxes, FlaskConical, Sprout, Store, Factory, type LucideIcon } from "lucide-react";

export interface TraceabilityStep {
  icon: string;
  label: string;
  description: string;
  accent?: "green" | "terracotta" | "muted";
}

export interface TraceabilityProcessProps {
  heading?: string;
  body?: string;
  steps?: TraceabilityStep[];
}

const iconMap: Record<string, LucideIcon> = {
  Sprout,
  Boxes,
  Factory,
  FlaskConical,
  Store,
};

const defaultSteps: TraceabilityStep[] = [
  { icon: "Sprout", label: "Farm Level", description: "Harvesting & Polygon Mapping", accent: "green" },
  { icon: "Boxes", label: "Collection", description: "QR Code Batch Tagging", accent: "muted" },
  { icon: "Factory", label: "Processing", description: "Segregated Quality Controls", accent: "muted" },
  { icon: "FlaskConical", label: "Verification", description: "3rd-Party Lab Analysis", accent: "muted" },
  { icon: "Store", label: "Export", description: "Global Distribution", accent: "terracotta" },
];

const accentBorder: Record<string, string> = {
  green: "border-sustainableGreen",
  terracotta: "border-terracotta",
  muted: "border-charcoal/15 group-hover:border-sustainableGreen",
};

const accentIcon: Record<string, string> = {
  green: "text-sustainableGreen",
  terracotta: "text-terracotta",
  muted: "text-charcoal/50",
};

export function TraceabilityProcess({
  heading = "Farm-to-Export Chain",
  body = "Our blockchain-enabled traceability ensures radical visibility across every node of the supply chain.",
  steps = defaultSteps,
}: TraceabilityProcessProps) {
  return (
    <section className="bg-warmCream py-xl">
      <div className="mx-auto mb-lg max-w-container-max px-gutter text-center">
        <h2 className="mb-sm text-headline-lg font-headline-lg font-serif text-cocoaBrown">{heading}</h2>
        <p className="mx-auto max-w-2xl text-body-md text-charcoal/70">{body}</p>
      </div>

      <div className="mx-auto max-w-container-max px-gutter">
        <div className="relative grid grid-cols-1 gap-md md:grid-cols-5">
          <div className="absolute left-0 top-8 hidden h-0.5 w-full bg-charcoal/10 md:block" />

          {steps.map((step, i) => {
            const Icon = iconMap[step.icon] ?? Sprout;
            const accent = step.accent ?? "muted";
            return (
              <motion.div
                key={step.label}
                className="group relative z-10 flex flex-col items-center"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              >
                <div
                  className={`mb-md flex h-16 w-16 items-center justify-center rounded-full border-4 bg-warmCream transition-transform group-hover:scale-110 ${accentBorder[accent]}`}
                >
                  <Icon className={`h-6 w-6 ${accentIcon[accent]}`} />
                </div>
                <h3 className="mb-xs text-label-sm font-label-sm uppercase tracking-widest text-cocoaBrown">
                  {step.label}
                </h3>
                <p className="text-center text-body-md text-charcoal/70">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
