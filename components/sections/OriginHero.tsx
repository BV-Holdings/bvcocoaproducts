"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export interface OriginHeroProps {
  badge?: string;
  title?: string;
  body?: string;
  scrollLabel?: string;
  scrollTargetId?: string;
  imageUrl?: string;
}

// TODO: replace imageUrl with licensed BV Holdings plantation photography before launch.
const DEFAULT_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCrPOLqBNYDh0F2WklH8m0_Qip3dGqWzqNYBEKM_U8qOdCy819s6VvvwHgZTzF_mNLLDkBilZSVMvlRnYKKRL8_aLcwj57e_E96dSr5l8BDWNPinYFZSbqOE5nnOlcmedi3LolYCS0QsSn0-ccnL5SsKN9LXWkCN1u2C3Le2XD9915Ahj4-1ma8TyFM6fLYcAhsVIZs5-iSXk7O5w386Cd5gsRQ9ZDpKXn4FKsZvVVRSwgUkhWNeUJv6JZ6K07eYnqBNSnZZ2I-0Z0";

export function OriginHero({
  badge = "Cameroon Origin",
  title = "Rooted in the Rich Soils of West Africa",
  body = "From the heart of Cameroon to the global industrial market, BV Holdings redefines the value chain of cocoa byproducts through heritage and innovation.",
  scrollLabel = "Discover Our Story",
  scrollTargetId = "origin",
  imageUrl = DEFAULT_IMAGE,
}: OriginHeroProps) {
  return (
    <section className="relative flex h-[819px] items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-charcoal/40" />
        <motion.div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url('${imageUrl}')` }}
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        />
      </div>

      <div className="relative z-20 mx-auto w-full max-w-container-max px-gutter">
        <motion.div
          className="max-w-2xl text-warmCream"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <span className="mb-md inline-block rounded-full bg-amber px-sm py-xs text-label-sm font-label-sm uppercase text-charcoal">
            {badge}
          </span>
          <h1 className="mb-md text-display-lg font-display-lg font-serif leading-tight">{title}</h1>
          <p className="mb-lg text-body-lg text-warmCream/90">{body}</p>
          <a href={`#${scrollTargetId}`} className="inline-flex items-center gap-base font-bold text-amber hover:underline">
            {scrollLabel}
            <ArrowDown className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
