import Link from "next/link";

// TODO: replace with Stitch design — Navigation (header nav links)
export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationProps {
  links?: NavLink[];
}

const defaultLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Quality", href: "/quality" },
  { label: "Buyers", href: "/buyers" },
  { label: "Contact", href: "/contact" },
];

export function Navigation({ links = defaultLinks }: NavigationProps) {
  return (
    <nav className="flex gap-6">
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="text-sm text-charcoal hover:text-terracotta">
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
