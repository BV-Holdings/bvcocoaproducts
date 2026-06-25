"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Leaf } from "lucide-react";
import Link from "next/link";

export interface ProductFeatureChecklistItem {
  title: string;
  description: string;
}

export interface ProductFeatureBentoProps {
  imageUrl: string;
  imageAlt: string;
  statValue?: string;
  statLabel?: string;
  badgeLabel?: string;
  heading: string;
  body: string;
  checklist: ProductFeatureChecklistItem[];
  cta?: { label: string; href: string };
}

export function ProductFeatureBento({
  imageUrl,
  imageAlt,
  statValue,
  statLabel,
  badgeLabel,
  heading,
  body,
  checklist,
  cta = { label: "Download Specification Sheet", href: "/contact" },
}: ProductFeatureBentoProps) {
  return (
    <section className="overflow-hidden bg-warmCream py-xl">
      <div className="mx-auto max-w-container-max px-gutter">
        <div className="flex flex-col items-center gap-xl lg:flex-row">
          <motion.div
            className="relative w-full lg:w-1/2"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative aspect-square overflow-hidden rounded-xl shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imageUrl} alt={imageAlt} className="h-full w-full object-cover" />
            </div>
            {statValue && statLabel && (
              <div className="absolute -bottom-6 -right-6 hidden rounded-xl bg-cocoaBrown p-lg text-warmCream shadow-xl md:block">
                <div className="text-stat-numeric font-stat-numeric font-serif">{statValue}</div>
                <div className="text-label-sm font-label-sm text-amber">{statLabel}</div>
              </div>
            )}
          </motion.div>

          <motion.div
            className="w-full space-y-md lg:w-1/2"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            {badgeLabel && (
              <div className="inline-flex items-center gap-xs rounded-full bg-sustainableGreen/10 px-sm py-xs text-charcoal">
                <Leaf className="h-4 w-4 text-sustainableGreen" />
                <span className="text-xs font-bold text-sustainableGreen">{badgeLabel.toUpperCase()}</span>
              </div>
            )}
            <h2 className="text-headline-lg font-headline-lg font-serif text-cocoaBrown">{heading}</h2>
            <p className="text-body-lg text-charcoal/70">{body}</p>
            <div className="grid grid-cols-1 gap-md border-y border-charcoal/10 py-md sm:grid-cols-2">
              {checklist.map((item) => (
                <div key={item.title} className="flex items-start gap-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-terracotta" />
                  <div>
                    <h4 className="font-bold text-cocoaBrown">{item.title}</h4>
                    <p className="text-sm text-charcoal/60">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-md">
              <Link
                href={cta.href}
                className="inline-block rounded-lg bg-cocoaBrown px-lg py-md text-label-sm font-label-sm text-warmCream transition-opacity hover:opacity-90"
              >
                {cta.label}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
