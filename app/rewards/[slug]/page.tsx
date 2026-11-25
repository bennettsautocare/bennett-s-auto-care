import Link from "next/link"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArrowLeft, Check, MessageCircle } from "lucide-react"
import { rewardPackages, rewardWhatsAppLink } from "@/lib/bac-rewards"

export function generateStaticParams() {
  return rewardPackages.map((item) => ({ slug: item.slug }))
}

export default async function RewardDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const item = rewardPackages.find((p) => p.slug === slug)
  if (!item) notFound()

  return (
    <main className="min-h-screen">
      <SiteHeader />
      <section className="border-b border-white/10 bg-[linear-gradient(120deg,#031333_0%,#061b49_55%,#0d4db5_100%)]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <Link href="/rewards" className="inline-flex items-center gap-2 text-sm font-medium text-blue-100/80 hover:text-primary"><ArrowLeft className="h-4 w-4" /> All BAC Rewards memberships</Link>
          <p className="mt-10 text-xs font-bold uppercase tracking-[0.24em] text-primary">BAC Rewards Membership</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold uppercase leading-tight sm:text-6xl">{item.name}</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-100/80 sm:text-lg">{item.audience}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {item.prices.map(p => <div key={p.label} className="min-w-48 rounded-lg border border-white/15 bg-white/5 px-5 py-4"><p className="text-xs uppercase tracking-wide text-blue-100/70">{p.label}</p><p className="mt-1 font-display text-2xl font-bold text-primary">{p.price}</p></div>)}
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:py-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Membership inclusions</p>
          <h2 className="mt-2 font-display text-3xl font-bold uppercase">What’s included</h2>
          <ul className="mt-7 space-y-4">{item.benefits.map(b => <li key={b} className="flex gap-3 rounded-lg border border-border bg-card/60 p-4"><Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span className="text-sm leading-relaxed">{b}</span></li>)}</ul>
        </div>
        <aside className="h-fit rounded-xl border border-primary/30 bg-card/60 p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Plan details</p>
          <h2 className="mt-2 font-display text-2xl font-bold uppercase">Good to know</h2>
          <ul className="mt-5 space-y-3">{item.details.map(d => <li key={d} className="text-sm leading-relaxed text-muted-foreground">• {d}</li>)}</ul>
          {item.slug === "family-friends" && <div className="mt-6 overflow-hidden rounded-lg border border-border">
            <div className="grid grid-cols-3 gap-2 bg-background/80 px-3 py-3 text-[10px] font-bold uppercase tracking-wide text-muted-foreground sm:text-xs"><span>Vehicles</span><span>Shared washes</span><span>Steam treatments</span></div>
            {[
              ["2","8","2"],["3","10","3"],["4","12","4"],["5","14","5"]
            ].map(([vehicles,washes,steam]) => <div key={vehicles} className="grid grid-cols-3 gap-2 border-t border-border px-3 py-3 text-sm"><span>{vehicles}</span><span>{washes}</span><span>{steam}</span></div>)}
          </div>}
          {item.note && <p className="mt-5 rounded-lg border border-primary/20 bg-primary/5 p-4 text-sm leading-relaxed">{item.note}</p>}
          <a href={rewardWhatsAppLink(item.name)} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-5 py-3.5 text-sm font-bold uppercase tracking-wide text-primary-foreground"><MessageCircle className="h-4 w-4" /> Enquire / Subscribe</a>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">This button opens WhatsApp to begin your membership enquiry. It does not process payment online.</p>
        </aside>
      </section>
      <div className="mx-auto max-w-6xl px-4 pb-14 sm:px-6"><Link href="/rewards" className="text-sm font-semibold text-primary hover:underline">← Compare all membership options</Link></div>
      <SiteFooter />
    </main>
  )
}
