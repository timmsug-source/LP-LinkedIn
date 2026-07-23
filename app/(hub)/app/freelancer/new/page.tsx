'use client'
import { useState } from 'react'
import { createClient } from '@/lib/hub/client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NewProjectPage() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [clientName, setClientName] = useState('')
  const [status, setStatus] = useState<'active' | 'paused' | 'done'>('active')
  const [notes, setNotes] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleCreate = async () => {
    if (!title.trim()) { setError('Titel ist Pflichtfeld.'); return }
    setLoading(true)
    setError('')
    const supabase = createClient()
    const { data, error: err } = await supabase
      .from('projects')
      .insert({ title: title.trim(), client_name: clientName.trim() || null, status, notes: notes.trim() || null })
      .select('id')
      .single()
    if (err) {
      setError('Fehler beim Speichern.')
      setLoading(false)
      return
    }
    router.push(`/app/freelancer/${data.id}`)
  }

  return (
    <div className="p-8 max-w-xl">
      <Link href="/app/freelancer" className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-white mb-6 transition-colors">
        <ArrowLeft size={14} />
        Zurück
      </Link>

      <h1 className="text-xl font-semibold text-white mb-6">Neues Projekt</h1>

      <div className="flex flex-col gap-5">
        <Field label="Projekttitel *">
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="z.B. SEO-Audit für Müller GmbH"
            className="input"
          />
        </Field>

        <Field label="Kunde">
          <input
            type="text"
            value={clientName}
            onChange={e => setClientName(e.target.value)}
            placeholder="Kundenname"
            className="input"
          />
        </Field>

        <Field label="Status">
          <select
            value={status}
            onChange={e => setStatus(e.target.value as 'active' | 'paused' | 'done')}
            className="input"
          >
            <option value="active">Aktiv</option>
            <option value="paused">Pausiert</option>
            <option value="done">Abgeschlossen</option>
          </select>
        </Field>

        <Field label="Notizen">
          <textarea
            value={notes}
            onChange={e => setNotes(e.target.value)}
            placeholder="Beschreibung, Ziele, Kontext..."
            rows={4}
            className="input resize-none"
          />
        </Field>

        {error && <p className="text-sm text-red-400">{error}</p>}

        <button
          onClick={handleCreate}
          disabled={loading}
          className="bg-white text-zinc-950 rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-zinc-100 transition-colors disabled:opacity-50"
        >
          {loading ? 'Wird gespeichert...' : 'Projekt anlegen'}
        </button>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          background: #09090b;
          border: 1px solid #3f3f46;
          border-radius: 8px;
          padding: 8px 12px;
          font-size: 14px;
          color: #fff;
          outline: none;
          transition: border-color .15s;
        }
        .input:focus { border-color: #71717a; }
        .input::placeholder { color: #52525b; }
        select.input option { background: #09090b; }
      `}</style>
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-zinc-400">{label}</label>
      {children}
    </div>
  )
}
