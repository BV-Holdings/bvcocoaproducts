import { BrevoClient } from "@getbrevo/brevo";

const brevo = new BrevoClient({ apiKey: process.env.BREVO_API_KEY! });

export interface SendTransactionalEmailOptions {
  to: { email: string; name?: string };
  /** Brevo template ID. When omitted, htmlContent + subject are sent instead. */
  templateId?: number;
  /** Template variables (used whether sending via templateId or fallback htmlContent). */
  params?: Record<string, string>;
  /** Required when templateId is set and you want to override the template's own subject. Required (with htmlContent) when templateId is omitted. */
  subject?: string;
  /** Fallback HTML body, used only when templateId is not provided. */
  htmlContent?: string;
}

export async function sendTransactionalEmail({
  to,
  templateId,
  params,
  subject,
  htmlContent,
}: SendTransactionalEmailOptions) {
  if (!templateId && (!htmlContent || !subject)) {
    throw new Error("sendTransactionalEmail requires either a templateId or both htmlContent and subject");
  }

  return brevo.transactionalEmails.sendTransacEmail({
    to: [{ email: to.email, name: to.name }],
    sender: {
      email: process.env.BREVO_FROM_EMAIL!,
      name: process.env.BREVO_FROM_NAME,
    },
    ...(templateId
      ? { templateId, ...(params ? { params } : {}), ...(subject ? { subject } : {}) }
      : { subject: subject!, htmlContent: htmlContent!, ...(params ? { params } : {}) }),
  });
}

export async function addContactToList(email: string, name: string | undefined, listId: number) {
  return brevo.contacts.createContact({
    email,
    listIds: [listId],
    updateEnabled: true,
    ...(name ? { attributes: { FIRSTNAME: name } } : {}),
  });
}
