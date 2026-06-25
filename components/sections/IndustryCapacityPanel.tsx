"use client";

import { motion } from "framer-motion";
import { Anchor, ClipboardList, PackageCheck, type LucideIcon } from "lucide-react";

export interface CapacityListItem {
  icon: string;
  label: string;
}

export interface CapacityBar {
  label: string;
  value: number;
}

export interface IndustryCapacityPanelProps {
  heading?: string;
  body?: string;
  listItems?: CapacityListItem[];
  capacityHeading?: string;
  bars?: CapacityBar[];
  ctaLabel?: string;
}

const iconMap: Record<string, LucideIcon> = { Anchor, PackageCheck, ClipboardList };

const defaultListItems: CapacityListItem[] = [
  { icon: "Anchor", label: "Maritime bulk shipping in secure, humidity-controlled vessels" },
  { icon: "PackageCheck", label: "Available in 25kg, 500kg, and 1000kg industrial units" },
  { icon: "ClipboardList", label: "Full customs and regulatory documentation provided" },
];

const defaultBars: CapacityBar[] = [
  { label: "Export Readiness", value: 90 },
  { label: "Regional Hub Coverage", value: 75 },
  { label: "Seasonal Supply Buffer", value: 65 },
];

export function IndustryCapacityPanel({
  heading = "Global Supply Chain",
  body = "We specialize in the bulk fulfillment of industrial-grade cocoa materials, ensuring just-in-time delivery for industrial-scale manufacturing.",
  listItems = defaultListItems,
  capacityHeading = "Indicative Trade Capacity",
  bars = defaultBars,
  ctaLabel = "Check Shipping Schedule",
}: IndustryCapacityPanelProps) {
  return (
    <section className="relative bg-cocoaBrown py-xl text-warmCream">
      <div className="mx-auto max-w-container-max px-gutter">
        <div className="grid grid-cols-1 items-center gap-xl md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="mb-md text-headline-lg font-headline-lg font-serif">{heading}</h2>
            <p className="mb-lg text-body-lg text-warmCream/80">{body}</p>
            <ul className="space-y-sm">
              {listItems.map((item) => {
                const Icon = iconMap[item.icon] ?? PackageCheck;
                return (
                  <li key={item.label} className="flex items-center gap-sm">
                    <Icon className="h-5 w-5 shrink-0 text-amber" />
                    <span>{item.label}</span>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-warmCream/10 bg-warmCream/5 p-lg backdrop-blur-md"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <h3 className="mb-lg text-headline-md font-headline-md">{capacityHeading}</h3>
            <div className="space-y-md">
              {bars.map((bar) => (
                <div key={bar.label}>
                  <div className="mb-1 flex justify-between text-xs">
                    <span>{bar.label}</span>
                    <span>{bar.value}%</span>
                  </div>
                  <div className="h-1 w-full overflow-hidden rounded-full bg-warmCream/10">
                    <div className="h-full rounded-full bg-amber" style={{ width: `${bar.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-lg w-full rounded-lg bg-warmCream py-md font-bold text-cocoaBrown transition-colors hover:bg-amber">
              {ctaLabel}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
