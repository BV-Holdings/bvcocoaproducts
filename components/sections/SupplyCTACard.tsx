"use client";

import { motion } from "framer-motion";
import { CalendarClock, FileText } from "lucide-react";
import Link from "next/link";

export interface SupplyCTACardProps {
  heading?: string;
  body?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function SupplyCTACard({
  heading = "Ready to Optimize Your Supply Chain?",
  body = "Connect with our logistics team for tailored pricing, bulk availability reports, and seasonal shipping schedules.",
  primaryCta = { label: "Request Supply Quote", href: "/contact" },
  secondaryCta = { label: "Book a Specialist Call", href: "/contact" },
}: SupplyCTACardProps) {
  return (
    <section className="border-t border-charcoal/10 bg-warmCream py-xl">
      <div className="mx-auto max-w-container-max px-gutter">
        <motion.div
          className="flex flex-col items-center justify-between gap-xl rounded-xl border border-charcoal/10 bg-softSand p-xl md:flex-row"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="max-w-xl">
            <h2 className="mb-md text-headline-lg font-headline-lg font-serif text-cocoaBrown">{heading}</h2>
            <p className="text-body-lg text-charcoal/70">{body}</p>
          </div>
          <div className="flex w-full min-w-[280px] flex-col gap-md md:w-auto">
            <Link
              href={primaryCta.href}
              className="flex w-full items-center justify-center gap-sm rounded-lg bg-cocoaBrown px-xl py-md text-label-sm font-label-sm text-warmCream shadow-md transition-all hover:scale-[1.02] active:scale-95"
            >
              <FileText className="h-5 w-5" />
              {primaryCta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className="flex w-full items-center justify-center gap-sm rounded-lg border border-cocoaBrown px-xl py-md text-label-sm font-label-sm text-cocoaBrown transition-all hover:bg-cocoaBrown hover:text-warmCream"
            >
              <CalendarClock className="h-5 w-5" />
              {secondaryCta.label}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
