"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export interface HeroSectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  backgroundImageUrl?: string;
}

// TODO: replace backgroundImageUrl with licensed BV Holdings plantation photography before launch.
const DEFAULT_BACKGROUND =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCCOS63zDsbxCKdv4R_TngcebLz40NFigTRLmqv0mg0q4GMepX_zIe7clKEcSWTGKF-7dEkixJGcZ9pmoXWLTm8yMy7mlkTKN4x_RzNHRKT82pIvDTijCc-vHNFGHANAtBbcHOD9xaO2WQss5x6H6p-HZ-FPIaHTztNI-0ICwLHXXZ6KNPTkMvuA6wCeHvUgQG8m8Jr6EVpNHbs6VQJcoTN5mEitgbANRfJSWpsNXWXSn4E9rtTYnRO0a__nxF1BIjrSayEkKoDgGk";

export function HeroSection({
  eyebrow = "Premium Agricultural Export",
  title = "From Cameroon's Cocoa to the World's Industries",
  subtitle = "We bridge the gap between West Africa's finest cocoa resources and global industrial manufacturing with a commitment to traceability and premium quality.",
  primaryCta = { label: "Explore Our Range", href: "/products" },
  secondaryCta = { label: "Logistics Network", href: "/buyers" },
  backgroundImageUrl = DEFAULT_BACKGROUND,
}: HeroSectionProps) {
  return (
    <section className="relative flex h-[870px] items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div
          className="h-full w-full bg-cover bg-center brightness-75"
          style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cocoaBrown/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-container-max px-gutter text-warmCream">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <span className="mb-md block text-label-sm font-label-sm uppercase tracking-widest text-amber">
            {eyebrow}
          </span>
          <h1 className="mb-lg text-display-lg font-display-lg font-serif leading-tight">{title}</h1>
          <p className="mb-xl max-w-lg text-body-lg text-warmCream/80">{subtitle}</p>
          <div className="flex flex-wrap gap-md">
            <Link
              href={primaryCta.href}
              className="rounded-lg bg-amber px-lg py-md text-label-sm font-label-sm text-charcoal transition-all hover:scale-105"
            >
              {primaryCta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className="rounded-lg border border-warmCream px-lg py-md text-label-sm font-label-sm text-warmCream transition-all hover:bg-warmCream/10"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
