'use client'
import { useState } from 'react'
import { createClient } from '@/lib/hub/client'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    setError('')
    setLoading(true)
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setError('E-Mail oder Passwort falsch.')
      setLoading(false)
      return
    }
    router.push('/app')
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center text-center">
          <img src="/favicon.svg" alt="Timm Schurig" className="w-12 h-12 rounded-xl mb-3" />
          <p className="text-xs text-[#8da0b8] uppercase tracking-widest">Platform Hub</p>
        </div>

        <div className="bg-[#0b192e]/70 border border-white/[0.08] rounded-2xl p-6 flex flex-col gap-4 shadow-[0_20px_60px_rgba(0,0,0,.4)]">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-[#8da0b8]">E-Mail</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleLogin()}
              placeholder="deine@email.de"
              className="bg-[#050d1a] border border-white/[0.1] rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-[#4a6080] focus:outline-none focus:border-[#00bc7d]/50 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-[#8da0b8]">Passwort</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleLogin()}
              placeholder="••••••••"
              className="bg-[#050d1a] border border-white/[0.1] rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-[#4a6080] focus:outline-none focus:border-[#00bc7d]/50 transition-colors"
            />
          </div>

          {error && <p className="text-xs text-red-400">{error}</p>}

          <button
            onClick={handleLogin}
            disabled={loading}
            className="bg-[#00bc7d] text-[#04121e] rounded-lg px-4 py-2.5 text-sm font-semibold hover:bg-[#00d38c] hover:shadow-[0_8px_28px_rgba(0,188,125,.35)] transition-all disabled:opacity-50"
          >
            {loading ? 'Einloggen...' : 'Einloggen'}
          </button>
        </div>
      </div>
    </div>
  )
}
