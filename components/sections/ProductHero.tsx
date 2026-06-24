"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import Link from "next/link";

export interface ProductHeroProps {
  badge?: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageUrl?: string;
  imageAlt?: string;
}

export function ProductHero({
  badge = "Sustainable Byproduct",
  title,
  description,
  primaryCta = { label: "Order Sample", href: "/contact" },
  secondaryCta = { label: "View Logistics", href: "/buyers" },
  imageUrl,
  imageAlt = "",
}: ProductHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-softSand pt-xl">
      <div className="mx-auto mb-xl grid max-w-container-max grid-cols-1 items-center gap-lg px-gutter lg:grid-cols-12">
        <motion.div
          className="space-y-md lg:col-span-5"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-xs rounded-full bg-sustainableGreen px-sm py-xs text-label-sm font-label-sm text-warmCream">
            <Leaf className="h-4 w-4" />
            {badge}
          </div>
          <h1 className="text-display-lg font-display-lg font-serif text-cocoaBrown">{title}</h1>
          <p className="max-w-md text-body-lg text-charcoal/70">{description}</p>
          <div className="flex gap-sm pt-base">
            <Link
              href={primaryCta.href}
              className="rounded-xl bg-terracotta px-lg py-md text-label-sm font-label-sm text-warmCream transition-all duration-200 hover:shadow-lg active:scale-95"
            >
              {primaryCta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className="rounded-xl border-2 border-cocoaBrown px-lg py-md text-label-sm font-label-sm text-cocoaBrown transition-all duration-200 hover:bg-cocoaBrown hover:text-warmCream"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="group relative h-[500px] overflow-hidden rounded-[32px] lg:col-span-7"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <div className="ambient-shadow absolute inset-0" />
          <div className="fiber-texture pointer-events-none absolute inset-0 z-10" />
          {imageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageUrl}
              alt={imageAlt}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
