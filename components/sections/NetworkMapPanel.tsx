"use client";

import { motion } from "framer-motion";
import { Globe2, Ship } from "lucide-react";
import { useState } from "react";

export interface NetworkRoute {
  label: string;
  top: string;
  left: string;
}

export interface NetworkMapPanelProps {
  heading?: string;
  routes?: NetworkRoute[];
}

const defaultRoutes: NetworkRoute[] = [
  { label: "Douala → Rotterdam", top: "62%", left: "44%" },
  { label: "Douala → Amsterdam", top: "38%", left: "50%" },
  { label: "Douala → Jebel Ali", top: "55%", left: "63%" },
];

export function NetworkMapPanel({ heading = "Our Global Network", routes = defaultRoutes }: NetworkMapPanelProps) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="mx-auto max-w-container-max px-gutter py-xl">
      <div className="ambient-shadow relative h-[500px] w-full overflow-hidden rounded-xl border border-charcoal/10">
        <div className="absolute inset-0 bg-gradient-to-br from-cocoaBrown via-cocoaBrown/90 to-terracotta/40" />
        <div className="fiber-texture absolute inset-0 opacity-20" />

        <div className="absolute left-md top-md z-20 flex items-center gap-sm rounded-lg border border-warmCream/10 bg-charcoal/40 px-md py-sm backdrop-blur-md">
          <Globe2 className="h-5 w-5 text-amber" />
          <h2 className="text-headline-md font-headline-md text-warmCream">{heading}</h2>
        </div>

        <div className="absolute inset-0 z-10">
          {routes.map((route) => (
            <div
              key={route.label}
              className="absolute cursor-pointer"
              style={{ top: route.top, left: route.left, transform: "translate(-50%, -50%)" }}
              onMouseEnter={() => setActive(route.label)}
              onMouseLeave={() => setActive(null)}
            >
              {active === route.label && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-charcoal/10 bg-warmCream px-sm py-xs text-[12px] font-semibold text-cocoaBrown shadow-lg"
                >
                  {route.label}
                </motion.div>
              )}
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-warmCream/50 bg-terracotta text-warmCream shadow-lg transition-transform hover:scale-110">
                <Ship className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
