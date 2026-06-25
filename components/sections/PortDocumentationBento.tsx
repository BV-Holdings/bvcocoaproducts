"use client";

import { motion } from "framer-motion";
import { Download, FileText, ListChecks, ShieldCheck, Stethoscope, type LucideIcon } from "lucide-react";

export interface TradeDocument {
  icon: string;
  label: string;
  description: string;
  href: string;
}

export interface PortStatus {
  label: string;
  detail: string;
}

export interface PortDocumentationBentoProps {
  heading?: string;
  body?: string;
  documents?: TradeDocument[];
  hubHeading?: string;
  ports?: PortStatus[];
}

const iconMap: Record<string, LucideIcon> = { FileText, ShieldCheck, Stethoscope, ListChecks };

// TODO: wire up real document URLs (e.g. Supabase Storage) once compliance paperwork templates are available.
const defaultDocuments: TradeDocument[] = [
  { icon: "FileText", label: "Certificate of Origin", description: "Issued per international trade standards", href: "#" },
  { icon: "ShieldCheck", label: "EUDR Compliance Statement", description: "Deforestation-free batch validation", href: "#" },
  { icon: "Stethoscope", label: "Phytosanitary Certificate", description: "Standardized health clearance", href: "#" },
  { icon: "ListChecks", label: "Packing List & Invoices", description: "Technical specifications included", href: "#" },
];

const defaultPorts: PortStatus[] = [
  { label: "Port of Douala (CMR)", detail: "Primary export hub | Clearance: 48h" },
  { label: "Port of Rotterdam (NLD)", detail: "Destination hub | Major EU gateway" },
  { label: "Jebel Ali (ARE)", detail: "Destination hub | Middle East gateway" },
];

export function PortDocumentationBento({
  heading = "Trade Documentation",
  body = "Access and download compliance and logistics paperwork for your shipments.",
  documents = defaultDocuments,
  hubHeading = "Hub Visibility",
  ports = defaultPorts,
}: PortDocumentationBentoProps) {
  return (
    <section className="mx-auto max-w-container-max px-gutter py-xl">
      <div className="grid grid-cols-1 gap-md lg:grid-cols-3">
        <motion.div
          className="ambient-shadow flex flex-col justify-between rounded-xl border border-charcoal/10 bg-warmCream p-lg lg:col-span-2"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div>
            <div className="mb-md flex items-center gap-sm">
              <FileText className="h-8 w-8 text-terracotta" />
              <h2 className="text-headline-lg font-headline-lg font-serif text-cocoaBrown">{heading}</h2>
            </div>
            <p className="mb-lg text-body-md text-charcoal/70">{body}</p>
            <div className="grid grid-cols-1 gap-sm sm:grid-cols-2">
              {documents.map((doc) => {
                const Icon = iconMap[doc.icon] ?? FileText;
                return (
                  <a
                    key={doc.label}
                    href={doc.href}
                    className="group flex items-center justify-between rounded-lg border border-charcoal/10 bg-softSand p-sm transition-colors hover:border-terracotta"
                  >
                    <div className="flex items-center gap-sm">
                      <Icon className="h-5 w-5 text-cocoaBrown transition-colors group-hover:text-terracotta" />
                      <div>
                        <p className="text-label-sm font-label-sm text-cocoaBrown">{doc.label}</p>
                        <p className="text-[12px] text-charcoal/60">{doc.description}</p>
                      </div>
                    </div>
                    <Download className="h-5 w-5 text-charcoal/40" />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative flex flex-col justify-between overflow-hidden rounded-xl bg-cocoaBrown p-lg text-warmCream"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <div className="fiber-texture absolute inset-0 opacity-10" />
          <div className="relative z-10">
            <h2 className="mb-md text-headline-md font-headline-md">{hubHeading}</h2>
            <ul className="space-y-md">
              {ports.map((port) => (
                <li key={port.label} className="flex items-center gap-md">
                  <div className="h-2 w-2 shrink-0 rounded-full bg-amber" />
                  <div>
                    <p className="text-label-sm font-label-sm">{port.label}</p>
                    <p className="text-[12px] opacity-70">{port.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
