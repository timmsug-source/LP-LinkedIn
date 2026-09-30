import type { Metadata } from 'next'
import './fuel.css'

export const metadata: Metadata = {
  title: 'Fabian Schönle | F.U.E.L. Methode – Coaching für Unternehmer',
  description: 'Wissenschaftlich gesteuerter Fettabbau für selbstständige Männer, Unternehmer und Führungskräfte.',
  robots: { index: false, follow: false },
}

export default function FabianCoachingLayout({ children }: { children: React.ReactNode }) {
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
      {/* Demo Banner — fixed, exactly 40px tall so header (fixed top-10=40px) sits flush below */}
      <div style={{
        background: 'repeating-linear-gradient(135deg, #0e1624 0px, #0e1624 12px, #162235 12px, #162235 24px)',
        borderBottom: '1px solid rgba(193,168,123,0.25)',
        padding: '0 16px',
        height: '40px',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999,
        flexWrap: 'nowrap', whiteSpace: 'nowrap', overflow: 'hidden',
      }}>
        <span style={{ color: '#c1a87b', fontSize: '11px', fontFamily: 'monospace', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', flexShrink: 0 }}>⚠ Demo-Seite</span>
        <span style={{ color: 'rgba(193,168,123,0.4)', fontSize: '11px', flexShrink: 0 }}>—</span>
        <span style={{ color: 'rgba(193,168,123,0.7)', fontSize: '11px', fontFamily: 'monospace', overflow: 'hidden', textOverflow: 'ellipsis' }}>Kein echtes Angebot. Nur zur Veranschaulichung.</span>
      </div>
      {children}
    </>
  )
}
