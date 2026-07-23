'use client'
import { useState } from 'react'
import { createClient } from '@/lib/hub/client'
import { Save } from 'lucide-react'

export default function NotesTab({ projectId, initialNotes }: { projectId: string; initialNotes: string | null }) {
  const [notes, setNotes] = useState(initialNotes ?? '')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  async function save() {
    setSaving(true)
    const supabase = createClient()
    await supabase.from('projects').update({ notes }).eq('id', projectId)
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="flex flex-col gap-3">
      <textarea
        value={notes}
        onChange={e => { setNotes(e.target.value); setSaved(false) }}
        placeholder="Projektnotizen, Kontext, Links, Todos..."
        rows={14}
        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-700 resize-none"
      />
      <div className="flex items-center gap-3">
        <button
          onClick={save}
          disabled={saving}
          className="flex items-center gap-2 bg-white text-zinc-950 rounded-lg px-4 py-2 text-sm font-medium hover:bg-zinc-100 transition-colors disabled:opacity-50"
        >
          <Save size={14} />
          {saving ? 'Speichert...' : 'Speichern'}
        </button>
        {saved && <span className="text-xs text-emerald-400">Gespeichert</span>}
      </div>
    </div>
  )
}
