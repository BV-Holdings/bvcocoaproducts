"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 h-20 w-full bg-warmCream transition-all duration-300",
        scrolled ? "bg-warmCream/95 shadow-[0px_4px_20px_rgba(61,43,31,0.08)] backdrop-blur-md" : "shadow-[0px_4px_20px_rgba(61,43,31,0.05)]",
      )}
    >
      <div className="mx-auto flex h-full max-w-container-max items-center justify-between px-gutter">
        <Link href="/" className="text-headline-md font-headline-md font-bold text-cocoaBrown">
          BV Holdings
        </Link>

        <Navigation className="hidden md:flex" />

        <div className="flex items-center gap-md">
          <Link
            href="/contact"
            className="hidden rounded-lg bg-cocoaBrown px-md py-sm text-label-sm font-label-sm text-warmCream transition-transform duration-200 hover:scale-95 md:block"
          >
            Request a Quote
          </Link>

          <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
            <Dialog.Trigger asChild>
              <button className="text-cocoaBrown md:hidden" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </button>
            </Dialog.Trigger>
            <AnimatePresence>
              {mobileOpen && (
                <Dialog.Portal forceMount>
                  <Dialog.Overlay asChild>
                    <motion.div
                      className="fixed inset-0 z-40 bg-charcoal/40"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  </Dialog.Overlay>
                  <Dialog.Content asChild forceMount>
                    <motion.div
                      className="fixed right-0 top-0 z-50 flex h-full w-[80%] max-w-sm flex-col gap-lg bg-warmCream p-gutter shadow-2xl"
                      initial={{ x: "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "100%" }}
                      transition={{ type: "spring", stiffness: 320, damping: 32 }}
                    >
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="text-headline-md font-headline-md font-bold text-cocoaBrown">
                          BV Holdings
                        </Dialog.Title>
                        <Dialog.Close asChild>
                          <button className="text-cocoaBrown" aria-label="Close menu">
                            <X className="h-6 w-6" />
                          </button>
                        </Dialog.Close>
                      </div>
                      <Navigation
                        className="flex-col items-start gap-md"
                        onLinkClick={() => setMobileOpen(false)}
                      />
                      <Link
                        href="/contact"
                        onClick={() => setMobileOpen(false)}
                        className="mt-auto rounded-lg bg-cocoaBrown px-md py-sm text-center text-label-sm font-label-sm text-warmCream"
                      >
                        Request a Quote
                      </Link>
                    </motion.div>
                  </Dialog.Content>
                </Dialog.Portal>
              )}
            </AnimatePresence>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
