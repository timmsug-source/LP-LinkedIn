'use client'
import { useState } from 'react'
import TimerTab from './timer'
import NotesTab from './notes'
import InvoicesTab from './invoices'

const TABS = ['Timer', 'Notizen', 'Rechnungen'] as const
type Tab = typeof TABS[number]

export default function ProjectTabs({ project }: { project: Record<string, unknown> }) {
  const [active, setActive] = useState<Tab>('Timer')

  return (
    <div>
      {/* Tab bar */}
      <div className="flex gap-1 border-b border-zinc-800 mb-6">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-4 py-2 text-sm transition-colors border-b-2 -mb-px ${
              active === tab
                ? 'text-white border-white'
                : 'text-zinc-500 border-transparent hover:text-zinc-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {active === 'Timer' && <TimerTab projectId={project.id as string} />}
      {active === 'Notizen' && <NotesTab projectId={project.id as string} initialNotes={project.notes as string | null} />}
      {active === 'Rechnungen' && <InvoicesTab projectId={project.id as string} />}
    </div>
  )
}
