"use client"

import { useState } from "react"
import { Droplets, Sparkles, Wind, Wrench, Clock } from "lucide-react"
import { services, CATEGORIES, SETMORE_URL, type ServiceCategory } from "@/lib/services"

const CATEGORY_ICON: Record<ServiceCategory, typeof Droplets> = {
  Cleaning: Droplets,
  Detailing: Sparkles,
  Steam: Wind,
  Diagnostics: Wrench,
}

type Filter = "All" | ServiceCategory

const FILTERS: Filter[] = ["All", ...CATEGORIES]

export function ServicesSection() {
  const [filter, setFilter] = useState<Filter>("All")

  const visible = services.filter((s) => filter === "All" || s.category === filter)

  return (
    <section id="services" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-primary">Service Menu</p>
          <h2 className="text-balance font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
            What we do
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          All prices in Jamaican dollars. Pick a category to narrow things down, then book the service you need.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter services by category">
        {FILTERS.map((f) => {
          const active = filter === f
          return (
            <button
              key={f}
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(f)}
              className={`rounded-sm border px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
                active
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          )
        })}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((s) => {
          const Icon = CATEGORY_ICON[s.category]
          return (
            <article
              key={s.name}
              className="group flex flex-col rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/60"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-secondary text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {s.category}
                </span>
              </div>

              <h3 className="mt-4 font-display text-lg font-semibold leading-tight">{s.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.description}</p>

              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <span className="font-display text-xl font-bold text-primary">{s.price}</span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {s.duration}
                </span>
              </div>

              <a
                href={SETMORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-sm bg-primary/10 px-4 py-2.5 text-sm font-semibold uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Book This Service
              </a>
            </article>
          )
        })}
      </div>
    </section>
  )
}
