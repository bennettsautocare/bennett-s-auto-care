export const WHATSAPP = "https://wa.me/18762588333"

export type RewardPackage = {
  slug: string
  name: string
  audience: string
  prices: { label: string; price: string }[]
  benefits: string[]
  details: string[]
  note?: string
  featured?: boolean
}

export const rewardPackages: RewardPackage[] = [
  {
    slug: "essential-care",
    name: "BAC Essential Care",
    audience: "A practical monthly plan for your everyday vehicle-care routine.",
    prices: [
      { label: "Sedan / Standard SUV", price: "J$5,500" },
      { label: "7-seater / Larger vehicle", price: "J$7,000" },
    ],
    benefits: [
      "4 full-service washes per month",
      "1 basic diagnostic scan per month",
      "5% off selected detailing services",
      "Priority booking",
      "Members-only promotions",
      "Birthday-month wash upgrade",
      "Referral rewards",
      "Wash reminders",
    ],
    details: [
      "Four full-service washes are included in each monthly membership period.",
      "One basic diagnostic scan is included per month.",
      "The detailing discount applies to selected detailing services.",
      "Priority booking, members-only promotions, birthday-month wash upgrade, referral rewards and wash reminders are included as membership benefits.",
    ],
  },
  {
    slug: "premium-care",
    name: "BAC Premium Care",
    audience: "More regular vehicle care, with a monthly seat shampoo included.",
    prices: [
      { label: "Sedan / Standard SUV", price: "J$14,500" },
      { label: "7-seater / Larger vehicle", price: "J$16,500" },
    ],
    benefits: [
      "6 full-service washes per month",
      "1 basic diagnostic scan per month",
      "1 seat shampoo per month",
      "10% off selected additional detailing",
      "Priority scheduling",
      "Visual vehicle condition check",
    ],
    details: [
      "Six full-service washes are included in each monthly membership period.",
      "One basic diagnostic scan and one seat shampoo are included per month.",
      "The 10% discount applies to selected additional detailing services.",
      "A visual vehicle condition check and priority scheduling are included.",
      "The included seat shampoo is a seat shampoo service; it is not full interior detailing.",
    ],
    featured: true,
  },
  {
    slug: "unlimited",
    name: "BAC Unlimited",
    audience: "Premium vehicle care benefits plus unlimited exterior washes.",
    prices: [
      { label: "Sedan / Standard SUV", price: "J$24,000" },
      { label: "7-seater / Larger vehicle", price: "J$29,000" },
    ],
    benefits: [
      "All BAC Premium core benefits",
      "Unlimited outside / exterior washes",
    ],
    details: [
      "Includes the core benefits of BAC Premium Care.",
      "Unlimited applies to outside / exterior washes only. It does not mean unlimited full-service washes.",
      "One registered vehicle per membership.",
      "One exterior wash per visit.",
      "Exterior washes are available during normal operating hours and are subject to operational capacity.",
      "Exterior washes do not include interior cleaning or detailing.",
    ],
    note: "Fair-use conditions apply: one registered vehicle, one exterior wash per visit, normal operating hours and subject to operational capacity.",
  },
  {
    slug: "family-friends",
    name: "BAC Family & Friends",
    audience: "A shared monthly vehicle-care plan for family and friends.",
    prices: [
      { label: "2 registered vehicles", price: "J$14,000 / month" },
      { label: "3 registered vehicles", price: "J$18,500 / month" },
      { label: "4 registered vehicles", price: "J$23,000 / month" },
      { label: "5 registered vehicles", price: "J$27,500 / month" },
    ],
    benefits: [
      "Shared full-service wash credits across registered vehicles",
      "One steam treatment per registered vehicle",
      "10% off selected detailing",
      "Priority booking",
      "Family promotions",
    ],
    details: [
      "2 vehicles: J$14,000/month, 8 shared full-service washes and 2 steam treatments.",
      "3 vehicles: J$18,500/month, 10 shared full-service washes and 3 steam treatments.",
      "4 vehicles: J$23,000/month, 12 shared full-service washes and 4 steam treatments.",
      "5 vehicles: J$27,500/month, 14 shared full-service washes and 5 steam treatments.",
      "Wash credits are shared across registered vehicles. Each registered vehicle receives one steam treatment.",
      "A 10% discount applies to selected detailing services.",
      "Priority booking and family promotions are included.",
    ],
    note: "Additional vehicle: J$4,500 per month. Each additional vehicle adds 2 shared wash credits and 1 steam treatment.",
  },
  {
    slug: "corporate-fleet-care",
    name: "BAC Corporate Fleet Care",
    audience: "Flexible vehicle-care support for businesses and fleet operators.",
    prices: [{ label: "Starting monthly price", price: "J$14,000" }],
    benefits: [
      "Monthly wash allowance",
      "Account management",
      "Priority scheduling",
      "Consolidated billing",
      "Monthly reports",
      "Preferential detailing rates",
      "Optional interior cleaning by arrangement",
    ],
    details: [
      "Corporate plans are quoted according to fleet size, vehicle types and the monthly wash allowance required.",
      "Account management, priority scheduling, consolidated billing and monthly reports are included features.",
      "Preferential detailing rates are available.",
      "Optional interior cleaning can be arranged.",
      "Contact BAC for a fleet-specific quotation. Corporate membership is not advertised as unlimited washes.",
    ],
    note: "Starting price J$14,000 monthly. Final quotation depends on fleet size, vehicle types and monthly wash allowance.",
  },
]

export function rewardWhatsAppLink(packageName: string) {
  return `${WHATSAPP}?text=${encodeURIComponent(`Hi Bennett's AutoCare, I'm interested in ${packageName}. Please share the registration process and membership terms.`)}`
}
