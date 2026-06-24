"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export interface WhatAreCocoaShellsProps {
  heading?: string;
  body?: string;
  quote?: string;
  highlights?: string[];
  imageUrl?: string;
  imageCaption?: { title: string; subtitle: string };
}

// TODO: replace imageUrl with licensed BV Holdings product photography before launch.
const DEFAULT_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBFP0Q_NGfx0pn9gttufs-YoAAuihLkDbmq_5T-v2O2a5TOUEJNg7s8xc7CbO7onioiM_LROhnQNGp3PwkmqwOTB84hzxzugXt-ukPAdBXC3TFMo-7wDNromOuI28uREH6FjvpoRakQoOch8xYL_JtczhRfHJZ-uTuLXINhoEqtp8zxovvvdtknwG-TubyThFv-r_dB71w-8M4ffTbCAUsx69TvFjMzRIKSoOU2QggZahLwL-LK7qIpa7MqOc7jcxh_NXSD9fBik_w";

const defaultHighlights = [
  "100% natural byproduct",
  "High potassium and nitrogen content",
  "Sustainable alternative for multiple sectors",
];

export function WhatAreCocoaShells({
  heading = "What Are Cocoa Shells?",
  body = "Beyond the bean lies a resource of untapped industrial potential. Cocoa shells are the fibrous outer layer of the cocoa bean, rich in minerals, theobromine, and dietary fiber.",
  quote = "At BV Holdings, we transform what was once considered agricultural waste into a high-value industrial input for diverse global markets.",
  highlights = defaultHighlights,
  imageUrl = DEFAULT_IMAGE,
  imageCaption = { title: "Organic Material", subtitle: "Raw Industrial Grade" },
}: WhatAreCocoaShellsProps) {
  return (
    <section className="bg-warmCream py-xl">
      <div className="mx-auto grid max-w-container-max items-center gap-xl px-gutter md:grid-cols-2">
        <motion.div
          className="order-2 md:order-1"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="ambient-shadow relative overflow-hidden rounded-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imageUrl} alt="Processed cocoa shells, close-up texture" className="aspect-square w-full object-cover" />
            <div className="absolute bottom-md left-md rounded-lg bg-warmCream/90 p-md backdrop-blur-sm">
              <p className="text-headline-md font-headline-md text-cocoaBrown">{imageCaption.title}</p>
              <p className="text-label-sm text-charcoal/70">{imageCaption.subtitle}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="order-1 md:order-2"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <h2 className="mb-md text-headline-lg font-headline-lg font-serif text-cocoaBrown">{heading}</h2>
          <p className="mb-md text-body-lg text-charcoal/80">{body}</p>
          <p className="mb-lg border-l-4 border-terracotta pl-md text-body-md italic text-charcoal/70">{quote}</p>
          <ul className="space-y-sm">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex items-center gap-sm font-semibold text-cocoaBrown">
                <CheckCircle2 className="h-5 w-5 text-terracotta" /> {highlight}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
