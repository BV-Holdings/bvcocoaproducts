"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Search } from "lucide-react";

const trackingInquirySchema = z.object({
  trackingId: z.string().min(1, "Enter a container or BOL number"),
  email: z.string().email("Enter a valid email address"),
});

type TrackingInquiryValues = z.infer<typeof trackingInquirySchema>;

export function ShipmentTrackingForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TrackingInquiryValues>({
    resolver: zodResolver(trackingInquirySchema),
  });

  const onSubmit = async (values: TrackingInquiryValues) => {
    setStatus("idle");

    try {
      const response = await fetch("/api/tracking-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="relative overflow-hidden rounded-xl bg-warmCream p-md shadow-xl">
        <div className="fiber-texture pointer-events-none absolute inset-0" />
        <p className="relative z-10 text-body-md font-bold text-sustainableGreen">
          Inquiry received — a trade specialist will follow up with your shipment status shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative flex flex-col items-end gap-sm overflow-hidden rounded-xl bg-warmCream p-md shadow-xl md:flex-row"
    >
      <div className="fiber-texture pointer-events-none absolute inset-0" />
      <div className="relative z-10 w-full flex-1">
        <label className="mb-1 block text-label-sm font-label-sm text-charcoal/70">TRACKING ID</label>
        <input
          className="w-full rounded-lg border border-charcoal/15 bg-softSand p-sm text-body-md text-charcoal outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-terracotta"
          placeholder="Enter Container or BOL Number (e.g. BVH-99283-X)"
          {...register("trackingId")}
        />
        {errors.trackingId && <p className="mt-1 text-label-sm text-terracotta">{errors.trackingId.message}</p>}
      </div>
      <div className="relative z-10 w-full flex-1">
        <label className="mb-1 block text-label-sm font-label-sm text-charcoal/70">YOUR EMAIL</label>
        <input
          type="email"
          className="w-full rounded-lg border border-charcoal/15 bg-softSand p-sm text-body-md text-charcoal outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-terracotta"
          placeholder="you@company.com"
          {...register("email")}
        />
        {errors.email && <p className="mt-1 text-label-sm text-terracotta">{errors.email.message}</p>}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="relative z-10 flex w-full items-center justify-center gap-2 rounded-lg bg-terracotta px-lg py-sm text-label-sm font-label-sm text-warmCream transition-all hover:opacity-90 disabled:opacity-60 md:w-auto"
      >
        <Search className="h-4 w-4" />
        {isSubmitting ? "Sending..." : "Track Shipment"}
      </button>
      {status === "error" && (
        <p className="relative z-10 w-full text-label-sm text-terracotta">Something went wrong. Try again.</p>
      )}
    </form>
  );
}
