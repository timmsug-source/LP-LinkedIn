import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import { globalSchema, BASE_URL } from '@/lib/jsonld'

const font = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

/* Titel und Beschreibung stehen fest im Code statt im CMS der alten Seite.
   Sie gelten für die Startseite; alle anderen Seiten setzen eigene Werte. */
const TITLE = 'Timm Schurig · SEO & Webdesign Freelancer Langenfeld'
const DESCRIPTION =
  'SEO & Webdesign Freelancer aus Langenfeld: Websites, die bei Google gefunden werden – und Besucher zu Kunden machen. Ohne Agentur-Overhead.'
const OG_IMAGE = `${BASE_URL}/og-image-timm-schurig-zentriert.png`

export const metadata: Metadata = {
  title: {
    default: TITLE,
    // Kein Namenszusatz: Das Template hängte früher an jeden Titel
    // " · Timm Schurig" und trieb damit fast alle Titel über die Pixelgrenze
    // der Suchergebnisse. Jede Seite formuliert ihren Titel vollständig selbst.
    template: '%s',
  },
  description: DESCRIPTION,
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: BASE_URL,
    siteName: 'Timm Schurig – SEO & Webdesign',
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de-DE">
      <body className={font.variable} style={{ fontFamily: 'var(--font-jakarta), system-ui, sans-serif' }}>
        {/* Global JSON-LD: WebSite + LocalBusiness + Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
        <Nav />
        <div className="noise-overlay" aria-hidden="true" />
        <main id="page-wrapper">
          {children}
        </main>
      </body>
    </html>
  )
}
