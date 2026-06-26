"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export interface ClosingCTABandProps {
  heading?: string;
  body?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  tertiaryCta?: { label: string; href: string };
}

export function ClosingCTABand({
  heading = "Ready to Integrate Cameroon's Cocoa?",
  body = "Contact our trade desk for volume quotes, technical specifications, or shipping timelines.",
  primaryCta = { label: "Request a Quote", href: "/contact" },
  secondaryCta = { label: "Download Spec Sheet", href: "/quality" },
  tertiaryCta,
}: ClosingCTABandProps) {
  return (
    <section className="relative overflow-hidden bg-charcoal py-xl text-center text-warmCream">
      <div className="fiber-texture absolute inset-0" />
      <motion.div
        className="relative z-10 mx-auto max-w-container-max px-gutter"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="mb-lg text-display-lg font-display-lg font-serif">{heading}</h2>
        <p className="mx-auto mb-xl max-w-2xl text-body-lg text-warmCream/80">{body}</p>
        <div className="flex flex-wrap justify-center gap-md">
          <Link
            href={primaryCta.href}
            className="rounded-lg bg-amber px-xl py-md text-label-sm font-label-sm text-charcoal transition-all hover:scale-105"
          >
            {primaryCta.label}
          </Link>
          <Link
            href={secondaryCta.href}
            className="rounded-lg border border-warmCream/30 bg-cocoaBrown px-xl py-md text-label-sm font-label-sm text-warmCream transition-all hover:bg-warmCream/10"
          >
            {secondaryCta.label}
          </Link>
          {tertiaryCta && (
            <Link
              href={tertiaryCta.href}
              className="rounded-lg bg-warmCream px-xl py-md text-label-sm font-label-sm text-cocoaBrown transition-all hover:bg-warmCream/90"
            >
              {tertiaryCta.label}
            </Link>
          )}
        </div>
      </motion.div>
    </section>
  );
}
