"use client";

import { motion } from "framer-motion";
import { ShipmentTrackingForm } from "@/components/forms/ShipmentTrackingForm";

export interface LogisticsHeroProps {
  title?: string;
  body?: string;
  imageUrl?: string;
}

const DEFAULT_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuABbIIoxLLASWQgtAsM-wMTT8eMgjit0aDEP0_NMtV8l0F1zRYIbpX8dDea341aXKpN2ycrAknmM8KoDDr3WzjmkZEgdJD72yCjMv1Bbn3W9S5fMVARGTW3jCgt65wFsYtDU4EycGHVCh7trx9mYdXzZftUKpP-GaFGX43nbKhFFhyIOijTwyR7qXvT5kGZ_YifjLWI6h5uYFjhFmqL74Q6Qbw9zTcW5ICwC76jPBtj0j7xoZ8YFRYZ94TRcOcMQMM7G1irB_UqEvE";

export function LogisticsHero({
  title = "Global Supply Chain Transparency",
  body = "From the rich soils of Cameroon to technical milling facilities and global ports, BV Holdings provides end-to-end traceability for every cocoa shipment.",
  imageUrl = DEFAULT_IMAGE,
}: LogisticsHeroProps) {
  return (
    <section className="relative flex h-[600px] w-full items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageUrl} alt="Container ship at sunset" className="h-full w-full object-cover brightness-[0.7]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-container-max px-gutter">
        <motion.div
          className="max-w-2xl rounded-xl border border-warmCream/10 bg-charcoal/30 p-lg backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="mb-md text-display-lg font-display-lg font-serif text-warmCream">{title}</h1>
          <p className="mb-lg text-body-lg text-warmCream/90">{body}</p>
          <ShipmentTrackingForm />
        </motion.div>
      </div>
    </section>
  );
}
