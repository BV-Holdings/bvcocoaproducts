"use client";

import { useState } from "react";
import * as Toast from "@radix-ui/react-toast";
import { Download, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { DOCUMENTS, type DocumentKey } from "@/lib/documents";

export interface DownloadButtonProps {
  documentKey: DocumentKey;
  label?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}

const variantClasses: Record<NonNullable<DownloadButtonProps["variant"]>, string> = {
  primary: "bg-amber text-charcoal hover:opacity-90",
  secondary: "bg-cocoaBrown text-warmCream hover:bg-terracotta",
  ghost: "border border-charcoal/20 bg-transparent text-cocoaBrown hover:border-terracotta",
};

export function DownloadButton({ documentKey, label, variant = "primary", className }: DownloadButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const documentEntry = DOCUMENTS[documentKey];
  const isAvailable = Boolean(documentEntry.url);

  const handleClick = async () => {
    if (!isAvailable || isLoading) return;
    setIsLoading(true);

    try {
      const response = await fetch("/api/downloads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ documentKey }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Download failed");
      }

      const data = await response.json();
      window.open(data.url, "_blank", "noopener,noreferrer");
    } catch (error) {
      setToastMessage(error instanceof Error ? error.message : "Something went wrong. Try again.");
      setToastOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Toast.Provider swipeDirection="right">
      <button
        type="button"
        onClick={handleClick}
        disabled={!isAvailable || isLoading}
        className={cn(
          "flex items-center justify-center gap-sm rounded-lg px-lg py-sm text-label-sm font-label-sm transition-all disabled:cursor-not-allowed disabled:opacity-50",
          variantClasses[variant],
          className,
        )}
      >
        {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
        {isLoading ? "Preparing..." : isAvailable ? (label ?? "Download PDF") : "Coming Soon"}
      </button>

      <Toast.Root
        open={toastOpen}
        onOpenChange={setToastOpen}
        duration={4000}
        className="fixed bottom-6 right-6 z-[100] rounded-lg bg-charcoal px-md py-sm text-body-md text-warmCream shadow-xl data-[state=open]:animate-in data-[state=closed]:animate-out"
      >
        <Toast.Title className="font-bold text-terracotta">Download failed</Toast.Title>
        <Toast.Description>{toastMessage}</Toast.Description>
      </Toast.Root>
      <Toast.Viewport />
    </Toast.Provider>
  );
}
