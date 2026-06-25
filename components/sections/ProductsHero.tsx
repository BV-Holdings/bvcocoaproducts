"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export interface ProductsHeroProps {
  eyebrow?: string;
  title?: string;
  body?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageUrl?: string;
}

const DEFAULT_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDKrhroQK1-cMRmqh2NY0a13fWPYGztV0Kjtkhf6q8qq-miG0X6KIcyOD3lghAE5h17AneD4o-mwv-DKKQIj_CRllCQZvys55XBwFZo_ELvrdum3XZX-BjtIUYvFSmj4MOl69DnUlUOfvvCI51u45IAcVl6vBpU10iQCZyGoIFN8KgxpXC1ITL_ZfNPbo_s9RX849y9CrxWyTlDVvlKzkoiMlOQyBXgJLC5rpHBxIrt4zqHmQvjWnznI8bho2r5yyw5vfRUt7_yumo";

export function ProductsHero({
  eyebrow = "B2B Trade Excellence",
  title = "The Complete Cocoa Catalog",
  body = "Discover industrial-grade cocoa byproducts meticulously processed in Cameroon. We provide sustainable, traceable, and EUDR-compliant shells and powders for global manufacturing.",
  primaryCta = { label: "View All Products", href: "#catalog" },
  secondaryCta = { label: "Trace Our Supply Chain", href: "/sustainability" },
  imageUrl = DEFAULT_IMAGE,
}: ProductsHeroProps) {
  return (
    <section className="relative mx-auto max-w-container-max overflow-hidden px-gutter py-xl">
      <div className="fiber-texture pointer-events-none absolute inset-0" />
      <div className="relative z-10 grid grid-cols-1 items-center gap-xl lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="mb-xs block text-label-sm font-label-sm uppercase tracking-widest text-terracotta">
            {eyebrow}
          </span>
          <h1 className="mb-md text-display-lg font-display-lg font-serif leading-tight text-cocoaBrown">{title}</h1>
          <p className="mb-lg max-w-xl text-body-lg text-charcoal/70">{body}</p>
          <div className="flex flex-wrap gap-md">
            <Link
              href={primaryCta.href}
              className="rounded-lg bg-cocoaBrown px-lg py-sm text-label-sm font-label-sm text-amber transition-opacity hover:opacity-90"
            >
              {primaryCta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className="rounded-lg border-2 border-terracotta px-lg py-sm text-label-sm font-label-sm text-terracotta transition-colors hover:bg-terracotta/5"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="relative h-[500px] overflow-hidden rounded-xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imageUrl} alt="Premium organic cocoa shells" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-cocoaBrown/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
