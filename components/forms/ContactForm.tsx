"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";

// TODO: replace with Stitch design — Contact form.
// TODO: wire up to an /api/contact route once that endpoint is defined.
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email address"),
  message: z.string().min(1, "Message is required"),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (values: ContactValues) => {
    console.log("Contact form submitted", values);
    setStatus("success");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div>
        <input
          placeholder="Name"
          className="w-full rounded-brand border border-softSand px-4 py-2"
          {...register("name")}
        />
        {errors.name && <p className="mt-1 text-sm text-terracotta">{errors.name.message}</p>}
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
        <textarea
          placeholder="Message"
          rows={5}
          className="w-full rounded-brand border border-softSand px-4 py-2"
          {...register("message")}
        />
        {errors.message && <p className="mt-1 text-sm text-terracotta">{errors.message.message}</p>}
      </div>

      <div>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
        {status === "success" && <p className="mt-2 text-sm text-sustainableGreen">Message sent.</p>}
      </div>
    </form>
  );
}
