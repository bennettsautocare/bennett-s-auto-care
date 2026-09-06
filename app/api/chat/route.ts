import { convertToModelMessages, streamText, type UIMessage } from "ai"
import { services, BUSINESS_INFO, SETMORE_URL } from "@/lib/services"

export const maxDuration = 30

const serviceList = services
  .map(
    (s) =>
      `- [${s.category}] ${s.name} — ${s.price}, ${s.duration}. ${s.description}`,
  )
  .join("\n")

const hours = BUSINESS_INFO.hours
  .map((h) => `${h.day}: ${h.time}`)
  .join("; ")

const SYSTEM_PROMPT = `You are the virtual service advisor for ${BUSINESS_INFO.name} (${BUSINESS_INFO.short}), an auto care shop in Montego Bay, Jamaica. Prices are in Jamaican dollars (JMD).

Your job: help customers pick the right service for their vehicle, explain pricing and durations, and guide them to book. Be warm, concise, and practical. Keep replies short (2-4 sentences) unless asked for detail.

When recommending, ask for the vehicle type and what they want done (wash, interior/detailing, steam, or diagnostics) if it isn't clear. Recommend specific services by name and price from the menu below. Never invent services or prices that aren't listed.

When a customer is ready to book, direct them to the booking link: ${SETMORE_URL}

Location: ${BUSINESS_INFO.location}
Hours: ${hours}

Service menu:
${serviceList}`

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const result = streamText({
    model: "openai/gpt-4.1-mini",
    system: SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
  })

  return result.toUIMessageStreamResponse()
}
