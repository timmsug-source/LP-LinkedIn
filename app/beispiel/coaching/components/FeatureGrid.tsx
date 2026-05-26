'use client'
import { motion } from 'motion/react'
import { Apple, Dumbbell, Sparkles, MessageSquareHeart } from 'lucide-react'

export default function FeatureGrid() {
  const features = [
    {
      icon: <Apple className="w-6 h-6 text-gold-500" />,
      title: 'Smarte Business-Nutrition',
      description: 'Keine Beißhemmungen oder starre Essenspläne. Sie lernen ein praxiserprobtes System, mit dem Sie Geschäftsessen, Restaurantbesuche und Hotelküche strategisch so nutzen, dass der Fettabbau automatisch weiterläuft.',
      badge: '100% Restauranttauglich'
    },
    {
      icon: <Dumbbell className="w-6 h-6 text-gold-500" />,
      title: 'Hocheffizientes Training',
      description: 'Zweimal wöchentlich 45 Minuten genügen vollkommen. Keine stundenlangen Ausdauereinheiten. Wir setzen auf hochintensive Reize unter modernster anatomischer Anleitung, die maximale Ergebnisse in Rekordzeit garantieren.',
      badge: '2x 45 Minuten pro Woche'
    },
    {
      icon: <MessageSquareHeart className="w-6 h-6 text-gold-500" />,
      title: '1:1 Executive Support',
      description: 'Ihr Alltagsstress ist hoch. Deshalb erhalten Sie tägliches Backup: Per WhatsApp analysieren wir Ihre Kantinenfotos, steuern Workouts flexibel um und halten Ihre Motivation hoch. Sie delegieren den Fitness-Aufwand an mich.',
      badge: 'Täglicher WhatsApp-Support'
    }
  ]

  return (
    <section id="system" className="py-16 sm:py-24 px-4 bg-zinc-950/40 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gold-500/5 blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10 space-y-10 sm:space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono text-gold-500 uppercase tracking-widest block font-bold">Die ML-Coaching Methode</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Das System für vielbeschäftigte Leistungsträger.
          </h2>
          <p className="text-gray-400 font-sans text-base leading-relaxed">
            Standardpläne funktionieren nicht in einem Alltag mit vollen Terminkalendern und Deadlines. Deswegen baut meine Coaching-Philosophie auf drei absolut flexiblen Säulen auf:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 hover:border-gold-500/30 transition-all duration-300 p-6 sm:p-8 rounded-xl flex flex-col justify-between group cursor-default"
            >
              <div className="space-y-6">
                <div className="bg-gold-500/10 w-12 h-12 rounded-lg flex items-center justify-center border border-gold-500/20 group-hover:bg-gold-500/20 group-hover:border-gold-500/40 transition-all duration-300">
                  {feature.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-gold-500 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-400 font-sans text-sm leading-relaxed font-light">{feature.description}</p>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-zinc-800/60">
                <span className="inline-block bg-zinc-950 text-gold-500 font-mono text-[11px] px-2.5 py-1 rounded-md tracking-wider">{feature.badge}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="border border-zinc-800 bg-zinc-900/40 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <span className="bg-gold-500/10 text-gold-500 p-2.5 rounded-lg border border-gold-500/20 shrink-0">
              <Sparkles className="w-5 h-5 text-gold-500" />
            </span>
            <p className="text-sm text-gray-400 font-sans leading-relaxed text-left">
              <strong className="text-white">Zertifiziert & Alltagsgeprüft:</strong> Jede Strategie wird wöchentlich auf Ihre private Terminsituation (Meetings, Reisen, Events) angepasst. Sie lernen Fitness ohne Verzichtsgefühle.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
