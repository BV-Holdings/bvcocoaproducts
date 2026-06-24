"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export interface EUDRStat {
  value: string;
  label: string;
  color?: "green" | "terracotta";
}

export interface EUDRComplianceProps {
  heading?: string;
  body?: string;
  checklist?: string[];
  stats?: EUDRStat[];
  mapImageUrl?: string;
}

const defaultChecklist = [
  "Satellite-verified farm boundaries and polygon mapping.",
  "Geolocation coordinates for every single production unit.",
  "Rigorous due diligence statements for every export lot.",
];

const defaultStats: EUDRStat[] = [
  { value: "100%", label: "Deforestation Free", color: "green" },
  { value: "24k+", label: "Mapped Polygons", color: "terracotta" },
];

// TODO: replace mapImageUrl with real BV Holdings polygon-mapping visualization before launch.
const DEFAULT_MAP_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBTI9zVF2LmwjUpLUmUYnMXbORnkmO6YM_YmkQZ30D9lkQDUkZ4BMPHhxWNeI_Jmq52iMkeRV74gm4U3nntzH0rM2txXxPz8Ca7y4xxcMjHDt8lTISEC-CziBwe-U4ddiPjeeRf5hzjnYIePLzNLa99Er-seVpbzfMe6WocF7rD35NiflYYYs3r31jprcj6Fan3etM807zpT-LJTlZcEJYuQEP60pZzEgNXBCwU0_JXgWuXIDJQ2KIpff9Bz9HwfRP14Hvlk5PhzHo";

export function EUDRCompliance({
  heading = "EUDR Compliance",
  body = "The European Union Deforestation Regulation (EUDR) is a cornerstone of our trade ethics. We guarantee that 100% of our cocoa byproducts are sourced from land not subject to deforestation or forest degradation after December 31, 2020.",
  checklist = defaultChecklist,
  stats = defaultStats,
  mapImageUrl = DEFAULT_MAP_IMAGE,
}: EUDRComplianceProps) {
  return (
    <section className="bg-warmCream py-xl">
      <div className="mx-auto max-w-container-max px-gutter">
        <div className="flex flex-col items-center gap-xl md:flex-row">
          <motion.div
            className="relative w-full overflow-hidden rounded-xl border border-charcoal/10 bg-softSand p-lg md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="fiber-texture absolute inset-0" />
            <div className="mb-md flex items-center gap-sm relative z-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sustainableGreen text-warmCream">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h2 className="text-headline-md font-headline-md text-cocoaBrown">{heading}</h2>
            </div>
            <p className="relative z-10 mb-md leading-relaxed text-body-md text-charcoal/70">{body}</p>
            <ul className="relative z-10 space-y-sm">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-sm text-body-md text-charcoal">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sustainableGreen" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="grid w-full grid-cols-2 gap-md md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="ambient-shadow rounded-xl border border-charcoal/10 bg-warmCream p-md transition-all hover:border-sustainableGreen"
              >
                <span
                  className={`text-stat-numeric font-stat-numeric font-serif ${
                    stat.color === "terracotta" ? "text-terracotta" : "text-sustainableGreen"
                  }`}
                >
                  {stat.value}
                </span>
                <p className="mt-xs text-label-sm font-label-sm text-charcoal/70">{stat.label}</p>
              </div>
            ))}
            <div className="relative col-span-2 mt-sm h-48 overflow-hidden rounded-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={mapImageUrl} alt="Satellite polygon mapping of farm boundaries" className="h-full w-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
