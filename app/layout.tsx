// import { ClerkProvider } from '@clerk/nextjs'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Resume Circle — Your next yes starts here',
  description: 'Build, tailor, and download ATS-ready resumes for ₹29 for 24 hours with Resume Circle.',
  generator: 'Resume Circle',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f8fbff',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* <ClerkProvider dynamic> */}
          {children}
          {/* </ClerkProvider> */}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
