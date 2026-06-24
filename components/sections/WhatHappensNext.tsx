"use client";

import { motion } from "framer-motion";

export interface ProcessStep {
  title: string;
  description: string;
}

export interface WhatHappensNextProps {
  heading?: string;
  steps?: ProcessStep[];
}

const defaultSteps: ProcessStep[] = [
  {
    title: "Initial Review",
    description: "Our trade analysts review your volume requirements and destination logistics within 12 business hours.",
  },
  {
    title: "Logistics Routing",
    description: "We calculate shipping lead times and port availability for your specific country destination.",
  },
  {
    title: "Pricing Proposal",
    description: "You receive a formal quote with tiered pricing options and sustainability documentation.",
  },
];

export function WhatHappensNext({ heading = "What Happens After?", steps = defaultSteps }: WhatHappensNextProps) {
  return (
    <div className="relative rounded-xl border border-charcoal/10 bg-softSand p-md">
      <div className="fiber-texture absolute inset-0 rounded-xl" />
      <div className="relative z-10">
        <h3 className="mb-md text-headline-md font-headline-md text-cocoaBrown">{heading}</h3>
        <div className="relative space-y-lg">
          <div className="absolute bottom-2 left-4 top-2 w-px bg-charcoal/15" />
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="relative flex gap-md"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
            >
              <div className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber text-label-sm font-bold text-charcoal">
                {i + 1}
              </div>
              <div>
                <h4 className="font-bold text-cocoaBrown">{step.title}</h4>
                <p className="text-body-md text-charcoal/70">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
