'use client'
import { ArrowRight, Sparkles, CheckCircle, Heart } from "lucide-react";

interface HeroProps {
  onScheduleCall: () => void;
  onNavigateToTherapy: (therapyId: string) => void;
}

export default function Hero({ onScheduleCall, onNavigateToTherapy }: HeroProps) {
  return (
    <div className="relative overflow-hidden bg-brand-cream py-16 sm:py-24 border-b border-brand-sage-pale" id="home-hero">
      {/* Absolute decorative blurred background blobs to make it Next.js feel */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 rounded-full bg-brand-sage-pale/45 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 rounded-full bg-brand-terracotta/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Tagline Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8" id="hero-tagline-col">
            <div className="inline-flex items-center space-x-2 bg-brand-sage/10 text-brand-sage px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Praxis für ganzheitliche Naturheilkunde</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[46px] font-bold tracking-tight text-brand-sage leading-[1.15]">
              Ganzheitliche Hilfe bei <span className="underline decoration-brand-terracotta decoration-2 underline-offset-4">Augenerkrankungen</span>, Stress &amp; Wirbelsäule
            </h1>

            <p className="text-base sm:text-lg text-brand-charcoal/80 leading-relaxed font-sans max-w-2xl">
              In unserer Naturheilpraxis in Leichlingen / Witzhelden begleiten wir dich achtsam und individuell. Wir kombinieren jahrzehntelange Praxiserfahrung mit spezialisierten Naturheilverfahren wie der <strong>Augenakupunktur bei Makuladegeneration (AMD)</strong> und sanfter <strong>Hypnosetherapie</strong>.
            </p>

            {/* Specialties icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                { label: "Akupunktur bei AMD", desc: "Augenerkrankungen ganzheitlich behandeln", path: "akupunktur-makuladegeneration" },
                { label: "Medizinische Hypnose", desc: "Mentalen Stress & Blockaden lösen", path: "hypnosetherapie" },
                { label: "Wirbelsäulentherapie", desc: "Sanfter Dorn-Breuss Gelenkausgleich", path: "wirbelsaeulentherapie" },
                { label: "Shiatsu Körpertherapie", desc: "Tiefenentspannung & Meridianenergie", path: "shiatsu" }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  onClick={() => onNavigateToTherapy(item.path)}
                  className="flex items-start space-x-3 p-3 bg-white hover:bg-brand-sage-pale/25 border border-brand-sage-pale rounded-xl cursor-pointer transition-all duration-300"
                  id={`hero-spec-card-${idx}`}
                >
                  <div className="w-8 h-8 rounded-full bg-brand-sage-pale/50 flex items-center justify-center shrink-0">
                    <Heart className="w-4 h-4 text-brand-sage" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-xs font-bold text-brand-sage leading-tight m-0">{item.label}</p>
                    <p className="text-[11px] text-gray-500 leading-tight m-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Clean action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onScheduleCall}
                className="px-6 py-3.5 bg-brand-sage text-brand-beige font-semibold rounded-xl text-sm shadow-md hover:bg-brand-sage-light transition-all duration-300 hover:translate-y-[-1px] cursor-pointer"
                id="hero-schedule-btn"
              >
                <div className="flex items-center justify-center space-x-2">
                  <span>Erstgespräch vereinbaren</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
              <button
                onClick={() => onNavigateToTherapy("akupunktur-makuladegeneration")}
                className="px-6 py-3.5 border-2 border-brand-sage-light text-brand-sage hover:bg-brand-sage-pale/40 font-semibold rounded-xl text-sm transition-all duration-300 cursor-pointer"
                id="hero-therapy-btn"
              >
                Augentherapie kennenlernen
              </button>
            </div>

            {/* Soft promise badges */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs text-brand-sage-light">
              <div className="flex items-center space-x-1.5">
                <CheckCircle className="w-4 h-4 text-brand-terracotta" />
                <span>Privat &amp; Selbstzahler</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle className="w-4 h-4 text-brand-terracotta" />
                <span>Ganzheitliche Begleitung</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle className="w-4 h-4 text-brand-terracotta" />
                <span>Individuelle Termingarantie</span>
              </div>
            </div>
          </div>

          {/* Picture Column */}
          <div className="lg:col-span-5 relative" id="hero-image-col">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Aesthetic border frame behind image */}
              <div className="absolute inset-0 border border-brand-sage rounded-2xl transform translate-x-4 translate-y-4 pointer-events-none" />
              
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-brand-sage-pale bg-white">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop"
                  alt="Ganzheitliche Naturheilkunde Behandlung"
                  className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/5] object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/40 to-transparent pointer-events-none" />
                
                {/* Float Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-brand-sage-pale shadow-md">
                  <div className="flex items-center space-x-3">
                    <div className="flex -space-x-2">
                      <img
                        src="/Heike_Klaus.jpg"
                        alt="Klaus Brenscheidt"
                        className="w-8 h-8 rounded-full border border-white object-cover"
                        style={{ objectPosition: '35% top' }}
                      />
                      <img
                        src="/Heike_Klaus.jpg"
                        alt="Heike Brenscheidt"
                        className="w-8 h-8 rounded-full border border-white object-cover"
                        style={{ objectPosition: '65% top' }}
                      />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-brand-sage font-serif">Klaus &amp; Heike Brenscheidt</span>
                      <span className="block text-[10px] text-gray-500">Über 25 Jahre Praxiserfahrung</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
