"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

export interface StatStripProps {
  stats?: Stat[];
}

const defaultStats: Stat[] = [
  { value: 15, suffix: "k+", label: "Tonnes Exported" },
  { value: 24, suffix: "", label: "Countries Served" },
  { value: 100, suffix: "%", label: "Traceable Supply" },
  { value: 12, suffix: "", label: "Global Logistics Hubs" },
];

function AnimatedStat({ stat, delay }: { stat: Stat; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1200;
    const start = performance.now();

    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * stat.value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      className="p-md"
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <div className="mb-xs text-stat-numeric font-stat-numeric font-serif text-terracotta">
        {count}
        {stat.suffix}
      </div>
      <div className="text-label-sm font-label-sm text-charcoal/70">{stat.label}</div>
    </motion.div>
  );
}

export function StatStrip({ stats = defaultStats }: StatStripProps) {
  return (
    <section className="relative bg-softSand py-lg">
      <div className="fiber-texture absolute inset-0" />
      <div className="relative z-10 mx-auto max-w-container-max px-gutter">
        <div className="grid grid-cols-2 gap-md text-center md:grid-cols-4">
          {stats.map((stat, i) => (
            <AnimatedStat key={stat.label} stat={stat} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
