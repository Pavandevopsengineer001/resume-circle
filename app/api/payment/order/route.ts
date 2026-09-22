import { auth } from '@clerk/nextjs/server'
import Razorpay from 'razorpay'
import { NextResponse } from 'next/server'

export async function POST() {
  const { userId } = await auth()
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const keyId = process.env.RAZORPAY_KEY_ID
  const keySecret = process.env.RAZORPAY_KEY_SECRET
  if (!keyId || !keySecret) return NextResponse.json({ error: 'Payments are not configured.' }, { status: 503 })
  const razorpay = new Razorpay({ key_id: keyId, key_secret: keySecret })
  const order = await razorpay.orders.create({ amount: 2900, currency: 'INR', receipt: `rc_${userId}_${Date.now()}`, notes: { clerk_user_id: userId, product: '24-hour-pass' } })
  return NextResponse.json({ order, keyId })
}
