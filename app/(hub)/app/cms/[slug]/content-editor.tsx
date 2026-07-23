'use client'
import { useState, useRef, useEffect, useCallback } from 'react'
import { createClient } from '@/lib/hub/client'
import { uploadImage } from '@/lib/hub/storage'
import { ChevronRight, ArrowLeft, Check, Loader2, Upload, ImageIcon, Bold, Italic, LayoutGrid, FileText } from 'lucide-react'

interface Block {
  id: string
  key: string
  value: string
  label: string | null
  type: string
  page: string
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
  const [activePage, setActivePage] = useState<string | null>(null)
  const [activeModule, setActiveModule] = useState<string | null>(null)

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

  const minSort = (list: Block[]) => Math.min(...list.map(b => b.sort_order))

  // ── Ebene 0: Seite / Unterseite wählen ──
  if (activePage === null) {
    const pages = [...new Set(blocks.map(b => b.page))]
      .map(name => {
        const inPage = blocks.filter(b => b.page === name)
        return { name, min: minSort(inPage), fields: inPage.length, modules: new Set(inPage.map(b => b.module)).size }
      })
      .sort((a, b) => a.min - b.min)

    return (
      <div>
        <p className="text-sm text-zinc-500 mb-5">Wähle eine Seite, um ihre Inhalte zu bearbeiten.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {pages.map(p => (
            <button
              key={p.name}
              onClick={() => setActivePage(p.name)}
              className="group text-left bg-[#081426] border border-white/[0.08] rounded-xl p-4 hover:border-[#00bc7d]/40 transition-colors flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-[#00bc7d]/12 flex items-center justify-center text-[#00bc7d] shrink-0">
                <FileText size={17} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-white">{p.name}</p>
                <p className="text-xs text-zinc-500 mt-0.5">{p.modules} Bereiche · {p.fields} Felder</p>
              </div>
              <ChevronRight size={16} className="text-zinc-600 group-hover:text-[#00bc7d] transition-colors shrink-0" />
            </button>
          ))}
        </div>
      </div>
    )
  }

  const pageBlocks = blocks.filter(b => b.page === activePage)

  // ── Ebene 1: Bereich / Modul wählen ──
  if (activeModule === null) {
    const modules = [...new Set(pageBlocks.map(b => b.module))]
      .map(name => ({ name, min: minSort(pageBlocks.filter(b => b.module === name)), count: pageBlocks.filter(b => b.module === name).length }))
      .sort((a, b) => a.min - b.min)

    return (
      <div>
        <button onClick={() => setActivePage(null)} className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-white mb-4 transition-colors">
          <ArrowLeft size={14} /> Alle Seiten
        </button>
        <h3 className="text-base font-semibold text-white mb-1">{activePage}</h3>
        <p className="text-sm text-zinc-500 mb-5">Wähle einen Bereich, um die Inhalte zu bearbeiten.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {modules.map(m => (
            <button
              key={m.name}
              onClick={() => setActiveModule(m.name)}
              className="group text-left bg-[#081426] border border-white/[0.08] rounded-xl p-4 hover:border-[#00bc7d]/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#00bc7d]/12 flex items-center justify-center text-[#00bc7d]">
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

  // ── Ebene 2: Modul-Detail ──
  const fields = pageBlocks.filter(b => b.module === activeModule).sort((a, b) => a.sort_order - b.sort_order)
  const direct = fields.filter(b => !b.subgroup)
  const subgroups = [...new Set(fields.filter(b => b.subgroup).map(b => b.subgroup as string))]

  return (
    <div>
      <button onClick={() => setActiveModule(null)} className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-white mb-4 transition-colors">
        <ArrowLeft size={14} /> {activePage}
      </button>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-base font-semibold text-white">{activeModule}</h3>
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
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-2">
        <label className="text-xs font-medium text-zinc-400">{block.label ?? block.key}</label>
        <StatusDot s={ctrl.state[block.id]} />
      </div>
      {block.type === 'image'
        ? <ImageField block={block} ctrl={ctrl} />
        : <RichText block={block} ctrl={ctrl} />}
    </div>
  )
}

// Säubert HTML: nur Fett/Kursiv/Umbruch erlaubt, alle Styles/Farben/Größen raus.
const ALLOWED_TAGS = new Set(['STRONG', 'B', 'EM', 'I', 'BR'])
function cleanHtml(html: string): string {
  if (typeof document === 'undefined' || !html) return html || ''
  const tmp = document.createElement('div')
  tmp.innerHTML = html
  const walk = (node: Node) => {
    Array.from(node.childNodes).forEach(child => {
      if (child.nodeType === 1) {
        const el = child as HTMLElement
        walk(el)
        if (ALLOWED_TAGS.has(el.tagName)) {
          Array.from(el.attributes).forEach(a => el.removeAttribute(a.name))
        } else {
          el.replaceWith(...Array.from(el.childNodes))
        }
      }
    })
  }
  walk(tmp)
  return tmp.innerHTML
}

// Visueller Editor (Fett/Kursiv) — speichert bereinigtes HTML. Standard für alle Textfelder.
function RichText({ block, ctrl }: { block: Block; ctrl: CtrlProps }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const clean = cleanHtml(block.value)
    if (ref.current && ref.current.innerHTML !== clean) ref.current.innerHTML = clean
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const exec = (cmd: string) => { document.execCommand(cmd, false); ref.current?.focus() }
  return (
    <div className="rounded-lg border border-white/[0.08] bg-[#081426] focus-within:border-[#00bc7d]/40 transition-colors">
      <div className="flex items-center gap-0.5 border-b border-white/[0.06] px-1.5 py-1">
        <ToolBtn onClick={() => exec('bold')}><Bold size={13} /></ToolBtn>
        <ToolBtn onClick={() => exec('italic')}><Italic size={13} /></ToolBtn>
      </div>
      <div
        ref={ref}
        contentEditable
        suppressContentEditableWarning
        onPaste={e => {
          e.preventDefault()
          const text = e.clipboardData.getData('text/plain')
          document.execCommand('insertText', false, text)
        }}
        onBlur={() => ctrl.persist(block.id, cleanHtml(ref.current?.innerHTML ?? ''))}
        className="px-3 py-2 text-sm text-white leading-relaxed min-h-[40px] focus:outline-none [&_strong]:font-semibold [&_b]:font-semibold [&_em]:italic [&_i]:italic"
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

// Überschrift als EIN Feld. Schreibt im Hintergrund weiter in die
// Original-Teilfelder (title_1 / highlight / title_2) → externe Seite bleibt unverändert.
function HeadingCard({ parts, ctrl }: { parts: Block[]; ctrl: CtrlProps }) {
  const p1 = parts.find(p => p.key.endsWith('_1'))
  const hl = parts.find(p => p.key.endsWith('_highlight'))
  const p2 = parts.find(p => p.key.endsWith('_2'))
  const hasHighlight = !!hl

  const initial = hasHighlight
    ? [p1?.value, hl?.value ? `**${hl.value}**` : null, p2?.value].filter(Boolean).join(' ')
    : [p1?.value, p2?.value].filter(v => v).join('\n')

  const [text, setText] = useState(initial)
  const [saved, setSaved] = useState(false)

  function save() {
    if (hasHighlight) {
      const m = text.match(/^([\s\S]*?)\*\*([\s\S]*?)\*\*([\s\S]*)$/)
      const t1 = (m ? m[1] : text).trim()
      const h = m ? m[2].trim() : ''
      const t2 = m ? m[3].trim() : ''
      if (p1) { ctrl.setValue(p1.id, t1); ctrl.persist(p1.id, t1) }
      if (hl) { ctrl.setValue(hl.id, h); ctrl.persist(hl.id, h) }
      if (p2) { ctrl.setValue(p2.id, t2); ctrl.persist(p2.id, t2) }
    } else {
      const idx = text.indexOf('\n')
      const t1 = (idx === -1 ? text : text.slice(0, idx)).trim()
      const t2 = idx === -1 ? '' : text.slice(idx + 1).trim()
      if (p1) { ctrl.setValue(p1.id, t1); ctrl.persist(p1.id, t1) }
      if (p2) { ctrl.setValue(p2.id, t2); ctrl.persist(p2.id, t2) }
    }
    setSaved(true)
    setTimeout(() => setSaved(false), 1600)
  }

  const preview = () => {
    if (hasHighlight) {
      const m = text.match(/^([\s\S]*?)\*\*([\s\S]*?)\*\*([\s\S]*)$/)
      if (m) return <>{m[1]}<span className="text-amber-400">{m[2]}</span>{m[3]}</>
      return text
    }
    return text.split('\n').map((l, i) => <span key={i}>{l}{i < text.split('\n').length - 1 && <br />}</span>)
  }

  return (
    <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold text-zinc-300">Überschrift</span>
        {saved && <span className="text-xs text-emerald-400">Gespeichert ✓</span>}
      </div>
      {text.trim() && <p className="text-base text-white font-semibold mb-3 leading-snug">{preview()}</p>}
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        onBlur={save}
        rows={2}
        className="w-full bg-[#081426] border border-white/[0.08] rounded-lg px-3 py-2 text-sm text-white leading-relaxed focus:outline-none focus:border-[#00bc7d]/40 resize-y"
      />
      <p className="text-[11px] text-zinc-500 mt-1.5">
        {hasHighlight
          ? 'Ganze Überschrift in einem Feld. Text zwischen **…** wird gold hervorgehoben.'
          : 'Ganze Überschrift in einem Feld. Zeilenumbruch (Enter) = neue Zeile.'}
      </p>
    </div>
  )
}

function PairCard({ title, body, ctrl }: { title: Block; body: Block; ctrl: CtrlProps }) {
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
      <RichText block={body} ctrl={ctrl} />
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
