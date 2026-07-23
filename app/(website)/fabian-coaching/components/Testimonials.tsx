'use client'

import { motion } from "motion/react";
import { Star, Quote, Award } from "lucide-react";
import { Testimonial } from "../types";

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Falk F.",
      role: "Informatiker",
      tagline: "13 kg verloren & neuer Spaß am Training",
      rating: 5,
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
      text: "Ich bin dem Coaching von Fabian vor 3 Monaten beigetreten und muss sagen ich bin begeistert. In dieser Zeit habe ich 13 kg abgenommen und meine Ernährungsgewohnheiten haben sich massiv verbessert. Abgesehen von der Tatsache, dass mir gesunde Ernährung zunehmend mehr Spaß macht, hat Fabian mir auch dabei geholfen, meine Technik im Gym zu verbessern. Das Training fühlt sich nun viel produktiver an und ich freue mich jedes Mal auf das Training. Das Coaching kann ich wirklich jedem ans Herz legen, der Unterstützung bei seiner Ernährung und im Sport braucht!"
    },
    {
      name: "Matthias K.",
      role: "Director Global Service",
      tagline: "Nachhaltiger Fettabbau auf Geschäftsreisen",
      rating: 5,
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
      text: "Mein Ziel war von Anfang an klar: Körperfettreduktion bei gleichzeitigem Muskelerhalt – nachhaltig und alltagstauglich. Keine Crashdiäten, keine kurzfristigen Extremmaßnahmen, sondern ein langfristiger Ansatz, der sich realistisch in den Alltag integrieren lässt. Genau das bietet Fabian Schönle mit Fuel. Training und Ernährung sind individuell abgestimmt, strukturiert und flexibel - auch dann, wenn sich der Alltag kurzfristig ändert. Besonders positiv ist seine ständige Erreichbarkeit und die Fähigkeit, pragmatische Lösungen zu finden, z. B. bei Geschäftsreisen oder im Urlaub."
    },
    {
      name: "Robert R.",
      role: "Finanzberater",
      tagline: "Effizient zum Ziel ohne Jojo-Effekte",
      rating: 5,
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
      text: "Ich bin sehr zufrieden mit der Unterstützung von Fabian. Seine Tipps sind präzise und effizient und helfen mit geringem Aufwand die gesteckten Ziele zu erreichen. Gleichzeitig nimmt er sich die Zeit für Fragen, Hilfestellung und gemeinsamen Austausch. Er ist sehr zuvorkommend und passt sein Coaching individuell an die eigenen Ziele an. Dadurch konnte ich meine Ziele sehr schnell erreichen. Daher kann ich Fabian nur empfehlen."
    }
  ];

  return (
    <section id="about" className="py-24 text-slate-900 relative" style={{ background: '#faf7f2' }}>
      <div className="absolute top-0 inset-x-0 h-10 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(2,6,23,0.1), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold font-mono tracking-widest uppercase rounded mb-4"
            style={{ background: 'rgba(193,168,123,0.15)', color: '#aa9163' }}>
            <Award size={14} />
            <span>Kundenstimmen / Resultate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-sans mb-4">
            Was Teilnehmer der F.U.E.L. - Methode sagen
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium max-w-xl mx-auto">
            Echte Resultate von echten Unternehmern und Fachkräften, die ihre Performance auf das nächste Level gehoben haben.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`flex flex-col justify-between p-8 bg-white border rounded-2xl shadow-xl relative overflow-hidden ${
                index === 1 ? "lg:scale-[1.03] lg:-translate-y-2" : ""
              }`}
              style={{
                borderColor: index === 1 ? 'rgba(193,168,123,0.2)' : 'rgba(193,168,123,0.1)',
                boxShadow: index === 1 ? '0 20px 40px rgba(193,168,123,0.08), 0 0 0 1px rgba(193,168,123,0.2)' : '0 20px 40px rgba(193,168,123,0.05)'
              }}
            >
              <div className="absolute top-4 right-4 pointer-events-none" style={{ color: 'rgba(193,168,123,0.1)' }}>
                <Quote size={80} className="stroke-[1]" />
              </div>

              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} size={16} style={{ fill: '#c1a87b', stroke: '#c1a87b' }} />
                  ))}
                </div>

                <h4 className="text-base sm:text-lg font-bold text-slate-950 mb-3 tracking-tight font-sans">
                  &ldquo;{test.tagline}&rdquo;
                </h4>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  {test.text}
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-100 mt-auto">
                <div className="w-11 h-11 rounded-full overflow-hidden border bg-slate-100 shrink-0"
                  style={{ borderColor: 'rgba(193,168,123,0.3)' }}>
                  <img
                    src={test.avatarUrl}
                    alt={test.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h5 className="font-bold text-slate-950 text-sm sm:text-base leading-tight">{test.name}</h5>
                  <p className="font-semibold text-xs mt-0.5" style={{ color: '#aa9163' }}>{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
