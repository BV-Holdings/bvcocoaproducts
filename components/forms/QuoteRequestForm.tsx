"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";

// TODO: replace with Stitch design — Quote Request form
const quoteRequestSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  contactName: z.string().min(1, "Contact name is required"),
  email: z.string().email("Enter a valid email address"),
  country: z.string().min(1, "Country is required"),
  product: z.string().min(1, "Select a product"),
  industry: z.string().min(1, "Select an industry"),
  estimatedVolume: z.string().min(1, "Estimated volume is required"),
  message: z.string().optional(),
});

type QuoteRequestValues = z.infer<typeof quoteRequestSchema>;

const productOptions = ["Cocoa Shells", "Cocoa Shell Flour", "Cocoa Husk Mulch"];
const industryOptions = [
  "Animal Feed",
  "Horticulture & Mulch",
  "Food Ingredients",
  "Cosmetics & Skincare",
  "Biomass Energy",
  "Sustainable Packaging",
];

export function QuoteRequestForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteRequestValues>({
    resolver: zodResolver(quoteRequestSchema),
  });

  const onSubmit = async (values: QuoteRequestValues) => {
    setStatus("idle");

    try {
      const response = await fetch("/api/quote", {
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div>
        <input
          placeholder="Company Name"
          className="w-full rounded-brand border border-softSand px-4 py-2"
          {...register("companyName")}
        />
        {errors.companyName && <p className="mt-1 text-sm text-terracotta">{errors.companyName.message}</p>}
      </div>

      <div>
        <input
          placeholder="Contact Name"
          className="w-full rounded-brand border border-softSand px-4 py-2"
          {...register("contactName")}
        />
        {errors.contactName && <p className="mt-1 text-sm text-terracotta">{errors.contactName.message}</p>}
      </div>

      <div>
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-brand border border-softSand px-4 py-2"
          {...register("email")}
        />
        {errors.email && <p className="mt-1 text-sm text-terracotta">{errors.email.message}</p>}
      </div>

      <div>
        <input
          placeholder="Country"
          className="w-full rounded-brand border border-softSand px-4 py-2"
          {...register("country")}
        />
        {errors.country && <p className="mt-1 text-sm text-terracotta">{errors.country.message}</p>}
      </div>

      <div>
        <select className="w-full rounded-brand border border-softSand px-4 py-2" {...register("product")}>
          <option value="">Select a product</option>
          {productOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.product && <p className="mt-1 text-sm text-terracotta">{errors.product.message}</p>}
      </div>

      <div>
        <select className="w-full rounded-brand border border-softSand px-4 py-2" {...register("industry")}>
          <option value="">Select an industry</option>
          {industryOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.industry && <p className="mt-1 text-sm text-terracotta">{errors.industry.message}</p>}
      </div>

      <div className="sm:col-span-2">
        <input
          placeholder="Estimated Volume (e.g. 20 tons/month)"
          className="w-full rounded-brand border border-softSand px-4 py-2"
          {...register("estimatedVolume")}
        />
        {errors.estimatedVolume && (
          <p className="mt-1 text-sm text-terracotta">{errors.estimatedVolume.message}</p>
        )}
      </div>

      <div className="sm:col-span-2">
        <textarea
          placeholder="Additional details (optional)"
          className="w-full rounded-brand border border-softSand px-4 py-2"
          rows={4}
          {...register("message")}
        />
      </div>

      <div className="sm:col-span-2">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Request a Quote"}
        </Button>
        {status === "success" && (
          <p className="mt-2 text-sm text-sustainableGreen">Your request was submitted successfully.</p>
        )}
        {status === "error" && <p className="mt-2 text-sm text-terracotta">Something went wrong. Try again.</p>}
      </div>
    </form>
  );
}
