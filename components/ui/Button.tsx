import { type ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// TODO: replace with Stitch design — Button primitive
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-brand text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        primary: "bg-amber text-charcoal hover:bg-terracotta hover:text-warmCream",
        secondary: "bg-cocoaBrown text-warmCream hover:bg-charcoal",
        outline: "border border-cocoaBrown text-cocoaBrown hover:bg-softSand",
      },
      size: {
        sm: "px-3 py-1.5",
        md: "px-4 py-2",
        lg: "px-6 py-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
