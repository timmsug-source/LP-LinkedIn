import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import AnimationProvider from '@/components/AnimationProvider'
import Nav from '@/components/Nav'
import { getSection } from '@/lib/supabase'
import { globalSchema, BASE_URL } from '@/lib/jsonld'

const font = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSection('seo')
  let seoData: Record<string, string> = {}
  try {
    seoData = JSON.parse(seo?.content || '{}')
  } catch {}

  const title = seoData.meta_title || 'Timm Schurig · SEO & Webdesign Freelancer Langenfeld'
  const description =
    seoData.meta_description ||
    'SEO & Webdesign Freelancer aus Langenfeld. Ich baue Websites, die bei Google gefunden werden – und Besucher in Kunden verwandeln. Kein Agentur-Overhead. Direkte Kommunikation.'
  const ogTitle = seoData.og_title || title
  const ogDescription = seoData.og_description || description
  const ogImage = seoData.og_image || `${BASE_URL}/timm.png`

  return {
    title: {
      default: title,
      template: '%s · Timm Schurig',
    },
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: BASE_URL,
    },
    openGraph: {
      type: 'website',
      locale: 'de_DE',
      url: BASE_URL,
      siteName: 'Timm Schurig – SEO & Webdesign',
      title: ogTitle,
      description: ogDescription,
      images: [{ url: ogImage, width: 1200, height: 630, alt: ogTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      images: [ogImage],
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
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const navSection = await getSection('nav')
  let navData: Record<string, unknown> | undefined
  try { navData = navSection?.content ? JSON.parse(navSection.content) : undefined } catch {}

  return (
    <html lang="de-DE">
      <body className={font.variable} style={{ fontFamily: 'var(--font-jakarta), system-ui, sans-serif' }}>
        {/* Global JSON-LD: WebSite + LocalBusiness + Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
        <Nav data={navData} />
        <div className="page-bg">
          <div className="page-box">
            <div className="noise-overlay" aria-hidden="true" />
            <main id="page-wrapper">
              <AnimationProvider>{children}</AnimationProvider>
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
