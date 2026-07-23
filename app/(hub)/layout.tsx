import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './hub.css'

const font = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Platform Hub · Timm Schurig',
  robots: { index: false, follow: false },
}

export default function HubRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={font.variable}>
      <body>
        <div className="hub-root">{children}</div>
      </body>
    </html>
  )
}
