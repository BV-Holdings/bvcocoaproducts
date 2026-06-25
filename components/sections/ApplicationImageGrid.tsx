"use client";

import { motion } from "framer-motion";

export interface ApplicationImageItem {
  imageUrl: string;
  label: string;
}

export interface ApplicationImageGridProps {
  heading?: string;
  body?: string;
  items: ApplicationImageItem[];
}

export function ApplicationImageGrid({
  heading = "Industry Applications",
  body = "Versatile integration across diverse food categories.",
  items,
}: ApplicationImageGridProps) {
  return (
    <section className="bg-warmCream py-xl">
      <div className="mx-auto max-w-container-max px-gutter">
        <div className="mb-lg">
          <h2 className="text-headline-lg font-headline-lg font-serif text-cocoaBrown">{heading}</h2>
          <p className="mt-2 text-body-lg text-charcoal/70">{body}</p>
        </div>

        <div className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.imageUrl}
                alt={item.label}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-charcoal/80 to-transparent p-md">
                <h4 className="text-headline-md font-headline-md text-warmCream">{item.label}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
