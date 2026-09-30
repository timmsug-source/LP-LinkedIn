import 'server-only'
import { createClient } from '@supabase/supabase-js'

/**
 * Service-role client for the Hub. Bypasses RLS — SERVER ONLY.
 * Never import this into a Client Component. The key has no NEXT_PUBLIC_
 * prefix so it can never reach the browser bundle.
 */
export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_HUB_SUPABASE_URL!,
    process.env.HUB_SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  )
}
