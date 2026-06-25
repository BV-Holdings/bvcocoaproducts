"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send } from "lucide-react";

const quoteRequestSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  contactName: z.string().min(1, "Contact name is required"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().optional(),
  country: z.string().min(1, "Country is required"),
  product: z.string().min(1, "Select a product"),
  industry: z.string().min(1, "Select an industry"),
  estimatedVolume: z.string().min(1, "Estimated volume is required"),
  message: z.string().optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must agree before submitting" }),
  }),
});

type QuoteRequestValues = z.infer<typeof quoteRequestSchema>;

export interface QuoteProductOption {
  name: string;
  selectable: boolean;
}

export interface QuoteRequestFormProps {
  products?: QuoteProductOption[];
}

// Quote requests are currently only accepted for these products, regardless of catalog availability.
const SELECTABLE_PRODUCTS = ["Cocoa Shells", "Cocoa Husk Mulch"];

const defaultProductOptions: QuoteProductOption[] = [
  "Cocoa Shells",
  "Cocoa Shell Flour",
  "Cocoa Husk Mulch",
  "Cocoa Meal & Pellets",
  "Cocoa Shell Micronized Powder",
].map((name) => ({ name, selectable: SELECTABLE_PRODUCTS.includes(name) }));

const industryOptions = [
  "Animal Feed",
  "Horticulture & Mulch",
  "Food Ingredients",
  "Cosmetics & Skincare",
  "Biomass Energy",
  "Sustainable Packaging",
];

const inputClass =
  "rounded-lg border border-charcoal/20 bg-warmCream p-sm text-body-md text-charcoal outline-none transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-terracotta";
const labelClass = "text-label-sm font-label-sm uppercase tracking-wider text-cocoaBrown";

export function QuoteRequestForm({ products = defaultProductOptions }: QuoteRequestFormProps) {
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
      const { consent: _consent, ...payload } = values;
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-md">
      <div className="grid grid-cols-1 gap-md md:grid-cols-2">
        <div className="flex flex-col gap-xs">
          <label className={labelClass}>Product Interest</label>
          <select className={inputClass} {...register("product")}>
            <option value="">Select a product</option>
            {products.map((option) => (
              <option key={option.name} value={option.name} disabled={!option.selectable}>
                {option.name}
                {!option.selectable ? " (Coming Soon)" : ""}
              </option>
            ))}
          </select>
          {errors.product && <p className="text-label-sm text-terracotta">{errors.product.message}</p>}
        </div>

        <div className="flex flex-col gap-xs">
          <label className={labelClass}>Industry / Use Case</label>
          <select className={inputClass} {...register("industry")}>
            <option value="">Select an industry</option>
            {industryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.industry && <p className="text-label-sm text-terracotta">{errors.industry.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-md md:grid-cols-2">
        <div className="flex flex-col gap-xs">
          <label className={labelClass}>Expected Monthly Volume (Metric Tons)</label>
          <input className={inputClass} placeholder="e.g. 25" {...register("estimatedVolume")} />
          {errors.estimatedVolume && (
            <p className="text-label-sm text-terracotta">{errors.estimatedVolume.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-xs">
          <label className={labelClass}>Destination Country</label>
          <input className={inputClass} placeholder="e.g. Netherlands" {...register("country")} />
          {errors.country && <p className="text-label-sm text-terracotta">{errors.country.message}</p>}
        </div>
      </div>

      <hr className="my-base border-charcoal/10" />

      <div className="grid grid-cols-1 gap-md md:grid-cols-2">
        <div className="flex flex-col gap-xs">
          <label className={labelClass}>Company Name</label>
          <input className={inputClass} placeholder="Global Foods Inc." {...register("companyName")} />
          {errors.companyName && <p className="text-label-sm text-terracotta">{errors.companyName.message}</p>}
        </div>

        <div className="flex flex-col gap-xs">
          <label className={labelClass}>Full Name</label>
          <input className={inputClass} placeholder="Alexander Thorne" {...register("contactName")} />
          {errors.contactName && <p className="text-label-sm text-terracotta">{errors.contactName.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-md md:grid-cols-2">
        <div className="flex flex-col gap-xs">
          <label className={labelClass}>Business Email</label>
          <input type="email" className={inputClass} placeholder="trade@globalfoods.com" {...register("email")} />
          {errors.email && <p className="text-label-sm text-terracotta">{errors.email.message}</p>}
        </div>

        <div className="flex flex-col gap-xs">
          <label className={labelClass}>Contact Number</label>
          <input type="tel" className={inputClass} placeholder="+44 20 7946 0958" {...register("phone")} />
        </div>
      </div>

      <div className="flex flex-col gap-xs">
        <label className={labelClass}>Additional Logistics Notes</label>
        <textarea
          className={inputClass}
          rows={4}
          placeholder="Mention specific certifications or shipping terms (FOB, CIF)..."
          {...register("message")}
        />
      </div>

      <div className="flex items-start gap-sm pt-sm">
        <input id="consent" type="checkbox" className="mt-1 rounded border-charcoal/30 text-terracotta focus:ring-terracotta" {...register("consent")} />
        <label htmlFor="consent" className="text-label-sm text-charcoal/70">
          I agree to BV Holdings&apos; Privacy Policy and Terms of Export. I understand a Trade Representative will
          contact me at the provided email.
        </label>
      </div>
      {errors.consent && <p className="text-label-sm text-terracotta">{errors.consent.message}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-sm rounded-lg bg-amber px-xl py-md text-label-sm font-bold uppercase tracking-widest text-charcoal transition-all duration-200 hover-glow active:scale-95 disabled:opacity-60 md:w-auto"
      >
        {isSubmitting ? "Submitting..." : "Submit Quote Request"}
        <Send className="h-4 w-4" />
      </button>

      {status === "success" && (
        <p className="text-label-sm text-sustainableGreen">Your request was submitted successfully.</p>
      )}
      {status === "error" && <p className="text-label-sm text-terracotta">Something went wrong. Try again.</p>}
    </form>
  );
}
