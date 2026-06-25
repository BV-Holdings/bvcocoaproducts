"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// TODO: replace with Stitch design — Newsletter signup form
const newsletterSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  name: z.string().optional(),
});

type NewsletterValues = z.infer<typeof newsletterSchema>;

export interface NewsletterSignupFormProps {
  source?: string;
  buttonLabel?: string;
  placeholder?: string;
}

export function NewsletterSignupForm({
  source,
  buttonLabel = "Subscribe",
  placeholder = "Your corporate email",
}: NewsletterSignupFormProps) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (values: NewsletterValues) => {
    setStatus("idle");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, source }),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-md">
      <div className="flex-1">
        <input
          type="email"
          placeholder={placeholder}
          className="w-full rounded-lg border border-charcoal/20 bg-warmCream px-md py-sm text-body-md text-charcoal outline-none transition-colors focus:border-transparent focus:ring-2 focus:ring-terracotta"
          {...register("email")}
        />
        {errors.email && <p className="mt-1 text-label-sm text-terracotta">{errors.email.message}</p>}
        {status === "success" && <p className="mt-1 text-label-sm text-sustainableGreen">Subscribed successfully.</p>}
        {status === "error" && <p className="mt-1 text-label-sm text-terracotta">Something went wrong. Try again.</p>}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-lg bg-cocoaBrown px-lg py-sm text-label-sm font-label-sm text-warmCream transition-colors hover:bg-terracotta disabled:opacity-60"
      >
        {isSubmitting ? "Submitting..." : buttonLabel}
      </button>
    </form>
  );
}
