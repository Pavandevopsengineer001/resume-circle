import crypto from 'crypto'
import { NextResponse } from 'next/server'
import { getSupabaseAdmin } from '@/lib/supabase-admin'

export async function POST(request: Request) {
  const raw = await request.text()
  const signature = request.headers.get('x-razorpay-signature') ?? ''
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET
  if (!secret || !crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(crypto.createHmac('sha256', secret).update(raw).digest('hex')))) return new NextResponse('Invalid signature', { status: 400 })
  const event = JSON.parse(raw)
  if (event.event !== 'payment.captured') return NextResponse.json({ ok: true })
  const userId = event.payload?.payment?.entity?.notes?.clerk_user_id
  const db = getSupabaseAdmin()
  if (!userId || !db) return new NextResponse('Missing user or database', { status: 400 })
  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
  const { error } = await db.from('users').update({ access_expires_at: expires }).eq('id', userId)
  if (error) return new NextResponse(error.message, { status: 500 })
  return NextResponse.json({ ok: true })
}
