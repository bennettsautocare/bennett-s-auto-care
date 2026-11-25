import { MessageCircle } from "lucide-react"

export function WhatsAppBubble() {
  return (
    <a
      href="https://wa.me/18762588333?text=Hi%20Bennett%27s%20AutoCare%2C%20I%20need%20some%20assistance."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Bennett's AutoCare on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-transform hover:scale-105"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}
