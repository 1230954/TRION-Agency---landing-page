import type { Metadata } from 'next'
import { Inter, Instrument_Serif } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--ff-body',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--ff-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.trion.pt'),

  title: 'TRION | Automatize o que Repete',
  description: 'Automatizamos processos, implementamos IA e criamos presença digital para ajudar PMEs a crescer com menos operação manual.',

  alternates: {
    canonical: '/',
  },

  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  },

  manifest: '/site.webmanifest',

  openGraph: {
    type: 'website',
    url: 'https://www.trion.pt/',
    title: 'Trion Agency | IA, Automação e Presença Digital para PMEs',
    description: 'Automatizamos processos, implementamos IA e criamos presença digital para ajudar PMEs a crescer com menos operação manual.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'pt_PT',
    siteName: 'Trion Agency',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Trion Agency | IA, Automação e Presença Digital para PMEs',
    description: 'Automatizamos processos, implementamos IA e criamos presença digital para ajudar PMEs a crescer com menos operação manual.',
    images: ['/og-image.png'],
  },

  other: {
    'theme-color': '#121418',
    'msapplication-TileColor': '#121418',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Trion Agency',
  url: 'https://www.trion.pt',
  logo: 'https://www.trion.pt/logo-square.png',
  description: 'Automatizamos processos, implementamos IA e criamos presença digital para ajudar PMEs a crescer com menos operação manual.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'PT',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'geral@trionagency.pt',
    contactType: 'customer service',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT" className={`${inter.variable} ${instrumentSerif.variable} dark`}>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,600,700,800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
