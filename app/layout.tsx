import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import AnimationProvider from '@/components/AnimationProvider'
import { getSection } from '@/lib/supabase'

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

  const title = seoData.meta_title || 'Timm Schurig · SEO & Webdesign Freelancer'
  const description = seoData.meta_description || 'Ich baue Websites, die gefunden werden – und die Besucher in Kunden verwandeln. Kein Agentur-Overhead. Direkte Kommunikation. Messbarer Erfolg.'
  const ogTitle = seoData.og_title || title
  const ogDescription = seoData.og_description || description
  const ogImage = seoData.og_image || undefined

  return {
    title,
    description,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      ...(ogImage ? { images: [ogImage] } : {}),
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={font.variable} style={{ fontFamily: 'var(--font-jakarta), system-ui, sans-serif' }}>
        <AnimationProvider>{children}</AnimationProvider>
      </body>
    </html>
  )
}
