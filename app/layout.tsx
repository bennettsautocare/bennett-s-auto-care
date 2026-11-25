import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'
import { WhatsAppBubble } from '@/components/whatsapp-bubble'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' })

export const metadata: Metadata = {
  title: 'Bennett’s AutoCare | Car Wash, Detailing, Diagnostics & BAC Rewards — Montego Bay',
  description:
    'Bennetts Auto Care (BAC) in Montego Bay, Jamaica. Professional car cleaning, detailing, steam cleaning and vehicle diagnostics. Book online and explore BAC Rewards memberships for individual vehicles, families and corporate fleets.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#12100d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark bg-background ${inter.variable} ${oswald.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <WhatsAppBubble />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
