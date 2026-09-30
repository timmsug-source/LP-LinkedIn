import type { Metadata } from 'next';
import './michael-mbr.css';

export const metadata: Metadata = {
  title: 'MBR GmbH – Handelsgesellschaft für Guss- & Schmiedeprodukte',
  description: 'B2B-Beschaffung von Guss- und Schmiedeprodukten aus auditierten asiatischen Produktionsstätten. TÜV AD 2000-W0, IATF 16949, ISO 9001:2015 zertifiziert.',
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
        background: 'rgba(248,250,252,0.97)',
        backdropFilter: 'blur(6px)',
        borderBottom: '1px solid #e2e8f0',
        padding: '0 16px',
        height: '36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        fontSize: '11px',
        fontFamily: 'ui-sans-serif, system-ui, sans-serif',
        color: '#64748b',
      }}>
        <span style={{ fontWeight: 700, color: '#1e40af' }}>⚠ Demo-Seite</span>
        <span style={{ color: '#cbd5e1' }}>·</span>
        <span>Kein echtes Angebot. Nur zur Veranschaulichung.</span>
      </div>
      {children}
    </>
  );
}
