"use client";

import { motion } from "framer-motion";
import {
  Flame,
  Leaf,
  PawPrint,
  Recycle,
  Sparkles,
  Sprout,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import type { IndustryType } from "@/types";

export interface IndustriesGridProps {
  heading?: string;
  body?: string;
  industries?: IndustryType[];
}

const iconMap: Record<string, LucideIcon> = {
  PawPrint,
  Sprout,
  UtensilsCrossed,
  Sparkles,
  Flame,
  Recycle,
};

export function IndustriesGrid({
  heading = "Industries We Serve",
  body = "Providing specialized cocoa byproduct solutions for global manufacturing leaders.",
  industries = [],
}: IndustriesGridProps) {
  return (
    <section className="bg-softSand py-xl">
      <div className="mx-auto mb-xl max-w-container-max px-gutter text-center">
        <h2 className="mb-md text-headline-lg font-headline-lg font-serif text-cocoaBrown">{heading}</h2>
        <p className="mx-auto max-w-2xl text-body-lg text-charcoal/70">{body}</p>
      </div>

      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-md px-gutter md:grid-cols-3">
        {industries.map((industry, i) => {
          const Icon = (industry.icon && iconMap[industry.icon]) || Leaf;
          return (
            <motion.div
              key={industry.slug}
              className="hover-glow ambient-shadow group rounded-xl bg-warmCream p-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: "easeOut" }}
            >
              <div className="mb-lg flex h-16 w-16 items-center justify-center rounded-full bg-amber/30 transition-colors group-hover:bg-amber">
                <Icon className="h-7 w-7 text-terracotta" />
              </div>
              <h3 className="mb-sm text-headline-md font-headline-md text-cocoaBrown">{industry.name}</h3>
              <p className="text-body-md text-charcoal/70">{industry.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
