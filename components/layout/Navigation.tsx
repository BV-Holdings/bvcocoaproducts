"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationProps {
  links?: NavLink[];
  className?: string;
  linkClassName?: string;
  onLinkClick?: () => void;
}

const defaultLinks: NavLink[] = [
  { label: "Our Origin", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Contact", href: "/contact" },
];

export function Navigation({ links = defaultLinks, className, linkClassName, onLinkClick }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav className={cn("flex items-center gap-lg", className)}>
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onLinkClick}
            className={cn(
              "label-sm text-label-sm font-label-sm transition-colors duration-200",
              isActive
                ? "border-b-2 border-terracotta pb-1 font-bold text-terracotta"
                : "nav-underline-expand text-charcoal/70 hover:text-terracotta",
              linkClassName,
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
