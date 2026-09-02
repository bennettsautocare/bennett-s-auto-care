import { MapPin, Clock } from "lucide-react"
import { BUSINESS_INFO, SETMORE_URL } from "@/lib/services"

export function SiteFooter() {
  return (
    <footer id="visit" className="scroll-mt-20 border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-primary font-display text-lg font-bold text-primary-foreground">
              B
            </span>
            <span className="font-display text-lg font-semibold uppercase tracking-wide">Bennetts Auto Care</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Professional car cleaning, detailing, steam treatments and diagnostics in Montego Bay, Jamaica.
          </p>
          <a
            href={SETMORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Book Now
          </a>
        </div>

        <div>
          <h3 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-primary">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Location
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{BUSINESS_INFO.location}</p>
        </div>

        <div>
          <h3 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-primary">
            <Clock className="h-4 w-4" aria-hidden="true" />
            Hours
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {BUSINESS_INFO.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span className="text-muted-foreground">{h.day}</span>
                <span className="font-medium">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Bennetts Auto Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
