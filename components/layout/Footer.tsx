import Link from "next/link";
import { Globe, Mail, Share2 } from "lucide-react";

const tradeLinks = [
  { label: "Bulk Cocoa Shells", href: "/products" },
  { label: "Spec Sheets", href: "/quality" },
  { label: "Logistics Portfolio", href: "/buyers" },
];

const organizationLinks = [
  { label: "Our Origin", href: "/about" },
  { label: "Traceability", href: "/quality" },
  { label: "Sustainability", href: "/sustainability" },
];

export function Footer() {
  return (
    <footer className="bg-cocoaBrown py-xl text-warmCream/70">
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-lg px-gutter py-xl md:grid-cols-4">
        <div className="col-span-1">
          <div className="mb-lg text-headline-md font-headline-md text-amber">BV Holdings</div>
          <p className="mb-lg text-body-md">
            Sustainable cocoa byproduct excellence from West Africa to the global industrial supply chain.
          </p>
          <div className="flex gap-md">
            <Globe className="h-5 w-5 cursor-pointer hover:text-amber" />
            <Share2 className="h-5 w-5 cursor-pointer hover:text-amber" />
            <a href="mailto:info@bvcocoaproducts.com" aria-label="Email BV Holdings">
              <Mail className="h-5 w-5 cursor-pointer hover:text-amber" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-lg text-label-sm font-label-sm uppercase tracking-widest text-amber">Trade</h4>
          <ul className="space-y-md">
            {tradeLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-amber">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-lg text-label-sm font-label-sm uppercase tracking-widest text-amber">Organization</h4>
          <ul className="space-y-md">
            {organizationLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-amber">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-lg text-label-sm font-label-sm uppercase tracking-widest text-amber">Headquarters</h4>
          <p className="mb-md text-body-md">Douala Export Zone, Littoral Region, Cameroon</p>
          <p className="text-body-md">Contact: info@bvcocoaproducts.com</p>
          <Link
            href="/buyers"
            className="mt-lg inline-block rounded-lg border border-warmCream/30 px-md py-sm text-label-sm font-label-sm transition-all hover:bg-warmCream/10"
          >
            Global Trade Hubs
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-container-max border-t border-warmCream/10 px-gutter py-lg text-center text-label-sm">
        <p>© {new Date().getFullYear()} BV Holdings. Sustainable Cocoa Excellence.</p>
        <p className="mt-xs text-warmCream/50">
          Website designed and developed by{" "}
          <a
            href="https://gmaxdigitals.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-amber"
          >
            Gmax Digital
          </a>
        </p>
      </div>
    </footer>
  );
}
