"use client";

import { motion } from "framer-motion";
import { Globe2, MapPin, ShieldCheck, type LucideIcon } from "lucide-react";

export interface WhyPartnerReason {
  icon: string;
  title: string;
  description: string;
}

export interface WhyPartnerStat {
  value: string;
  label: string;
}

export interface WhyPartnerSectionProps {
  titleLine1?: string;
  titleLine2?: string;
  reasons?: WhyPartnerReason[];
  photoUrl?: string;
  dockPhotoUrl?: string;
  stats?: WhyPartnerStat[];
}

const iconMap: Record<string, LucideIcon> = { MapPin, ShieldCheck, Globe2 };

const defaultReasons: WhyPartnerReason[] = [
  {
    icon: "MapPin",
    title: "Origin-Direct Supply",
    description:
      "We control the supply chain from Cameroon's cocoa heartlands to your factory gates, ensuring unrivaled traceability and freshness.",
  },
  {
    icon: "ShieldCheck",
    title: "Ethical Sourcing",
    description:
      "Every byproduct is sourced directly from farming cooperatives, supporting the prosperity of the communities we depend on.",
  },
  {
    icon: "Globe2",
    title: "Global Logistics",
    description:
      "Our logistics network spans multiple continents, providing seamless bulk delivery by sea, rail, or air to your global processing hubs.",
  },
];

const defaultStats: WhyPartnerStat[] = [
  { value: "25k", label: "Tons Processed / Year" },
  { value: "50+", label: "Active Countries" },
];

// TODO: replace photoUrl/dockPhotoUrl with licensed BV Holdings photography before launch.
const DEFAULT_FARMER_PHOTO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDsFZ9qFdviHFSp-adFtjOdC7SyvNdt3e6teAz3-R_zRLZ9tDv7U-p0hUVS3_5tU6vWWQo0DBKgAM9zOAahnrHAwTA1SjyaqFxVv1c42O5tyfC50a0rCK6TmlAUt0E0K_6Wk08ePNT0pRxyn6MAfFtINj_EEhl0kjcPG3hhLxIfaxtUV58H4TvYNDuZ4JxBr2KzAJwoq0CPcjeN751-11IlAELfYQfoxioeRHWKqFiNQcA0rCqOJ6K6pzNsaR9eeyT78j6dALTzmn4";
const DEFAULT_DOCK_PHOTO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBFc0oKEtJzlRPoNqD-wZbF6uyw4fH-aZ_yq_D4JZKsOzjbiL4T8yk9pJPrz77Qc1uj9bxTmKgDvZOR0uwUCqV9HY_ECwtErXHkLulRXA_VR5AxqzyBpk0kVPsT_5uhYCUR63wMggFdde5SThL3OtW3qppx6mruM8Iv5TbZrsWqUPNdq8R9Cga64au_lOEvbIEkUvr1sw6tMRKFUpQiBc28bUs37YSeMER4C1SOJm9686auXM5ZNhCoTBhg1zItSH-nqpV_zUubbzw";

export function WhyPartnerSection({
  titleLine1 = "Why Partner with",
  titleLine2 = "BV Holdings?",
  reasons = defaultReasons,
  photoUrl = DEFAULT_FARMER_PHOTO,
  dockPhotoUrl = DEFAULT_DOCK_PHOTO,
  stats = defaultStats,
}: WhyPartnerSectionProps) {
  return (
    <section className="bg-warmCream py-xl">
      <div className="mx-auto max-w-container-max px-gutter">
        <div className="grid grid-cols-1 items-center gap-xl lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="mb-xl text-headline-lg font-headline-lg font-serif text-cocoaBrown">
              {titleLine1}
              <br />
              {titleLine2}
            </h2>
            <div className="space-y-lg">
              {reasons.map((reason) => {
                const Icon = iconMap[reason.icon] ?? MapPin;
                return (
                  <div key={reason.title} className="flex items-start gap-md">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-amber/20">
                      <Icon className="h-7 w-7 text-terracotta" />
                    </div>
                    <div>
                      <h4 className="mb-1 text-headline-md font-headline-md text-cocoaBrown">{reason.title}</h4>
                      <p className="text-body-md text-charcoal/70">{reason.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-md"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className="space-y-md">
              <div className="ambient-shadow h-64 overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photoUrl} alt="Cameroonian cocoa farmers" className="h-full w-full object-cover" />
              </div>
              <div className="flex h-40 flex-col justify-center rounded-2xl bg-amber p-md">
                <span className="text-display-lg font-stat-numeric font-serif leading-none text-cocoaBrown">
                  {stats[0]?.value}
                </span>
                <span className="text-label-sm font-label-sm uppercase text-charcoal/70">{stats[0]?.label}</span>
              </div>
            </div>
            <div className="space-y-md pt-8">
              <div className="flex h-48 flex-col justify-center rounded-2xl bg-cocoaBrown p-md">
                <span className="text-display-lg font-stat-numeric font-serif leading-none text-amber">
                  {stats[1]?.value}
                </span>
                <span className="text-label-sm font-label-sm uppercase text-warmCream/70">{stats[1]?.label}</span>
              </div>
              <div className="ambient-shadow h-64 overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={dockPhotoUrl} alt="Shipping dock loading cocoa materials" className="h-full w-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
