"use client";

import { motion } from "framer-motion";
import { ArrowRight, ListFilter } from "lucide-react";
import Link from "next/link";

export interface ProductCard {
  slug: string;
  name: string;
  description: string;
  available: boolean;
  badgeLabel?: string;
  tags?: string[];
  imageUrl?: string;
}

export interface ProductCatalogGridProps {
  heading?: string;
  body?: string;
  products: ProductCard[];
  anchorId?: string;
}

export function ProductCatalogGrid({
  heading = "Industrial Grade Byproducts",
  body = "Premium materials for agriculture, nutrition, and manufacturing.",
  products,
  anchorId = "catalog",
}: ProductCatalogGridProps) {
  return (
    <section className="bg-softSand py-xl" id={anchorId}>
      <div className="mx-auto max-w-container-max px-gutter">
        <div className="mb-lg flex items-end justify-between">
          <div>
            <h2 className="text-headline-lg font-headline-lg font-serif text-cocoaBrown">{heading}</h2>
            <p className="mt-xs text-body-md text-charcoal/70">{body}</p>
          </div>
          <div className="hidden items-center gap-xs text-label-sm font-label-sm text-terracotta md:flex">
            <ListFilter className="h-4 w-4" />
            Filter Categories
          </div>
        </div>

        <div className="grid grid-cols-1 gap-md md:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <motion.div
              key={product.slug}
              className="hover-glow ambient-shadow group flex flex-col overflow-hidden rounded-xl bg-warmCream transition-transform duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease: "easeOut" }}
            >
              <div className="relative h-48 overflow-hidden">
                {product.imageUrl && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute right-sm top-sm rounded-full bg-cocoaBrown/80 px-2 py-1 text-[10px] font-bold uppercase text-warmCream backdrop-blur-md">
                  {product.badgeLabel ?? (product.available ? "In Stock" : "Coming Soon")}
                </div>
              </div>
              <div className="flex-grow p-md">
                <h3 className="mb-xs text-headline-md font-headline-md text-cocoaBrown">{product.name}</h3>
                {product.tags && product.tags.length > 0 && (
                  <div className="mb-md flex items-center gap-xs">
                    {product.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-amber/20 px-2 py-0.5 text-[10px] font-bold text-terracotta">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <p className="text-label-sm font-label-sm leading-relaxed text-charcoal/70">{product.description}</p>
              </div>
              <div className="p-md pt-0">
                <div className="mb-md h-px w-full bg-terracotta/20" />
                <Link
                  href={`/products/${product.slug}`}
                  className="flex w-full items-center justify-between py-xs text-label-sm font-label-sm text-terracotta hover:underline"
                >
                  Technical Data
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
