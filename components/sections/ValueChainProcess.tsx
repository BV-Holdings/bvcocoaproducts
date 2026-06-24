"use client";

import { motion } from "framer-motion";

export interface ValueChainStep {
  number: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface ValueChainProcessProps {
  eyebrow?: string;
  heading?: string;
  body?: string;
  steps?: ValueChainStep[];
}

// TODO: replace step imageUrls with licensed BV Holdings sourcing/processing/logistics photography before launch.
const defaultSteps: ValueChainStep[] = [
  {
    number: "01",
    title: "Ethical Sourcing",
    description: "We partner with cooperatives across Cameroon to collect biomass directly after the harvest.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAm0ZhLmsf_ThXVezZy6h5b5AXD5APWIN9KiFN7Q0MAupCmGa_8oy3szxyjwS7IjHgaSkN_mS_hf6Y1yxqkJ5lE0dpLr36DwRZYact00fwEKLcDWEfU_3dA1VVEelDmT2HIpHA_Wrva3D02uC9qRmw35Spt2yp1ggyfEb6WHUm2x-H_4W9qpCY9vqTbonq7rPdBxNsu9jFDAB5Ztz5PR37Qvp-_d-FnW_vn9c02ukXVwqI0yag3m8T70anS0sYPSGxAZjKi8pPDKEI",
  },
  {
    number: "02",
    title: "Refined Processing",
    description: "Materials are dried and processed using controlled methods to prevent fermentation and ensure stability.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCTOYAmJ5iADGx1fZJt8meSayUQEakMgGHVzomf7LeL5LjyD-NUryq5qoRXs4wYnK8ezRnMOwgHuyLJ_wT5wAY2i9zk82weqI_WB6scnvbiX4XWj1nzu8yClnmLcMMXjCbzssrDOBPcY1WbD3forFiSpL6TePHLZdGeElqBmofOoWiQ9CxZAafEyUGUM0G8pNlh7kB9QsBiSn17_FfXJUdXAx8HiSD2eo8RXWg50zqtXE5BDisnWB3LuT62SOB6IiPKjCwkFbCUL4g",
  },
  {
    number: "03",
    title: "Global Export",
    description: "Utilizing our strategic position in Douala, we manage the final logistics for secure, timely delivery worldwide.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBMbwTux4Di_GAGQEri_Bt8RbCyO5G6iQrg5ApUYp5NJVJRXb6g0a7jrZUdZVIhygCWoQhoKNFyb6cEBQJUYvQgyvOwJDGnt3QjmRdqMh45n_gY76jF8HFxIqYNirkOJIu2VwL-l42LxeTWKdaFIaLY9yppNdEON7Xk1XtuK3ORL_Bri9MgpGoFVBzlqnKFFjeB1pbZzVeZt9g5-p_NOBo34sxOTo9L2OMXXakwWWeS4H6GHVvQInl54wICXWhH03ZvLp8n4JJnEvI",
  },
];

export function ValueChainProcess({
  eyebrow = "The Value Chain",
  heading = "From Sourcing to Global Export",
  body = "A meticulous process designed to preserve the material integrity of our cocoa byproducts.",
  steps = defaultSteps,
}: ValueChainProcessProps) {
  return (
    <section className="overflow-hidden bg-warmCream py-xl">
      <div className="mx-auto max-w-container-max px-gutter">
        <div className="mb-xl flex flex-col items-end justify-between gap-md md:flex-row">
          <div className="max-w-lg">
            <span className="text-label-sm font-bold uppercase tracking-widest text-terracotta">{eyebrow}</span>
            <h2 className="text-headline-lg font-headline-lg font-serif text-cocoaBrown">{heading}</h2>
          </div>
          <p className="max-w-sm text-charcoal/70">{body}</p>
        </div>

        <div className="grid grid-cols-1 gap-md lg:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="group relative flex min-h-[400px] flex-col justify-end overflow-hidden rounded-xl bg-softSand p-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
            >
              <div className="absolute inset-0 opacity-60 transition-opacity duration-300 group-hover:opacity-80">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={step.imageUrl} alt={step.title} className="h-full w-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 to-transparent" />
              <div className="relative z-10">
                <span className="mb-base block text-stat-numeric font-stat-numeric font-serif text-amber">
                  {step.number}
                </span>
                <h4 className="mb-xs text-headline-md font-headline-md text-warmCream">{step.title}</h4>
                <p className="text-body-md text-warmCream/80">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
