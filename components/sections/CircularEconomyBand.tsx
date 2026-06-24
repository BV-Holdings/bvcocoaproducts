"use client";

import { motion } from "framer-motion";
import { Leaf, Recycle, Zap, type LucideIcon } from "lucide-react";

export interface CircularEconomyFeature {
  icon: string;
  title: string;
  description: string;
}

export interface CircularEconomyBandProps {
  heading?: string;
  body?: string;
  features?: CircularEconomyFeature[];
  imageUrl?: string;
}

const iconMap: Record<string, LucideIcon> = { Recycle, Zap };

const defaultFeatures: CircularEconomyFeature[] = [
  {
    icon: "Recycle",
    title: "Waste-to-Wealth",
    description: "Converting 15,000 tons of husk annually into bio-char for soil restoration.",
  },
  {
    icon: "Zap",
    title: "Renewable Energy",
    description: "Pulp-fermentation used to power local drying centers via biogas.",
  },
];

// TODO: replace imageUrl with licensed BV Holdings processing photography before launch.
const DEFAULT_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAexvsobBGiienZwm-l1JMQQ6iZxkLaOP3WusERVj8JzW_AgJEygOwxmaRz-qRw9xV9kDlvc3jGAIERiCk672KX6PpkBTc3mD86L5NQm3CbFJyvbgecnbWEvR0awmz0mZAKlyL4gMs--M0I-urc_za_P2LmrS-6mmpetXJMNPvzz-yw6O12Uei3V1d7XP7eaTPA8N_9NgRGUmfR_nxhvOga8Jv2LrbCJdQc9Z8HAgXsVhyY8qxdmHINOD-QmmOHxJr9XdTgTjp04oM";

export function CircularEconomyBand({
  heading = "Closing the Loop",
  body = "We believe nothing from the cocoa fruit should go to waste. Through our circular economy initiatives, we upcycle cocoa husks and pulp into high-value organic fertilizers and renewable bio-energies.",
  features = defaultFeatures,
  imageUrl = DEFAULT_IMAGE,
}: CircularEconomyBandProps) {
  return (
    <section className="bg-cocoaBrown py-xl text-warmCream">
      <div className="mx-auto max-w-container-max px-gutter">
        <div className="grid grid-cols-1 items-center gap-xl md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="mb-md text-headline-lg font-headline-lg font-serif">{heading}</h2>
            <p className="mb-lg text-body-lg text-warmCream/80">{body}</p>
            <div className="grid grid-cols-1 gap-md">
              {features.map((feature) => {
                const Icon = iconMap[feature.icon] ?? Leaf;
                return (
                  <div
                    key={feature.title}
                    className="flex items-center gap-md rounded-xl border border-warmCream/15 bg-charcoal/40 p-md"
                  >
                    <Icon className="h-9 w-9 shrink-0 text-amber" />
                    <div>
                      <h4 className="text-lg font-bold">{feature.title}</h4>
                      <p className="text-sm text-warmCream/70">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="relative aspect-square overflow-hidden rounded-xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imageUrl} alt="Cocoa husk processed into organic bio-char" className="h-full w-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-terracotta/10">
              <div className="rounded-full border border-warmCream/20 bg-warmCream/10 p-md backdrop-blur-md">
                <Recycle className="h-12 w-12 text-warmCream" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
