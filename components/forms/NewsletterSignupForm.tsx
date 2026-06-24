"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";

// TODO: replace with Stitch design — Newsletter signup form
const newsletterSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  name: z.string().optional(),
});

type NewsletterValues = z.infer<typeof newsletterSchema>;

export interface NewsletterSignupFormProps {
  source?: string;
}

export function NewsletterSignupForm({ source }: NewsletterSignupFormProps) {
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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 sm:flex-row">
      <div className="flex-1">
        <input
          type="email"
          placeholder="you@company.com"
          className="w-full rounded-brand border border-softSand px-4 py-2"
          {...register("email")}
        />
        {errors.email && <p className="mt-1 text-sm text-terracotta">{errors.email.message}</p>}
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Subscribe"}
      </Button>
      {status === "success" && <p className="text-sm text-sustainableGreen">Subscribed successfully.</p>}
      {status === "error" && <p className="text-sm text-terracotta">Something went wrong. Try again.</p>}
    </form>
  );
}
