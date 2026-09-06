"use client"

import { MessageCircle } from "lucide-react"

const WHATSAPP_URL =
  "https://wa.me/18762588333?text=Hi%20Bennetts%20Auto%20Care%2C%20I%27d%20like%20to%20ask%20about%20your%20services."

export function AiAssistant() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Bennetts Auto Care on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  )
}
