import type { Metadata } from 'next';
import './naturheilpraxis-brenscheidt.css';

export const metadata: Metadata = {
  title: 'Naturheilpraxis Brenscheidt – Leichlingen & Witzhelden',
  description: 'Ganzheitliche Naturheilkunde: Augenakupunktur bei AMD, Hypnosetherapie, Wirbelsäulentherapie und Dunkelfeld-Diagnostik in Leichlingen und Witzhelden.',
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
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
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: 'rgba(253,251,247,0.95)',
        backdropFilter: 'blur(6px)',
        borderBottom: '1px solid #e6ede9',
        padding: '0 16px',
        height: '36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        fontSize: '11px',
        fontFamily: 'ui-sans-serif, system-ui, sans-serif',
        color: '#5f7468',
      }}>
        <span style={{ fontWeight: 700 }}>⚠ Demo-Seite</span>
        <span style={{ color: '#9ca3af' }}>·</span>
        <span>Kein echtes Angebot. Nur zur Veranschaulichung.</span>
      </div>
      {children}
    </>
  );
}
