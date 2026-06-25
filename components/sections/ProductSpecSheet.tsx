"use client";

import { motion } from "framer-motion";
import { Download, FileText, ShieldCheck } from "lucide-react";
import type { ProductSpecifications } from "@/types";

export interface ProductDocument {
  label: string;
  meta: string;
  href: string;
}

export interface ProductSpecSheetProps {
  heading?: string;
  body?: string;
  specifications: ProductSpecifications;
  documents?: ProductDocument[];
}

const specLabels: Record<string, string> = {
  moisture: "Moisture Content",
  particleSize: "Particle Size",
  packaging: "Packaging",
  moq: "MOQ",
  hsCode: "HS Code",
  origin: "Origin",
  calorificValue: "Calorific Value",
  ashContent: "Ash Content",
  bulkDensity: "Bulk Density",
};

// TODO: wire up real document URLs (e.g. Supabase Storage) once spec sheets/COAs are available.
const defaultDocuments: ProductDocument[] = [
  { label: "Technical Data Sheet", meta: "PDF", href: "#" },
  { label: "Sample COA", meta: "PDF", href: "#" },
];

const documentIcons = [FileText, ShieldCheck];

function humanizeKey(key: string) {
  return key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1");
}

export function ProductSpecSheet({
  heading = "Technical Specifications",
  body = "Our quality control ensures that every batch meets rigorous international trading standards for purity and moisture content.",
  specifications,
  documents = defaultDocuments,
}: ProductSpecSheetProps) {
  const rows = Object.entries(specifications).filter(([, value]) => value);

  return (
    <section className="bg-softSand py-xl">
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-xl px-gutter lg:grid-cols-12">
        <div className="space-y-md lg:col-span-4">
          <h2 className="text-headline-lg font-headline-lg font-serif leading-tight text-cocoaBrown">{heading}</h2>
          <p className="text-body-md text-charcoal/70">{body}</p>

          <div className="space-y-base pt-md">
            {documents.map((doc, i) => {
              const Icon = documentIcons[i % documentIcons.length];
              return (
                <a
                  key={doc.label}
                  href={doc.href}
                  className="ambient-shadow group flex items-center justify-between rounded-xl border border-transparent bg-warmCream p-md transition-all duration-200 hover:border-terracotta"
                >
                  <div className="flex items-center gap-md">
                    <Icon className="h-5 w-5 text-terracotta" />
                    <div>
                      <p className="font-bold text-cocoaBrown">{doc.label}</p>
                      <p className="text-label-sm text-charcoal/50">{doc.meta}</p>
                    </div>
                  </div>
                  <Download className="h-5 w-5 text-charcoal/40 transition-all group-hover:translate-x-1 group-hover:text-terracotta" />
                </a>
              );
            })}
          </div>
        </div>

        <motion.div
          className="ambient-shadow overflow-hidden rounded-[24px] bg-warmCream lg:col-span-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-cocoaBrown text-warmCream">
                <th className="p-md text-body-lg font-headline-md">Characteristic</th>
                <th className="p-md text-body-lg font-headline-md">Specification</th>
              </tr>
            </thead>
            <tbody className="text-charcoal">
              {rows.map(([key, value], i) => (
                <tr
                  key={key}
                  className={`border-b border-softSand transition-colors ${
                    i % 2 === 0 ? "bg-warmCream" : "bg-softSand/50"
                  }`}
                >
                  <td className="p-md font-bold">{specLabels[key] ?? humanizeKey(key)}</td>
                  <td className="p-md text-charcoal/70">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
