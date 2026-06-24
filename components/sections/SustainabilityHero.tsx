"use client";

import { motion } from "framer-motion";
import { Sun } from "lucide-react";
import Link from "next/link";

export interface SustainabilityHeroProps {
  eyebrow?: string;
  highlightWord?: string;
  titlePrefix?: string;
  titleSuffix?: string;
  body?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageUrl?: string;
}

// TODO: replace imageUrl with licensed BV Holdings plantation photography before launch.
const DEFAULT_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBTWVpw7SKQP2JJeGEFEtJa9iXN40ASvYLIO6ZodHFv_5lkkRx2SOMIPSKzBr5mrrjEGUJ8DohtCtPmpvUR08NL9WWYl_LtEnZ5kRzTSaGnXL3Y-W2EmpabaertdLXZnrqdTlru6XsXFHrT2cZXsAHv68DipxirApXe-Nd4nBwvhKBTyOh-FAxErJ_W9mgMDP6PNOgG85e6rp2rlgYoPoT4goy1cRSUgAPtS-53bBqrRjhfly8UbIIO3fftxKFu8V7gf6Bti1FUKm0";

export function SustainabilityHero({
  eyebrow = "Commitment to Excellence",
  highlightWord = "Greener",
  titlePrefix = "Harvesting a",
  titleSuffix = "Legacy.",
  body = "From the fertile soils of our partner farms to the global export hubs, we ensure every cocoa bean tells a story of equity, environmental restoration, and radical transparency.",
  primaryCta = { label: "Download Report", href: "/quality" },
  secondaryCta = { label: "Trace Your Batch", href: "/contact" },
  imageUrl = DEFAULT_IMAGE,
}: SustainabilityHeroProps) {
  return (
    <section className="relative overflow-hidden bg-softSand py-xl">
      <div className="fiber-texture absolute inset-0" />
      <div className="relative z-10 mx-auto grid max-w-container-max grid-cols-1 items-center gap-lg px-gutter md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="mb-sm inline-flex items-center gap-xs text-label-sm font-label-sm uppercase tracking-widest text-sustainableGreen">
            <Sun className="h-4 w-4" />
            {eyebrow}
          </span>
          <h1 className="mb-md text-display-lg font-display-lg font-serif leading-tight text-cocoaBrown">
            {titlePrefix} <span className="text-sustainableGreen">{highlightWord}</span> {titleSuffix}
          </h1>
          <p className="mb-lg max-w-xl text-body-lg text-charcoal/70">{body}</p>
          <div className="flex flex-wrap gap-md">
            <Link
              href={primaryCta.href}
              className="rounded-lg bg-cocoaBrown px-xl py-md text-label-sm font-label-sm text-warmCream transition-transform hover:scale-95"
            >
              {primaryCta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className="rounded-lg border-2 border-terracotta px-xl py-md text-label-sm font-label-sm text-terracotta transition-colors hover:bg-terracotta/5"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="relative h-[500px] overflow-hidden rounded-xl shadow-xl"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imageUrl} alt="Lush cocoa agroforestry plantation" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-cocoaBrown/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
