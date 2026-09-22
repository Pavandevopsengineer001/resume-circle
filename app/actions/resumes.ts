'use server'

import { auth, currentUser } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'
import { getSupabaseAdmin } from '@/lib/supabase-admin'
import type { ResumeContent } from '@/lib/resume-types'

async function identity() {
  const { userId } = await auth()
  if (!userId) throw new Error('Please sign in to save your resume.')
  const user = await currentUser()
  return { id: userId, email: user?.primaryEmailAddress?.emailAddress ?? '', name: user?.fullName ?? null }
}

export async function saveResume(input: { id?: string; title: string; templateId: string; content: ResumeContent }) {
  const user = await identity()
  const db = getSupabaseAdmin()
  if (!db) throw new Error('Resume saving needs Supabase configuration.')
  await db.from('users').upsert({ id: user.id, email: user.email, name: user.name }, { onConflict: 'id' })
  const payload = { user_id: user.id, title: input.title, template_id: input.templateId, content: input.content, updated_at: new Date().toISOString() }
  const result = input.id
    ? await db.from('resumes').update(payload).eq('id', input.id).eq('user_id', user.id).select('id').single()
    : await db.from('resumes').insert(payload).select('id').single()
  if (result.error) throw new Error(result.error.message)
  revalidatePath('/dashboard')
  return result.data.id as string
}

export async function getPassStatus() {
  const user = await identity()
  const db = getSupabaseAdmin()
  if (!db) return null
  const { data } = await db.from('users').select('access_expires_at').eq('id', user.id).maybeSingle()
  return data?.access_expires_at ?? null
}
