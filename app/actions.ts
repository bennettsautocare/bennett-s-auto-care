"use server"

import { createClient } from "@/lib/supabase/server"

export type LoyaltyResult = { ok: true } | { ok: false; error: string }

export async function submitLoyaltySignup(formData: FormData): Promise<LoyaltyResult> {
  const name = String(formData.get("name") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim()
  const phone = String(formData.get("phone") ?? "").trim()
  const vehicle = String(formData.get("vehicle") ?? "").trim()

  if (!name || !email) {
    return { ok: false, error: "Name and email are required." }
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  if (!emailOk) {
    return { ok: false, error: "Please enter a valid email address." }
  }

  try {
    const supabase = await createClient()
    const { error } = await supabase.from("loyalty_signups").insert({
      name,
      email,
      phone: phone || null,
      vehicle: vehicle || null,
    })

    if (error) {
      console.log("[v0] loyalty insert error:", error.message)
      return { ok: false, error: "Something went wrong saving your signup. Please try again." }
    }

    return { ok: true }
  } catch (err) {
    console.log("[v0] loyalty unexpected error:", err)
    return { ok: false, error: "Something went wrong saving your signup. Please try again." }
  }
}
