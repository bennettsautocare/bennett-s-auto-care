"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Droplets,
  Sparkles,
  Wind,
  Wrench,
  Clock,
} from "lucide-react"

import {
  services,
  CATEGORIES,
  SETMORE_URL,
  type ServiceCategory,
} from "@/lib/services"

const CATEGORY_ICON: Record<
  ServiceCategory,
  typeof Droplets
> = {
  Cleaning: Droplets,
  Detailing: Sparkles,
  Steam: Wind,
  Diagnostics: Wrench,
}

type Filter = "All" | ServiceCategory

const FILTERS: Filter[] = ["All", ...CATEGORIES]

export function ServicesSection() {
  const [filter, setFilter] = useState<Filter>("All")

  const visible = services.filter(
    (service) =>
      filter === "All" || service.category === filter,
  )

  return (
    <section
      id="services"
      className="scroll-mt-20 px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Bennetts Auto Care
            </p>

            <h2 className="text-balance font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
              Our Services
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Professional cleaning, detailing, steam treatment and
            vehicle diagnostic services. All prices are in Jamaican
            dollars.
          </p>
        </div>

        {/* CATEGORY FILTERS */}
        <div
          className="mt-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter services by category"
        >
          {FILTERS.map((filterName) => {
            const active = filter === filterName

            return (
              <button
                key={filterName}
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(filterName)}
                className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wide transition-all ${
                  active
                    ? "border-primary bg-primary text-primary-foreground shadow-lg"
                    : "border-border bg-secondary text-muted-foreground hover:border-primary/60 hover:text-white"
                }`}
              >
                {filterName}
              </button>
            )
          })}
        </div>

        {/* SERVICE CARDS */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((service) => {
            const Icon = CATEGORY_ICON[service.category]

            return (
              <article
                key={service.name}
                className="group flex overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:border-primary/60 hover:shadow-2xl"
              >
                <div className="flex w-full flex-col">

                  {/* SERVICE IMAGE */}
                  <div className="relative h-52 w-full overflow-hidden bg-[#031333]">
                    <Image
                      src={service.image}
                      alt={`${service.name} at Bennetts Auto Care`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* DARK GRADIENT */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#031333] via-transparent to-transparent" />

                    {/* CATEGORY */}
                    <div className="absolute bottom-3 left-4 flex items-center gap-2">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#ffc400] text-[#061b49] shadow-lg">
                        <Icon
                          className="h-4 w-4"
                          aria-hidden="true"
                        />
                      </span>

                      <span className="rounded-full bg-[#061b49]/85 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-1 flex-col p-5">

                    <h3 className="font-display text-xl font-bold leading-tight text-white">
                      {service.name}
                    </h3>

                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>

                    {/* PRICE / TIME */}
                    <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                          From
                        </span>

                        <span className="font-display text-2xl font-bold text-primary">
                          {service.price}
                        </span>
                      </div>

                      <span className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
                        <Clock
                          className="h-3.5 w-3.5"
                          aria-hidden="true"
                        />

                        {service.duration}
                      </span>
                    </div>

                    {/* BOOK BUTTON */}
                    <a
                      href={SETMORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-[#ffd12a] hover:shadow-lg"
                    >
                      Book This Service
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* SERVICE ADVISOR */}
        <div className="mt-10 rounded-2xl border border-primary/20 bg-secondary/40 p-5 text-center">
          <p className="text-sm text-muted-foreground">
            Not sure which service your vehicle needs?
            <span className="font-semibold text-white">
              {" "}
              Ask our BAC Service Advisor.
            </span>
          </p>
        </div>

      </div>
    </section>
  )
}