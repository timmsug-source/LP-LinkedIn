'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@/lib/hub/client'
import { Plus, Trash2 } from 'lucide-react'

interface Invoice {
  id: string
  number: string | null
  amount: number | null
  issued_on: string | null
  due_on: string | null
  status: 'offen' | 'bezahlt' | 'ueberfaellig'
  note: string | null
}

const STATUS: Record<Invoice['status'], { label: string; cls: string }> = {
  offen:         { label: 'Offen',       cls: 'bg-amber-500/10 text-amber-400' },
  bezahlt:       { label: 'Bezahlt',     cls: 'bg-emerald-500/10 text-emerald-400' },
  ueberfaellig:  { label: 'Überfällig',  cls: 'bg-red-500/10 text-red-400' },
}
const STATUS_ORDER: Invoice['status'][] = ['offen', 'bezahlt', 'ueberfaellig']

export default function InvoicesTab({ projectId }: { projectId: string }) {
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [adding, setAdding] = useState(false)
  const [form, setForm] = useState({ number: '', amount: '', issued_on: '', due_on: '', status: 'offen' as Invoice['status'], note: '' })
  const [saving, setSaving] = useState(false)

  useEffect(() => { load() }, [])

  async function load() {
    const supabase = createClient()
    const { data } = await supabase
      .from('invoices')
      .select('*')
      .eq('project_id', projectId)
      .order('issued_on', { ascending: false, nullsFirst: false })
    setInvoices(data ?? [])
  }

  async function addInvoice() {
    setSaving(true)
    const supabase = createClient()
    const { data } = await supabase
      .from('invoices')
      .insert({
        project_id: projectId,
        number: form.number.trim() || null,
        amount: form.amount ? Number(form.amount.replace(',', '.')) : null,
        issued_on: form.issued_on || null,
        due_on: form.due_on || null,
        status: form.status,
        note: form.note.trim() || null,
      })
      .select('*')
      .single()
    if (data) setInvoices(prev => [data, ...prev])
    setForm({ number: '', amount: '', issued_on: '', due_on: '', status: 'offen', note: '' })
    setAdding(false)
    setSaving(false)
  }

  async function cycleStatus(inv: Invoice) {
    const next = STATUS_ORDER[(STATUS_ORDER.indexOf(inv.status) + 1) % STATUS_ORDER.length]
    const supabase = createClient()
    await supabase.from('invoices').update({ status: next }).eq('id', inv.id)
    setInvoices(prev => prev.map(i => i.id === inv.id ? { ...i, status: next } : i))
  }

  async function remove(id: string) {
    const supabase = createClient()
    await supabase.from('invoices').delete().eq('id', id)
    setInvoices(prev => prev.filter(i => i.id !== id))
  }

  const sum = (s: Invoice['status']) => invoices.filter(i => i.status === s).reduce((a, i) => a + (i.amount ?? 0), 0)

  return (
    <div>
      {/* Summary */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <SumCard label="Offen" value={sum('offen')} cls="text-amber-400" />
        <SumCard label="Überfällig" value={sum('ueberfaellig')} cls="text-red-400" />
        <SumCard label="Bezahlt" value={sum('bezahlt')} cls="text-emerald-400" />
      </div>

      {/* Add button / form */}
      {!adding ? (
        <button
          onClick={() => setAdding(true)}
          className="flex items-center gap-2 bg-white text-zinc-950 rounded-lg px-4 py-2 text-sm font-medium hover:bg-zinc-100 transition-colors mb-6"
        >
          <Plus size={14} /> Rechnung erfassen
        </button>
      ) : (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 mb-6 flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            <input value={form.number} onChange={e => setForm(f => ({ ...f, number: e.target.value }))} placeholder="Rechnungsnr." className="inp" />
            <input value={form.amount} onChange={e => setForm(f => ({ ...f, amount: e.target.value }))} placeholder="Betrag €" inputMode="decimal" className="inp" />
            <label className="flex flex-col gap-1"><span className="text-xs text-zinc-500">Rechnungsdatum</span><input type="date" value={form.issued_on} onChange={e => setForm(f => ({ ...f, issued_on: e.target.value }))} className="inp" /></label>
            <label className="flex flex-col gap-1"><span className="text-xs text-zinc-500">Fällig bis</span><input type="date" value={form.due_on} onChange={e => setForm(f => ({ ...f, due_on: e.target.value }))} className="inp" /></label>
          </div>
          <select value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value as Invoice['status'] }))} className="inp">
            <option value="offen">Offen</option>
            <option value="bezahlt">Bezahlt</option>
            <option value="ueberfaellig">Überfällig</option>
          </select>
          <input value={form.note} onChange={e => setForm(f => ({ ...f, note: e.target.value }))} placeholder="Notiz / Link (optional)" className="inp" />
          <div className="flex items-center gap-2">
            <button onClick={addInvoice} disabled={saving} className="bg-white text-zinc-950 rounded-lg px-4 py-2 text-sm font-medium hover:bg-zinc-100 transition-colors disabled:opacity-50">{saving ? 'Speichert...' : 'Speichern'}</button>
            <button onClick={() => setAdding(false)} className="text-sm text-zinc-400 hover:text-white px-3 py-2 transition-colors">Abbrechen</button>
          </div>
        </div>
      )}

      {/* List */}
      <div className="flex flex-col gap-2">
        {invoices.length === 0 && <p className="text-sm text-zinc-600">Noch keine Rechnungen erfasst.</p>}
        {invoices.map(inv => (
          <div key={inv.id} className="group flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-white">{inv.number || 'Ohne Nr.'}</span>
                {inv.amount != null && <span className="text-sm text-zinc-400">{inv.amount.toLocaleString('de-DE', { minimumFractionDigits: 2 })} €</span>}
              </div>
              <p className="text-xs text-zinc-500 mt-0.5">
                {inv.issued_on ? new Date(inv.issued_on).toLocaleDateString('de-DE') : '–'}
                {inv.due_on && <> · fällig {new Date(inv.due_on).toLocaleDateString('de-DE')}</>}
                {inv.note && <> · {inv.note}</>}
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button onClick={() => cycleStatus(inv)} title="Status wechseln" className={`text-xs px-2 py-0.5 rounded-full transition-colors ${STATUS[inv.status].cls}`}>
                {STATUS[inv.status].label}
              </button>
              <button onClick={() => remove(inv.id)} className="p-1.5 text-zinc-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all">
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .inp {
          width: 100%;
          background: #09090b;
          border: 1px solid #3f3f46;
          border-radius: 8px;
          padding: 8px 12px;
          font-size: 14px;
          color: #fff;
          outline: none;
        }
        .inp:focus { border-color: #71717a; }
        .inp::placeholder { color: #52525b; }
      `}</style>
    </div>
  )
}

function SumCard({ label, value, cls }: { label: string; value: number; cls: string }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3">
      <p className="text-xs text-zinc-500 mb-1">{label}</p>
      <p className={`text-lg font-semibold ${cls}`}>{value.toLocaleString('de-DE', { minimumFractionDigits: 2 })} €</p>
    </div>
  )
}
