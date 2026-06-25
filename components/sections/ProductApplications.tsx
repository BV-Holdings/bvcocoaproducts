"use client";

import { motion } from "framer-motion";
import { Droplets, Leaf, PawPrint, Sparkles, Sprout, Zap, type LucideIcon } from "lucide-react";

export interface ProductApplication {
  icon: string;
  title: string;
  description: string;
  emphasized?: boolean;
}

export interface ProductApplicationsProps {
  heading?: string;
  applications: ProductApplication[];
}

const iconMap: Record<string, LucideIcon> = {
  Sprout,
  PawPrint,
  Zap,
  Droplets,
  Sparkles,
};

export function ProductApplications({ heading = "Versatile Applications", applications }: ProductApplicationsProps) {
  return (
    <section className="mx-auto max-w-container-max px-gutter py-xl">
      <div className="mb-lg">
        <h2 className="text-headline-lg font-headline-lg font-serif text-cocoaBrown">{heading}</h2>
        <div className="mt-base h-1 w-24 bg-terracotta" />
      </div>

      <div className="grid grid-cols-1 gap-md md:grid-cols-3">
        {applications.map((application, i) => {
          const Icon = iconMap[application.icon] ?? Leaf;
          return (
            <motion.div
              key={application.title}
              className={`hover-glow ambient-shadow relative overflow-hidden rounded-[24px] p-lg ${
                application.emphasized ? "bg-cocoaBrown text-warmCream" : "bg-warmCream"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            >
              <div className="fiber-texture absolute inset-0 opacity-[0.05]" />
              <div className="relative z-10 space-y-md">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                    application.emphasized ? "bg-terracotta text-warmCream" : "bg-cocoaBrown text-warmCream"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3
                  className={`text-headline-md font-headline-md ${
                    application.emphasized ? "text-amber" : "text-cocoaBrown"
                  }`}
                >
                  {application.title}
                </h3>
                <p className={`text-body-md ${application.emphasized ? "opacity-80" : "text-charcoal/70"}`}>
                  {application.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
