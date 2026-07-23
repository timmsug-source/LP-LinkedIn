import { createClient } from './client'

export async function uploadImage(
  file: File,
  siteId: string,
  folder: string = 'images'
): Promise<string | null> {
  const supabase = createClient()
  const ext = file.name.split('.').pop()
  const filename = `${siteId}/${folder}/${Date.now()}.${ext}`

  const { error } = await supabase.storage
    .from('site-media')
    .upload(filename, file, { upsert: true })

  if (error) return null

  const { data } = supabase.storage
    .from('site-media')
    .getPublicUrl(filename)

  return data.publicUrl
}
