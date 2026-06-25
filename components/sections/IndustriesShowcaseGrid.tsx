"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Factory,
  Flame,
  Leaf,
  PawPrint,
  Recycle,
  Sparkles,
  Sprout,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

export interface IndustryShowcaseItem {
  slug: string;
  name: string;
  description: string;
  imageUrl?: string;
  badgeLabel?: string;
  icon?: string;
}

export interface IndustriesShowcaseGridProps {
  heading?: string;
  body?: string;
  industries: IndustryShowcaseItem[];
  ctaCard?: { heading: string; body: string; buttonLabel: string; href: string };
  anchorId?: string;
}

const iconMap: Record<string, LucideIcon> = {
  Leaf,
  Factory,
  PawPrint,
  Sprout,
  UtensilsCrossed,
  Sparkles,
  Flame,
  Recycle,
};

const defaultCtaCard = {
  heading: "Bespoke Processing?",
  body: "We collaborate with global R&D teams to develop specialized derivatives for unique applications.",
  buttonLabel: "Consult with our Labs",
  href: "/contact",
};

export function IndustriesShowcaseGrid({
  heading = "Specialized Industry Sectors",
  body = "Our refined cocoa derivatives are engineered to meet the stringent technical requirements of diverse global manufacturers.",
  industries,
  ctaCard = defaultCtaCard,
  anchorId = "industries",
}: IndustriesShowcaseGridProps) {
  return (
    <section className="bg-softSand py-xl" id={anchorId}>
      <div className="mx-auto max-w-container-max px-gutter">
        <div className="mb-16 flex items-end justify-between">
          <div className="max-w-2xl">
            <h2 className="mb-md text-headline-lg font-headline-lg font-serif text-cocoaBrown">{heading}</h2>
            <p className="text-body-md text-charcoal/70">{body}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-md md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => {
            const Icon = (industry.icon && iconMap[industry.icon]) || Leaf;
            return (
              <motion.div
                key={industry.slug}
                className="hover-glow ambient-shadow group flex h-full flex-col overflow-hidden rounded-2xl bg-warmCream transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: "easeOut" }}
              >
                <div className="relative h-64 overflow-hidden">
                  {industry.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={industry.imageUrl}
                      alt={industry.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-softSand">
                      <Icon className="h-16 w-16 text-terracotta/40" />
                    </div>
                  )}
                  {industry.badgeLabel && (
                    <div className="absolute right-md top-md rounded-full bg-cocoaBrown/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-warmCream backdrop-blur-md">
                      {industry.badgeLabel}
                    </div>
                  )}
                </div>
                <div className="flex flex-grow flex-col p-xl">
                  <h3 className="mb-sm text-headline-md font-headline-md text-cocoaBrown">{industry.name}</h3>
                  <p className="mb-lg flex-grow text-body-md text-charcoal/70">{industry.description}</p>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="flex items-center gap-2 text-label-sm font-bold text-terracotta transition-all group-hover:gap-4"
                  >
                    View Industry Page <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}

          <motion.div
            className="ambient-shadow relative flex h-full flex-col items-center justify-center overflow-hidden rounded-2xl bg-cocoaBrown p-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <Factory className="mb-md h-12 w-12 text-amber" />
            <h3 className="mb-md text-headline-md font-headline-md text-warmCream">{ctaCard.heading}</h3>
            <p className="mb-xl text-body-md text-warmCream/80">{ctaCard.body}</p>
            <Link
              href={ctaCard.href}
              className="rounded-lg bg-amber px-lg py-sm text-label-sm font-bold text-charcoal transition-transform hover:scale-105"
            >
              {ctaCard.buttonLabel}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
