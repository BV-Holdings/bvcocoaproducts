const TRADE_DESK_EMAIL = "info@bvcocoaproducts.com";
const SITE_URL = "https://bvcocoaproducts.com";

export const QUOTE_CONFIRMATION_SUBJECT = "We've received your quote request — BV Holdings";
export const NEWSLETTER_WELCOME_SUBJECT = "Welcome to West Africa Trade Digest 🌍";

function emailShell(bodyHtml: string): string {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body style="margin:0;padding:0;background-color:#FAF6F0;font-family:'Work Sans',Helvetica,Arial,sans-serif;color:#2A1F18;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAF6F0;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#ffffff;border-radius:12px;overflow:hidden;">
            <tr>
              <td style="background-color:#3D2B1F;padding:24px 32px;">
                <span style="font-size:20px;font-weight:700;color:#D4A24C;">BV Holdings</span>
              </td>
            </tr>
            <tr>
              <td style="padding:32px;">
                ${bodyHtml}
              </td>
            </tr>
            <tr>
              <td style="background-color:#EDE4D8;padding:20px 32px;font-size:12px;color:#2A1F18;">
                BV Holdings, Yaoundé, Cameroon<br />
                <a href="${SITE_URL}" style="color:#B5651D;text-decoration:none;">${SITE_URL.replace("https://", "")}</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export interface QuoteConfirmationParams {
  contactName: string;
  companyName: string;
  product: string;
  volume: string;
}

export function quoteConfirmationHTML(params: QuoteConfirmationParams): string {
  return emailShell(`
    <h1 style="margin:0 0 16px;font-size:22px;color:#3D2B1F;">Thank you, ${params.contactName}.</h1>
    <p style="margin:0 0 16px;font-size:15px;line-height:1.6;">
      We've received your quote request on behalf of <strong>${params.companyName}</strong> and our trade
      desk is already reviewing the details below.
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAF6F0;border-radius:8px;margin:0 0 16px;">
      <tr>
        <td style="padding:16px 20px;font-size:14px;">
          <strong style="color:#B5651D;">Product:</strong> ${params.product}<br />
          <strong style="color:#B5651D;">Estimated Volume:</strong> ${params.volume}
        </td>
      </tr>
    </table>
    <p style="margin:0 0 16px;font-size:15px;line-height:1.6;">
      You can expect to hear back from a BV Holdings trade representative within
      <strong>48 hours</strong> with pricing and logistics details.
    </p>
    <p style="margin:0;font-size:15px;line-height:1.6;">
      Have an urgent question in the meantime? Reach our trade desk directly at
      <a href="mailto:${TRADE_DESK_EMAIL}" style="color:#B5651D;text-decoration:none;">${TRADE_DESK_EMAIL}</a>.
    </p>
  `);
}

export interface NewsletterWelcomeParams {
  name: string;
}

export function newsletterWelcomeHTML(params: NewsletterWelcomeParams): string {
  return emailShell(`
    <h1 style="margin:0 0 16px;font-size:22px;color:#3D2B1F;">Welcome, ${params.name}.</h1>
    <p style="margin:0 0 16px;font-size:15px;line-height:1.6;">
      You're now subscribed to the <strong>West Africa Trade Digest</strong> — direct market
      intelligence from the heart of the cocoa supply chain, covering pricing trends, logistics
      updates, and sustainability breakthroughs across the byproduct trade.
    </p>
    <p style="margin:0 0 16px;font-size:15px;line-height:1.6;">
      <a href="${SITE_URL}/newsletter" style="color:#B5651D;text-decoration:none;font-weight:600;">Read the latest issue &rarr;</a>
    </p>
    <p style="margin:0 0 16px;font-size:15px;line-height:1.6;">
      Expect a new digest in your inbox roughly once a month — no spam, just the updates that
      matter to global cocoa byproduct traders.
    </p>
    <p style="margin:0;font-size:12px;color:#4f453f;">
      Didn't mean to subscribe? <a href="${SITE_URL}/unsubscribe" style="color:#B5651D;">Unsubscribe here</a>.
    </p>
  `);
}
