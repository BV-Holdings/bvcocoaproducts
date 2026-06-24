# BV Holdings

B2B export website for BV Holdings, a Cameroon-based exporter of cocoa byproducts (cocoa shells and related
products) serving the animal feed, horticulture, food ingredient, cosmetics, biomass, and packaging industries.

## Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS, configured to match the Google Stitch design export (brand colors, fonts, radius)
- **Database:** PostgreSQL on Supabase, accessed via Prisma
- **Forms:** react-hook-form + zod, posting to internal API routes
- **Email:** Brevo SMTP via Nodemailer, for quote request notifications

## Setup

1. Install dependencies:
   ```
   npm install
   ```
2. Fill in `.env.local` (see Environment Variables below).
3. Generate the Prisma client and push the schema to Supabase:
   ```
   npm run prisma:generate
   npm run prisma:push
   ```
4. Seed reference data (products and industries):
   ```
   npm run prisma:seed
   ```
5. Run the dev server:
   ```
   npm run dev
   ```

## Environment Variables

| Variable | Description |
| --- | --- |
| `DATABASE_URL` | Supabase pooled Postgres connection string (used by Prisma at runtime) |
| `DIRECT_URL` | Supabase direct Postgres connection string (used by Prisma for migrations) |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon/public key (browser-safe) |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server-only, never expose to the client) |
| `BREVO_SMTP_HOST` | Brevo SMTP host |
| `BREVO_SMTP_PORT` | Brevo SMTP port |
| `BREVO_SMTP_USER` | Brevo SMTP username |
| `BREVO_SMTP_PASS` | Brevo SMTP password |
| `BREVO_FROM_EMAIL` | "From" address used when sending quote notification emails |
| `CONTACT_RECIPIENT_EMAIL` | Internal address that receives quote request notifications |
| `NEXT_PUBLIC_SITE_URL` | Public site URL, used for SEO metadata and absolute links |

## Project Structure

- `app/` — routes (App Router), including the `(pages)` route group for static marketing pages and `api/` for
  the quote and newsletter endpoints.
- `components/layout/` — Header, Footer, Navigation.
- `components/sections/` — reusable homepage/marketing sections (Hero, StatStrip, IndustriesGrid, etc.).
- `components/forms/` — QuoteRequestForm, NewsletterSignupForm, ContactForm.
- `components/ui/` — shared UI primitives (e.g. Button), styled with Tailwind + class-variance-authority.
- `lib/` — Prisma client singleton, Supabase browser/server clients, email transport, utils.
- `prisma/` — schema and seed script.
- `types/` — shared TypeScript interfaces for form data and content models.

## Integrating Stitch Designs

Every section and page component currently renders a labeled placeholder `div` with a `TODO` comment pointing to
the corresponding section in the Stitch design prompt. To integrate a Stitch export:

1. Drop the exported Tailwind markup into the matching component in `components/sections/`, `components/layout/`,
   or the relevant `app/(pages)/*/page.tsx` file.
2. Keep using the brand Tailwind tokens already configured in `tailwind.config.ts`
   (`cocoaBrown`, `terracotta`, `amber`, `sustainableGreen`, `warmCream`, `softSand`, `charcoal`, `rounded-brand`)
   so Stitch output stays visually consistent even if its raw export uses literal hex/arbitrary values — swap
   those for the brand tokens as you paste in markup.
  3. Preserve each component's existing TypeScript props interface where the placeholder already wires in dynamic
   data (e.g. `IndustriesGrid`, product/industry detail pages) so Stitch markup keeps reading from Prisma data
   rather than being hardcoded.
4. Remove the placeholder `TODO` comment and dashed-border styling once real markup is in place.
