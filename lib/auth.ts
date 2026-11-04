// Temporary stand-in while Clerk is switched off: everyone is treated as signed out.
// To re-enable Clerk, point these imports back to '@clerk/nextjs/server' and restore ClerkProvider + proxy.ts.

type StubUser = { id: string; firstName: string | null; primaryEmailAddress: { emailAddress: string } | null }

export async function auth(): Promise<{ userId: string | null }> {
  return { userId: null }
}

export async function currentUser(): Promise<StubUser | null> {
  return null
}
