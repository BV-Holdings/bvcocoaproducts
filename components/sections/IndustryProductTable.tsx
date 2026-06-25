"use client";

import { motion } from "framer-motion";
import type { ProductSpecRow } from "@/components/sections/IndustryProductSpecs";

export interface IndustryProductTableProps {
  heading: string;
  body: string;
  imageUrl: string;
  imageAlt: string;
  specs: ProductSpecRow[];
}

export function IndustryProductTable({ heading, body, imageUrl, imageAlt, specs }: IndustryProductTableProps) {
  return (
    <section className="bg-softSand py-xl">
      <div className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-xl px-gutter lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="mb-md text-headline-lg font-headline-lg font-serif text-cocoaBrown">{heading}</h2>
          <p className="mb-lg text-body-lg text-charcoal/70">{body}</p>
          <div className="ambient-shadow overflow-hidden rounded-xl border border-charcoal/10 bg-warmCream">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-cocoaBrown text-warmCream">
                  <th className="px-md py-sm text-body-md font-headline-md">Parameter</th>
                  <th className="px-md py-sm text-body-md font-headline-md">Specification</th>
                </tr>
              </thead>
              <tbody>
                {specs.map((spec, i) => (
                  <tr key={spec.label} className={i % 2 === 0 ? "bg-warmCream" : "bg-softSand/50"}>
                    <td className="px-md py-sm font-label-sm font-bold text-cocoaBrown">{spec.label}</td>
                    <td className="px-md py-sm text-charcoal/70">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          className="relative aspect-square"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <div className="absolute -inset-4 rounded-full bg-amber/10 blur-3xl" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imageUrl} alt={imageAlt} className="relative h-full w-full rounded-2xl object-cover shadow-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
