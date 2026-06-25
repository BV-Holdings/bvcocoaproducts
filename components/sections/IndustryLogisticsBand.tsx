"use client";

import { motion } from "framer-motion";
import { Globe2, Leaf, ShieldCheck, Truck, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface LogisticsBadge {
  icon: string;
  label: string;
}

export interface IndustryLogisticsBandProps {
  icon?: string;
  heading?: string;
  body?: string;
  badges?: LogisticsBadge[];
  tone?: "dark" | "light";
}

const iconMap: Record<string, LucideIcon> = { ShieldCheck, Globe2, Truck, Leaf };

const defaultBadges: LogisticsBadge[] = [
  { icon: "ShieldCheck", label: "FOB / CIF Terms" },
  { icon: "Globe2", label: "Global Distribution" },
];

export function IndustryLogisticsBand({
  icon = "Truck",
  heading = "Bulk Supply Logistics",
  body = "Bulk shipments (FCL - 20ft/40ft) optimized for international energy traders. We ensure seamless chain-of-custody from Douala Port to your facility.",
  badges = defaultBadges,
  tone = "dark",
}: IndustryLogisticsBandProps) {
  const Icon = iconMap[icon] ?? Truck;
  const isDark = tone === "dark";

  return (
    <section className="mx-auto max-w-container-max px-gutter py-xl">
      <motion.div
        className={cn(
          "flex flex-col items-center gap-lg rounded-xl p-xl md:flex-row",
          isDark ? "bg-cocoaBrown text-warmCream" : "bg-softSand text-cocoaBrown",
        )}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="w-full shrink-0 text-center md:w-auto">
          <Icon className={cn("mx-auto h-16 w-16", isDark ? "text-amber" : "text-terracotta")} />
        </div>
        <div className="w-full">
          <h3 className="mb-sm text-headline-lg font-headline-lg font-serif">{heading}</h3>
          <p className={cn("mb-md text-body-lg", isDark ? "text-warmCream/80" : "text-charcoal/70")}>{body}</p>
          {badges.length > 0 && (
            <div className="flex flex-wrap items-center gap-sm">
              {badges.map((badge) => {
                const BadgeIcon = iconMap[badge.icon] ?? ShieldCheck;
                return (
                  <div
                    key={badge.label}
                    className={cn(
                      "flex items-center gap-2 rounded px-md py-sm",
                      isDark ? "bg-warmCream/10" : "bg-warmCream",
                    )}
                  >
                    <BadgeIcon className={cn("h-4 w-4", isDark ? "text-amber" : "text-terracotta")} />
                    <span className="text-label-sm font-label-sm">{badge.label}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
