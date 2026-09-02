"use client"

import { useState } from "react"
import { CheckCircle2, Gift } from "lucide-react"
import { submitLoyaltySignup } from "@/app/actions"

const PERKS = [
  "Priority booking on busy weekends",
  "Members-only seasonal discounts",
  "Reminders when your car is due for a wash",
]

export function LoyaltySection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus("loading")
    setMessage("")

    const result = await submitLoyaltySignup(new FormData(form))

    if (result.ok) {
      setStatus("success")
      setMessage("You're in! We've saved your details and you'll hear from us with member perks soon.")
      form.reset()
    } else {
      setStatus("error")
      setMessage(result.error)
    }
  }

  return (
    <section id="loyalty" className="scroll-mt-20 border-y border-border bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-primary">
            <Gift className="h-4 w-4" aria-hidden="true" />
            BAC Rewards
          </p>
          <h2 className="text-balance font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
            Join the loyalty program
          </h2>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Regulars get rewarded. Sign up free and get perks that make keeping your vehicle spotless easier and
            cheaper.
          </p>
          <ul className="mt-6 space-y-3">
            {PERKS.map((perk) => (
              <li key={perk} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="text-muted-foreground">{perk}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-border bg-background p-6 sm:p-8">
          {status === "success" ? (
            <div className="flex flex-col items-center py-8 text-center">
              <CheckCircle2 className="h-12 w-12 text-primary" aria-hidden="true" />
              <h3 className="mt-4 font-display text-xl font-semibold uppercase">Welcome to BAC Rewards</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{message}</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 rounded-sm border border-border px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors hover:bg-card"
              >
                Sign up another vehicle
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" name="name" type="text" placeholder="Jane Bennett" required />
                <Field label="Phone" name="phone" type="tel" placeholder="876-000-0000" />
              </div>
              <Field label="Email" name="email" type="email" placeholder="you@email.com" required />
              <Field label="Vehicle" name="vehicle" type="text" placeholder="e.g. Toyota RAV4" />

              {status === "error" && (
                <p className="text-sm text-destructive" role="alert">
                  {message}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-2 inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? "Saving..." : "Join Rewards"}
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Your details are stored securely and only used for BAC rewards.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
}: {
  label: string
  name: string
  type: string
  placeholder: string
  required?: boolean
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {label}
        {required && <span className="text-primary"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="rounded-sm border border-input bg-card px-3 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
      />
    </label>
  )
}
