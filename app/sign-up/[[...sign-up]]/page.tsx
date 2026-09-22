import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return <main className="grid min-h-screen place-items-center bg-[#f8fbff] p-5"><SignUp routing="path" path="/sign-up" signInUrl="/sign-in" fallbackRedirectUrl="/dashboard" /></main>
}
