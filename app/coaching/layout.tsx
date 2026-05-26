import type { Metadata } from 'next'
import './coaching.css'

export const metadata: Metadata = {
  title: 'Marc Lindner | Premium Performance Coaching für Unternehmer',
  description: 'Premium Fitness- und Performance-Coaching für vielbeschäftigte Unternehmer.',
  robots: { index: false, follow: false },
}

export default function CoachingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        body > nav { display: none !important; }
        .mobile-menu { display: none !important; }
        .mobile-backdrop { display: none !important; }
        .noise-overlay { display: none !important; }
        #page-wrapper { padding-top: 0 !important; overflow: visible !important; }
        html, body { overflow-x: hidden !important; }
      `}</style>
      {children}
    </>
  )
}
