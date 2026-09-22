import { redirect } from 'next/navigation'
import { BarChart3, CreditCard, FileText, ShieldCheck, Users } from 'lucide-react'
import { requireAdmin } from '@/lib/admin'
import { getSupabaseAdmin } from '@/lib/supabase-admin'

export const dynamic = 'force-dynamic'

export default async function AdminPage() {
  const admin = await requireAdmin()
  if (!admin) redirect('/dashboard')
  const db = getSupabaseAdmin()
  if (!db) return <main className="grid min-h-screen place-items-center bg-[#f8fbff] p-6 text-center text-[#10203c]"><div className="max-w-md rounded-3xl bg-white p-8 shadow-sm"><ShieldCheck className="mx-auto text-[#155eef]" size={32} /><h1 className="mt-4 text-2xl font-bold">Admin is ready for Supabase</h1><p className="mt-3 text-sm leading-6 text-[#71809a]">Add the Supabase server credentials to view live product metrics.</p></div></main>
  const [usersResponse, resumesResponse, passesResponse, recentResponse] = await Promise.all([
    db.from('users').select('id', { count: 'exact', head: true }),
    db.from('resumes').select('id', { count: 'exact', head: true }),
    db.from('users').select('id', { count: 'exact', head: true }).gt('access_expires_at', new Date().toISOString()),
    db.from('resumes').select('id,title,template_id,updated_at,user_id').order('updated_at', { ascending: false }).limit(8),
  ])
  const users = usersResponse.count ?? 0; const resumes = resumesResponse.count ?? 0; const activePasses = passesResponse.count ?? 0; const recent = recentResponse.data ?? []
  const ids = [...new Set(recent.map(item => item.user_id))]
  const profiles = ids.length ? await db.from('users').select('id,email,name').in('id', ids) : { data: [] }
  const identity = new Map((profiles.data ?? []).map(item => [item.id, item]))
  const cards = [
    { label: 'Registered users', value: users, icon: Users, tone: 'bg-[#eaf2ff] text-[#155eef]' },
    { label: 'Saved resumes', value: resumes, icon: FileText, tone: 'bg-[#fff2e9] text-[#d85f2e]' },
    { label: 'Active 24h passes', value: activePasses, icon: CreditCard, tone: 'bg-[#e9f8f1] text-[#15966a]' },
  ]
  return <main className="min-h-screen bg-[#f8fbff] px-5 py-10 text-[#10203c] lg:px-8"><div className="mx-auto max-w-6xl"><header className="flex flex-col justify-between gap-5 border-b border-[#e3eaf3] pb-7 sm:flex-row sm:items-end"><div><div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[.16em] text-[#155eef]"><ShieldCheck size={17} /> Operations</div><h1 className="mt-3 text-4xl font-bold tracking-[-.055em]">Resume Circle Admin</h1><p className="mt-2 text-sm text-[#71809a]">Live product health and recent user activity.</p></div><a href="/dashboard" className="text-sm font-bold text-[#155eef]">← Back to workspace</a></header><section className="mt-8 grid gap-4 md:grid-cols-3">{cards.map(({ label, value, icon: Icon, tone }) => <article key={label} className="rounded-3xl border border-[#e0e8f3] bg-white p-6 shadow-sm"><span className={`grid size-11 place-items-center rounded-2xl ${tone}`}><Icon size={21} /></span><p className="mt-5 text-3xl font-bold tracking-[-.05em]">{value.toLocaleString()}</p><p className="mt-1 text-sm text-[#71809a]">{label}</p></article>)}</section><section className="mt-8 rounded-3xl border border-[#e0e8f3] bg-white p-6 shadow-sm"><div className="flex items-center gap-2"><BarChart3 className="text-[#155eef]" /><div><h2 className="font-bold">Recent resume activity</h2><p className="text-sm text-[#71809a]">Latest saved drafts across the platform.</p></div></div>{recent.length === 0 ? <p className="py-10 text-center text-sm text-[#71809a]">No saved resumes yet.</p> : <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[620px] text-left text-sm"><thead className="border-b border-[#edf1f7] text-xs uppercase tracking-wider text-[#8492a9]"><tr><th className="pb-3 font-bold">Resume</th><th className="pb-3 font-bold">Owner</th><th className="pb-3 font-bold">Template</th><th className="pb-3 text-right font-bold">Last updated</th></tr></thead><tbody>{recent.map(item => { const owner = identity.get(item.user_id); return <tr key={item.id} className="border-b border-[#f0f3f8] last:border-0"><td className="py-4 font-semibold">{item.title}</td><td className="py-4 text-[#71809a]">{owner?.name || owner?.email || 'Unknown user'}</td><td className="py-4 capitalize text-[#71809a]">{item.template_id}</td><td className="py-4 text-right text-[#71809a]">{new Date(item.updated_at).toLocaleString()}</td></tr> } )}</tbody></table></div>}</section></div></main>
}
