'use client'
import { useState, useRef, useEffect, useCallback } from 'react'
import { createClient } from '@/lib/hub/client'
import { uploadImage } from '@/lib/hub/storage'
import { ChevronRight, ArrowLeft, Check, Loader2, Upload, ImageIcon, Bold, Italic, LayoutGrid } from 'lucide-react'

interface Block {
  id: string
  key: string
  value: string
  label: string | null
  type: string
  module: string
  subgroup: string | null
  sort_order: number
}

const TITLE_SUFFIXES = ['title', 'titel', 'headline', 'frage']
const BODY_SUFFIXES = ['desc', 'text', 'body', 'antwort']
const seg = (k: string) => k.split('_').pop() as string
const dropLast = (k: string) => k.split('_').slice(0, -1).join('_')

type SaveState = Record<string, 'saving' | 'saved' | undefined>
interface CtrlProps {
  setValue: (id: string, v: string) => void
  persist: (id: string, v: string) => void
  state: SaveState
  siteId: string
}

export default function ContentEditor({ siteId, initialBlocks }: { siteId: string; initialBlocks: Block[] }) {
  const [blocks, setBlocks] = useState(initialBlocks)
  const [state, setState] = useState<SaveState>({})
  const savedRef = useRef<Record<string, string>>(Object.fromEntries(initialBlocks.map(b => [b.id, b.value])))
  const [active, setActive] = useState<string | null>(null)

  const setValue = useCallback((id: string, value: string) => {
    setBlocks(prev => prev.map(b => (b.id === id ? { ...b, value } : b)))
  }, [])

  const persist = useCallback(async (id: string, value: string) => {
    if (savedRef.current[id] === value) return
    setState(s => ({ ...s, [id]: 'saving' }))
    const supabase = createClient()
    await supabase.from('content_blocks').update({ value }).eq('id', id)
    savedRef.current[id] = value
    setState(s => ({ ...s, [id]: 'saved' }))
    setTimeout(() => setState(s => ({ ...s, [id]: undefined })), 1600)
  }, [])

  const ctrl: CtrlProps = { setValue, persist, state, siteId }

  if (blocks.length === 0) {
    return <p className="text-sm text-zinc-600">Für diese Website sind noch keine editierbaren Felder hinterlegt.</p>
  }

  // Module in Seiten-Reihenfolge (nach kleinstem sort_order)
  const modules = [...new Set(blocks.map(b => b.module))]
    .map(m => ({ name: m, min: Math.min(...blocks.filter(b => b.module === m).map(b => b.sort_order)), count: blocks.filter(b => b.module === m).length }))
    .sort((a, b) => a.min - b.min)

  // ── Kachel-Übersicht ──
  if (active === null) {
    return (
      <div>
        <p className="text-sm text-zinc-500 mb-5">Wähle einen Bereich, um die Inhalte zu bearbeiten.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {modules.map(m => (
            <button
              key={m.name}
              onClick={() => setActive(m.name)}
              className="group text-left bg-[#081426] border border-white/[0.08] rounded-xl p-4 hover:border-[#00bc7d]/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#00bc7d]/12 flex items-center justify-center text-[#00bc7d] transition-colors">
                  <LayoutGrid size={15} />
                </div>
                <ChevronRight size={15} className="text-zinc-600 group-hover:text-zinc-300 transition-colors" />
              </div>
              <p className="text-sm font-medium text-white">{m.name}</p>
              <p className="text-xs text-zinc-500 mt-0.5">{m.count} Felder</p>
            </button>
          ))}
        </div>
      </div>
    )
  }

  // ── Modul-Detail ──
  const fields = blocks.filter(b => b.module === active).sort((a, b) => a.sort_order - b.sort_order)
  const direct = fields.filter(b => !b.subgroup)
  const subgroups = [...new Set(fields.filter(b => b.subgroup).map(b => b.subgroup as string))]

  return (
    <div>
      <button onClick={() => setActive(null)} className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-white mb-4 transition-colors">
        <ArrowLeft size={14} /> Alle Bereiche
      </button>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base font-semibold text-white">{active}</h3>
        <span className="text-xs text-zinc-500">Automatisch gespeichert</span>
      </div>

      <div className="flex flex-col gap-4">
        {renderItems(direct, ctrl)}
      </div>

      {subgroups.length > 0 && (
        <div className="mt-6 flex flex-col gap-2">
          {subgroups.map(sg => (
            <SubgroupSection key={sg} title={sg} fields={fields.filter(b => b.subgroup === sg)} ctrl={ctrl} />
          ))}
        </div>
      )}
    </div>
  )
}

/* ── Gruppierung & Rendering ─────────────────────────────────── */

function buildItems(list: Block[]) {
  const byKey = Object.fromEntries(list.map(b => [b.key, b]))
  const used = new Set<string>()
  const items: Array<
    | { kind: 'heading'; parts: Block[] }
    | { kind: 'pair'; title: Block; body: Block }
    | { kind: 'beforeafter'; before: Block[]; after: Block[] }
    | { kind: 'field'; block: Block }
  > = []

  const before = list.filter(b => b.key.includes('_vorher'))
  const after = list.filter(b => b.key.includes('_nachher'))
  const baHandled = before.length > 0 && after.length > 0

  for (const b of list) {
    if (used.has(b.key)) continue
    if (baHandled && (b.key.includes('_vorher') || b.key.includes('_nachher'))) {
      if (!items.some(i => i.kind === 'beforeafter')) items.push({ kind: 'beforeafter', before, after })
      before.forEach(x => used.add(x.key)); after.forEach(x => used.add(x.key))
      continue
    }
    if (b.key.endsWith('_title_1')) {
      const base = dropLast(b.key)
      const parts = [b, byKey[`${base}_highlight`], byKey[`${base}_2`]].filter(Boolean) as Block[]
      parts.forEach(p => used.add(p.key))
      items.push({ kind: 'heading', parts })
      continue
    }
    if (TITLE_SUFFIXES.includes(seg(b.key))) {
      const base = dropLast(b.key)
      const body = list.find(x => !used.has(x.key) && dropLast(x.key) === base && BODY_SUFFIXES.includes(seg(x.key)))
      if (body) { used.add(b.key); used.add(body.key); items.push({ kind: 'pair', title: b, body }); continue }
    }
    used.add(b.key)
    items.push({ kind: 'field', block: b })
  }
  return items
}

function renderItems(list: Block[], ctrl: CtrlProps) {
  return buildItems(list).map((item, i) => {
    if (item.kind === 'heading') return <HeadingCard key={i} parts={item.parts} ctrl={ctrl} />
    if (item.kind === 'pair') return <PairCard key={i} title={item.title} body={item.body} ctrl={ctrl} />
    if (item.kind === 'beforeafter') return <BeforeAfterCard key={i} before={item.before} after={item.after} ctrl={ctrl} />
    return <FieldRow key={item.block.id} block={item.block} ctrl={ctrl} />
  })
}

// Aufklappbarer Bereich für Untergruppen (z.B. Fallstudie 1-3)
function SubgroupSection({ title, fields, ctrl }: { title: string; fields: Block[]; ctrl: CtrlProps }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-white/[0.03] transition-colors"
      >
        <span className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
          <ChevronRight size={15} className={`text-zinc-500 transition-transform ${open ? 'rotate-90' : ''}`} />
          {title}
        </span>
        <span className="text-xs text-zinc-500">{fields.length} Felder</span>
      </button>
      {open && (
        <div className="px-4 pb-4 pt-1 flex flex-col gap-4 border-t border-white/[0.07]">
          {renderItems(fields, ctrl)}
        </div>
      )}
    </div>
  )
}

/* ── Controls ────────────────────────────────────────────────── */

function StatusDot({ s }: { s: 'saving' | 'saved' | undefined }) {
  if (s === 'saving') return <Loader2 size={12} className="text-zinc-500 animate-spin" />
  if (s === 'saved') return <Check size={12} className="text-emerald-400" />
  return null
}

function FieldRow({ block, ctrl }: { block: Block; ctrl: CtrlProps }) {
  const long = block.type === 'textarea' || block.value.length > 55
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-2">
        <label className="text-xs font-medium text-zinc-400">{block.label ?? block.key}</label>
        <StatusDot s={ctrl.state[block.id]} />
      </div>
      {block.type === 'image' ? <ImageField block={block} ctrl={ctrl} />
        : block.type === 'richtext' || block.type === 'html' ? <RichText block={block} ctrl={ctrl} />
        : long ? <TextArea block={block} ctrl={ctrl} />
        : <TextInput block={block} ctrl={ctrl} />}
    </div>
  )
}

function TextInput({ block, ctrl }: { block: Block; ctrl: CtrlProps }) {
  return (
    <input
      type="text"
      value={block.value}
      onChange={e => ctrl.setValue(block.id, e.target.value)}
      onBlur={e => ctrl.persist(block.id, e.target.value)}
      className="w-full bg-[#081426] border border-white/[0.08] rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#00bc7d]/40 transition-colors"
    />
  )
}

function TextArea({ block, ctrl }: { block: Block; ctrl: CtrlProps }) {
  const rows = Math.min(10, Math.max(3, Math.ceil((block.value.length || 1) / 55)))
  return (
    <textarea
      value={block.value}
      onChange={e => ctrl.setValue(block.id, e.target.value)}
      onBlur={e => ctrl.persist(block.id, e.target.value)}
      rows={rows}
      className="w-full bg-[#081426] border border-white/[0.08] rounded-lg px-3 py-2 text-sm text-white leading-relaxed focus:outline-none focus:border-[#00bc7d]/40 resize-y transition-colors"
    />
  )
}

// Visueller Editor (Fett/Kursiv) — speichert HTML
function RichText({ block, ctrl }: { block: Block; ctrl: CtrlProps }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (ref.current && ref.current.innerHTML !== block.value) ref.current.innerHTML = block.value
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const exec = (cmd: string) => { document.execCommand(cmd, false); ref.current?.focus() }
  return (
    <div className="rounded-lg border border-white/[0.07] bg-zinc-900 focus-within:border-zinc-600 transition-colors">
      <div className="flex items-center gap-0.5 border-b border-white/[0.07] px-1.5 py-1">
        <ToolBtn onClick={() => exec('bold')}><Bold size={13} /></ToolBtn>
        <ToolBtn onClick={() => exec('italic')}><Italic size={13} /></ToolBtn>
      </div>
      <div
        ref={ref}
        contentEditable
        suppressContentEditableWarning
        onBlur={() => ctrl.persist(block.id, ref.current?.innerHTML ?? '')}
        className="px-3 py-2 text-sm text-zinc-200 leading-relaxed min-h-[72px] focus:outline-none [&_strong]:font-semibold [&_b]:font-semibold"
      />
    </div>
  )
}

function ToolBtn({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onMouseDown={e => { e.preventDefault(); onClick() }}
      className="w-7 h-7 flex items-center justify-center rounded text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-colors"
    >
      {children}
    </button>
  )
}

function ImageField({ block, ctrl }: { block: Block; ctrl: CtrlProps }) {
  const [busy, setBusy] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  async function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setBusy(true)
    const url = await uploadImage(file, ctrl.siteId, 'content')
    if (url) { ctrl.setValue(block.id, url); ctrl.persist(block.id, url) }
    setBusy(false)
    if (inputRef.current) inputRef.current.value = ''
  }
  return (
    <div className="rounded-lg border border-white/[0.07] overflow-hidden bg-zinc-900">
      {block.value
        ? <img src={block.value} alt="" className="w-full max-h-52 object-cover" />
        : <div className="h-32 flex items-center justify-center text-zinc-600"><ImageIcon size={22} /></div>}
      <div className="p-2 border-t border-white/[0.07]">
        <label className="inline-flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white cursor-pointer bg-white/[0.06] hover:bg-white/[0.1] rounded-md px-2.5 py-1.5 transition-colors">
          <Upload size={12} /> {busy ? 'Lädt…' : 'Bild ersetzen'}
          <input ref={inputRef} type="file" accept="image/*" onChange={onFile} className="hidden" disabled={busy} />
        </label>
      </div>
    </div>
  )
}

function HeadingCard({ parts, ctrl }: { parts: Block[]; ctrl: CtrlProps }) {
  const highlightKey = parts.find(p => p.key.endsWith('_highlight'))?.key
  const preview = parts.map(p => p.value).filter(Boolean).join(' ')
  return (
    <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
      <span className="text-xs font-semibold text-zinc-300">Überschrift</span>
      {preview && (
        <p className="text-sm text-white font-medium my-3 leading-snug">
          {parts.map(p => <span key={p.id} className={p.key === highlightKey ? 'text-amber-400' : ''}>{p.value}{' '}</span>)}
        </p>
      )}
      <div className="flex flex-col gap-2">
        {parts.map(p => (
          <div key={p.id} className="flex items-center gap-2">
            <span className="text-[11px] text-zinc-500 w-24 shrink-0">
              {p.key.endsWith('_highlight') ? 'Hervorgehoben' : p.key.endsWith('_1') ? 'Zeile 1' : 'Zeile 2'}
            </span>
            <input
              type="text"
              value={p.value}
              onChange={e => ctrl.setValue(p.id, e.target.value)}
              onBlur={e => ctrl.persist(p.id, e.target.value)}
              className={`flex-1 bg-zinc-900 border rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none transition-colors ${
                p.key === highlightKey ? 'border-amber-500/30 focus:border-amber-500/60' : 'border-white/[0.07] focus:border-[#00bc7d]/40'
              }`}
            />
            <StatusDot s={ctrl.state[p.id]} />
          </div>
        ))}
      </div>
    </div>
  )
}

function PairCard({ title, body, ctrl }: { title: Block; body: Block; ctrl: CtrlProps }) {
  const bodyRows = Math.min(8, Math.max(2, Math.ceil((body.value.length || 1) / 55)))
  return (
    <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={title.value}
          onChange={e => ctrl.setValue(title.id, e.target.value)}
          onBlur={e => ctrl.persist(title.id, e.target.value)}
          className="flex-1 bg-transparent text-sm font-semibold text-white focus:outline-none border-b border-transparent focus:border-[#00bc7d]/40 pb-1"
        />
        <StatusDot s={ctrl.state[title.id] ?? ctrl.state[body.id]} />
      </div>
      <textarea
        value={body.value}
        onChange={e => ctrl.setValue(body.id, e.target.value)}
        onBlur={e => ctrl.persist(body.id, e.target.value)}
        rows={bodyRows}
        className="w-full bg-[#081426] border border-white/[0.08] rounded-lg px-3 py-2 text-sm text-zinc-200 leading-relaxed focus:outline-none focus:border-[#00bc7d]/40 resize-y"
      />
    </div>
  )
}

function BeforeAfterCard({ before, after, ctrl }: { before: Block[]; after: Block[]; ctrl: CtrlProps }) {
  const col = (blocksIn: Block[], title: string, accent: string) => (
    <div className="flex-1 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
      <p className={`text-xs font-semibold mb-3 ${accent}`}>{title}</p>
      <div className="flex flex-col gap-2.5">
        {blocksIn.sort((a, b) => a.sort_order - b.sort_order).map(b => (
          <div key={b.id} className="flex flex-col gap-1">
            <label className="text-[11px] text-zinc-500">{b.label ?? b.key}</label>
            <input
              type="text"
              value={b.value}
              onChange={e => ctrl.setValue(b.id, e.target.value)}
              onBlur={e => ctrl.persist(b.id, e.target.value)}
              className="w-full bg-[#081426] border border-white/[0.08] rounded-md px-2.5 py-1.5 text-sm text-white focus:outline-none focus:border-[#00bc7d]/40"
            />
          </div>
        ))}
      </div>
    </div>
  )
  return (
    <div className="flex gap-3">
      {col(before, 'Vorher', 'text-zinc-400')}
      {col(after, 'Nachher', 'text-emerald-400')}
    </div>
  )
}
