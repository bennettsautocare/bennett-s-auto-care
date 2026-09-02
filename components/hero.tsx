import Image from "next/image"
import { SETMORE_URL, BUSINESS_INFO } from "@/lib/services"
import heroImage from "@/public/hero-detailing.png"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={heroImage || "/placeholder.svg"}
          alt="A glossy black car being professionally detailed at Bennetts Auto Care"
          fill
          priority
          placeholder="blur"
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col justify-center px-4 py-24 sm:px-6 md:py-36">
        <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Montego Bay, Jamaica
        </span>

        <h1 className="max-w-3xl text-balance font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Your car, treated like <span className="text-primary">it should be</span>
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Professional cleaning, detailing, steam treatments and vehicle diagnostics. From a quick wash to a full
          interior revival, {BUSINESS_INFO.short} keeps your vehicle looking and running its best.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={SETMORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Book an Appointment
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-sm border border-border bg-card/40 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:bg-card"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  )
}
