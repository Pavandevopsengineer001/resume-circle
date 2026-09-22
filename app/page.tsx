import {
  ArrowRight,
  Check,
  ChevronDown,
  FileText,
  Fingerprint,
  Layers3,
  LockKeyhole,
  Mail,
  Quote,
  ShieldCheck,
  Sparkles,
  WandSparkles,
  Zap,
} from 'lucide-react'

const resumeBullets = [
  'Built a real-time analytics platform used by 12k+ daily users',
  'Reduced onboarding friction by 42% through iterative UX testing',
  'Partnered with engineering to ship 8 high-impact product launches',
]

const features = [
  { icon: WandSparkles, title: 'AI that sounds like you', text: 'Turn a job description into sharper, more relevant bullets — without inventing a thing.' },
  { icon: Layers3, title: 'Unlimited versions', text: 'Create a focused resume for every role on your list while your pass is active.' },
  { icon: Fingerprint, title: 'ATS-first by design', text: 'Clean typography and semantic structure that recruiters and scanners can actually read.' },
]

const testimonials = [
  { quote: 'I tailored five applications over one Sunday and finally stopped second-guessing every bullet.', name: 'Riya Shah', role: 'Product designer, Bengaluru', initials: 'RS' },
  { quote: 'The ₹29 pass is the fairest job-search pricing I have seen. It helped me land interviews in a week.', name: 'Arjun Nair', role: 'Frontend engineer, Kochi', initials: 'AN' },
  { quote: 'It feels like having a career editor who remembers my story and never adds fluff.', name: 'Meera Kapoor', role: 'Growth marketer, Mumbai', initials: 'MK' },
]

const faqs = [
  ['Is Resume Circle really ₹29?', 'Yes. One pass gives you unlimited resume creation, AI tailoring, and PDF downloads for 24 hours. No monthly subscription.'],
  ['Can I try it before paying?', 'Absolutely. Build your resume, try templates, and preview your tailored version for free. Payment is only needed when you download.'],
  ['Will AI make up my experience?', 'Never. Resume Circle only reshapes and prioritizes what you provide. It will not invent roles, achievements, or skills.'],
  ['Are the templates ATS-friendly?', 'Yes. Every template uses readable semantic HTML, clear hierarchy, standard sections, and no canvas-based text.'],
  ['How secure is my resume data?', 'Your resume belongs to you. We use encrypted connections, private storage, and never sell your personal information.'],
]

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8fbff] text-[#10203c]">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-[720px] bg-[radial-gradient(circle_at_72%_12%,rgba(255,139,66,0.18),transparent_25%),radial-gradient(circle_at_20%_0%,rgba(42,110,255,0.16),transparent_34%)]" />
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
        <a href="#top" className="flex items-center" aria-label="Resume Circle home">
  <img
    src="/logo.png"
    alt="Resume Circle"
    className="h-20 w-auto object-contain"
  />
</a>
        <div className="hidden items-center gap-8 text-sm font-medium text-[#51617b] md:flex">
          <a href="#how-it-works" className="transition-colors hover:text-[#155eef]">How it works</a>
          <a href="#features" className="transition-colors hover:text-[#155eef]">Why Circle</a>
          <a href="#pricing" className="transition-colors hover:text-[#155eef]">Pricing</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="/sign-in" className="hidden text-sm font-semibold text-[#51617b] hover:text-[#155eef] sm:inline">Sign in</a>
          <a href="/builder/new" className="inline-flex h-8 items-center justify-center gap-1.5 rounded-full bg-[#155eef] px-5 text-sm font-medium text-white shadow-[0_8px_20px_rgba(21,94,239,0.2)] transition hover:bg-[#0f4dcc]">Start building <ArrowRight aria-hidden="true" /></a>
        </div>
      </nav>

      <section id="top" className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-14 lg:grid-cols-[0.93fr_1.07fr] lg:px-8 lg:pb-32 lg:pt-20">
        <div className="max-w-xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#cfe0ff] bg-white/80 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#155eef] shadow-sm">
            <span className="size-1.5 rounded-full bg-[#ff7a3d]" />
            Built for the next opportunity
          </div>
          <h1 className="max-w-2xl text-balance text-5xl font-bold leading-[0.98] tracking-[-0.065em] text-[#10203c] sm:text-6xl lg:text-[76px]">
            Your next <span className="text-[#155eef]">yes</span> starts with a better resume.
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-[#5c6d88] sm:text-xl">
            Build a resume that moves with you. Tailor every application with AI, keep your story authentic, and download unlimited versions for just <span className="font-bold text-[#10203c]">₹29 for 24 hours.</span>
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="/builder/new" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#ff7a3d] px-7 text-base font-bold text-white shadow-[0_12px_24px_rgba(255,122,61,0.25)] transition hover:bg-[#ed6930]">Build your resume free <ArrowRight aria-hidden="true" /></a>
            <a href="#how-it-works" className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#d7e1f0] bg-white px-6 text-sm font-semibold text-[#31425f] transition hover:border-[#b7c9e4] hover:bg-[#f5f8fc]">See how it works <ChevronDown aria-hidden="true" /></a>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-[#71809a]">
            {['No credit card to start', 'ATS-friendly templates', 'Your data stays yours'].map((item) => <span key={item} className="inline-flex items-center gap-2"><span className="grid size-5 place-items-center rounded-full bg-[#dff7ed] text-[#15966a]"><Check aria-hidden="true" /></span>{item}</span>)}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[630px] lg:pt-8">
          <div className="absolute -right-3 top-2 rounded-2xl border border-[#ffd5bd] bg-[#fff7f2] px-4 py-3 shadow-[0_12px_30px_rgba(255,122,61,0.14)] sm:-right-7 sm:top-0">
            <div className="flex items-center gap-2 text-xs font-bold text-[#b55425]"><Sparkles aria-hidden="true" /> AI match score</div>
            <div className="mt-1 text-2xl font-bold text-[#10203c]">94<span className="text-sm text-[#b55425]">/100</span></div>
          </div>
          <div className="rounded-[28px] border border-[#d8e5f7] bg-white p-3 shadow-[0_30px_80px_rgba(32,85,160,0.16)] sm:p-5">
            <div className="flex items-center justify-between border-b border-[#edf1f7] pb-4"><div className="flex items-center gap-2"><span className="size-2.5 rounded-full bg-[#ff7a3d]" /><span className="size-2.5 rounded-full bg-[#ffd166]" /><span className="size-2.5 rounded-full bg-[#43c58a]" /></div><span className="rounded-full bg-[#edf4ff] px-3 py-1 text-[11px] font-bold text-[#155eef]">Live preview</span></div>
            <div className="grid gap-0 sm:grid-cols-[0.37fr_0.63fr]">
              <div className="border-b border-[#edf1f7] bg-[#f8fbff] p-5 sm:border-b-0 sm:border-r sm:p-6"><div className="mb-6 h-2.5 w-20 rounded-full bg-[#c9d9f3]" /><div className="flex flex-col gap-5"><div><p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[#9aaac2]">Personal</p><div className="h-2 w-full rounded bg-[#dfe8f5]" /><div className="mt-2 h-2 w-4/5 rounded bg-[#dfe8f5]" /></div><div><p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[#9aaac2]">Experience</p><div className="h-2 w-full rounded bg-[#dfe8f5]" /><div className="mt-2 h-2 w-11/12 rounded bg-[#dfe8f5]" /><div className="mt-2 h-2 w-3/4 rounded bg-[#dfe8f5]" /></div><div><p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-[#9aaac2]">Skills</p><div className="flex flex-wrap gap-1.5"><span className="h-5 w-12 rounded bg-[#dbe8ff]" /><span className="h-5 w-16 rounded bg-[#dbe8ff]" /><span className="h-5 w-14 rounded bg-[#dbe8ff]" /></div></div></div></div>
              <article className="p-5 sm:p-7"><div className="border-b-2 border-[#155eef] pb-4"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#155eef]">Product designer</p><h2 className="mt-2 text-2xl font-bold tracking-[-0.05em] text-[#10203c]">Aarav Mehta</h2><p className="mt-1 text-[11px] text-[#71809a]">aarav.mehta@email.com · Bengaluru, IN · linkedin.com/in/aarav</p></div><div className="mt-5"><h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#155eef]">Experience</h3><p className="mt-2 text-sm font-bold text-[#263854]">Senior Product Designer <span className="font-normal text-[#8b99af]">· Luma Labs</span></p><p className="mt-1 text-[11px] text-[#9aaac2]">2022 — Present</p><ul className="mt-3 flex flex-col gap-2 text-[11px] leading-5 text-[#52627c]">{resumeBullets.map((bullet) => <li key={bullet} className="flex gap-2"><span className="mt-1.5 size-1 shrink-0 rounded-full bg-[#ff7a3d]" />{bullet}</li>)}</ul></div><div className="mt-5"><h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#155eef]">Core skills</h3><p className="mt-2 text-[11px] leading-5 text-[#52627c]">Product strategy · Figma · Design systems · User research · Prototyping</p></div></article>
            </div>
          </div>
          <div className="absolute -bottom-8 -left-4 hidden items-center gap-3 rounded-2xl border border-[#dbe6f5] bg-white px-4 py-3 shadow-[0_14px_32px_rgba(32,85,160,0.12)] sm:flex"><span className="grid size-9 place-items-center rounded-xl bg-[#e9f8f1] text-[#15966a]"><Zap aria-hidden="true" /></span><div><p className="text-xs font-bold text-[#263854]">Ready to apply</p><p className="text-[11px] text-[#8492a9]">Optimized in 12 seconds</p></div></div>
        </div>
      </section>

      <section id="how-it-works" className="relative bg-[#10203c] px-5 py-20 text-white lg:px-8 lg:py-24"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ff9b67]">The Circle method</p><h2 className="mt-3 max-w-2xl text-4xl font-bold tracking-[-0.05em] sm:text-5xl">One great base. Every opportunity.</h2></div><p className="max-w-sm text-base leading-7 text-[#afbdd2]">Resume Circle keeps your story consistent while making every application feel purpose-built.</p></div><div className="mt-14 grid gap-5 md:grid-cols-3">{['Start with your story', 'Tune it to the role', 'Apply with confidence'].map((title, index) => <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6"><span className="text-5xl font-bold tracking-[-0.08em] text-[#ff7a3d]">0{index + 1}</span><h3 className="mt-10 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-[#afbdd2]">{['Add your experience once. Our clean builder turns it into a flexible, polished foundation.', 'Paste a job description and let AI surface the language that matters — honestly.', 'Download an ATS-ready PDF and spend your energy on the interview, not formatting.'][index]}</p></div>)}</div></div></section>

      <section id="features" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-[#155eef]">Everything in your corner</p><h2 className="mt-4 text-4xl font-bold tracking-[-0.055em] text-[#10203c] sm:text-5xl">Serious tools.<br /><span className="text-[#155eef]">Friendly price.</span></h2></div><div className="grid gap-4 md:grid-cols-3">{features.map(({ icon: Icon, title, text }) => <div key={title} className="rounded-3xl border border-[#e0e8f3] bg-white p-5 shadow-[0_10px_30px_rgba(32,85,160,0.05)]"><span className="grid size-11 place-items-center rounded-2xl bg-[#edf4ff] text-[#155eef]"><Icon aria-hidden="true" /></span><h3 className="mt-5 text-base font-bold text-[#263854]">{title}</h3><p className="mt-2 text-sm leading-6 text-[#71809a]">{text}</p></div>)}</div></div></section>

      <section className="bg-[#fff8f4] px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ff7a3d]">Loved by focused job seekers</p><h2 className="mt-3 max-w-2xl text-4xl font-bold tracking-[-0.055em] text-[#10203c] sm:text-5xl">Less formatting. More momentum.</h2></div><div className="flex items-center gap-2 text-sm font-semibold text-[#51617b]"><span className="text-[#ff7a3d]">★★★★★</span> 4.9/5 from early builders</div></div><div className="mt-12 grid gap-5 md:grid-cols-3">{testimonials.map((item) => <figure key={item.name} className="flex flex-col justify-between rounded-3xl border border-[#f2dfd5] bg-white p-6 shadow-[0_12px_30px_rgba(255,122,61,0.06)]"><Quote aria-hidden="true" className="text-[#ffb38d]" /><blockquote className="mt-6 text-lg font-semibold leading-8 tracking-[-0.02em] text-[#263854]">&quot;{item.quote}&quot;</blockquote><figcaption className="mt-8 flex items-center gap-3"><span className="grid size-10 place-items-center rounded-full bg-[#eaf2ff] text-xs font-bold text-[#155eef]">{item.initials}</span><span><span className="block text-sm font-bold text-[#263854]">{item.name}</span><span className="block text-xs text-[#8492a9]">{item.role}</span></span></figcaption></figure>)}</div></div></section>

      <section id="pricing" className="px-5 pb-20 lg:px-8 lg:pb-28"><div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#eaf2ff] px-6 py-12 sm:px-12 lg:px-20 lg:py-16"><div className="absolute -right-20 -top-24 size-72 rounded-full bg-[#c9dcff] blur-3xl" /><div className="relative flex flex-col items-start justify-between gap-10 md:flex-row md:items-center"><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-[#155eef]">The 24-hour pass</p><h2 className="mt-3 max-w-xl text-4xl font-bold tracking-[-0.055em] text-[#10203c] sm:text-5xl">All the resumes you need. For less than lunch.</h2><p className="mt-5 max-w-lg text-base leading-7 text-[#5c6d88]">No monthly commitment. No surprise upsells. Just ₹29 for unlimited creating, optimizing, and downloading for one focused day.</p></div><div className="relative min-w-[245px] rounded-3xl border border-white bg-white p-6 shadow-[0_18px_40px_rgba(21,94,239,0.12)]"><div className="flex items-baseline gap-1"><span className="text-5xl font-bold tracking-[-0.08em] text-[#10203c]">₹29</span><span className="text-sm font-medium text-[#71809a]">/ 24 hours</span></div><div className="my-5 h-px bg-[#e8eef7]" /><p className="flex items-center gap-2 text-sm font-semibold text-[#41536f]"><LockKeyhole aria-hidden="true" /> Secure UPI & cards</p>          <a href="/builder/new" className="mt-5 inline-flex h-9 w-full items-center justify-center gap-2 rounded-full bg-[#155eef] px-2.5 text-sm font-bold text-white transition hover:bg-[#0f4dcc]">Get started <ArrowRight aria-hidden="true" /></a></div></div></div></section>

      <section id="faq" className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.7fr_1.3fr] lg:px-8 lg:py-28"><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-[#155eef]">Questions, answered</p><h2 className="mt-4 text-4xl font-bold tracking-[-0.055em] text-[#10203c] sm:text-5xl">A clearer way to move forward.</h2><p className="mt-5 max-w-sm text-base leading-7 text-[#71809a]">Still curious? Send our team a note and we&apos;ll help you make your next application count.</p><a href="mailto:hello@resumecircle.in" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#155eef] hover:text-[#0f4dcc]"><Mail aria-hidden="true" /> hello@resumecircle.in</a></div><div className="divide-y divide-[#e3eaf3] rounded-3xl border border-[#e3eaf3] bg-white px-6 shadow-[0_12px_35px_rgba(32,85,160,0.05)]">{faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-bold text-[#263854]"><span>{question}</span><ChevronDown aria-hidden="true" className="shrink-0 text-[#155eef] transition group-open:rotate-180" /></summary><p className="max-w-2xl pt-3 text-sm leading-7 text-[#71809a]">{answer}</p></details>)}</div></section>

      <section className="px-5 pb-20 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-[28px] bg-[#155eef] px-7 py-9 text-white sm:flex-row sm:items-center sm:px-10"><div><p className="text-2xl font-bold tracking-[-0.04em]">Your next great application is waiting.</p><p className="mt-1 text-sm text-blue-100">Start for free. Pay only when you&apos;re ready to download.</p></div><a href="/builder/new" className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-[#155eef] transition hover:bg-blue-50">Create my resume <ArrowRight aria-hidden="true" /></a></div></section>

      <footer className="border-t border-[#e3eaf3] bg-white px-5 py-12 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]"><div>
      <a href="#top" className="flex items-center" aria-label="Resume Circle home">
  <img
    src="/logo.png"
    alt="Resume Circle"
    className="h-16 w-auto object-contain"
  />
</a>
      <p className="mt-4 max-w-xs text-sm leading-6 text-[#8492a9]">A smarter, fairer way to prepare for the opportunity you want next.</p></div><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#10203c]">Product</p><div className="mt-4 flex flex-col gap-3 text-sm text-[#71809a]"><a href="#features" className="hover:text-[#155eef]">Features</a><a href="#pricing" className="hover:text-[#155eef]">Pricing</a><a href="/builder/new" className="hover:text-[#155eef]">Build a resume</a></div></div><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#10203c]">Company</p><div className="mt-4 flex flex-col gap-3 text-sm text-[#71809a]"><a href="#how-it-works" className="hover:text-[#155eef]">How it works</a><a href="#faq" className="hover:text-[#155eef]">FAQ</a><a href="mailto:hello@resumecircle.in" className="hover:text-[#155eef]">Contact</a></div></div><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#10203c]">Trust</p><p className="mt-4 flex items-start gap-2 text-sm leading-6 text-[#71809a]"><ShieldCheck aria-hidden="true" className="mt-0.5 shrink-0 text-[#15966a]" /> Private by design. Your data is yours.</p></div></div><div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-4 border-t border-[#edf1f7] pt-6 text-xs text-[#8492a9] sm:flex-row"><p>© 2026 Resume Circle. Built for your next chapter.</p><p className="flex items-center gap-2"><LockKeyhole aria-hidden="true" /> Secure, simple, no subscription.</p></div></footer>
    </main>
  )
}

