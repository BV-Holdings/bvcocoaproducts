import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { createBrevoTransport } from "@/lib/email";

const trackingInquirySchema = z.object({
  trackingId: z.string().min(1, "Tracking ID is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().optional(),
});

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = trackingInquirySchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const data = parsed.data;

  try {
    const inquiry = await prisma.trackingInquiry.create({ data });

    try {
      const transport = createBrevoTransport();
      await transport.sendMail({
        from: process.env.BREVO_FROM_EMAIL,
        to: process.env.CONTACT_RECIPIENT_EMAIL,
        replyTo: data.email,
        subject: `New Shipment Tracking Inquiry — ${data.trackingId}`,
        text: [
          `Tracking ID: ${data.trackingId}`,
          `Email: ${data.email}`,
          `Message: ${data.message ?? "—"}`,
        ].join("\n"),
      });
    } catch (emailError) {
      console.error("Failed to send tracking inquiry notification email", emailError);
    }

    return NextResponse.json({ success: true, id: inquiry.id }, { status: 200 });
  } catch (error) {
    console.error("Failed to create tracking inquiry", error);
    return NextResponse.json({ error: "Failed to submit tracking inquiry" }, { status: 500 });
  }
}
