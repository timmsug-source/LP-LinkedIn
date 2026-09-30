'use client'

import { ShieldCheck } from "lucide-react";

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const YoutubeIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
  </svg>
);
const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="text-slate-400 py-16 border-t border-slate-900 relative z-10" style={{ background: '#020617' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <a href="#start" className="inline-flex items-center gap-2 group">
              <div className="p-1 px-2.5 font-extrabold font-mono tracking-wider text-xs rounded shadow-sm"
                style={{ background: 'linear-gradient(135deg, #c1a87b, #aa9163)', color: '#0b0f19' }}>
                F.U.E.L.
              </div>
              <span className="text-white font-bold tracking-widest uppercase text-xs">
                Fabian Schönle Coaching
              </span>
            </a>
            <p className="text-slate-500 text-xs leading-relaxed max-w-sm">
              Wissenschaftlich gesteuerter Fettabbau und Vitalitäts-Maximierung für selbstständige Männer, Unternehmer und C-Level Executives. Auf Basis modernster Genetik- und Labordiagnostik.
            </p>
          </div>

          {/* Nav */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest">Übersicht</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#start" className="hover:text-[#c1a87b] transition-colors">Startseite</a></li>
              <li><a href="#about-fabian" className="hover:text-[#c1a87b] transition-colors">Über Fabian</a></li>
              <li><a href="#methode" className="hover:text-[#c1a87b] transition-colors">Die F.U.E.L. Methode</a></li>
              <li><a href="#symptome" className="hover:text-[#c1a87b] transition-colors">Bestandsaufnahme</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest">Rechtliches</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#impressum" className="hover:text-[#c1a87b] transition-colors">Impressum</a></li>
              <li><a href="#datenschutz" className="hover:text-[#c1a87b] transition-colors">Datenschutzerklärung</a></li>
              <li><a href="#agb" className="hover:text-[#c1a87b] transition-colors">AGB</a></li>
              <li className="flex items-center gap-1.5 text-slate-500">
                <ShieldCheck size={14} className="text-emerald-500" />
                <span>SSL Verschlüsselt</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="w-full h-px bg-slate-900 my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>&copy; {currentYear} Fabian Schönle Co. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#c1a87b] transition-colors"><LinkedinIcon size={16} /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-[#c1a87b] transition-colors"><YoutubeIcon size={16} /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#c1a87b] transition-colors"><InstagramIcon size={16} /></a>
          </div>
        </div>

        <p className="text-[10px] text-slate-700 leading-normal mt-8 text-center sm:text-left">
          Haftungsausschluss: Die Inhalte und das Coaching der F.U.E.L. Methode dienen der Leistungssteigerung, Gesundheitsprävention und Gewichtsreduktion auf biologischer Basis. Sie stellen keine medizinische Heilbehandlung oder ärztliche Diagnose dar. Bei bestehenden pathologischen Erkrankungen konsultieren Sie bitte vorab Ihren behandelnden Arzt.
        </p>

      </div>
    </footer>
  );
}
