'use client'
import { Star, Shield, Award, MapPin, Heart, CheckCircle2 } from "lucide-react";
import { PRACTITIONERS, TESTIMONIALS } from "../data";

interface AboutUsProps {
  onScheduleCall: () => void;
}

export default function AboutUs({ onScheduleCall }: AboutUsProps) {
  return (
    <section className="py-20 bg-brand-beige" id="about-us-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1 border border-brand-sage-pale px-3 py-1 rounded-full text-[10px] uppercase font-mono tracking-widest text-brand-sage-light">
            <Heart className="w-3.5 h-3.5" />
            <span>Deine Heilpraktiker</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-sage tracking-tight">
            Wir sind das Team Brenscheidt
          </h2>
          <p className="text-base text-brand-charcoal/80 leading-relaxed font-sans">
            In unserer Naturheilpraxis in Leichlingen &amp; Witzhelden begleiten wir dich Hand in Hand. Wir stehen für eine ganzheitliche Medizin, die wissenschaftlich-diagnostische Sorgfalt mit tiefgehender naturheilkundlicher Erfahrung verbindet.
          </p>
        </div>

        {/* Practitioner Grid cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {PRACTITIONERS.map((hp) => (
            <div 
              key={hp.name} 
              className="flex flex-col bg-white rounded-2xl overflow-hidden border border-brand-sage-pale hover:shadow-lg transition-transform hover:-translate-y-1 duration-300"
              id={`hp-card-${hp.name.toLowerCase().replace(/\s/g, "-")}`}
            >
              <div className="aspect-[3/2] w-full overflow-hidden bg-gray-100 relative">
                <img 
                  src={hp.image} 
                  alt={hp.name} 
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs uppercase tracking-widest font-mono text-brand-cream">{hp.role}</p>
                  <h3 className="font-serif text-2xl font-bold">{hp.name}</h3>
                </div>
              </div>
              <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                <p className="text-sm text-brand-charcoal/80 font-sans leading-relaxed italic">
                  &ldquo;{hp.bio}&rdquo;
                </p>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-sage border-b border-brand-sage-pale pb-2">
                    Schwerpunkte in der Praxis:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-brand-charcoal/90">
                    {hp.specialties.map((spec) => (
                      <li key={spec} className="flex items-center space-x-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-terracotta shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Values / Trust Section */}
        <div className="bg-brand-cream rounded-2xl border border-brand-sage-pale p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-24">
          <div className="lg:col-span-4 space-y-3">
            <h3 className="font-serif text-2xl font-bold text-brand-sage">
              Unsere Praxisphilosophie
            </h3>
            <p className="text-xs text-brand-sage-light uppercase tracking-wider font-mono">
              Geprägt von Achtsamkeit &amp; Expertise
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: <Shield className="w-6 h-6 text-brand-terracotta" />,
                title: "Zeit für Diagnostik",
                desc: "Wir hören dir zu. Im ausführlichen Erstgespräch betrachten wir deine Lebensgewohnheiten und gesamte Krankheitsgeschichte."
              },
              {
                icon: <Award className="w-6 h-6 text-brand-terracotta" />,
                title: "Ganzheitlichkeit",
                desc: "Symptome sind Wegweiser, nicht das Endziel. Wir suchen die Ursache im harmonischen Gefüge von Körper, Geist und Nerven."
              },
              {
                icon: <MapPin className="w-6 h-6 text-brand-terracotta" />,
                title: "Zweifacher Standort",
                desc: "Gut erreichbar zwischen Leichlingen und Witzhelden. Eine ruhige Oase zum Entspannen und Heilen im Bergischen Land."
              }
            ].map((v, i) => (
              <div key={i} className="space-y-2">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                  {v.icon}
                </div>
                <h4 className="text-sm font-bold text-brand-sage">{v.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h3 className="font-serif text-2xl font-bold text-brand-sage">
              Das sagen unsere Patientinnen &amp; Patienten
            </h3>
            <p className="text-xs text-brand-sage-light uppercase tracking-wider font-mono">
              Erfahrungsberichte aus der Praxis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div 
                key={t.id} 
                className="bg-white p-6 rounded-2xl border border-brand-sage-pale relative flex flex-col justify-between"
                id={`testimonial-${t.id}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-0.5 text-yellow-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-brand-sage font-semibold uppercase tracking-wider font-mono">
                    {t.condition}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed font-sans italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-brand-sage-pale flex justify-between items-center">
                  <span className="text-xs font-bold text-brand-sage">{t.name}</span>
                  <span className="text-[10px] font-mono text-brand-sage-light">Verifizierter Patient</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={onScheduleCall}
            className="px-6 py-3 bg-brand-sage hover:bg-brand-sage-light text-brand-beige font-serif font-semibold text-sm rounded-xl tracking-wide shadow-md cursor-pointer inline-flex items-center gap-2"
            id="about-bottom-cta"
          >
            <span>Jetzt Beratungsgespräch anfragen</span>
          </button>
        </div>

      </div>
    </section>
  );
}
