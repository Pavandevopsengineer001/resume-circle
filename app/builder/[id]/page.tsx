import { auth } from '@clerk/nextjs/server'
import { notFound } from 'next/navigation'
import NewResumePage from '../new/page'
import { getSupabaseAdmin } from '@/lib/supabase-admin'
import type { ResumeContent } from '@/lib/resume-types'

export default async function ResumeEditorPage({ params }: { params: Promise<{ id: string }> }) {
  const { userId } = await auth()
  const { id } = await params
  const db = getSupabaseAdmin()
  if (!userId || !db) return <NewResumePage resumeId={id} />
  const { data } = await db.from('resumes').select('content, template_id').eq('id', id).eq('user_id', userId).maybeSingle()
  if (!data) notFound()
  return <NewResumePage resumeId={id} initialContent={data.content as ResumeContent} initialTemplate={data.template_id} />
}
