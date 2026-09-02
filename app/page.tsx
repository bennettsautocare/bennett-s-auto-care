import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ServicesSection } from "@/components/services-section"
import { LoyaltySection } from "@/components/loyalty-section"
import { SiteFooter } from "@/components/site-footer"
import { AiAssistant } from "@/components/ai-assistant"

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <ServicesSection />
      <LoyaltySection />
      <SiteFooter />
      <AiAssistant />
    </main>
  )
}
