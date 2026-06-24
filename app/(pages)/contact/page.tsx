import type { Metadata } from "next";
import { QuoteRequestForm } from "@/components/forms/QuoteRequestForm";
import { WhatHappensNext } from "@/components/sections/WhatHappensNext";
import { TradeDeskCard } from "@/components/sections/TradeDeskCard";

export const metadata: Metadata = {
  title: "Request a Quote | BV Holdings",
};

// TODO: replace imageUrl with licensed BV Holdings quality-control photography before launch.
const SIDEBAR_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB9Ng1zEddj-WJC-klDLJUu4kNtwiqCgZEZwaukFaUEPgsgsBrWdHAvdTDjrgZuRFGB8lz-c6fdkjYxH2a2EHIoqqHxjnPTLtcOSRlBPYYtQkUoVG6VgmBIhDcf_SWVrExB-RL1wSjiM7Auy34AEisDw-oxe1HT6Rdard-i8QUQjObpKKH9OODVSzh6Xr2gTLp9pBdFhfBFTgeiQvGp5wK7RBFpaQBd2tqOyPKzxOe_752gLTCIV_suxFNeZtfIa-BHMTDwhQDdTYo";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-container-max px-gutter py-xl">
      <section className="mb-xl text-center md:text-left">
        <h1 className="mb-md text-display-lg font-display-lg font-serif text-cocoaBrown">Secure Your Supply Chain</h1>
        <p className="max-w-2xl text-body-lg text-charcoal/70">
          Partner with BV Holdings for ethically sourced, premium cocoa byproducts. Complete the form below to
          receive a custom logistics and pricing proposal tailored to your industrial needs.
        </p>
      </section>

      <div className="grid grid-cols-1 gap-lg lg:grid-cols-12">
        <div className="relative overflow-hidden rounded-xl border border-charcoal/10 bg-softSand p-md shadow-sm md:p-xl lg:col-span-8">
          <div className="fiber-texture absolute inset-0" />
          <div className="relative z-10">
            <QuoteRequestForm />
          </div>
        </div>

        <div className="flex flex-col gap-lg lg:col-span-4">
          <WhatHappensNext />
          <TradeDeskCard />
          <div className="h-48 w-full overflow-hidden rounded-xl border border-charcoal/10 shadow-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={SIDEBAR_IMAGE} alt="Cocoa beans being inspected for quality" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </main>
  );
}
