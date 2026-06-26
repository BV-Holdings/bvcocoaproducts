"use client";

import { motion } from "framer-motion";
import { Factory, FlaskConical, Sprout, type LucideIcon } from "lucide-react";

export interface QualityProcessStep {
  number: string;
  icon: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export interface QualityProcessTimelineProps {
  heading?: string;
  steps?: QualityProcessStep[];
}

const iconMap: Record<string, LucideIcon> = { Sprout, Factory, FlaskConical };

// TODO: replace imageUrls with licensed BV Holdings photography before launch.
const defaultSteps: QualityProcessStep[] = [
  {
    number: "01",
    icon: "Sprout",
    title: "Sourcing & Collection",
    description:
      "Our process begins at the farm level, where raw material is vetted for moisture content and physical integrity before entering our collection centers.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCJzNNCzk8mYqwh7Hn7cgS8x9hG-F1fgIyQims-YzayyT9JaKcuAonYFS6wbtwEWy8TPUND5ZLXT67BBwKXb21A69hs_srddqTcAVNC7WZI2gE-sfP0yxm3Ei1v6edVCdIrUXzjMrAUp2UHWwt8ivmYiKuwiXNerRr3r4S9Bo_IWJiTMwYBTAYdOgiJ3KV7zxOwmalebh75Ap4JaFLuQCEHRi5WAyIA-gDToKLMMiTdCq39KMG_CC1Y1kSE8g7xPtOcVDTHWMrVzxM",
    imageAlt: "Harvest sorting at a Cameroonian collection center",
  },
  {
    number: "02",
    icon: "Factory",
    title: "Industrial Processing",
    description:
      "Materials are dried and processed using precision-controlled parameters to ensure consistent quality and microbial safety across every batch.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCjgl4yBkok6xVIpRBe8VrVE116edZddfoCTWkb9PjV6qRfg5YB7kwKuD4YSHkY2ZkBcKLap-NnrZT9LbhrZEdYva3N__7_x5C8eA4CRtLpB51jz2Zn4gadRukthgqCm8SCFOOeZvmWtU8GglPyfKJQoutmC03WVtkxROUw-o85t4IA9z-198rvECjf95KjTDGgXo2nP5nJma5T3BlGtHclNgull-l-H6Fgg3DksjE21Q3eIc0LpKHjUQBuRS6FN1Jcd0p7mQq07WY",
    imageAlt: "Industrial processing facility handling cocoa byproducts",
  },
  {
    number: "03",
    icon: "FlaskConical",
    title: "Rigorous Inspection",
    description:
      "Independent third-party laboratories perform blind testing for heavy metals, mycotoxins, and microbiological contaminants to verify compliance with international regulations.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDo7J6Bt6HXtvCUBsyhFZZesWmup0dbXy4txgoIqDg-TVNYxquDMhFe7Y3NTS58rUR5XfVonIyGSERI9Jec95FGNwwSyYg7itSXrPX1FDJ9Bi8C5NwRJZmt_SCXGNQ_65m2u4GgIOBwt9ywRguwWg4UgfWKwAu7F8d_VcL4bIt4BhXK0HlORuiZQAisPDlS3wr4pmdahHWvJtPtM8SNtpcE2V1ybtFm35hDrjJZGHyycS_lI2wlRKRswoh-uShziIpl7xTd5-C-6NU",
    imageAlt: "Laboratory testing of cocoa byproduct samples",
  },
];

export function QualityProcessTimeline({
  heading = "The Integrity Chain",
  steps = defaultSteps,
}: QualityProcessTimelineProps) {
  return (
    <section className="mx-auto max-w-container-max px-gutter py-xl">
      <h2 className="mb-xl text-center text-headline-lg font-headline-lg font-serif text-cocoaBrown">{heading}</h2>

      <div className="relative space-y-xl">
        <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-terracotta/20 md:block" />

        {steps.map((step, i) => {
          const Icon = iconMap[step.icon] ?? Sprout;
          const reversed = i % 2 === 1;
          return (
            <div
              key={step.number}
              className="relative flex flex-col items-center gap-md md:flex-row md:justify-between"
            >
              <motion.div
                className={`order-2 w-full md:w-[45%] ${reversed ? "md:order-3" : "md:order-1"}`}
                initial={{ opacity: 0, x: reversed ? 16 : -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="ambient-shadow relative overflow-hidden rounded-xl bg-softSand p-lg">
                  <div className="fiber-texture pointer-events-none absolute inset-0" />
                  <Icon className="relative z-10 mb-sm h-9 w-9 text-terracotta" />
                  <h3 className="relative z-10 mb-sm text-headline-md font-headline-md text-cocoaBrown">
                    {step.title}
                  </h3>
                  <p className="relative z-10 text-body-md text-charcoal/70">{step.description}</p>
                </div>
              </motion.div>

              <div className="z-10 order-1 my-md flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-warmCream bg-cocoaBrown md:order-2 md:my-0">
                <span className="font-bold text-warmCream">{step.number}</span>
              </div>

              <motion.div
                className={`order-3 mb-md w-full md:mb-0 md:w-[45%] ${reversed ? "md:order-1" : "md:order-3"}`}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={step.imageUrl}
                  alt={step.imageAlt}
                  className="ambient-shadow h-64 w-full rounded-xl object-cover"
                />
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
