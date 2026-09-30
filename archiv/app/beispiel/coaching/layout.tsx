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
      <div style={{
        background: 'repeating-linear-gradient(135deg, #1a1200 0px, #1a1200 12px, #221800 12px, #221800 24px)',
        borderBottom: '1px solid rgba(229,160,52,0.25)',
        padding: '6px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        position: 'sticky',
        top: 0,
        zIndex: 9999,
        flexWrap: 'nowrap',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      }}>
        <span style={{ color: '#e5a034', fontSize: '11px', fontFamily: 'monospace', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', flexShrink: 0 }}>
          ⚠ Demo-Seite
        </span>
        <span style={{ color: 'rgba(229,160,52,0.4)', fontSize: '11px', flexShrink: 0 }}>—</span>
        <span style={{ color: 'rgba(229,160,52,0.7)', fontSize: '11px', fontFamily: 'monospace', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          Kein echtes Angebot. Nur zur Veranschaulichung.
        </span>
      </div>
      {children}
    </>
  )
}
