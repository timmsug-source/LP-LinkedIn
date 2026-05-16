import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import AnimationProvider from '@/components/AnimationProvider'

const font = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Timm Schurig · SEO & Webdesign Freelancer',
  description: 'Ich baue Websites, die gefunden werden – und die Besucher in Kunden verwandeln. Kein Agentur-Overhead. Direkte Kommunikation. Messbarer Erfolg.',
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
    <html lang="de">
      <body className={font.variable} style={{ fontFamily: 'var(--font-jakarta), system-ui, sans-serif' }}>
        <AnimationProvider>{children}</AnimationProvider>
      </body>
    </html>
  )
}
