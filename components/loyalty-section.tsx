import Link from "next/link"
import { ArrowRight, CheckCircle2, Crown, Gift, Sparkles } from "lucide-react"

const HIGHLIGHTS = [
  "Membership options for everyday drivers, families and fleets",
  "Member benefits designed to make vehicle care easier",
  "Dedicated support from the Bennett’s AutoCare team",
]

export function LoyaltySection() {
  return (
    <section id="loyalty" className="scroll-mt-20 border-y border-border bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            <Crown className="h-4 w-4" aria-hidden="true" />
            Introducing BAC Rewards
          </p>
          <h2 className="max-w-xl text-balance font-display text-3xl font-bold uppercase tracking-tight sm:text-5xl">
            More care. More value. More reasons to ride with BAC.
          </h2>
          <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Keep your vehicle looking its best with a BAC Rewards membership.
            Explore membership options for individual vehicles, larger vehicles,
            families and corporate fleets.
          </p>
          <ul className="mt-7 space-y-3">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm sm:text-base">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/rewards"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Explore BAC Rewards <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-[#0d4db5] via-[#082862] to-[#031333] p-7 shadow-2xl sm:p-10">
          <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-primary/15 blur-3xl" />
          <div className="relative">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Gift className="h-7 w-7" aria-hidden="true" />
            </div>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-primary">The BAC difference</p>
            <h3 className="mt-2 font-display text-3xl font-bold uppercase sm:text-4xl">
              Your vehicle deserves VIP treatment.
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-blue-100/80">
              Choose a membership that fits your vehicle and your routine.
              Our team can help you understand the options and get started.
            </p>
            <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-primary">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Drive in. Shine out. Stay rewarded.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
