import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return <main className="grid min-h-screen place-items-center bg-[#f8fbff] p-5"><SignIn routing="path" path="/sign-in" signUpUrl="/sign-up" fallbackRedirectUrl="/dashboard" /></main>
}
