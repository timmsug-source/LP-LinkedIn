'use client'
import { useState } from 'react'
import ContentEditor from './content-editor'
import ImageManager from './image-manager'
import BlogEditor from './blog-editor'
import CommunicationTab from './communication'
import Link from 'next/link'
import { ExternalLink, ArrowLeft } from 'lucide-react'

const TABS = ['Inhalte', 'Bilder', 'Blog', 'Kommunikation'] as const
type Tab = typeof TABS[number]

interface Site {
  id: string
  slug: string
  client_name: string
  domain: string | null
}

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

interface Post {
  id: string
  title: string
  slug: string
  published: boolean
  published_at: string | null
  updated_at: string
}

export default function CmsShell({
  site,
  initialBlocks,
  initialPosts,
  isAdmin,
}: {
  site: Site
  initialBlocks: Block[]
  initialPosts: Post[]
  isAdmin: boolean
}) {
  const [active, setActive] = useState<Tab>('Inhalte')

  return (
    <div className="p-8 lg:p-10 max-w-4xl mx-auto">
      {/* Header */}
      <Link
        href="/app"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-[#8da0b8] hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] rounded-lg px-3 py-1.5 transition-colors mb-5"
      >
        <ArrowLeft size={13} /> Übersicht
      </Link>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">{site.client_name}</h1>
          {site.domain && (
            <a
              href={`https://${site.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-[#8da0b8] hover:text-[#00bc7d] mt-0.5 transition-colors"
            >
              {site.domain} <ExternalLink size={10} />
            </a>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 border-b border-white/[0.07] mb-6">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-4 py-2 text-sm transition-colors border-b-2 -mb-px ${
              active === tab
                ? 'text-white border-[#00bc7d] font-medium'
                : 'text-[#8da0b8] border-transparent hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {active === 'Inhalte' && <ContentEditor siteId={site.id} initialBlocks={initialBlocks} />}
      {active === 'Bilder' && <ImageManager siteId={site.id} siteSlug={site.slug} />}
      {active === 'Blog' && <BlogEditor siteId={site.id} initialPosts={initialPosts} />}
      {active === 'Kommunikation' && <CommunicationTab siteId={site.id} />}
    </div>
  )
}
