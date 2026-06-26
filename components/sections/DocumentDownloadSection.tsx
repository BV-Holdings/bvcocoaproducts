"use client";

import { motion } from "framer-motion";
import { Info, ShieldCheck, FileText, Leaf, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { DOCUMENTS, type DocumentKey } from "@/lib/documents";

export interface DocumentCard {
  documentKey: DocumentKey;
  icon: string;
}

export interface DocumentDownloadSectionProps {
  heading?: string;
  body?: string;
  cards?: DocumentCard[];
}

const iconMap: Record<string, LucideIcon> = { FileText, ShieldCheck, Leaf };

const defaultCards: DocumentCard[] = [
  { documentKey: "specSheet", icon: "FileText" },
  { documentKey: "coaTemplate", icon: "ShieldCheck" },
  { documentKey: "eudrStatement", icon: "Leaf" },
];

export function DocumentDownloadSection({
  heading = "Technical Specifications",
  body = "Access the core documentation required for industrial procurement and international logistics compliance.",
  cards = defaultCards,
}: DocumentDownloadSectionProps) {
  return (
    <section className="bg-softSand py-xl">
      <div className="mx-auto max-w-container-max px-gutter">
        <div className="mb-xl text-center">
          <h2 className="mb-sm text-headline-lg font-headline-lg font-serif text-cocoaBrown">{heading}</h2>
          <p className="mx-auto max-w-2xl text-charcoal/70">{body}</p>
        </div>

        <div className="mb-lg grid grid-cols-1 gap-md md:grid-cols-3">
          {cards.map((card, i) => {
            const document = DOCUMENTS[card.documentKey];
            const Icon = iconMap[card.icon] ?? FileText;
            return (
              <motion.div
                key={card.documentKey}
                className="ambient-shadow flex flex-col items-center rounded-xl border border-charcoal/10 bg-warmCream p-lg text-center"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              >
                <div className="mb-md flex h-16 w-16 items-center justify-center rounded-full bg-cocoaBrown">
                  <Icon className="h-7 w-7 text-amber" />
                </div>
                <h4 className="mb-xs text-headline-md font-headline-md text-cocoaBrown">{document.name}</h4>
                <p className="mb-lg text-label-sm text-charcoal/60">{document.description}</p>
                <DownloadButton documentKey={card.documentKey} label="Download PDF" className="mt-auto w-full" />
              </motion.div>
            );
          })}
        </div>

        <div className="flex flex-col items-center justify-between gap-md rounded-xl border border-charcoal/10 bg-cocoaBrown/5 p-md md:flex-row">
          <div className="flex items-center gap-md">
            <Info className="h-9 w-9 shrink-0 text-terracotta" />
            <div>
              <p className="font-bold text-cocoaBrown">Looking for batch-specific documentation?</p>
              <p className="text-charcoal/70">
                All active clients can request live CoA and Phytosanitary certificates through our trade desk.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="whitespace-nowrap rounded-lg bg-cocoaBrown px-lg py-sm text-label-sm font-label-sm text-warmCream transition-opacity hover:opacity-90"
          >
            Request Access
          </Link>
        </div>
      </div>
    </section>
  );
}
