"use client";

import { motion } from "framer-motion";
import { FlaskConical, Sprout, Factory, Truck, type LucideIcon } from "lucide-react";

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface FarmToExportProcessProps {
  heading?: string;
  steps?: ProcessStep[];
}

const defaultSteps: ProcessStep[] = [
  { step: 1, title: "Harvest", description: "Ethical sourcing from Cameroon's certified cocoa belts.", icon: Sprout },
  { step: 2, title: "Processing", description: "Controlled separation and solar drying of hulls.", icon: Factory },
  { step: 3, title: "Analysis", description: "Batch testing for moisture, fiber, and organic content.", icon: FlaskConical },
  { step: 4, title: "Logistics", description: "Premium bulk packaging and Douala Port dispatch.", icon: Truck },
];

export function FarmToExportProcess({
  heading = "The Journey: Farm to Export",
  steps = defaultSteps,
}: FarmToExportProcessProps) {
  return (
    <section className="bg-warmCream py-xl">
      <div className="mx-auto max-w-container-max px-gutter">
        <h2 className="mb-xl text-center text-headline-lg font-headline-lg font-serif text-cocoaBrown">{heading}</h2>

        <div className="relative mt-xl flex flex-col items-start justify-between gap-lg md:flex-row">
          <div className="absolute left-0 top-12 hidden h-1 w-full bg-softSand md:block" />

          {steps.map((step, i) => {
            const Icon = step.icon ?? Sprout;
            return (
              <motion.div
                key={step.step}
                className="group relative z-10 flex-1 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
              >
                <div className="mx-auto mb-lg flex h-24 w-24 items-center justify-center rounded-full border-4 border-warmCream bg-softSand shadow-lg transition-all group-hover:border-terracotta">
                  <Icon className="h-8 w-8 text-terracotta transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
                </div>
                <h4 className="mb-sm text-headline-md font-headline-md text-cocoaBrown">{step.title}</h4>
                <p className="text-body-md text-charcoal/70">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
