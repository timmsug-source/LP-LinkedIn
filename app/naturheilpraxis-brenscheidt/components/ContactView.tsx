'use client'
import { Phone, Mail, MapPin, Clock, Info, ShieldCheck, Car, Bus } from "lucide-react";
import BookingForm from "./BookingForm";

export default function ContactView() {
  return (
    <section className="py-12 sm:py-20 bg-brand-beige" id="contact-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest font-mono text-brand-sage-light">Gemeinsam für deine Gesundheit</span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-sage">
            Kontakt &amp; Terminvereinbarung
          </h1>
          <p className="text-sm sm:text-base text-brand-charcoal/80 max-w-xl mx-auto leading-relaxed">
            Hast du Fragen zu einer Behandlung oder möchtest du einen Termin vereinbaren? Trage dich einfach in unser Formular ein oder rufe uns an.
          </p>
        </div>

        {/* Form and info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Form left */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-brand-sage-pale shadow-sm">
            <BookingForm inline={true} />
          </div>

          {/* Quick info right */}
          <div className="lg:col-span-5 space-y-8" id="contact-info-panel">
            
            {/* Direct Connection Box */}
            <div className="bg-brand-sage text-brand-beige p-8 rounded-2xl border border-brand-sage-pale/20 space-y-6">
              <h2 className="font-serif text-xl sm:text-2xl font-bold">Direkter Draht zu uns</h2>
              <p className="text-xs text-brand-sage-pale leading-relaxed">
                Unsere telefonische Praxis-Hotline ist ansprechbar. Sollten wir einmal im Patientengespräch sein, hinterlasse einfach deinen Namen und deine Rufnummer auf unserem Anrufbeantworter – wir rufen dich umgehend zurück.
              </p>

              <div className="space-y-4 pt-2">
                <a 
                  href="tel:02174748200" 
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/15 p-4 rounded-xl transition-all cursor-pointer group"
                  id="direct-phone-call"
                >
                  <Phone className="w-5 h-5 text-brand-terracotta shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-brand-sage-pale">Telefonnummer</span>
                    <span className="block text-base font-bold group-hover:text-brand-terracotta transition-colors">02174 / 748200</span>
                  </div>
                </a>

                <a 
                  href="mailto:info@naturheilpraxis-brenscheidt.de" 
                  className="flex items-center gap-3 bg-white/10 hover:bg-white/15 p-4 rounded-xl transition-all cursor-pointer group"
                  id="direct-email-send"
                >
                  <Mail className="w-5 h-5 text-brand-terracotta shrink-0" />
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-brand-sage-pale">E-Mail-Adresse</span>
                    <span className="block text-sm font-semibold truncate group-hover:text-brand-terracotta transition-colors">info@naturheilpraxis-brenscheidt.de</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Address & Parking info */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-brand-sage-pale space-y-6">
              <h3 className="font-serif text-lg font-bold text-brand-sage flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-terracotta shrink-0" />
                Anfahrt &amp; Parken
              </h3>

              <div className="text-sm text-brand-charcoal/80 space-y-4 font-sans">
                <p>
                  Unsere Praxis liegt malerisch und ruhig im Kern von <strong>Witzhelden (Leichlingen)</strong> im Bergischen Land.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-2.5">
                    <Car className="w-4 h-4 text-brand-sage shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-bold text-xs text-brand-sage">Mit dem PKW:</span>
                      <p className="text-xs text-gray-500">
                        Kostenfreie Patientenparkplätze befinden sich direkt im Ortskern vor der Praxis oder an der nahen evangelischen Kirche (nur 1 Gehminute entfernt).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Bus className="w-4 h-4 text-brand-sage shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-bold text-xs text-brand-sage">Mit dem Bus:</span>
                      <p className="text-xs text-gray-500">
                        Die Haltestelle &ldquo;Witzhelden Busbahnhof&rdquo; liegt ca. 150m Fußweg entfernt. Busverbindungen bestehen nach Leichlingen Bahnhof, Solingen und Leverkusen-Opladen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Patient Trust card */}
              <div className="bg-brand-cream border border-brand-sage-pale/60 p-4 rounded-xl flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-green-700 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-bold text-green-800">Barrierefreier Zugang</span>
                  <p className="text-[11px] text-gray-600">
                    Unsere Räumlichkeiten sind ebenerdig und rollstuhlgerecht zugänglich, um dir deinen Besuch so sorglos wie möglich zu gestalten.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
