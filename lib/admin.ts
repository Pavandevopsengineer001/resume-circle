import { currentUser } from '@/lib/auth'

export async function requireAdmin() {
  const user = await currentUser()
  const email = user?.primaryEmailAddress?.emailAddress?.toLowerCase()
  const allowed = (process.env.ADMIN_EMAILS ?? '').split(',').map((value) => value.trim().toLowerCase()).filter(Boolean)
  if (!email || !allowed.includes(email)) return null
  return user
}
