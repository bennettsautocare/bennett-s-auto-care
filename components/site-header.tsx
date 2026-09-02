import Link from "next/link"
import { SETMORE_URL } from "@/lib/services"

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Loyalty", href: "#loyalty" },
  { label: "Visit", href: "#visit" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-primary font-display text-lg font-bold text-primary-foreground">
            B
          </span>
          <span className="font-display text-lg font-semibold uppercase tracking-wide">
            Bennetts <span className="text-primary">Auto Care</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={SETMORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm bg-primary px-4 py-2 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          Book Now
        </a>
      </div>
    </header>
  )
}
