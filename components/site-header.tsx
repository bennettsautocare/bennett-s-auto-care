import Link from "next/link"
import Image from "next/image"
import { SETMORE_URL } from "@/lib/services"

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Loyalty", href: "#loyalty" },
  { label: "Visit", href: "#visit" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="#top" className="flex items-center">
          <Image
            src="/BAC logo.png"
            alt="Bennetts Auto Care"
            width={190}
            height={65}
            priority
            className="h-12 w-auto object-contain sm:h-14"
          />
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={SETMORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm bg-primary px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          Book Now
        </a>
      </div>
    </header>
  )
}