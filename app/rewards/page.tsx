import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowLeft, ArrowRight, Check, Crown, MessageCircle, ShieldCheck, Sparkles, Users, Building2 } from "lucide-react"

const WHATSAPP = "https://wa.me/18762588333"

const packages = [
  {
    name: "BAC Essential Care",
    audience: "For your everyday vehicle-care routine",
    sedan: "J$5,500",
    larger: "J$7,000",
    icon: ShieldCheck,
    featured: false,
    benefits: [
      "Convenient vehicle drop-off service",
      "One complimentary diagnostic scan",
    ],
    note: "Monthly membership. Larger-vehicle rate applies to 7-seaters and larger vehicles.",
  },
  {
    name: "BAC Premium",
    audience: "For drivers who want an added level of care",
    sedan: "J$14,500",
    larger: "J$16,500",
    icon: Crown,
    featured: true,
    benefits: [
      "Includes BAC Essential Care benefits",
      "One complimentary seat shampoo service (J$4,000 value)",
    ],
    note: "Monthly membership. Larger-vehicle rate applies to 7-seaters and larger vehicles.",
  },
  {
    name: "BAC Unlimited",
    audience: "For drivers who want more flexibility",
    sedan: "J$24,000",
    larger: "J$29,000",
    icon: Sparkles,
    featured: false,
    benefits: [
      "Includes BAC Premium benefits",
      "Unlimited outside washes each month",
    ],
    note: "Monthly membership. Larger-vehicle rate applies to 7-seaters and larger vehicles.",
  },
  {
    name: "BAC Family & Friends Pass",
    audience: "Bring your household vehicles into the BAC family",
    sedan: "J$14,000",
    larger: "J$14,000",
    icon: Users,
    featured: false,
    benefits: [
      "Register up to 3 additional vehicles (5 vehicles total)",
      "Each additional member adds 3 credits to the plan",
      "One complimentary air-vent steam treatment per vehicle, per month",
      "Additional family member: J$4,000 each",
    ],
    note: "The listed monthly price applies to sedans and 7-seaters.",
  },
  {
    name: "BAC Corporate Fleet Care",
    audience: "For businesses managing multiple vehicles",
    sedan: "J$14,000",
    larger: null,
    icon: Building2,
    featured: false,
    benefits: [
      "A membership option for corporate fleet care",
      "Contact BAC to discuss your fleet and service requirements",
    ],
    note: "Monthly membership. Confirm fleet size, vehicle mix and service inclusions with our team.",
  },
]

function whatsappLink(packageName: string) {
  return `${WHATSAPP}?text=${encodeURIComponent(`Hi Bennett's AutoCare, I’m interested in the ${packageName} membership. Please share the details and registration process.`)}`
}

export default function RewardsPage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <section className="relative overflow-hidden border-b border-white/10 bg-[linear-gradient(120deg,#031333_0%,#061b49_48%,#0d4db5_100%)]">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-14">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-blue-100/80 transition-colors hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
          <div className="mt-12 max-w-3xl">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-primary">
              <Crown className="h-4 w-4" /> Bennett’s AutoCare Memberships
            </p>
            <h1 className="mt-5 font-display text-4xl font-bold uppercase leading-[0.98] tracking-tight sm:text-6xl">
              Welcome to <span className="text-primary">BAC Rewards.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-blue-100/80 sm:text-lg">
              A better way to care for your vehicle. Choose the membership that
              fits your lifestyle, your family or your business.
            </p>
            <a href="#membership-options" className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5">
              Explore memberships <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-12 grid max-w-3xl gap-3 sm:grid-cols-3">
            {[
              ["5", "Membership options"],
              ["Personal", "Family and individual care"],
              ["Business", "Fleet membership option"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="font-display text-2xl font-bold text-primary">{value}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-blue-100/70">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="membership-options" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Find your fit</p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase sm:text-4xl">Choose your BAC membership</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Monthly membership pricing is shown in Jamaican dollars. Contact our team
            to confirm eligibility, service scheduling and membership terms before signing up.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {packages.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.name} className={`relative flex flex-col rounded-xl border p-6 ${item.featured ? "border-primary bg-primary/[0.07] shadow-[0_20px_60px_rgba(0,0,0,0.22)]" : "border-border bg-card/70"}`}>
                {item.featured && <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-primary-foreground">Popular choice</span>}
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold uppercase">{item.name}</h3>
                <p className="mt-2 min-h-10 text-sm text-muted-foreground">{item.audience}</p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-background/70 p-3">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{item.name.includes("Family") ? "Monthly" : item.name.includes("Corporate") ? "Monthly" : "Sedan / standard SUV"}</p>
                    <p className="mt-1 font-display text-xl font-bold text-primary">{item.sedan}</p>
                  </div>
                  <div className="rounded-lg bg-background/70 p-3">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{item.larger ? (item.name.includes("Family") ? "7-seater rate" : "7-seater / larger") : "Fleet pricing"}</p>
                    <p className="mt-1 font-display text-xl font-bold">{item.larger ?? "Enquire"}</p>
                  </div>
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {item.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-2.5 text-sm leading-relaxed">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-foreground/85">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">{item.note}</p>
                <a href={whatsappLink(item.name)} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-4 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:-translate-y-0.5">
                  <MessageCircle className="h-4 w-4" /> Enquire about this plan
                </a>
              </article>
            )
          })}
        </div>
      </section>

      <section className="border-y border-border bg-card/40">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Need a hand choosing?</p>
            <h2 className="mt-2 font-display text-2xl font-bold uppercase">Let’s find the right plan for your vehicle.</h2>
            <p className="mt-2 text-sm text-muted-foreground">Chat with the Bennett’s AutoCare team about membership details and registration.</p>
          </div>
          <a href={`${WHATSAPP}?text=${encodeURIComponent("Hi Bennett's AutoCare, I’d like help choosing a BAC Rewards membership.")}`} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-sm border border-primary/50 px-6 py-3 text-sm font-bold uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
            WhatsApp BAC <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
