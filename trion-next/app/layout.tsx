import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--ff-head',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--ff-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TRION Agency — Automação Inteligente para PMEs',
  description: 'TRION Agency — Automação de processos, agentes de IA e presença digital premium para PMEs portuguesas.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT" className={`${spaceGrotesk.variable} ${inter.variable} dark`}>
      <body>{children}</body>
    </html>
  )
}
