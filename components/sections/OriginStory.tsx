"use client";

import { motion } from "framer-motion";

export interface OriginStoryProps {
  heading?: string;
  quote?: string;
  paragraphs?: string[];
  anchorId?: string;
}

const defaultParagraphs = [
  "Founded on the principles of circularity and agricultural stewardship, BV Holdings began as a modest logistics operation in the coastal regions of Cameroon. We observed that while the world craved chocolate, the immense industrial potential of cocoa husks, shells, and byproduct pulp was largely ignored. This sparked a vision: to bridge the gap between small-scale farmers in West Africa and the global manufacturers seeking sustainable, high-grade organic inputs.",
  "Our journey has been one of radical transparency. By establishing direct-to-source relationships with farming cooperatives in the Southwest and Center regions of Cameroon, we have built a logistics network that ensures every byproduct is handled with the same reverence as the premium bean. Today, BV Holdings stands as a premier exporter, turning what was once considered agricultural waste into high-value raw materials for fertilizer, animal feed, and fuel industries worldwide.",
];

export function OriginStory({
  heading = "The Unseen Potential of the Cocoa Pod",
  quote = "West Africa contributes a majority of the world's cocoa, yet much of the biological wealth remains locked within the parts of the fruit typically left behind.",
  paragraphs = defaultParagraphs,
  anchorId = "origin",
}: OriginStoryProps) {
  return (
    <section className="bg-warmCream py-xl" id={anchorId}>
      <div className="mx-auto max-w-container-max px-gutter">
        <div className="grid grid-cols-1 items-start gap-lg lg:grid-cols-12">
          <motion.div
            className="space-y-md lg:col-span-5"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-headline-lg font-headline-lg font-serif text-cocoaBrown">{heading}</h2>
            <div className="h-1 w-20 bg-terracotta" />
          </motion.div>

          <motion.div
            className="space-y-md text-body-md leading-relaxed text-charcoal/80 lg:col-span-7"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <p className="border-l-4 border-amber pl-md text-body-lg font-medium italic text-cocoaBrown">{quote}</p>
            {paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
