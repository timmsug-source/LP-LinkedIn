export default function Loading() {
  return (
    <div className="p-8 lg:p-10 max-w-4xl mx-auto animate-pulse">
      <div className="h-3 w-20 bg-white/[0.06] rounded mb-3" />
      <div className="h-7 w-56 bg-white/[0.08] rounded mb-6" />
      <div className="flex gap-4 border-b border-white/[0.07] mb-6 pb-3">
        {['Inhalte', 'Bilder', 'Blog', 'Kommunikation'].map(t => (
          <div key={t} className="h-4 w-16 bg-white/[0.05] rounded" />
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="h-24 rounded-xl border border-white/[0.06] bg-white/[0.02]" />
        ))}
      </div>
    </div>
  )
}
