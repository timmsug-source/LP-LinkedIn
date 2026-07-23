import { getSiteContent } from '@/lib/hub/content'
import NaturheilpraxisClient from './naturheilpraxis-client'

// CMS-Inhalte serverseitig laden, alle 60s revalidieren
export const revalidate = 60

export default async function NaturheilpraxisPage() {
  const blocks = await getSiteContent('naturheilpraxis-brenscheidt')
  return <NaturheilpraxisClient blocks={blocks} />
}
