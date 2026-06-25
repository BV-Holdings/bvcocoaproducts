"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import Link from "next/link";

export interface IndustriesHeroProps {
  titlePrefix?: string;
  titleEmphasis?: string;
  body?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageUrl?: string;
  statValue?: string;
  statLabel?: string;
}

const DEFAULT_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD8KuoG6F4bSsbQVzpV32ZMeewafLqhdjA1B9jkCPAyZgr6bX3rNVrW74rzA9TIEmiTdFV3hUaaHWMX_DkvIT5uHheP43vykALfoDC16OwwYNy_cM4IRUxp_6i_dZEmbBUZ1ddTJ7U2cvbPholaqXjSq7B3RHySSimCFuXO5NZ92RtwUiGBB7CSbduFcY9fguzgTeVgerOX7u_-cPQTvM6uSN8vOtnS0lK5K2F5xPK6nrTtcPzUuRLcwdqUqoVEJfsAqi_NVGx7ZPI";

export function IndustriesHero({
  titlePrefix = "Industrial Solutions for a",
  titleEmphasis = "Circular Economy",
  body = "BV Holdings transforms premium cocoa byproducts into high-performance raw materials for global sectors. We bridge the gap between organic agriculture and industrial innovation, ensuring every gram of the cocoa harvest serves a vital purpose.",
  primaryCta = { label: "Explore All Solutions", href: "#industries" },
  secondaryCta = { label: "Our Extraction Process", href: "/sustainability" },
  imageUrl = DEFAULT_IMAGE,
  statValue = "100%",
  statLabel = "Zero Waste Logic",
}: IndustriesHeroProps) {
  return (
    <section className="relative overflow-hidden pb-32 pt-xl">
      <div className="fiber-texture pointer-events-none absolute inset-0" />
      <div className="relative z-10 mx-auto grid max-w-container-max grid-cols-1 items-center gap-lg px-gutter lg:grid-cols-12">
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="mb-md text-display-lg font-display-lg font-serif text-cocoaBrown">
            {titlePrefix} <span className="italic text-terracotta">{titleEmphasis}</span>
          </h1>
          <p className="mb-lg max-w-2xl text-body-lg leading-relaxed text-charcoal/70">{body}</p>
          <div className="flex flex-wrap gap-md">
            <Link
              href={primaryCta.href}
              className="rounded-xl bg-cocoaBrown px-xl py-md text-label-sm font-label-sm text-amber shadow-lg transition-all hover:opacity-90 active:scale-95"
            >
              {primaryCta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className="rounded-xl border-2 border-cocoaBrown px-xl py-md text-label-sm font-label-sm text-cocoaBrown transition-all hover:bg-cocoaBrown hover:text-warmCream active:scale-95"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="relative lg:col-span-5"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <div className="ambient-shadow h-[500px] w-full overflow-hidden rounded-[2rem] border-4 border-softSand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imageUrl} alt="Cocoa husks and powder arranged on slate" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-amber p-md shadow-xl md:block">
            <Leaf className="mb-2 h-8 w-8 text-charcoal" />
            <div className="text-headline-md font-headline-md text-charcoal">{statValue}</div>
            <div className="text-label-sm font-label-sm uppercase tracking-wider text-charcoal/80">{statLabel}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
