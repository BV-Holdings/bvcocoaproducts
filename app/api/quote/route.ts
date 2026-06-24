import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { createBrevoTransport } from "@/lib/email";

const quoteRequestSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  contactName: z.string().min(1, "Contact name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  country: z.string().min(1, "Country is required"),
  product: z.string().min(1, "Product is required"),
  industry: z.string().min(1, "Industry is required"),
  estimatedVolume: z.string().min(1, "Estimated volume is required"),
  message: z.string().optional(),
});

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = quoteRequestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const data = parsed.data;

  try {
    const quoteRequest = await prisma.quoteRequest.create({ data });

    try {
      const transport = createBrevoTransport();
      await transport.sendMail({
        from: process.env.BREVO_FROM_EMAIL,
        to: process.env.CONTACT_RECIPIENT_EMAIL,
        replyTo: data.email,
        subject: `New Quote Request — ${data.companyName}`,
        text: [
          `Company: ${data.companyName}`,
          `Contact: ${data.contactName}`,
          `Email: ${data.email}`,
          `Phone: ${data.phone ?? "—"}`,
          `Country: ${data.country}`,
          `Product: ${data.product}`,
          `Industry: ${data.industry}`,
          `Estimated Volume: ${data.estimatedVolume}`,
          `Message: ${data.message ?? "—"}`,
        ].join("\n"),
      });
    } catch (emailError) {
      console.error("Failed to send quote notification email", emailError);
    }

    return NextResponse.json({ success: true, id: quoteRequest.id }, { status: 200 });
  } catch (error) {
    console.error("Failed to create quote request", error);
    return NextResponse.json({ error: "Failed to submit quote request" }, { status: 500 });
  }
}
