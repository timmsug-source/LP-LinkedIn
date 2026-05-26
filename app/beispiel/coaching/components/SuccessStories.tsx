'use client'
import { useState, useEffect, ReactNode } from 'react'
import { motion } from 'motion/react'
import { TrendingDown, ShieldCheck, HeartPulse, Quote, Trophy, Play, Pause, Volume2, Maximize2, CheckCircle2 } from 'lucide-react'

interface Story {
  id: string; name: string; role: string; achievement: string
  stats: { primary: string; secondary: string }
  feedback: string; metricIcon: ReactNode
  videoThumb: string; videoDuration: string
}

export default function SuccessStories() {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null)
  const [videoProgress, setVideoProgress] = useState<Record<string, number>>({})
  const [videoTimers, setVideoTimers] = useState<Record<string, string>>({})

  const stories: Story[] = [
    { id: 'michael', name: 'Dr. Michael S., 44', role: 'Chefarzt & Klinikdirektor', achievement: '14,5 kg verloren & fitter denn je', stats: { primary: '-14.5 kg', secondary: 'In 12 Wochen' }, feedback: '„Durch meine unregelmäßigen OP-Zeiten und Rufbereitschaften war geregeltes Essen unmöglich. Marc hat mir ein System gebaut, das komplett ohne Vorkochen auskommt. Ich bin heute schlanker als während des Studiums und habe spürbar mehr Fokus am OP-Tisch."', metricIcon: <TrendingDown className="w-5 h-5 text-gold-500" />, videoThumb: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop', videoDuration: '02:45' },
    { id: 'andreas', name: 'Andreas K., 39', role: 'Gründer & CEO Software-Konzern', achievement: 'Körperfett von 24% auf 13,2% gesenkt', stats: { primary: '-11 kg Bauchfett', secondary: 'In 90 Tagen' }, feedback: '„Ich hatte davor zwei herkömmliche Fitnesscoaches, die an meinen Reiseplänen gescheitert sind. Die ML-Methode hat mein Leben verändert. Wir steuern alles über WhatsApp, sodass ich selbst im Hotel in New York genau weiß, welche drei Handgriffe mich auf Kurs halten."', metricIcon: <ShieldCheck className="w-5 h-5 text-gold-500" />, videoThumb: 'https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&w=800&auto=format&fit=crop', videoDuration: '01:58' },
    { id: 'melanie', name: 'Melanie R., 35', role: 'M&A Partnerin WP-Kanzlei', achievement: 'Schmerzfreier Rücken & athletischer Core', stats: { primary: 'Schmerzfrei', secondary: 'Nach 4 Wochen' }, feedback: '„Trotz 12 Stunden Sitzen am Tag und hohem Druck konnte ich eine starke Core-Muskulatur aufbauen. Meine Rückenschmerzen sind komplett verschwunden. Das Training ist komprimiert, extrem effizient und macht den Kopf frei."', metricIcon: <HeartPulse className="w-5 h-5 text-gold-500" />, videoThumb: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800&auto=format&fit=crop', videoDuration: '03:12' }
  ]

  useEffect(() => {
    if (!playingVideoId) return
    const interval = setInterval(() => {
      setVideoProgress(prev => {
        const current = prev[playingVideoId] || 0
        if (current >= 100) { setPlayingVideoId(null); return { ...prev, [playingVideoId]: 0 } }
        return { ...prev, [playingVideoId]: current + 1.2 }
      })
      setVideoTimers(prev => {
        const dur = stories.find(s => s.id === playingVideoId)?.videoDuration || '02:00'
        const [m, s] = dur.split(':').map(Number)
        const total = m * 60 + s
        const cur = Math.floor(((videoProgress[playingVideoId] || 0) / 100) * total)
        const pad = (n: number) => n.toString().padStart(2, '0')
        return { ...prev, [playingVideoId]: `${pad(Math.floor(cur / 60))}:${pad(cur % 60)}` }
      })
    }, 100)
    return () => clearInterval(interval)
  }, [playingVideoId, videoProgress])

  const toggle = (id: string) => {
    if (playingVideoId === id) { setPlayingVideoId(null) }
    else { setPlayingVideoId(id); if (!videoProgress[id]) setVideoProgress(p => ({ ...p, [id]: 0 })) }
  }

  return (
    <section className="py-16 sm:py-24 px-4 bg-zinc-950/20 relative" id="success">
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10 space-y-10 sm:space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-mono text-gold-500 uppercase tracking-widest block font-bold">Nachgewiesene Resultate</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Interviews, die für sich sprechen.</h2>
          <p className="text-gray-400 font-sans text-sm sm:text-base">Echte Erfahrungsberichte von Unternehmern, Ärzten und Partnern.</p>
        </div>

        <div className="space-y-12">
          {stories.map((story, idx) => {
            const isPlaying = playingVideoId === story.id
            const progress = videoProgress[story.id] || 0
            const currentTime = videoTimers[story.id] || '00:00'
            return (
              <motion.div key={story.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6, delay: idx * 0.15 }} className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-zinc-700/60 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0 relative group">
                <div className="lg:col-span-6 relative h-[280px] sm:h-[380px] lg:h-auto bg-black flex items-center justify-center overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={story.videoThumb} alt={story.name} referrerPolicy="no-referrer" className={`w-full h-full object-cover transition-all duration-700 ${isPlaying ? 'scale-105 brightness-50' : 'grayscale contrast-[1.15] brightness-90 group-hover:brightness-100 group-hover:grayscale-0'}`} />
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
                    <span className="bg-zinc-950/80 backdrop-blur border border-zinc-800 text-[10px] font-mono text-gray-300 px-2.5 py-1 rounded">Performance Interview.mp4</span>
                    {isPlaying && <div className="flex items-center gap-1.5 bg-gold-500/90 text-black font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider animate-pulse"><span className="w-1.5 h-1.5 rounded-full bg-black block" />Live Player</div>}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <button onClick={() => toggle(story.id)} className={`w-16 h-16 rounded-full flex items-center justify-center backdrop-blur transition-all duration-350 cursor-pointer shadow-lg border ${isPlaying ? 'bg-zinc-950/80 border-gold-500 text-gold-400 hover:scale-105' : 'bg-gold-500 text-black border-transparent hover:scale-110'}`}>
                      {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/60 to-transparent p-5 pt-12 z-20 flex flex-col gap-3">
                    <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
                      <div className="bg-gold-500 h-full transition-all duration-100" style={{ width: `${progress}%` }} />
                    </div>
                    <div className="flex justify-between items-center text-[11px] font-mono text-gray-400">
                      <div className="flex items-center gap-2"><span>{isPlaying ? currentTime : '00:00'}</span> / <span>{story.videoDuration}</span></div>
                      <div className="flex items-center gap-3">
                        {isPlaying && <div className="flex gap-0.5 items-end h-3"><span className="w-0.5 bg-gold-500" style={{ height: '70%' }} /><span className="w-0.5 bg-gold-500" style={{ height: '40%' }} /><span className="w-0.5 bg-gold-500" style={{ height: '100%' }} /></div>}
                        <Volume2 className="w-3.5 h-3.5" /><Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 p-5 sm:p-8 lg:p-12 flex flex-col justify-between text-left relative">
                  <Quote className="w-16 h-16 text-gold-500/5 absolute top-8 right-12 pointer-events-none" />
                  <div className="space-y-6 relative z-10">
                    <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4">
                      <div className="flex items-center gap-2 bg-gold-500/10 border border-gold-500/25 px-3 py-1.5 rounded-lg">{story.metricIcon}<span className="text-xs font-mono text-gold-400 font-bold uppercase tracking-wider">Resultat: {story.stats.primary}</span></div>
                      <span className="text-xs font-mono text-gray-500 uppercase tracking-widest font-semibold">Verlauf: {story.stats.secondary}</span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-white font-sans text-sm sm:text-base lg:text-lg leading-relaxed italic font-light">{story.feedback}</p>
                      <span className="flex items-center gap-1.5 text-xs font-sans text-gold-500 mt-1 font-semibold"><CheckCircle2 className="w-3.5 h-3.5" />Erfolgreich zertifiziert im ML-System</span>
                    </div>
                  </div>
                  <div className="border-t border-zinc-800/80 my-6" />
                  <div className="flex justify-between items-center relative z-10">
                    <div><h4 className="font-display text-base font-bold text-white tracking-tight">{story.name}</h4><p className="text-xs text-gray-400 font-sans font-light mt-0.5">{story.role}</p></div>
                    <button onClick={() => toggle(story.id)} className="text-xs font-mono text-gold-500 hover:text-white flex items-center gap-1.5 group cursor-pointer">{isPlaying ? 'Video stoppen' : 'Interview abspielen'}<span className="group-hover:translate-x-1 transition-transform">→</span></button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <span className="bg-gold-500/10 p-3 rounded-xl border border-gold-500/20 shrink-0"><Trophy className="w-6 h-6 text-gold-500" /></span>
            <div className="space-y-1">
              <span className="block text-xs font-mono text-gold-500 uppercase tracking-widest font-semibold">ML Coaching Garantie</span>
              <p className="text-sm text-gray-400 font-sans font-light">Keine Knebelverträge. Unser gemeinsamer Erfolg beruht auf messbaren Resultaten. Wenn Sie sich an das vereinbarte System halten und keine Ergebnisse erzielen, coache ich Sie kostenlos weiter, bis Sie Ihr Ziel erreichen.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
