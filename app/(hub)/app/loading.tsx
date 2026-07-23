export default function Loading() {
  return (
    <div className="p-8 lg:p-10 max-w-5xl mx-auto animate-pulse">
      <div className="h-3 w-28 bg-white/[0.06] rounded mb-2" />
      <div className="h-8 w-40 bg-white/[0.08] rounded mb-8" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-20 rounded-2xl border border-white/[0.06] bg-white/[0.02]" />
        ))}
      </div>
      <div className="h-4 w-40 bg-white/[0.05] rounded mb-4" />
      <div className="grid sm:grid-cols-2 gap-4">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="h-36 rounded-2xl border border-white/[0.06] bg-white/[0.02]" />
        ))}
      </div>
    </div>
  )
}
