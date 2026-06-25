import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { sendTransactionalEmail } from "@/lib/brevo";
import { quoteConfirmationHTML, QUOTE_CONFIRMATION_SUBJECT } from "@/lib/emailTemplates";

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

    const quoteTemplateId = process.env.BREVO_QUOTE_TEMPLATE_ID
      ? Number(process.env.BREVO_QUOTE_TEMPLATE_ID)
      : undefined;
    const internalTemplateId = process.env.BREVO_INTERNAL_QUOTE_TEMPLATE_ID
      ? Number(process.env.BREVO_INTERNAL_QUOTE_TEMPLATE_ID)
      : undefined;

    // Email 1: confirmation to the buyer.
    try {
      await sendTransactionalEmail({
        to: { email: data.email, name: data.contactName },
        templateId: quoteTemplateId,
        params: {
          CONTACT_NAME: data.contactName,
          COMPANY_NAME: data.companyName,
          PRODUCT: data.product,
          INDUSTRY: data.industry,
          VOLUME: data.estimatedVolume,
          COUNTRY: data.country,
        },
        ...(quoteTemplateId
          ? {}
          : {
              subject: QUOTE_CONFIRMATION_SUBJECT,
              htmlContent: quoteConfirmationHTML({
                contactName: data.contactName,
                companyName: data.companyName,
                product: data.product,
                volume: data.estimatedVolume,
              }),
            }),
      });
    } catch (emailError) {
      console.error("Failed to send quote confirmation email", emailError);
    }

    // Email 2: internal notification to the trade desk.
    try {
      const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL;
      if (recipientEmail) {
        await sendTransactionalEmail({
          to: { email: recipientEmail },
          templateId: internalTemplateId,
          params: {
            CONTACT_NAME: data.contactName,
            COMPANY_NAME: data.companyName,
            EMAIL: data.email,
            PRODUCT: data.product,
            INDUSTRY: data.industry,
            VOLUME: data.estimatedVolume,
            COUNTRY: data.country,
            MESSAGE: data.message || "No message provided",
          },
          ...(internalTemplateId
            ? {}
            : {
                subject: `New Quote Request — ${data.companyName}`,
                htmlContent: `<p>New quote request from <strong>${data.contactName}</strong> at <strong>${data.companyName}</strong> (${data.email}).</p>
<p>Product: ${data.product}<br/>Industry: ${data.industry}<br/>Volume: ${data.estimatedVolume}<br/>Country: ${data.country}</p>
<p>Message: ${data.message || "No message provided"}</p>`,
              }),
        });
      }
    } catch (emailError) {
      console.error("Failed to send internal quote notification email", emailError);
    }

    return NextResponse.json({ success: true, id: quoteRequest.id }, { status: 200 });
  } catch (error) {
    console.error("Failed to create quote request", error);
    return NextResponse.json({ error: "Failed to submit quote request" }, { status: 500 });
  }
}
