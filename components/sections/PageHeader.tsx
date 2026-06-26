"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface PageHeaderProps {
  title: string;
  body?: string;
  breadcrumb?: { label: string; href?: string }[];
  imageUrl?: string;
  imageAlt?: string;
}

export function PageHeader({ title, body, breadcrumb = [], imageUrl, imageAlt = "" }: PageHeaderProps) {
  return (
    <section className="relative flex h-[280px] items-center overflow-hidden bg-cocoaBrown">
      <div className="relative z-10 mx-auto grid w-full max-w-container-max grid-cols-1 items-center gap-md px-gutter md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {breadcrumb.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-sm flex">
              <ol className="flex items-center gap-xs text-[10px] font-bold uppercase tracking-widest text-amber">
                {breadcrumb.map((crumb, i) => (
                  <li key={crumb.label} className="flex items-center gap-xs">
                    {i > 0 && <ChevronRight className="h-3 w-3" />}
                    {crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : <span>{crumb.label}</span>}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <h1 className="mb-sm text-headline-lg font-headline-lg font-serif leading-tight text-warmCream">{title}</h1>
          <div className="mb-md h-1 w-24 bg-terracotta" />
          {body && <p className="max-w-md text-body-md text-warmCream/80">{body}</p>}
        </motion.div>
      </div>

      {imageUrl && (
        <div className="absolute right-0 top-0 hidden h-full w-1/2 md:block">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: `url('${imageUrl}')`,
              maskImage: "linear-gradient(to left, black 60%, transparent 100%)",
            }}
            role="img"
            aria-label={imageAlt}
          />
        </div>
      )}
    </section>
  );
}
