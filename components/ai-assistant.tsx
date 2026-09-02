"use client"

import { useState, useRef, useEffect } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { MessageCircle, X, Send, Bot } from "lucide-react"

const SUGGESTIONS = [
  "Which service suits my SUV?",
  "How much is interior detailing?",
  "What are your opening hours?",
]

export function AiAssistant() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const scrollRef = useRef<HTMLDivElement>(null)

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  })

  const busy = status === "submitted" || status === "streaming"

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, open])

  function submit(text: string) {
    const value = text.trim()
    if (!value || busy) return
    sendMessage({ text: value })
    setInput("")
  }

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close service advisor" : "Open service advisor"}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-5 z-50 flex h-[32rem] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-xl border border-border bg-popover shadow-2xl">
          <div className="flex items-center gap-3 border-b border-border bg-card px-4 py-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-primary text-primary-foreground">
              <Bot className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-wide">BAC Service Advisor</p>
              <p className="text-xs text-muted-foreground">Ask about services, prices & booking</p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
            {messages.length === 0 && (
              <div className="space-y-4">
                <div className="rounded-lg rounded-tl-none bg-card px-3 py-2.5 text-sm leading-relaxed text-card-foreground">
                  Hi! I&apos;m the BAC service advisor. Tell me your vehicle type and what you need, and I&apos;ll
                  point you to the right service.
                </div>
                <div className="flex flex-col gap-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => submit(s)}
                      className="rounded-sm border border-border bg-background px-3 py-2 text-left text-xs text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] whitespace-pre-wrap rounded-lg px-3 py-2.5 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "rounded-br-none bg-primary text-primary-foreground"
                      : "rounded-tl-none bg-card text-card-foreground"
                  }`}
                >
                  {message.parts.map((part, i) =>
                    part.type === "text" ? <span key={i}>{part.text}</span> : null,
                  )}
                </div>
              </div>
            ))}

            {status === "submitted" && (
              <div className="flex justify-start">
                <div className="rounded-lg rounded-tl-none bg-card px-3 py-2.5">
                  <span className="flex gap-1">
                    <Dot /> <Dot delay="0.15s" /> <Dot delay="0.3s" />
                  </span>
                </div>
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              submit(input)
            }}
            className="flex items-center gap-2 border-t border-border bg-card px-3 py-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.nativeEvent.isComposing && e.keyCode !== 229) {
                  e.preventDefault()
                  submit(input)
                }
              }}
              placeholder="Type your question..."
              className="flex-1 rounded-sm border border-input bg-background px-3 py-2 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-primary"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              aria-label="Send message"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-primary text-primary-foreground transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  )
}

function Dot({ delay = "0s" }: { delay?: string }) {
  return (
    <span
      className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground"
      style={{ animationDelay: delay }}
    />
  )
}
