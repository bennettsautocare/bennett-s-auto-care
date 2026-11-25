import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowRight, Check, Crown, MessageCircle, ShieldCheck, Sparkles, Users, Building2 } from "lucide-react"
import { rewardPackages, rewardWhatsAppLink } from "@/lib/bac-rewards"

const icons = [ShieldCheck, Crown, Sparkles, Users, Building2]

export default function RewardsPage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <section className="relative overflow-hidden border-b border-white/10 bg-[linear-gradient(120deg,#031333_0%,#061b49_48%,#0d4db5_100%)]">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-14">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-blue-100/80 hover:text-primary">← Back to home</Link>
          <div className="mt-12 max-w-3xl">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-primary"><Crown className="h-4 w-4" /> Bennett’s AutoCare Memberships</p>
            <h1 className="mt-5 font-display text-4xl font-bold uppercase leading-[0.98] tracking-tight sm:text-6xl">Welcome to <span className="text-primary">BAC Rewards.</span></h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-blue-100/80 sm:text-lg">More Than a Wash. A Better Way to Care for Your Vehicle. Choose a membership for your vehicle, family or business.</p>
            <a href="#membership-options" className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-primary-foreground">Explore memberships <ArrowRight className="h-4 w-4" /></a>
          </div>
          <div className="mt-12 grid max-w-3xl gap-3 sm:grid-cols-3">
            {[["5","Membership options"],["Personal","Individual and family care"],["Business","Fleet membership option"]].map(([v,l]) => <div key={l} className="rounded-lg border border-white/10 bg-white/5 p-4"><p className="font-display text-2xl font-bold text-primary">{v}</p><p className="mt-1 text-xs uppercase tracking-wide text-blue-100/70">{l}</p></div>)}
          </div>
        </div>
      </section>

      <section id="membership-options" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Find your fit</p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase sm:text-4xl">Choose your BAC membership</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Monthly membership pricing is shown in Jamaican dollars. Select a plan to review its full inclusions and conditions.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {rewardPackages.map((item, index) => {
            const Icon = icons[index]
            return <article key={item.slug} className={`relative flex flex-col rounded-xl border p-6 ${item.featured ? "border-primary bg-primary/[0.07] shadow-[0_20px_60px_rgba(0,0,0,0.22)]" : "border-border bg-card/70"}`}>
              {item.featured && <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-primary-foreground">Featured plan</span>}
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-primary"><Icon className="h-5 w-5" /></div>
              <h3 className="mt-5 font-display text-2xl font-bold uppercase">{item.name}</h3>
              <p className="mt-2 min-h-10 text-sm text-muted-foreground">{item.audience}</p>
              <div className="mt-5 grid gap-2">
                {item.prices.map(p => <div key={p.label} className="flex items-center justify-between gap-3 rounded-lg bg-background/70 p-3"><span className="text-xs font-semibold text-muted-foreground">{p.label}</span><span className="font-display text-lg font-bold text-primary">{p.price}</span></div>)}
              </div>
              <ul className="mt-6 flex-1 space-y-3">{item.benefits.slice(0,4).map(b => <li key={b} className="flex gap-2.5 text-sm leading-relaxed"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span className="text-foreground/85">{b}</span></li>)}</ul>
              <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">{item.note ?? "See the full plan details for all inclusions."}</p>
              <Link href={`/rewards/${item.slug}`} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-4 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground">View plan details <ArrowRight className="h-4 w-4" /></Link>
              <a href={rewardWhatsAppLink(item.name)} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-sm border border-primary/40 px-4 py-3 text-sm font-bold uppercase tracking-wide text-primary"><MessageCircle className="h-4 w-4" /> Enquire on WhatsApp</a>
            </article>
          })}
        </div>
      </section>

      <section className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="mx-auto max-w-2xl text-center"><p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Getting started</p><h2 className="mt-2 font-display text-3xl font-bold uppercase">How to join BAC Rewards</h2></div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {["Choose the membership that suits your vehicle, household or fleet.","Review the package details and contact BAC to confirm registration and membership terms.","Speak with our team to complete your membership arrangements."].map((t,i)=><div key={t} className="rounded-xl border border-border bg-background/50 p-5"><span className="font-display text-2xl font-bold text-primary">0{i+1}</span><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t}</p></div>)}
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">Membership terms not stated on this page should be confirmed with Bennett’s AutoCare before registration.</p>
        </div>
      </section>
      <section className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div><p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Need a hand choosing?</p><h2 className="mt-2 font-display text-2xl font-bold uppercase">Let’s find the right plan for your vehicle.</h2><p className="mt-2 text-sm text-muted-foreground">Chat with the Bennett’s AutoCare team about membership details and registration.</p></div>
        <a href={rewardWhatsAppLink("BAC Rewards")} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-sm border border-primary/50 px-6 py-3 text-sm font-bold uppercase tracking-wide text-primary"><MessageCircle className="h-4 w-4" /> WhatsApp BAC</a>
      </section>
      <SiteFooter />
    </main>
  )
}
