'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@/lib/hub/client'
import { Send, Trash2 } from 'lucide-react'

interface Comment {
  id: string
  body: string
  created_at: string
  author_id: string | null
  author_name: string
  author_role: 'admin' | 'client'
}

export default function CommunicationTab({ siteId }: { siteId: string }) {
  const [comments, setComments] = useState<Comment[]>([])
  const [body, setBody] = useState('')
  const [sending, setSending] = useState(false)
  const [me, setMe] = useState<{ id: string; name: string; role: 'admin' | 'client' } | null>(null)

  useEffect(() => { init() }, [])

  async function init() {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      const { data: profile } = await supabase.from('profiles').select('full_name, role').eq('id', user.id).single()
      setMe({ id: user.id, name: profile?.full_name ?? 'Ich', role: (profile?.role as 'admin' | 'client') ?? 'client' })
    }
    await load()
  }

  async function load() {
    const supabase = createClient()
    const { data } = await supabase
      .from('site_comments')
      .select('id, body, created_at, author_id, author_name, author_role')
      .eq('site_id', siteId)
      .order('created_at', { ascending: false })
    setComments((data as Comment[]) ?? [])
  }

  async function post() {
    const text = body.trim()
    if (!text || !me) return
    setSending(true)
    const supabase = createClient()
    const { data } = await supabase
      .from('site_comments')
      .insert({ site_id: siteId, author_id: me.id, author_name: me.name, author_role: me.role, body: text })
      .select('id, body, created_at, author_id, author_name, author_role')
      .single()
    if (data) setComments(prev => [data as Comment, ...prev])
    setBody('')
    setSending(false)
  }

  async function remove(id: string) {
    const supabase = createClient()
    await supabase.from('site_comments').delete().eq('id', id)
    setComments(prev => prev.filter(c => c.id !== id))
  }

  return (
    <div>
      <p className="text-sm text-zinc-500 mb-4">
        Direkter Draht zwischen dir und {me?.role === 'admin' ? 'dem Kunden' : 'Timm Schurig'}. Beide sehen und beantworten diesen Verlauf.
      </p>

      {/* Composer */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 mb-6">
        <textarea
          value={body}
          onChange={e => setBody(e.target.value)}
          onKeyDown={e => { if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') post() }}
          placeholder="Nachricht schreiben… (⌘/Strg + Enter zum Senden)"
          rows={3}
          className="w-full bg-transparent text-sm text-white placeholder:text-zinc-600 focus:outline-none resize-none"
        />
        <div className="flex justify-end mt-2">
          <button
            onClick={post}
            disabled={sending || !body.trim()}
            className="flex items-center gap-1.5 bg-white text-zinc-950 rounded-lg px-3.5 py-1.5 text-sm font-medium hover:bg-zinc-100 transition-colors disabled:opacity-50"
          >
            <Send size={13} /> {sending ? 'Sendet…' : 'Senden'}
          </button>
        </div>
      </div>

      {/* Timeline */}
      <div className="flex flex-col gap-4">
        {comments.length === 0 && <p className="text-sm text-zinc-600">Noch keine Nachrichten.</p>}
        {comments.map(c => (
          <div key={c.id} className="group flex gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium shrink-0 ${
              c.author_role === 'admin' ? 'bg-emerald-500/15 text-emerald-300' : 'bg-zinc-800 text-zinc-300'
            }`}>
              {initials(c.author_name)}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-white">{c.author_name}</span>
                {c.author_role === 'admin' && <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400">Betreiber</span>}
                <span className="text-xs text-zinc-500">{relTime(c.created_at)}</span>
                {c.author_id === me?.id && (
                  <button onClick={() => remove(c.id)} className="ml-auto p-1 text-zinc-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all">
                    <Trash2 size={13} />
                  </button>
                )}
              </div>
              <p className="text-sm text-zinc-300 mt-0.5 whitespace-pre-wrap break-words">{c.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function initials(name: string) {
  if (!name) return '?'
  return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
}

function relTime(iso: string) {
  const diff = (Date.now() - new Date(iso).getTime()) / 1000
  if (diff < 60) return 'gerade eben'
  if (diff < 3600) return `vor ${Math.floor(diff / 60)} Min.`
  if (diff < 86400) return `vor ${Math.floor(diff / 3600)} Std.`
  if (diff < 604800) return `vor ${Math.floor(diff / 86400)} Tg.`
  return new Date(iso).toLocaleDateString('de-DE')
}
