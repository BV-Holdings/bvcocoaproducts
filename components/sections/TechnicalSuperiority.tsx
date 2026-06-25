"use client";

import { motion } from "framer-motion";
import { BarChart3, ShieldCheck, type LucideIcon } from "lucide-react";

export interface TechnicalSuperiorityFeature {
  icon: string;
  title: string;
  description: string;
}

export interface TechnicalSuperiorityStat {
  value: string;
  label: string;
  description: string;
}

export interface TechnicalSuperiorityProps {
  heading?: string;
  body?: string;
  features?: TechnicalSuperiorityFeature[];
  stats?: TechnicalSuperiorityStat[];
}

const iconMap: Record<string, LucideIcon> = { ShieldCheck, BarChart3 };

const defaultFeatures: TechnicalSuperiorityFeature[] = [
  {
    icon: "ShieldCheck",
    title: "EUDR Compliance",
    description: "Deforestation-free sourcing aligned with European trade regulation.",
  },
  {
    icon: "BarChart3",
    title: "Batch Traceability",
    description: "Full transparency from the processing plant to the export dock.",
  },
];

const defaultStats: TechnicalSuperiorityStat[] = [
  {
    value: "8-12%",
    label: "Moisture Consistency",
    description: "Optimized for storage and transport to prevent mold and degradation during sea transit.",
  },
  {
    value: "99.8%",
    label: "Purity Rating",
    description: "Mechanical separation ensures minimal foreign matter in our industrial meal.",
  },
  {
    value: "24/7",
    label: "Quality Monitoring",
    description: "Continuous laboratory analysis of color, fat content, and granularity profile.",
  },
  {
    value: "100%",
    label: "Traceable Origins",
    description: "Every ton is geo-tagged back to the specific Cameroonian collection center.",
  },
];

export function TechnicalSuperiority({
  heading = "Technical Superiority",
  body = "We don't just supply raw materials; we engineer consistent performance through rigorous batch testing and origin tracking.",
  features = defaultFeatures,
  stats = defaultStats,
}: TechnicalSuperiorityProps) {
  return (
    <section className="mx-auto max-w-container-max px-gutter py-xl">
      <div className="grid grid-cols-1 gap-xl lg:grid-cols-12">
        <motion.div
          className="lg:col-span-4"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="mb-md text-headline-lg font-headline-lg font-serif text-cocoaBrown">{heading}</h2>
          <p className="mb-lg text-body-md text-charcoal/70">{body}</p>
          <div className="space-y-md">
            {features.map((feature) => {
              const Icon = iconMap[feature.icon] ?? ShieldCheck;
              return (
                <div key={feature.title} className="flex gap-md">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-amber/20">
                    <Icon className="h-6 w-6 text-terracotta" />
                  </div>
                  <div>
                    <h4 className="font-bold text-cocoaBrown">{feature.title}</h4>
                    <p className="text-label-sm text-charcoal/60">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="relative overflow-hidden rounded-2xl bg-softSand p-lg lg:col-span-8"
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-terracotta/5 blur-3xl" />
          <div className="relative z-10 grid grid-cols-1 gap-lg sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="ambient-shadow rounded-xl bg-warmCream p-md">
                <div className="text-stat-numeric font-stat-numeric font-serif leading-tight text-cocoaBrown">
                  {stat.value}
                </div>
                <div className="mt-xs text-label-sm font-label-sm uppercase text-terracotta">{stat.label}</div>
                <div className="my-sm h-px w-full bg-terracotta/20" />
                <p className="text-xs text-charcoal/60">{stat.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
