"use client";

import { motion } from "framer-motion";

export interface ContaminantCategory {
  title: string;
  thresholds: { label: string; value: string }[];
}

export interface ContaminantTestingSectionProps {
  heading?: string;
  categories?: ContaminantCategory[];
}

const defaultCategories: ContaminantCategory[] = [
  {
    title: "Microbiological",
    thresholds: [
      { label: "Salmonella", value: "Absent / 25g" },
      { label: "E. Coli", value: "< 10 cfu/g" },
      { label: "Yeasts & Moulds", value: "< 50 cfu/g" },
    ],
  },
  {
    title: "Mycotoxins",
    thresholds: [
      { label: "Aflatoxin B1", value: "< 2.0 μg/kg" },
      { label: "Aflatoxin Total", value: "< 4.0 μg/kg" },
      { label: "Ochratoxin A", value: "< 3.0 μg/kg" },
    ],
  },
  {
    title: "Heavy Metals",
    thresholds: [
      { label: "Cadmium (Cd)", value: "< 0.5 mg/kg" },
      { label: "Lead (Pb)", value: "< 0.1 mg/kg" },
      { label: "Arsenic (As)", value: "< 0.1 mg/kg" },
    ],
  },
];

export function ContaminantTestingSection({
  heading = "Contaminant Analysis Thresholds",
  categories = defaultCategories,
}: ContaminantTestingSectionProps) {
  return (
    <section className="bg-cocoaBrown py-xl">
      <div className="mx-auto max-w-container-max px-gutter">
        <h2 className="mb-xl text-center text-headline-lg font-headline-lg font-serif text-warmCream">{heading}</h2>
        <div className="grid grid-cols-1 gap-lg md:grid-cols-3">
          {categories.map((category, i) => (
            <motion.div
              key={category.title}
              className="rounded-xl border-l-4 border-terracotta bg-warmCream p-lg"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            >
              <h5 className="mb-md text-headline-md font-headline-md text-cocoaBrown">{category.title}</h5>
              <ul className="space-y-sm text-charcoal/70">
                {category.thresholds.map((threshold, idx) => (
                  <li
                    key={threshold.label}
                    className={`flex justify-between ${
                      idx < category.thresholds.length - 1 ? "border-b border-charcoal/10 pb-xs" : ""
                    }`}
                  >
                    <span>{threshold.label}</span>
                    <span className="font-bold text-cocoaBrown">{threshold.value}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
