'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Info } from 'lucide-react'
import { createClientSite } from './actions'

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .normalize('NFD').replace(/[̀-ͯ]/g, '') // strip remaining accents
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export default function NewClientPage() {
  const router = useRouter()
  const [clientName, setClientName] = useState('')
  const [slug, setSlug] = useState('')
  const [slugTouched, setSlugTouched] = useState(false)
  const [domain, setDomain] = useState('')
  const [addLogin, setAddLogin] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Auto-derive slug from name until the user edits it manually
  useEffect(() => {
    if (!slugTouched) setSlug(slugify(clientName))
  }, [clientName, slugTouched])

  const handleCreate = async () => {
    if (!clientName.trim()) { setError('Kundenname ist Pflichtfeld.'); return }
    setLoading(true)
    setError('')
    const res = await createClientSite({
      clientName,
      slug,
      domain,
      email: addLogin ? email : '',
      password: addLogin ? password : '',
    })
    if (res.error) {
      setError(res.error)
      setLoading(false)
      return
    }
    router.push(`/app/cms/${res.slug}`)
  }

  return (
    <div className="p-8 max-w-xl">
      <Link href="/app/clients" className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-white mb-6 transition-colors">
        <ArrowLeft size={14} />
        Kunden
      </Link>

      <h1 className="text-xl font-semibold text-white mb-6">Neuer Kunde</h1>

      <div className="flex flex-col gap-5">
        <Field label="Kundenname *">
          <input
            type="text"
            value={clientName}
            onChange={e => setClientName(e.target.value)}
            placeholder="z.B. Müller GmbH"
            className="input"
          />
        </Field>

        <Field label="Slug (interne URL: /app/cms/…)">
          <input
            type="text"
            value={slug}
            onChange={e => { setSlug(slugify(e.target.value)); setSlugTouched(true) }}
            placeholder="mueller-gmbh"
            className="input"
          />
        </Field>

        <Field label="Domain (optional)">
          <input
            type="text"
            value={domain}
            onChange={e => setDomain(e.target.value)}
            placeholder="mueller-gmbh.de"
            className="input"
          />
        </Field>

        {/* Optional client login */}
        <div className="border border-zinc-800 rounded-xl p-4">
          <label className="flex items-center gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              checked={addLogin}
              onChange={e => setAddLogin(e.target.checked)}
              className="w-4 h-4 accent-white"
            />
            <span className="text-sm text-white">Login für diesen Kunden anlegen</span>
          </label>

          {addLogin && (
            <div className="flex flex-col gap-4 mt-4">
              <Field label="Kunden-E-Mail">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="kontakt@mueller-gmbh.de"
                  className="input"
                />
              </Field>
              <Field label="Start-Passwort (mind. 8 Zeichen)">
                <input
                  type="text"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="wird dem Kunden mitgeteilt"
                  className="input"
                />
              </Field>
              <p className="flex items-start gap-2 text-xs text-zinc-500">
                <Info size={13} className="mt-0.5 shrink-0" />
                Der Kunde loggt sich mit E-Mail + diesem Passwort ein und sieht ausschließlich sein eigenes CMS. Er kann das Passwort später ändern.
              </p>
            </div>
          )}
        </div>

        {error && <p className="text-sm text-red-400">{error}</p>}

        <button
          onClick={handleCreate}
          disabled={loading}
          className="bg-white text-zinc-950 rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-zinc-100 transition-colors disabled:opacity-50"
        >
          {loading ? 'Wird angelegt...' : 'Kunde anlegen'}
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
