"use client";

import { motion } from "framer-motion";
import { Globe2, HeartHandshake, Leaf, Trees, type LucideIcon } from "lucide-react";

export type CertificationStatus = "HELD" | "IN_PROGRESS";

export interface Certification {
  icon: string;
  name: string;
  description: string;
  status: CertificationStatus;
}

export interface CertificationsGridProps {
  heading?: string;
  body?: string;
  certifications?: Certification[];
}

const iconMap: Record<string, LucideIcon> = {
  Trees,
  HeartHandshake,
  Leaf,
  Globe2,
};

// NOTE: all certifications default to IN_PROGRESS — flip to HELD per-cert only once verified/confirmed by BV Holdings.
const defaultCertifications: Certification[] = [
  {
    icon: "Trees",
    name: "Rainforest Alliance",
    description: "Certified for sustainable farming and biodiversity protection.",
    status: "IN_PROGRESS",
  },
  {
    icon: "HeartHandshake",
    name: "Fairtrade International",
    description: "Ensuring equitable pay and labor rights for all producers.",
    status: "IN_PROGRESS",
  },
  {
    icon: "Leaf",
    name: "Organic EU",
    description: "Final stage of transition for the upcoming harvest cycle.",
    status: "IN_PROGRESS",
  },
  {
    icon: "Globe2",
    name: "B Corp Certification",
    description: "Evaluating our holistic social and environmental impact.",
    status: "IN_PROGRESS",
  },
];

const statusStyles: Record<CertificationStatus, { dot: string; text: string; label: string }> = {
  HELD: { dot: "bg-sustainableGreen", text: "text-sustainableGreen", label: "HELD" },
  IN_PROGRESS: { dot: "animate-pulse bg-amber", text: "text-amber", label: "IN PROGRESS" },
};

export function CertificationsGrid({
  heading = "Verified Standards",
  body = "We benchmark our performance against the world's most rigorous sustainability frameworks.",
  certifications = defaultCertifications,
}: CertificationsGridProps) {
  return (
    <section className="relative bg-warmCream py-xl">
      <div className="fiber-texture absolute inset-0" />
      <div className="relative z-10 mx-auto mb-lg max-w-container-max px-gutter text-center">
        <h2 className="mb-sm text-headline-lg font-headline-lg font-serif text-cocoaBrown">{heading}</h2>
        <p className="mx-auto max-w-2xl text-body-md text-charcoal/70">{body}</p>
      </div>

      <div className="relative z-10 mx-auto grid max-w-container-max grid-cols-1 gap-md px-gutter sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((cert, i) => {
          const Icon = iconMap[cert.icon] ?? Leaf;
          const status = statusStyles[cert.status];
          return (
            <motion.div
              key={cert.name}
              className="hover-glow flex flex-col items-center rounded-xl border border-charcoal/10 bg-softSand p-lg text-center shadow-sm"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            >
              <div className="mb-md flex h-20 w-20 items-center justify-center rounded-lg bg-warmCream">
                <Icon className="h-9 w-9 text-sustainableGreen" />
              </div>
              <h3 className="mb-xs font-bold text-cocoaBrown">{cert.name}</h3>
              <div className="mb-md flex items-center gap-xs">
                <span className={`h-2 w-2 rounded-full ${status.dot}`} />
                <span className={`text-label-sm ${status.text}`}>{status.label}</span>
              </div>
              <p className="text-xs text-charcoal/60">{cert.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
