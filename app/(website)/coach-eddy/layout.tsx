import type { Metadata } from 'next'
import './coach-eddy.css'

export const metadata: Metadata = {
  title: 'Coach Eddy | Personal Training – Langfristig Abnehmen & Hormone optimieren',
  description: 'Wissenschaftlich fundiertes Personal Training. Langfristig abnehmen, Hormone optimieren und Energie maximieren – ohne Crash-Diäten.',
  robots: { index: false, follow: false },
}

export default function CoachEddyLayout({ children }: { children: React.ReactNode }) {
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
        background: '#fffbeb',
        borderBottom: '1px solid rgba(217,119,6,0.25)',
        padding: '0 16px',
        height: '40px',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999,
        flexWrap: 'nowrap', whiteSpace: 'nowrap', overflow: 'hidden',
      }}>
        <span style={{ color: '#b45309', fontSize: '11px', fontFamily: 'monospace', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', flexShrink: 0 }}>⚠ Demo-Seite</span>
        <span style={{ color: 'rgba(180,83,9,0.4)', fontSize: '11px', flexShrink: 0 }}>—</span>
        <span style={{ color: 'rgba(180,83,9,0.7)', fontSize: '11px', fontFamily: 'monospace', overflow: 'hidden', textOverflow: 'ellipsis' }}>Kein echtes Angebot. Nur zur Veranschaulichung.</span>
      </div>
      {children}
    </>
  )
}
