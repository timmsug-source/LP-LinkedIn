'use client'
import { useState } from 'react'
import { createClient } from '@/lib/hub/client'
import { Plus, Edit3, Eye, EyeOff } from 'lucide-react'

interface Post {
  id: string
  title: string
  slug: string
  published: boolean
  published_at: string | null
  updated_at: string
}

export default function BlogEditor({ siteId, initialPosts }: { siteId: string; initialPosts: Post[] }) {
  const [posts, setPosts] = useState(initialPosts)
  const [editing, setEditing] = useState<Post | null>(null)
  const [content, setContent] = useState('')
  const [saving, setSaving] = useState(false)

  async function createPost() {
    const title = 'Neuer Beitrag'
    const slug = `beitrag-${Date.now()}`
    const supabase = createClient()
    const { data } = await supabase
      .from('blog_posts')
      .insert({ site_id: siteId, title, slug, content: '', published: false })
      .select('*')
      .single()
    if (data) {
      setPosts(prev => [data, ...prev])
      openEditor(data)
    }
  }

  async function openEditor(post: Post) {
    const supabase = createClient()
    const { data } = await supabase.from('blog_posts').select('content').eq('id', post.id).single()
    setContent(data?.content ?? '')
    setEditing(post)
  }

  async function savePost() {
    if (!editing) return
    setSaving(true)
    const supabase = createClient()
    await supabase.from('blog_posts').update({ title: editing.title, content, updated_at: new Date().toISOString() }).eq('id', editing.id)
    setPosts(prev => prev.map(p => p.id === editing.id ? { ...p, title: editing.title } : p))
    setSaving(false)
  }

  async function togglePublish(post: Post) {
    const supabase = createClient()
    const published = !post.published
    await supabase.from('blog_posts').update({ published, published_at: published ? new Date().toISOString() : null }).eq('id', post.id)
    setPosts(prev => prev.map(p => p.id === post.id ? { ...p, published } : p))
    if (editing?.id === post.id) setEditing(prev => prev ? { ...prev, published } : null)
  }

  if (editing) {
    return (
      <div>
        <button onClick={() => setEditing(null)} className="text-sm text-zinc-500 hover:text-white mb-4 transition-colors">← Zurück</button>

        <input
          type="text"
          value={editing.title}
          onChange={e => setEditing(prev => prev ? { ...prev, title: e.target.value } : null)}
          className="w-full bg-transparent text-xl font-semibold text-white mb-4 focus:outline-none border-b border-zinc-800 pb-2"
        />

        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Beitragsinhalt... (Markdown wird unterstützt)"
          rows={18}
          className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-700 resize-none font-mono mb-4"
        />

        <div className="flex items-center gap-3">
          <button
            onClick={savePost}
            disabled={saving}
            className="bg-white text-zinc-950 rounded-lg px-4 py-2 text-sm font-medium hover:bg-zinc-100 transition-colors disabled:opacity-50"
          >
            {saving ? 'Speichert...' : 'Speichern'}
          </button>
          <button
            onClick={() => togglePublish(editing)}
            className={`flex items-center gap-1.5 text-sm border rounded-lg px-3 py-2 transition-colors ${
              editing.published
                ? 'border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500'
                : 'border-emerald-700/40 text-emerald-400 hover:border-emerald-600'
            }`}
          >
            {editing.published ? <><EyeOff size={13} /> Depublizieren</> : <><Eye size={13} /> Veröffentlichen</>}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-zinc-500">{posts.length} Beiträge</p>
        <button
          onClick={createPost}
          className="flex items-center gap-2 bg-white text-zinc-950 rounded-lg px-4 py-2 text-sm font-medium hover:bg-zinc-100 transition-colors"
        >
          <Plus size={14} /> Neuer Beitrag
        </button>
      </div>

      <div className="flex flex-col gap-2">
        {posts.length === 0 && <p className="text-sm text-zinc-600">Noch keine Beiträge.</p>}
        {posts.map(p => (
          <div key={p.id} className="flex items-center justify-between bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 hover:border-zinc-700 transition-colors">
            <div>
              <p className="text-sm font-medium text-white">{p.title}</p>
              <p className="text-xs text-zinc-500 mt-0.5">{new Date(p.updated_at).toLocaleDateString('de-DE')}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-xs px-2 py-0.5 rounded-full ${p.published ? 'bg-emerald-500/10 text-emerald-400' : 'bg-zinc-700/30 text-zinc-500'}`}>
                {p.published ? 'Veröffentlicht' : 'Entwurf'}
              </span>
              <button
                onClick={() => openEditor(p)}
                className="p-1.5 text-zinc-500 hover:text-white transition-colors"
              >
                <Edit3 size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
