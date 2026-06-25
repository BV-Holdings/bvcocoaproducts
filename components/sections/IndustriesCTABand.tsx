"use client";

import { motion } from "framer-motion";
import { NewsletterSignupForm } from "@/components/forms/NewsletterSignupForm";

export interface IndustriesCTABandProps {
  heading?: string;
  body?: string;
  buttonLabel?: string;
  source?: string;
}

export function IndustriesCTABand({
  heading = "Ready to redefine your supply chain?",
  body = "Download our technical specifications or schedule a consultation with our industrial specialists.",
  buttonLabel = "Get Catalog",
  source = "industries-page",
}: IndustriesCTABandProps) {
  return (
    <section className="mx-auto max-w-container-max px-gutter pb-xl">
      <motion.div
        className="relative flex flex-col items-center gap-lg overflow-hidden rounded-[2.5rem] bg-cocoaBrown p-12 lg:flex-row lg:p-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="fiber-texture absolute inset-0 opacity-20" />
        <div className="relative z-10 lg:w-1/2">
          <h2 className="mb-md text-headline-lg font-headline-lg font-serif text-warmCream">{heading}</h2>
          <p className="text-body-lg text-warmCream/70">{body}</p>
        </div>
        <div className="relative z-10 w-full lg:w-1/2">
          <NewsletterSignupForm source={source} buttonLabel={buttonLabel} placeholder="Enter your business email" />
        </div>
      </motion.div>
    </section>
  );
}
