export interface DocumentEntry {
  name: string;
  filename: string;
  /** Public Supabase Storage URL. Undefined until the file is actually uploaded. */
  url?: string;
  description: string;
  version?: string;
  updatedAt?: string;
}

const SUPABASE_DOCS_BASE = process.env.NEXT_PUBLIC_SUPABASE_URL
  ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/documents`
  : undefined;

export const DOCUMENTS = {
  specSheet: {
    name: "Cocoa Shells — Technical Specification Sheet",
    filename: "BV_Holdings_Cocoa_Shells_Spec_Sheet.pdf",
    url: SUPABASE_DOCS_BASE ? `${SUPABASE_DOCS_BASE}/spec-sheets/BV_Holdings_Cocoa_Shells_Spec_Sheet.pdf` : undefined,
    description:
      "Full technical parameters, microbiological limits, packaging options, and application guidance.",
    version: "1.0",
    updatedAt: "June 2026",
  },
  // TODO: upload this file to Supabase Storage (documents/spec-sheets/) and set its url once ready.
  coaTemplate: {
    name: "Certificate of Analysis — Template",
    filename: "CoA_Template_BV_Holdings.pdf",
    description: "Sample CoA showing all parameters tested per batch.",
  },
  // TODO: upload this file to Supabase Storage (documents/spec-sheets/) and set its url once ready.
  eudrStatement: {
    name: "EUDR Traceability Statement",
    filename: "EUDR_Compliance_Statement_BV_Holdings.pdf",
    description: "Our commitment and process for EU Deforestation Regulation compliance.",
  },
} satisfies Record<string, DocumentEntry>;

export type DocumentKey = keyof typeof DOCUMENTS;
