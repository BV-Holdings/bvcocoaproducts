"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export interface CatalogCTABandProps {
  heading?: string;
  body?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageUrl?: string;
}

const DEFAULT_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDqy-JqeUjMNQwrIcOr5GRy68O_Vf-aLGe0MoLFtaVxoPiQ-t84yCUU06GEe8mBlTg0U_7fxbvPU_yv3EPr3hsvZwfKykE_xvr6BTOMTNv-AVFpTy-XPf2dGr8oiodhUFXVmVm43jw5WmuvcwlAIphhBK6-tE4nuxfhz5rhsj-mNre0dziZJyZ5OANYN9uJk9KVK3ZtB_zaqBeXAbEsdmTtA_fMKDChgOMO-jn6vCnBNQdUZHhv2i2Av8-gaezaHduJuUXcGonN5uU";

export function CatalogCTABand({
  heading = "Partner with Cameroon's Finest Export Network",
  body = "Request our comprehensive product catalog for detailed chemical analysis, logistics specs, and bulk pricing tiers.",
  primaryCta = { label: "Request a Product Catalog", href: "/contact" },
  secondaryCta = { label: "Speak to a Specialist", href: "/contact" },
  imageUrl = DEFAULT_IMAGE,
}: CatalogCTABandProps) {
  return (
    <section className="mx-auto mb-xl max-w-container-max px-gutter py-xl">
      <motion.div
        className="relative flex flex-col items-center gap-xl overflow-hidden rounded-3xl bg-cocoaBrown p-xl md:flex-row"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="absolute right-0 top-0 h-full w-1/2 origin-bottom skew-x-12 bg-terracotta/10" />

        <div className="z-10 text-center md:w-1/2 md:text-left">
          <h2 className="mb-md text-headline-lg font-headline-lg font-serif text-warmCream">{heading}</h2>
          <p className="mb-lg text-body-md text-warmCream/80">{body}</p>
          <div className="flex flex-wrap justify-center gap-md md:justify-start">
            <Link
              href={primaryCta.href}
              className="rounded-lg bg-amber px-lg py-sm text-label-sm font-label-sm font-bold text-charcoal shadow-xl transition-all hover:scale-105"
            >
              {primaryCta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className="rounded-lg border-2 border-warmCream/40 px-lg py-sm text-label-sm font-label-sm text-warmCream transition-all hover:bg-warmCream/5"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className="relative z-10 h-64 w-full overflow-hidden rounded-2xl md:h-80 md:w-1/2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imageUrl} alt="Commercial shipping dock at sunset" className="h-full w-full object-cover" />
        </div>
      </motion.div>
    </section>
  );
}
