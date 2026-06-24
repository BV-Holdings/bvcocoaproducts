"use client";

import { motion } from "framer-motion";

export interface WhyBVHoldingsReason {
  title: string;
  description: string;
}

export interface WhyBVHoldingsProps {
  heading?: string;
  reasons?: WhyBVHoldingsReason[];
  imageUrl?: string;
  imageCaption?: string;
}

const defaultReasons: WhyBVHoldingsReason[] = [
  {
    title: "Traceability",
    description: "Every tonne is tracked from the farm gate to the shipping container using our proprietary logistics ledger.",
  },
  {
    title: "Quality Control",
    description: "Rigorous lab testing ensures consistent moisture levels and organic purity for industrial specifications.",
  },
  {
    title: "Sustainability",
    description: "Championing circular economy principles by maximizing the value of the entire cocoa harvest.",
  },
  {
    title: "Reliability",
    description: "An established network in Douala Port guarantees timely export and global shipping coordination.",
  },
];

// TODO: replace imageUrl with licensed BV Holdings warehouse photography before launch.
const DEFAULT_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAqRVaJz9gGSo76J6iDuQS8yC3QO6nbhX0FzG4jRitW5eeK3KM7mI2M78aIzNgRWeElqrdDEzVD7xZMSL9axu9w4Li583_Rx95yAhe3YbOx8tx_7hEWAcb4iAfpmd-gVVn6Q17B6tyZFm0bioXgCDguvT0AE2hxJ4Jri1OMck-FSg6OpUkFUdwp9p8GGy3vc2E_tYfNY2hOrrE6j-NKqNx6_9HfFN_qf7dFuXjDEhPzkX2aTAx8v4EFSEeO3C3W6aqrWaqDPYcsgXM";

export function WhyBVHoldings({
  heading = "The BV Framework",
  reasons = defaultReasons,
  imageUrl = DEFAULT_IMAGE,
  imageCaption = "Reliable. Scalable.",
}: WhyBVHoldingsProps) {
  return (
    <section className="overflow-hidden bg-warmCream py-xl">
      <div className="mx-auto flex max-w-container-max flex-col items-center gap-xl px-gutter md:flex-row">
        <div className="w-full md:w-1/2">
          <h2 className="mb-lg text-headline-lg font-headline-lg font-serif text-cocoaBrown">{heading}</h2>
          <div className="space-y-lg">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                className="flex gap-md"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              >
                <div className="text-display-lg font-display-lg font-serif text-terracotta/20">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h4 className="text-headline-md font-headline-md text-cocoaBrown">{reason.title}</h4>
                  <p className="text-body-md text-charcoal/70">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative rounded-2xl border-2 border-dashed border-softSand p-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imageUrl} alt="BV Holdings export warehouse" className="ambient-shadow rounded-xl" />
            <div className="absolute -bottom-md -right-md rounded-xl bg-terracotta p-lg text-warmCream">
              <p className="text-headline-md font-bold italic">{imageCaption}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
