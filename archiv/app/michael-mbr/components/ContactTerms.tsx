'use client'
import React, { useState } from 'react';
import { CONTRACT_DOCUMENTS } from '../data';
import { ContactState } from '../types';
import { Mail, Phone, MapPin, Printer, FileText, Download, Check, AlertCircle, Sparkles, Building, UserCheck } from 'lucide-react';

export const ContactTerms = () => {
  const [formState, setFormState] = useState<ContactState>({
    name: '',
    email: '',
    company: '',
    phone: '',
    sector: 'armaturen',
    material: 'DIN EN 10283',
    message: '',
    termsAccepted: false
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormState(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormState(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple Validation
    if (!formState.name.trim() || !formState.email.trim() || !formState.company.trim() || !formState.message.trim()) {
      setErrorMsg('Bitte füllen Sie alle erforderlichen Felder aus (*).');
      setFormStatus('error');
      return;
    }

    if (!formState.termsAccepted) {
      setErrorMsg('Bitte akzeptieren Sie die Datenschutzbestimmungen, um fortzufahren.');
      setFormStatus('error');
      return;
    }

    // Success response simulation
    setFormStatus('success');
    setErrorMsg('');
  };

  const resetForm = () => {
    setFormState({
      name: '',
      email: '',
      company: '',
      phone: '',
      sector: 'armaturen',
      material: 'DIN EN 10283',
      message: '',
      termsAccepted: false
    });
    setFormStatus('idle');
  };

  const triggerDownloadSimulation = (docTitleDe: string) => {
    // Elegant toast or trigger simulation
    alert(`Das Dokument "${docTitleDe}" wird jetzt als PDF heruntergeladen.`);
  };

  return (
    <div id="contact-terms-module" className="grid gap-12 lg:grid-cols-12">
      
      {/* LEFT COLUMN: CONTACT DETAILS & REQUEST FORM */}
      <div className="lg:col-span-7 space-y-10">
        
        {/* Company Address block */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h3 className="font-display text-xl font-extrabold text-slate-950">
            Unternehmenssitz & Kontaktdaten
          </h3>
          <p className="text-xs text-slate-500 font-mono tracking-wider uppercase mt-0.5">
            Zentrale MBR GmbH Handelsgesellschaft
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 text-sm text-slate-600">
            {/* Address */}
            <div className="space-y-3">
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-xs uppercase tracking-wide">Postadresse</h4>
                  <p className="mt-1">
                    <strong>MBR GmbH</strong><br />
                    Mittelstraße 9<br />
                    24375 Kappeln<br />
                    Deutschland
                  </p>
                </div>
              </div>
            </div>

            {/* Contacts & Person */}
            <div className="space-y-3">
              <div className="flex gap-3">
                <UserCheck className="h-5 w-5 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-slate-900 text-xs uppercase tracking-wide">Geschäftsleitung</h4>
                  <p className="mt-1 font-semibold text-slate-900">M. Bresemann</p>
                  <p className="text-xs text-slate-400">Geschäftsführender Gesellschafter</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Communication Board */}
          <div className="mt-8 border-t border-slate-100 pt-6 grid gap-4 sm:grid-cols-3 font-mono text-xs text-slate-600">
            <a href="tel:+49464292200" className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/50 hover:bg-slate-100 transition-colors">
              <Phone className="h-4 w-4 text-blue-700" />
              <div>
                <div className="text-[9px] text-slate-400 uppercase font-bold">Telefon</div>
                <div className="font-semibold text-slate-800">+49 (0) 4642 922 00</div>
              </div>
            </a>

            <a href="tel:+491714113988" className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/50 hover:bg-slate-100 transition-colors">
              <Phone className="h-4 w-4 text-emerald-700" />
              <div>
                <div className="text-[9px] text-slate-400 uppercase font-bold">Mobiltelefon</div>
                <div className="font-semibold text-slate-800">+49 (0) 171 411 39 88</div>
              </div>
            </a>

            <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/50">
              <Printer className="h-4 w-4 text-slate-600" />
              <div>
                <div className="text-[9px] text-slate-400 uppercase font-bold">Telefax</div>
                <div className="font-semibold text-slate-800">+49 (0) 4642 922 01</div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-blue-50/60 rounded-lg text-xs flex items-center justify-between font-mono text-blue-800 border border-blue-100">
            <span className="flex items-center gap-1.5 font-medium"><Mail className="h-3.5 w-3.5" /> Mail: info@mbr-guss-schmiede.de</span>
            <span className="text-[10px] uppercase font-bold hidden sm:inline">24H Reaktionszeit</span>
          </div>
        </div>

        {/* Dynamic Contact Quote Form Component */}
        <div id="contact-form-card" className="rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="border-b border-slate-100 pb-4 mb-6">
            <h3 className="font-display text-xl font-extrabold text-slate-950">
              Technische Bestellanfrage herstellen
            </h3>
            <p className="text-xs text-slate-500 font-mono">
              Senden Sie uns Zeichnungsdaten und Spezifikationen direkt zu
            </p>
          </div>

          {formStatus === 'success' ? (
            <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-8 text-center text-slate-800 space-y-4">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                <Check className="h-6 w-6" />
              </div>
              <h4 className="font-display font-bold text-lg text-slate-950">Vielen Dank für Ihre Anfrage!</h4>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                Ihre Anfragedaten wurden erfasst und werden verschlüsselt an Herrn Bresemann übermittelt. 
                Wir bewerten Ihre Spezifikation bezüglich unserer Partnerkapazitäten und setzen uns innerhalb eines Werktags mit Ihnen in Verbindung.
              </p>
              <button
                type="button"
                onClick={resetForm}
                className="mt-6 rounded bg-slate-900 px-4.5 py-2 font-display text-xs font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Weitere Anfrage senden
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4.5 text-xs text-slate-700">
              
              {formStatus === 'error' && (
                <div className="rounded-lg bg-coral-50 border border-red-200 p-4 flex gap-3 text-red-900 font-medium">
                  <AlertCircle className="h-5 w-5 shrink-0 text-red-600" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                {/* Company Name */}
                <div className="space-y-1.5">
                  <label htmlFor="company" className="font-semibold text-slate-800">Firma *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    placeholder="Ihrem Firmennamen eingeben"
                    value={formState.company}
                    onChange={handleInputChange}
                    className="w-full rounded border border-slate-200 bg-white px-3.5 py-2.5 font-sans text-xs focus:border-blue-600 focus:outline-none"
                  />
                </div>

                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="font-semibold text-slate-800">Ansprechpartner *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Ihr Name (z. B. Herr Müller)"
                    value={formState.name}
                    onChange={handleInputChange}
                    className="w-full rounded border border-slate-200 bg-white px-3.5 py-2.5 font-sans text-xs focus:border-blue-600 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="font-semibold text-slate-800">E-Mail-Adresse *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Ihre B2B-E-Mail"
                    value={formState.email}
                    onChange={handleInputChange}
                    className="w-full rounded border border-slate-200 bg-white px-3.5 py-2.5 font-sans text-xs focus:border-blue-600 focus:outline-none"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="font-semibold text-slate-800">Direkter Telefonanschluss</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Telefonnummer für Rückfragen"
                    value={formState.phone}
                    onChange={handleInputChange}
                    className="w-full rounded border border-slate-200 bg-white px-3.5 py-2.5 font-sans text-xs focus:border-blue-600 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {/* Sector / Industry selection */}
                <div className="space-y-1.5">
                  <label htmlFor="sector" className="font-semibold text-slate-800">Industriebereich</label>
                  <select
                    id="sector"
                    name="sector"
                    value={formState.sector}
                    onChange={handleInputChange}
                    className="w-full rounded border border-slate-200 bg-white px-3.5 py-2.5 font-sans text-xs focus:border-blue-600 focus:outline-none"
                  >
                    <option value="armaturen">Armaturen & Rohrleitungsbau</option>
                    <option value="automotive">Automotive / Nutzfahrzeuge</option>
                    <option value="schiffbau">Schiffbau & Offshore-Technik</option>
                    <option value="maschinenbau">Sonder- & Maschinenbau</option>
                  </select>
                </div>

                {/* Intended material parameters */}
                <div className="space-y-1.5">
                  <label htmlFor="material" className="font-semibold text-slate-800">Gussklasse / Materialvorgabe</label>
                  <select
                    id="material"
                    name="material"
                    value={formState.material}
                    onChange={handleInputChange}
                    className="w-full rounded border border-slate-200 bg-white px-3.5 py-2.5 font-sans text-xs focus:border-blue-600 focus:outline-none"
                  >
                    <option value="DIN EN 10283">DIN EN 10283 (Stahlguss)</option>
                    <option value="DIN EN 10295">DIN EN 10295 (Hitze-Stahlguss)</option>
                    <option value="DIN EN 1706">DIN EN 1706 (Aluminimumguss)</option>
                    <option value="DIN EN 1561">DIN EN 1561 (Grauguss)</option>
                    <option value="DIN EN 1563">DIN EN 1563 (Sphäroguss)</option>
                    <option value="Schmiedestück">Schmiedestücke / Sonstige</option>
                  </select>
                </div>
              </div>

              {/* Message Details */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="font-semibold text-slate-800">Spezifikation / Bauteilangaben *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Beschreiben Sie Ihre Bauteile, Abmessungen, Jahresmengen und Toleranzen. Sie können danach direkt Pläne zuschicken."
                  value={formState.message}
                  onChange={handleInputChange}
                  className="w-full rounded border border-slate-200 bg-white px-3.5 py-2.5 font-sans text-xs focus:border-blue-600 focus:outline-none"
                />
              </div>

              {/* DSGVO & Conditions checkbox */}
              <div className="flex items-start gap-2.5 pt-2">
                <input
                  type="checkbox"
                  id="termsAccepted"
                  name="termsAccepted"
                  checked={formState.termsAccepted}
                  onChange={handleInputChange}
                  className="mt-0.5 h-4 w-4 rounded border-slate-200 text-blue-700 focus:ring-blue-500"
                />
                <label htmlFor="termsAccepted" className="text-[11px] text-slate-500 leading-normal">
                  Ich habe die Datenschutzhinweise zur Kenntnis genommen. Ich willige ein, dass meine Angaben zwecks technischer Prüfung und Kontaktaufnahme gespeichert werden. *
                </label>
              </div>

              {/* Form submit button */}
              <button
                type="submit"
                className="w-full rounded bg-blue-700 py-3 font-display text-sm font-bold text-white transition-all hover:bg-blue-800 focus:outline-none"
              >
                Technische Teilespezifikation einreichen
              </button>

            </form>
          )}
        </div>
      </div>

      {/* RIGHT COLUMN: DOWNLOAD CENTER FOR B2B TERMS */}
      <div className="lg:col-span-5 space-y-6">
        <div className="rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <div className="border-b border-slate-100 pb-4 mb-6">
            <h3 className="font-display text-lg font-extrabold text-slate-950">
              Download-Center (BGB / HGB)
            </h3>
            <p className="text-xs text-slate-500 font-mono uppercase tracking-wide">
              Vertragliche Geschäftsbedingungen
            </p>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed mb-6">
            Wir legen Wert auf transparente Verträge nach deutschem Wirtschaftsrecht. Laden Sie unsere freigegebenen vertragsrechtlichen Allgemeine Einkaufs-, Liefer- und Zahlungsbedingungen als offizielle PDF-Dokumente herunter.
          </p>

          <div className="space-y-4">
            {CONTRACT_DOCUMENTS.map((doc) => (
              <div 
                key={doc.id}
                className="group relative rounded-lg border border-slate-200 hover:border-blue-200 bg-slate-50 hover:bg-white p-4.5 transition-all flex items-start gap-4 cursor-pointer"
                onClick={() => triggerDownloadSimulation(doc.titleDe)}
              >
                <div className="rounded bg-rose-50 text-rose-700 p-2.5 shrink-0 border border-rose-100 group-hover:bg-rose-100 transition-colors">
                  <FileText className="h-5 w-5" />
                </div>
                
                <div className="space-y-1 flex-1">
                  <h4 className="font-display font-bold text-slate-950 text-xs md:text-sm leading-snug group-hover:text-blue-700 transition-colors">
                    {doc.titleDe}
                  </h4>
                  <p className="font-mono text-[10px] text-slate-400">
                    {doc.titleEn}
                  </p>
                  <div className="flex items-center gap-2 pt-1 text-[10px] text-slate-500 font-mono">
                    <span className="rounded bg-slate-200/60 px-1.5 py-0.5 text-slate-600 font-semibold uppercase">PDF</span>
                    <span>Größe: {doc.fileSize}</span>
                  </div>
                </div>

                <div className="rounded-full p-1.5 bg-white border border-slate-200 text-slate-500 group-hover:text-blue-700 group-hover:border-blue-200 transition-colors shrink-0">
                  <Download className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-yellow-200 bg-yellow-50/60 p-4 text-xs leading-relaxed text-slate-700 border-l-4 border-l-yellow-600">
            <strong>Hinweis für System-Auditoren:</strong> Alle hier deponierten Einkaufs- und Lieferbedingungen sind in deutscher und englischer Sprache rechtssicher aufeinander abgestimmt. Sonderabreden im Rahmen langfristiger Rahmenlieferverträge sind mit der Geschäftsführung abzustimmen.
          </div>
        </div>

        {/* Audit assurance badge card */}
        <div className="rounded-xl border border-slate-200/60 bg-gradient-to-br from-slate-900 to-slate-950 p-6 md:p-8 text-white relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 font-sans text-8xl font-black select-none pointer-events-none translate-x-5 translate-y-5">
            100%
          </div>
          <h4 className="font-display font-bold text-base">Zertifizierte Liefersicherheit</h4>
          <p className="mt-2 text-xs text-slate-400 leading-relaxed">
            MBR GmbH arbeitet ausschließlich mit nach TÜV AD 2000-W0 und IATF 16949 zertifizierten Betrieben zusammen. Damit belegen wir die vollständige Probenreinheit und Maßhaltigkeit für sicherheitsrelevante Bauteile im Hochdruck- und Transportwesen.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-[10px] font-mono font-bold text-slate-300">
            <span className="rounded bg-slate-800 px-2 py-0.5 border border-slate-700">TÜV SÜD / NORD</span>
            <span className="rounded bg-slate-800 px-2 py-0.5 border border-slate-700">ISO 9001:2015</span>
            <span className="rounded bg-slate-850 px-2 py-0.5 border border-slate-700">IATF 16949</span>
            <span className="rounded bg-slate-850 px-2 py-0.5 border border-slate-700">DIN EN 10204 APZ</span>
          </div>
        </div>
      </div>

    </div>
  );
};
