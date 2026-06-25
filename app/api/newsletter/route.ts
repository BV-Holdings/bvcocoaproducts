import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { addContactToList, sendTransactionalEmail } from "@/lib/brevo";
import { newsletterWelcomeHTML, NEWSLETTER_WELCOME_SUBJECT } from "@/lib/emailTemplates";

const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().optional(),
  source: z.string().optional(),
});

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = newsletterSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const { email, name, source } = parsed.data;

  try {
    await prisma.newsletterSubscriber.upsert({
      where: { email },
      update: { name, source },
      create: { email, name, source },
    });

    const listId = process.env.BREVO_NEWSLETTER_LIST_ID ? Number(process.env.BREVO_NEWSLETTER_LIST_ID) : undefined;

    // Step 1: sync the subscriber into Brevo so campaigns can be sent from the dashboard.
    try {
      if (listId) {
        await addContactToList(email, name, listId);
      }
    } catch (contactError) {
      console.error("Failed to add contact to Brevo list", contactError);
    }

    // Step 2: send the welcome email.
    try {
      const templateId = process.env.BREVO_NEWSLETTER_TEMPLATE_ID
        ? Number(process.env.BREVO_NEWSLETTER_TEMPLATE_ID)
        : undefined;

      await sendTransactionalEmail({
        to: { email, name },
        templateId,
        params: {
          NAME: name || "there",
          NEWSLETTER_NAME: "West Africa Trade Digest",
        },
        ...(templateId
          ? {}
          : {
              subject: NEWSLETTER_WELCOME_SUBJECT,
              htmlContent: newsletterWelcomeHTML({ name: name || "there" }),
            }),
      });
    } catch (emailError) {
      console.error("Failed to send newsletter welcome email", emailError);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Failed to upsert newsletter subscriber", error);
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
