'use client'
import { motion } from 'motion/react'
import { ShieldCheck, Award } from 'lucide-react'

export default function CoachBio() {
  return (
    <section className="py-24 px-4 bg-zinc-950 relative" id="coach">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 p-1 bg-zinc-900/40">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600&auto=format&fit=crop"
              alt="Marc Lindner - Executive Performance Coach"
              referrerPolicy="no-referrer"
              className="w-full h-[450px] object-cover rounded-xl filter grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-zinc-950/90 backdrop-blur-md p-4 rounded-lg border border-gold-500/20">
              <span className="text-xs font-mono text-gold-500 uppercase tracking-widest block font-bold">Philosophie</span>
              <p className="text-xs text-gray-300 font-sans leading-relaxed mt-1">
                &ldquo;Ihr Training muss sich Ihrem Leben anpassen – nicht Ihr Leben dem Training.&rdquo;
              </p>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gold-500/5 rounded-full blur-[80px] -z-10 pointer-events-none" />
        </motion.div>

        <div className="lg:col-span-7 space-y-8 text-left">
          <div className="space-y-3">
            <span className="text-xs font-mono text-gold-500 uppercase tracking-widest block font-bold">Der Coach</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Über Marc Lindner</h2>
            <p className="text-gray-300 font-sans text-base leading-relaxed font-light">Executive Personaltrainer & Wissenschaftler im Bereich Sporternährung</p>
          </div>

          <div className="space-y-4 text-gray-400 font-sans text-sm sm:text-base leading-relaxed font-light text-left">
            <p>„In meiner jahrelangen Praxis als Personal Trainer habe ich eine Sache immer wieder beobachtet: Vielbeschäftigte Unternehmer scheitern an herkömmlichen Fitnessprogrammen nicht wegen mangelnder Disziplin, sondern wegen <strong className="text-white">fehlender Praxistauglichkeit</strong>."</p>
            <p>„Die meisten Pläne verlangen von Ihnen, dass Sie täglich stundenlang kochen, Shaker ins Meeting schleppen oder abends um 21 Uhr noch zwei Stunden Hanteln schwingen. Das ist in einer 50-60h Woche einfach unmöglich und führt schnell zum Abbruch."</p>
            <p>„Genau dafür habe ich die <strong className="text-gold-500">ML-Coaching Methode</strong> entwickelt. Ich übernehme das lästige Planen, Berechnen und Koordinieren. Sie bekommen einen maßgeschneiderten Bauplan, der sich sekundenschnell an Meetings, Reisen und späte Geschäftsessen anpasst. Wir erzielen maximale Ergebnisse bei minimalem Zeitaufwand."</p>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-4 border-t border-zinc-900">
            <div className="flex items-start gap-3">
              <div className="bg-gold-500/10 p-2 rounded-lg border border-gold-500/20 mt-1">
                <Award className="w-5 h-5 text-gold-500" />
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-white leading-normal">Lizenziert & Erprobt</h4>
                <p className="text-xs text-gray-500 font-sans mt-0.5 leading-relaxed">Mehrfach zertifizierter Coach & Sporternährungs-Experte.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-gold-500/10 p-2 rounded-lg border border-gold-500/20 mt-1">
                <ShieldCheck className="w-5 h-5 text-gold-500" />
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-white leading-normal">100% Diskretion</h4>
                <p className="text-xs text-gray-500 font-sans mt-0.5 leading-relaxed">Höchste Vertraulichkeit bei der Betreuung von Vorständen.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
