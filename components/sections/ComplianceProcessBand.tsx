"use client";

import { motion } from "framer-motion";
import { Gavel, Leaf, MapPin, ScanSearch, type LucideIcon } from "lucide-react";

export interface ComplianceBadge {
  icon: string;
  label: string;
}

export interface ProcessStep {
  number: string;
  label: string;
}

export interface ComplianceProcessBandProps {
  heading?: string;
  badges?: ComplianceBadge[];
  processHeading?: string;
  steps?: ProcessStep[];
}

const iconMap: Record<string, LucideIcon> = { Gavel, ScanSearch, MapPin, Leaf };

const defaultBadges: ComplianceBadge[] = [
  { icon: "Gavel", label: "Quality Tested" },
  { icon: "ScanSearch", label: "Non-GMO Sourcing" },
  { icon: "MapPin", label: "Full Traceability" },
  { icon: "Leaf", label: "Sustainable Sourcing" },
];

const defaultSteps: ProcessStep[] = [
  { number: "01", label: "Ethical Farming" },
  { number: "02", label: "Batch Collection" },
  { number: "03", label: "Technical Milling" },
  { number: "04", label: "Global Export" },
];

export function ComplianceProcessBand({
  heading = "Food Safety & Compliance",
  badges = defaultBadges,
  processHeading = "Our Farm-to-Kitchen Chain",
  steps = defaultSteps,
}: ComplianceProcessBandProps) {
  return (
    <section className="mx-auto max-w-container-max px-gutter py-xl text-center">
      <h2 className="mb-xl text-headline-lg font-headline-lg font-serif text-cocoaBrown">{heading}</h2>

      <div className="grid grid-cols-2 gap-md md:grid-cols-4">
        {badges.map((badge, i) => {
          const Icon = iconMap[badge.icon] ?? Leaf;
          return (
            <motion.div
              key={badge.label}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
            >
              <div className="mb-md flex h-20 w-20 items-center justify-center rounded-full border-2 border-sustainableGreen/20 bg-sustainableGreen/10">
                <Icon className="h-7 w-7 text-sustainableGreen" />
              </div>
              <p className="text-label-sm font-label-sm text-cocoaBrown">{badge.label}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="relative mt-xl overflow-hidden rounded-2xl bg-softSand p-xl">
        <h3 className="relative z-10 mb-xl text-headline-md font-headline-md text-cocoaBrown">{processHeading}</h3>
        <div className="relative flex flex-col items-center justify-between gap-lg px-lg md:flex-row">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="z-10 flex flex-col items-center"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
            >
              <div className="text-stat-numeric font-stat-numeric font-serif text-terracotta">{step.number}</div>
              <div className="text-label-sm font-label-sm uppercase text-terracotta/70">{step.label}</div>
            </motion.div>
          ))}
          <div className="absolute left-0 top-1/3 hidden h-px w-full bg-charcoal/10 md:block" />
        </div>
      </div>
    </section>
  );
}
