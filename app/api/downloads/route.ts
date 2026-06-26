import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { DOCUMENTS, type DocumentKey } from "@/lib/documents";

const downloadRequestSchema = z.object({
  documentKey: z.string().refine((key): key is DocumentKey => key in DOCUMENTS, "Unknown document"),
  visitorEmail: z.string().email().optional(),
});

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = downloadRequestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const { documentKey, visitorEmail } = parsed.data;
  const document = DOCUMENTS[documentKey];

  if (!document.url) {
    return NextResponse.json({ error: "This document is not yet available" }, { status: 404 });
  }

  try {
    await prisma.documentDownload.create({
      data: {
        documentKey,
        visitorEmail,
        userAgent: request.headers.get("user-agent") ?? undefined,
        country: request.headers.get("x-vercel-ip-country") ?? undefined,
      },
    });
  } catch (error) {
    console.error("Failed to log document download", error);
  }

  return NextResponse.json({ success: true, url: document.url, filename: document.filename }, { status: 200 });
}
