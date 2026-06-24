"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export interface SustainabilityPillar {
  title: string;
  description: string;
}

export interface SustainabilityBandProps {
  heading?: string;
  pillars?: SustainabilityPillar[];
}

const defaultPillars: SustainabilityPillar[] = [
  {
    title: "Zero Waste",
    description: "Utilizing 100% of the byproduct generated from Cameroon's cocoa heartlands.",
  },
  {
    title: "Local Empowerment",
    description: "Creating secondary income streams for over 1,200 local farming cooperatives.",
  },
  {
    title: "Regenerative Future",
    description: "Lowering industrial carbon footprints by replacing synthetic fillers with organic cocoa fibers.",
  },
];

export function SustainabilityBand({
  heading = "A Commitment to the Circular Economy",
  pillars = defaultPillars,
}: SustainabilityBandProps) {
  return (
    <section className="bg-sustainableGreen py-xl text-warmCream">
      <div className="mx-auto max-w-container-max px-gutter text-center">
        <motion.div
          className="mb-lg inline-flex items-center gap-sm rounded-full bg-charcoal/20 px-md py-xs"
          initial={{ opacity: 0, y: -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Leaf className="h-4 w-4" />
          <span className="text-label-sm font-label-sm">Sustainability First</span>
        </motion.div>

        <h2 className="mb-lg text-headline-lg font-headline-lg font-serif">{heading}</h2>

        <div className="mt-xl grid grid-cols-1 gap-lg text-left md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              className="border-l border-warmCream/30 pl-lg"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            >
              <h4 className="mb-sm text-headline-md font-headline-md">{pillar.title}</h4>
              <p className="text-warmCream/80">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
