'use client'
import { useState, useEffect, useRef } from 'react'
import { createClient } from '@/lib/hub/client'
import { Play, Square, Clock } from 'lucide-react'

interface TimeEntry {
  id: string
  started_at: string
  stopped_at: string | null
  duration_minutes: number | null
  description: string | null
}

export default function TimerTab({ projectId }: { projectId: string }) {
  const [entries, setEntries] = useState<TimeEntry[]>([])
  const [running, setRunning] = useState(false)
  const [activeId, setActiveId] = useState<string | null>(null)
  const [elapsed, setElapsed] = useState(0)
  const [description, setDescription] = useState('')
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    loadEntries()
  }, [])

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => setElapsed(e => e + 1), 1000)
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [running])

  async function loadEntries() {
    const supabase = createClient()
    const { data } = await supabase
      .from('time_entries')
      .select('*')
      .eq('project_id', projectId)
      .order('started_at', { ascending: false })
      .limit(20)
    setEntries(data ?? [])
  }

  async function startTimer() {
    const supabase = createClient()
    const { data } = await supabase
      .from('time_entries')
      .insert({ project_id: projectId, description: description.trim() || null })
      .select('id')
      .single()
    if (data) {
      setActiveId(data.id)
      setElapsed(0)
      setRunning(true)
    }
  }

  async function stopTimer() {
    if (!activeId) return
    const supabase = createClient()
    const duration = Math.round(elapsed / 60)
    await supabase
      .from('time_entries')
      .update({ stopped_at: new Date().toISOString(), duration_minutes: duration })
      .eq('id', activeId)
    setRunning(false)
    setActiveId(null)
    setElapsed(0)
    setDescription('')
    loadEntries()
  }

  const totalMinutes = entries.reduce((sum, e) => sum + (e.duration_minutes ?? 0), 0)

  return (
    <div>
      {/* Timer control */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 mb-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-3xl font-mono text-white tabular-nums">{fmt(elapsed)}</div>
          {running && <span className="flex items-center gap-1 text-xs text-emerald-400"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />Läuft</span>}
        </div>

        {!running && (
          <input
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && startTimer()}
            placeholder="Woran arbeitest du? (optional)"
            className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 mb-3"
          />
        )}

        <button
          onClick={running ? stopTimer : startTimer}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            running
              ? 'bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/20'
              : 'bg-white text-zinc-950 hover:bg-zinc-100'
          }`}
        >
          {running ? <><Square size={14} /> Stopp</> : <><Play size={14} /> Start</>}
        </button>
      </div>

      {/* Total */}
      <div className="flex items-center gap-2 text-sm text-zinc-400 mb-4">
        <Clock size={14} />
        Gesamt: <span className="text-white font-medium">{fmtHours(totalMinutes)}</span>
      </div>

      {/* Entries */}
      <div className="flex flex-col gap-2">
        {entries.map(e => (
          <div key={e.id} className="flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm">
            <div>
              <span className="text-white">{e.description ?? '–'}</span>
              <span className="text-zinc-600 text-xs ml-2">{new Date(e.started_at).toLocaleDateString('de-DE')}</span>
            </div>
            <span className="text-zinc-400 tabular-nums">
              {e.duration_minutes != null ? fmtHours(e.duration_minutes) : <span className="text-emerald-400">läuft</span>}
            </span>
          </div>
        ))}
        {entries.length === 0 && <p className="text-sm text-zinc-600">Noch keine Zeiteinträge.</p>}
      </div>
    </div>
  )
}

function fmt(seconds: number) {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60
  return `${pad(h)}:${pad(m)}:${pad(s)}`
}

function fmtHours(minutes: number) {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return m > 0 ? `${h}h ${m}m` : `${h}h`
}

function pad(n: number) {
  return n.toString().padStart(2, '0')
}
