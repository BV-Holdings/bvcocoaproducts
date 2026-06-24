import Link from "next/link";
import { Navigation } from "@/components/layout/Navigation";

// TODO: replace with Stitch design — Header
export function Header() {
  return (
    <header className="border-b border-softSand bg-warmCream">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-xl text-cocoaBrown">
          BV Holdings
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
