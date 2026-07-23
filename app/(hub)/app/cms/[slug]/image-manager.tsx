'use client'
import { useState, useEffect, useRef } from 'react'
import { createClient } from '@/lib/hub/client'
import { uploadImage } from '@/lib/hub/storage'
import { Upload, Copy, Trash2 } from 'lucide-react'

interface ImageItem {
  name: string
  url: string
}

export default function ImageManager({ siteId, siteSlug }: { siteId: string; siteSlug: string }) {
  const [images, setImages] = useState<ImageItem[]>([])
  const [uploading, setUploading] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    loadImages()
  }, [])

  async function loadImages() {
    const supabase = createClient()
    const { data } = await supabase.storage.from('site-media').list(`${siteId}/images`)
    if (!data) return
    const items = data.map(file => {
      const { data: urlData } = supabase.storage.from('site-media').getPublicUrl(`${siteId}/images/${file.name}`)
      return { name: file.name, url: urlData.publicUrl }
    })
    setImages(items)
  }

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    await uploadImage(file, siteId, 'images')
    await loadImages()
    setUploading(false)
    if (inputRef.current) inputRef.current.value = ''
  }

  async function deleteImage(name: string) {
    const supabase = createClient()
    await supabase.storage.from('site-media').remove([`${siteId}/images/${name}`])
    setImages(prev => prev.filter(i => i.name !== name))
  }

  function copyUrl(url: string) {
    navigator.clipboard.writeText(url)
    setCopied(url)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div>
      {/* Upload */}
      <div className="mb-6">
        <label className="flex items-center gap-2 cursor-pointer w-fit bg-white text-zinc-950 rounded-lg px-4 py-2 text-sm font-medium hover:bg-zinc-100 transition-colors">
          <Upload size={14} />
          {uploading ? 'Wird hochgeladen...' : 'Bild hochladen'}
          <input ref={inputRef} type="file" accept="image/*" onChange={handleUpload} className="hidden" disabled={uploading} />
        </label>
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-3 gap-3">
        {images.length === 0 && (
          <p className="text-sm text-zinc-600 col-span-3">Noch keine Bilder hochgeladen.</p>
        )}
        {images.map(img => (
          <div key={img.name} className="group relative bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
            <img src={img.url} alt={img.name} className="w-full h-32 object-cover" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <button
                onClick={() => copyUrl(img.url)}
                className="p-2 bg-zinc-800 rounded-lg text-white hover:bg-zinc-700 transition-colors"
                title="URL kopieren"
              >
                {copied === img.url ? <span className="text-xs px-1">✓</span> : <Copy size={13} />}
              </button>
              <button
                onClick={() => deleteImage(img.name)}
                className="p-2 bg-zinc-800 rounded-lg text-red-400 hover:bg-zinc-700 transition-colors"
                title="Löschen"
              >
                <Trash2 size={13} />
              </button>
            </div>
            <p className="px-2 py-1.5 text-xs text-zinc-500 truncate">{img.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
