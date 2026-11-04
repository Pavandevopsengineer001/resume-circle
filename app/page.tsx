import { Instrument_Serif, Plus_Jakarta_Sans } from 'next/font/google'
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  FileDown,
  FileText,
  IndianRupee,
  LayoutTemplate,
  ListChecks,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  Target,
  WandSparkles,
  X,
} from 'lucide-react'
import { AiExample } from '@/components/landing/ai-example'

const sans = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] })
const serif = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'] })

const steps = [
  { icon: ListChecks, title: 'Fill in your details', text: 'A simple step-by-step form. Skip anything that does not apply to you.', tag: 'Free' },
  { icon: LayoutTemplate, title: 'Preview every template', text: 'Watch your resume take shape live and switch designs in one click.', tag: 'Free' },
  { icon: IndianRupee, title: 'Get the day pass', text: 'Pay ₹29 once by UPI or card when you are ready to download.', tag: '₹29' },
  { icon: WandSparkles, title: 'Polish & download', text: 'Let AI sharpen your wording, then download as many resumes as you need.', tag: '24 hours' },
]

const templates = [
  { name: 'Fresher', note: 'Education and projects first', accent: '#0b3be0', layout: 'stack' },
  { name: 'Professional', note: 'Classic, recruiter-friendly', accent: '#0a0f1c', layout: 'classic' },
  { name: 'Modern', note: 'Bold header, clean sidebar', accent: '#0b3be0', layout: 'sidebar' },
  { name: 'Minimal', note: 'Quiet type, lots of space', accent: '#6b7280', layout: 'minimal' },
  { name: 'Creative', note: 'A splash of colour', accent: '#00a3d9', layout: 'band' },
] as const

const careerStages = ['Freshers', 'Interns', 'Software & IT', 'Sales & marketing', 'Finance & accounts', 'Operations', 'Healthcare', 'Design', 'Teaching', 'Customer support']

const freeItems = ['Step-by-step details form', 'Live preview in every template', 'Save your drafts', 'See AI before-and-after examples']
const passItems = ['Everything in Free', 'AI writing for summary and bullets', 'Tailor your resume to any job description', 'Unlimited PDF & DOCX downloads', 'Unlimited resumes and templates for 24 hours']

const faqs = [
  ['Why a day pass instead of a monthly plan?', 'Most people need a resume for a short burst of applications, not every month. One focused day is usually enough, so you pay ₹29 once instead of a subscription that keeps charging after you are done.'],
  ['Will I be charged again automatically?', 'No. The pass is a one-time payment that simply ends after 24 hours. Nothing renews. If you need more time later, you can buy another pass.'],
  ['What can I do without paying?', 'Fill in all your details, preview your resume in every template, and save your drafts. You only pay when you want AI writing or to download.'],
  ['Will the AI make things up?', 'No. AI writing only rephrases and organises the details you provide. It never adds jobs, skills, numbers or qualifications you did not give us. Always review the result before you apply.'],
  ['Can applicant tracking systems read my resume?', 'Yes. Downloads are text-based PDFs with standard section headings, and you can also download a Word (DOCX) file for portals that ask for one.'],
  ['When does my 24 hours start?', 'The moment your payment is confirmed. You will see the time left inside the editor.'],
  ['Is my data safe?', 'Your details are sent over encrypted connections and used only to build your resume. We never sell your personal information.'],
] as const

// Hairline gradient border: the card's own background on the padding box, a gradient on the border box.
const glowBorder = 'border border-transparent [background:linear-gradient(#0a0f1c,#0a0f1c)_padding-box,linear-gradient(140deg,#3d6bff,#00c2ff_45%,rgba(255,255,255,0.08)_80%)_border-box]'
const paperBorder = 'border border-transparent [background:linear-gradient(#fff,#fff)_padding-box,linear-gradient(160deg,#dfe6f3,#f3f5f9_50%,#dfe6f3)_border-box]'

function Logo({ className }: { className: string }) {
  return <img src="/logo.png" alt="Resume Circle" className={`w-auto object-contain ${className}`} />
}

function Eyebrow({ index, children, dark }: { index: string; children: React.ReactNode; dark?: boolean }) {
  return <p className={`flex items-center gap-3 text-[13px] font-semibold tracking-wide ${dark ? 'text-white/60' : 'text-[#5b6476]'}`}><span className={`font-mono text-xs ${dark ? 'text-[#7cc8ff]' : 'text-[#0b3be0]'}`}>{index}</span><span className={`h-px w-8 ${dark ? 'bg-white/20' : 'bg-[#d5dbe7]'}`} />{children}</p>
}

function Accent({ children }: { children: React.ReactNode }) {
  return <span className={`${serif.className} font-normal italic tracking-[-0.01em]`}>{children}</span>
}

function TemplateThumb({ accent, layout }: { accent: string; layout: (typeof templates)[number]['layout'] }) {
  const line = (width: string, tone = '#e7ebf2') => <span className="block h-1.5 rounded-full" style={{ width, background: tone }} />
  const lines = <div className="space-y-1.5">{line('100%')}{line('92%')}{line('80%')}</div>
  const heading = <span className="mb-2 block h-1.5 w-10 rounded-full" style={{ background: accent }} />
  const body = <div className="space-y-4">{[0, 1, 2].map(i => <div key={i}>{heading}{lines}</div>)}</div>
  if (layout === 'sidebar') return <div className="grid h-full grid-cols-[34%_1fr]"><div className="space-y-3 p-3" style={{ background: accent }}><span className="block size-8 rounded-full bg-white/30" />{[0, 1, 2, 3].map(i => <span key={i} className="block h-1.5 rounded-full bg-white/40" style={{ width: `${90 - i * 12}%` }} />)}</div><div className="p-3">{body}</div></div>
  if (layout === 'band') return <div className="h-full"><div className="h-14 px-3 pt-4" style={{ background: accent }}><span className="block h-2.5 w-20 rounded-full bg-white/80" /><span className="mt-2 block h-1.5 w-12 rounded-full bg-white/50" /></div><div className="p-3">{body}</div></div>
  return <div className={`h-full p-3 ${layout === 'minimal' ? 'px-5 pt-5' : ''}`}>
    <div className={layout === 'classic' ? 'border-b-2 pb-2 text-center' : 'pb-2'} style={{ borderColor: accent }}><span className={`block h-2.5 w-20 rounded-full ${layout === 'classic' ? 'mx-auto' : ''}`} style={{ background: layout === 'minimal' ? '#9ca3af' : '#0a0f1c' }} /><span className={`mt-1.5 block h-1.5 w-14 rounded-full ${layout === 'classic' ? 'mx-auto' : ''}`} style={{ background: accent, opacity: 0.6 }} /></div>
    <div className="mt-3">{body}</div>
  </div>
}

// The hero's product shot: step rail, the form the user fills, and the resume it becomes.
function ProductMockup() {
  const rail = [['Personal', true], ['Education', true], ['Experience', 'active'], ['Skills', false], ['Projects', false], ['Achievements', false]] as const
  return <div className="relative" aria-hidden="true">
    <div className="absolute -inset-x-10 -top-10 bottom-0 -z-10 rounded-[48px] bg-[radial-gradient(60%_60%_at_50%_40%,rgba(11,59,224,0.22),transparent_70%)] blur-2xl" />
    <div className={`overflow-hidden rounded-[22px] shadow-[0_50px_120px_-20px_rgba(10,15,28,0.35),0_0_0_1px_rgba(10,15,28,0.04)] ${paperBorder}`}>
      <div className="flex items-center gap-2 border-b border-[#eef1f6] bg-[#fafbfc] px-4 py-3">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" /><span className="size-2.5 rounded-full bg-[#febc2e]" /><span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="mx-auto hidden rounded-md bg-white px-16 py-1 text-[11px] text-[#8a94a8] ring-1 ring-[#eef1f6] sm:block">resumecircle.in/builder</span>
      </div>
      <div className="grid bg-[#f6f8fb] sm:grid-cols-[1fr_1.15fr] md:grid-cols-[170px_1fr_1.15fr]">
        <div className="hidden border-r border-[#eef1f6] bg-white p-4 md:block">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8a94a8]">Your details</p>
          <ol className="mt-4 space-y-1">{rail.map(([label, state], i) => <li key={label} className={`flex items-center gap-2.5 rounded-lg px-2 py-2 text-xs font-semibold ${state === 'active' ? 'bg-[#eef3ff] text-[#0b3be0]' : 'text-[#5b6476]'}`}><span className={`grid size-5 place-items-center rounded-full text-[10px] ${state === true ? 'bg-[#0a0f1c] text-white' : state === 'active' ? 'bg-[#0b3be0] text-white' : 'bg-[#eef1f6] text-[#8a94a8]'}`}>{state === true ? <Check size={11} strokeWidth={3} /> : i + 1}</span>{label}</li>)}</ol>
        </div>
        <div className="hidden border-r border-[#eef1f6] bg-white p-5 sm:block">
          <p className="text-sm font-bold">Experience</p>
          <p className="text-[11px] text-[#8a94a8]">Write it how you would say it.</p>
          <div className="mt-4 space-y-3">
            {[['Job title', 'Backend developer'], ['Company', 'Finlytics Pvt Ltd'], ['Dates', 'Jun 2022 — Present']].map(([label, value]) => <div key={label}><p className="text-[11px] font-semibold text-[#5b6476]">{label}</p><p className="mt-1 rounded-lg border border-[#e7ebf2] bg-[#fbfcfd] px-2.5 py-2 text-xs">{value}</p></div>)}
            <div><p className="text-[11px] font-semibold text-[#5b6476]">What did you do?</p><p className="mt-1 h-[58px] rounded-lg border border-[#0b3be0]/40 bg-white px-2.5 py-2 text-xs ring-4 ring-[#0b3be0]/8">worked on billing app, made api faster<span className="ml-px inline-block h-3.5 w-px translate-y-0.5 animate-pulse bg-[#0b3be0]" /></p></div>
          </div>
          <div className="mt-4 flex items-center justify-between rounded-xl bg-[#0a0f1c] px-3 py-2.5 text-white"><span className="flex items-center gap-1.5 text-xs font-semibold"><Sparkles size={13} className="text-[#7cc8ff]" /> Polish with AI</span><span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-white/80">Day pass</span></div>
        </div>
        <div className="p-4 sm:p-5">
          <div className="rounded-lg bg-white p-5 shadow-[0_10px_30px_rgba(10,15,28,0.08)]">
            <div className="border-b border-[#eef1f6] pb-3">
              <p className="text-lg font-extrabold tracking-tight">Ananya Rao</p>
              <p className="text-[11px] font-semibold text-[#0b3be0]">Backend Developer</p>
              <p className="mt-1 text-[10px] text-[#8a94a8]">ananya@email.com · Hyderabad · linkedin.com/in/ananya</p>
            </div>
            <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#0b3be0]">Experience</p>
            <div className="mt-1.5 flex justify-between text-[11px] font-bold"><span>Backend Developer · Finlytics</span><span className="font-medium text-[#8a94a8]">2022 — Now</span></div>
            <ul className="mt-1.5 space-y-1 text-[10.5px] leading-[1.55] text-[#374151]">
              <li className="flex gap-2"><span className="mt-1.5 size-1 shrink-0 rounded-full bg-[#0a0f1c]" />Developed the billing service, handling invoicing and payment workflows end to end.</li>
              <li className="flex gap-2"><span className="mt-1.5 size-1 shrink-0 rounded-full bg-[#0a0f1c]" />Optimised slow API endpoints through query tuning and caching.</li>
            </ul>
            <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#0b3be0]">Projects</p>
            <p className="mt-1.5 text-[11px] font-bold">Payments reconciliation tool</p>
            <p className="text-[10.5px] leading-[1.55] text-[#374151]">Automated daily matching of bank and gateway records for the finance team.</p>
            <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#0b3be0]">Skills</p>
            <div className="mt-1.5 flex flex-wrap gap-1">{['Java', 'Spring Boot', 'PostgreSQL', 'REST APIs', 'Redis'].map(skill => <span key={skill} className="rounded bg-[#f1f4f9] px-1.5 py-0.5 text-[9.5px] font-medium text-[#374151]">{skill}</span>)}</div>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute -right-3 top-16 hidden items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#0b3be0] shadow-[0_12px_30px_rgba(11,59,224,0.18)] ring-1 ring-[#dfe8ff] sm:flex lg:-right-8"><Sparkles size={13} /> Polished by AI</div>
    <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl bg-[#0a0f1c] px-4 py-3 text-white shadow-[0_24px_50px_rgba(10,15,28,0.35)] sm:left-auto sm:right-10">
      <span className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-[#0b3be0] to-[#00b8f5]"><Clock3 size={16} /></span>
      <span><span className="block text-[11px] text-white/55">Day pass active</span><span className="block text-sm font-bold tabular-nums">23h 41m left</span></span>
    </div>
  </div>
}

export default function Page() {
  return (
    <main className={`${sans.className} min-h-screen overflow-x-hidden bg-[#fbfbfc] text-[#0a0f1c] antialiased selection:bg-[#0b3be0]/15`}>
      {/* Floating navigation */}
      <header className="sticky top-3 z-40 px-3 sm:top-4 sm:px-5">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border border-white/80 bg-white/75 pl-4 pr-2 shadow-[0_8px_30px_rgba(10,15,28,0.06),0_0_0_1px_rgba(10,15,28,0.04)] backdrop-blur-xl sm:pl-6">
          <a href="#top" aria-label="Resume Circle home"><Logo className="h-11 sm:h-12" /></a>
          <div className="hidden items-center gap-1 text-sm font-medium text-[#5b6476] md:flex">
            {[['How it works', '#how-it-works'], ['Templates', '#templates'], ['Pricing', '#pricing'], ['FAQ', '#faq']].map(([label, href]) => <a key={href} href={href} className="rounded-full px-4 py-2 transition hover:bg-[#f1f4f9] hover:text-[#0a0f1c]">{label}</a>)}
          </div>
          <div className="flex items-center gap-2">
            <a href="/sign-in" className="hidden rounded-full px-4 py-2 text-sm font-semibold text-[#5b6476] hover:text-[#0a0f1c] sm:inline">Sign in</a>
            <a href="/builder/new" className="inline-flex h-11 items-center gap-1.5 rounded-full bg-[#0a0f1c] px-5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] transition hover:bg-[#1a2234]">Create resume <ArrowRight size={15} aria-hidden="true" /></a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative -mt-20 pt-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[900px] bg-[radial-gradient(45%_40%_at_50%_0%,rgba(11,59,224,0.13),transparent_75%),radial-gradient(30%_30%_at_85%_20%,rgba(0,184,245,0.12),transparent_70%),radial-gradient(30%_30%_at_15%_25%,rgba(61,107,255,0.08),transparent_70%)]" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[900px] bg-[linear-gradient(#0a0f1c08_1px,transparent_1px),linear-gradient(90deg,#0a0f1c08_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(70%_60%_at_50%_10%,black,transparent)]" />
        <div className="relative mx-auto max-w-6xl px-5 pt-16 text-center sm:pt-24 lg:px-8">
          <p className="inline-flex animate-in items-center gap-2 rounded-full border border-[#e3e8f2] bg-white/80 py-1 pl-1 pr-4 text-xs font-semibold text-[#5b6476] shadow-sm backdrop-blur fade-in duration-700">
            <span className="rounded-full bg-[#0a0f1c] px-2.5 py-1 text-[11px] text-white">New</span> No subscription. No auto-renewal.
          </p>
          <h1 className="mx-auto mt-8 max-w-5xl animate-in text-[2.9rem] font-extrabold leading-[1] tracking-[-0.05em] fade-in slide-in-from-bottom-4 duration-700 sm:text-7xl lg:text-[5rem]">
            Your resume, ready <Accent>today.</Accent>
            <span className="mt-2 block bg-gradient-to-r from-[#0b3be0] via-[#2f6bff] to-[#00b8f5] bg-clip-text pb-2 text-transparent">₹29 for the whole day.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-xl animate-in text-lg leading-8 text-[#5b6476] fade-in slide-in-from-bottom-4 duration-1000">Just enter your details. We turn them into a professional, recruiter-ready resume. Build and preview free, then unlock AI writing and unlimited downloads for 24 hours.</p>
          <div className="mt-10 flex animate-in flex-col items-center justify-center gap-3 fade-in slide-in-from-bottom-4 duration-1000 sm:flex-row">
            <a href="/builder/new" className="group inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#2a5cff] to-[#0b3be0] px-8 text-[15px] font-bold text-white shadow-[0_18px_40px_-8px_rgba(11,59,224,0.55),inset_0_1px_0_rgba(255,255,255,0.25)] transition hover:shadow-[0_22px_48px_-8px_rgba(11,59,224,0.65),inset_0_1px_0_rgba(255,255,255,0.25)] sm:w-auto">Start for free <ArrowRight size={18} className="transition group-hover:translate-x-0.5" aria-hidden="true" /></a>
            <a href="#example" className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-white px-7 text-[15px] font-semibold shadow-[0_1px_2px_rgba(10,15,28,0.06),0_0_0_1px_rgba(10,15,28,0.08)] transition hover:bg-[#f6f8fb] sm:w-auto"><Sparkles size={17} className="text-[#0b3be0]" aria-hidden="true" /> See what AI does</a>
          </div>
          <ul className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-2 text-sm font-medium text-[#5b6476]">
            {['Pay only to download', 'UPI & cards', 'ATS-readable PDF + DOCX'].map(item => <li key={item} className="flex items-center gap-2"><span className="grid size-4 place-items-center rounded-full bg-[#0b3be0]/10"><Check size={11} strokeWidth={3} className="text-[#0b3be0]" aria-hidden="true" /></span>{item}</li>)}
          </ul>
        </div>
        <div className="relative mx-auto mt-16 max-w-6xl animate-in px-5 pb-12 fade-in slide-in-from-bottom-8 duration-1000 sm:mt-20 lg:px-8"><ProductMockup /></div>
      </section>

      {/* Career stages */}
      <section className="border-y border-[#eef1f6] bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 lg:flex-row lg:gap-10 lg:px-8">
          <p className="shrink-0 text-xs font-bold uppercase tracking-[0.16em] text-[#8a94a8]">Made for every career</p>
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[15px] font-semibold text-[#3a4252] lg:justify-start">{careerStages.map(stage => <li key={stage}>{stage}</li>)}</ul>
        </div>
      </section>

      {/* Why a day pass */}
      <section className="mx-auto max-w-6xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <Eyebrow index="01">Why a day pass</Eyebrow>
            <h2 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-5xl">You need a resume for a <Accent>day,</Accent> not a subscription for a year.</h2>
            <p className="mt-6 max-w-md text-base leading-7 text-[#5b6476]">Most resume builders start cheap, then quietly renew every month. Writing a resume takes an afternoon, so you should only pay for the time you actually use.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className={`rounded-[26px] p-7 ${paperBorder}`}>
              <p className="text-sm font-semibold text-[#8a94a8]">Typical monthly builders</p>
              <p className="mt-4 text-3xl font-extrabold tracking-tight text-[#b4bccb] line-through decoration-2">Every month</p>
              <ul className="mt-6 space-y-3.5 text-sm text-[#5b6476]">{['Recurring monthly charges', 'Auto-renewal you have to cancel', 'Pay for weeks you never use', 'Card details stored for renewals'].map(item => <li key={item} className="flex gap-3"><X size={16} className="mt-0.5 shrink-0 text-[#e5484d]" aria-hidden="true" />{item}</li>)}</ul>
            </div>
            <div className={`relative overflow-hidden rounded-[26px] p-7 text-white shadow-[0_30px_60px_-15px_rgba(11,59,224,0.45)] ${glowBorder}`}>
              <div aria-hidden="true" className="absolute -right-16 -top-16 size-48 rounded-full bg-[#0b3be0]/40 blur-3xl" />
              <p className="relative text-sm font-semibold text-[#7cc8ff]">Resume Circle day pass</p>
              <p className="relative mt-4 text-3xl font-extrabold tracking-tight">₹29 <span className="text-base font-medium text-white/55">once</span></p>
              <ul className="relative mt-6 space-y-3.5 text-sm text-white/85">{['₹29, paid once', 'Ends on its own after 24 hours', 'Unlimited resumes that day', 'Pay with UPI in seconds'].map(item => <li key={item} className="flex gap-3"><Check size={16} className="mt-0.5 shrink-0 text-[#00c2ff]" aria-hidden="true" />{item}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-28 border-t border-[#eef1f6] bg-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Eyebrow index="02">How it works</Eyebrow>
              <h2 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-5xl">Four steps. <Accent>One afternoon.</Accent></h2>
            </div>
            <p className="max-w-sm text-base leading-7 text-[#5b6476]">Everything up to the download is free, so you see exactly what you are paying for.</p>
          </div>
          <ol className="mt-16 grid gap-px overflow-hidden rounded-[28px] bg-[#e7ebf2] ring-1 ring-[#e7ebf2] sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title, text, tag }, i) => <li key={title} className="group relative bg-white p-7 transition hover:bg-[#fbfcfe] lg:p-8">
              <div className="flex items-start justify-between">
                <span className={`${serif.className} text-6xl leading-none text-[#0a0f1c]/90`}>0{i + 1}</span>
                <span className="rounded-full bg-[#f1f4f9] px-2.5 py-1 text-[11px] font-bold text-[#5b6476]">{tag}</span>
              </div>
              <Icon size={20} className="mt-10 text-[#0b3be0]" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-bold tracking-tight">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#5b6476]">{text}</p>
            </li>)}
          </ol>
        </div>
      </section>

      {/* AI before / after */}
      <section id="example" className="scroll-mt-28 bg-[linear-gradient(180deg,#f4f7ff,#fbfbfc)] px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <Eyebrow index="03">AI writing</Eyebrow>
            <h2 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-5xl">Write it how you say it. We make it <Accent>sound hired.</Accent></h2>
            <p className="mt-6 text-base leading-7 text-[#5b6476]">Type your experience in plain words. With the day pass, AI rewrites it into clear, professional bullet points without adding anything that is not true.</p>
          </div>
          <div className="mt-14"><AiExample /></div>
        </div>
      </section>

      {/* Templates */}
      <section id="templates" className="scroll-mt-28 px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Eyebrow index="04">Templates</Eyebrow>
              <h2 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-5xl">A design for every <Accent>career stage.</Accent></h2>
            </div>
            <p className="max-w-sm text-base leading-7 text-[#5b6476]">Switch templates any time. Your details stay put, and every layout is built to be read by applicant tracking systems.</p>
          </div>
          <div className="mt-14 rounded-[32px] bg-[linear-gradient(160deg,#eef2fa,#f7f9fc)] p-5 ring-1 ring-[#e7ebf2] sm:p-8 lg:p-10">
            <div className="flex snap-x gap-5 overflow-x-auto pb-2 lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0">
              {templates.map((item, i) => <figure key={item.name} className={`w-[210px] shrink-0 snap-start lg:w-auto ${i % 2 ? 'lg:translate-y-6' : ''}`}>
                <div className="aspect-[1/1.32] overflow-hidden rounded-xl bg-white shadow-[0_20px_40px_-12px_rgba(10,15,28,0.18),0_0_0_1px_rgba(10,15,28,0.04)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-12px_rgba(11,59,224,0.25),0_0_0_1px_rgba(11,59,224,0.1)]"><TemplateThumb accent={item.accent} layout={item.layout} /></div>
                <figcaption className="mt-4"><span className="block text-sm font-bold">{item.name}</span><span className="block text-xs text-[#8a94a8]">{item.note}</span></figcaption>
              </figure>)}
            </div>
          </div>
        </div>
      </section>

      {/* Features bento */}
      <section className="relative overflow-hidden bg-[#0a0f1c] px-5 py-24 text-white lg:px-8 lg:py-32">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_35%_at_80%_0%,rgba(11,59,224,0.35),transparent_70%),radial-gradient(30%_30%_at_0%_100%,rgba(0,184,245,0.15),transparent_70%)]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <Eyebrow index="05" dark>Everything included</Eyebrow>
            <h2 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-5xl">Free to build. <Accent>One small pass</Accent> to finish.</h2>
          </div>
          <div className="mt-16 grid gap-4 lg:grid-cols-3">
            <article className={`rounded-[26px] p-8 lg:col-span-2 ${glowBorder}`}>
              <BentoHead icon={WandSparkles} title="AI writing" tier="Pass" />
              <p className="mt-3 max-w-md text-sm leading-6 text-white/60">Turn rough notes into a clear summary and strong bullet points, using only facts you give us.</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                <p className="rounded-xl bg-white/5 px-4 py-3 font-mono text-xs text-white/55 ring-1 ring-white/10">made api faster</p>
                <ArrowRight size={16} className="mx-auto rotate-90 text-[#00c2ff] sm:rotate-0" aria-hidden="true" />
                <p className="rounded-xl bg-[#0b3be0]/15 px-4 py-3 text-xs leading-5 text-white/90 ring-1 ring-[#3d6bff]/40">Optimised slow API endpoints through query tuning and caching.</p>
              </div>
            </article>
            <article className="rounded-[26px] bg-white/[0.04] p-8 ring-1 ring-white/10">
              <BentoHead icon={Clock3} title="Unlimited for 24 hours" tier="Pass" />
              <p className="mt-3 text-sm leading-6 text-white/60">Make a resume for every opening you find today: every template, every version.</p>
              <div className="mt-7 flex items-baseline gap-2"><span className="text-5xl font-extrabold tracking-[-0.05em] tabular-nums">24:00</span><span className="text-sm text-white/45">hours</span></div>
            </article>
            {[
              { icon: ListChecks, title: 'Guided details form', text: 'Personal info, education, experience, internships, skills, projects and achievements, one easy step at a time.', tier: 'Free' },
              { icon: LayoutTemplate, title: 'Live preview, all templates', text: 'See your real resume in every design before you spend a rupee.', tier: 'Free' },
              { icon: Target, title: 'Tailor to a job', text: 'Paste a job description and get a matched copy for that role. Your original stays untouched.', tier: 'Pass' },
            ].map(item => <article key={item.title} className="rounded-[26px] bg-white/[0.04] p-8 ring-1 ring-white/10 transition hover:bg-white/[0.06]"><BentoHead icon={item.icon} title={item.title} tier={item.tier} /><p className="mt-3 text-sm leading-6 text-white/60">{item.text}</p></article>)}
            <article className="flex flex-col gap-6 rounded-[26px] bg-white/[0.04] p-8 ring-1 ring-white/10 sm:flex-row sm:items-center sm:justify-between lg:col-span-3">
              <div className="max-w-lg"><BentoHead icon={FileDown} title="PDF & Word downloads" tier="Pass" /><p className="mt-3 text-sm leading-6 text-white/60">Real-text PDFs that applicant tracking systems can read, plus DOCX for job portals.</p></div>
              <div className="flex gap-3">{[['PDF', 'from-[#e5484d] to-[#c1272d]'], ['DOCX', 'from-[#2f6bff] to-[#0b3be0]']].map(([label, tone]) => <div key={label} className="relative h-20 w-16 rounded-lg bg-white/90 shadow-lg"><FileText size={22} className="absolute left-1/2 top-4 -translate-x-1/2 text-[#8a94a8]" aria-hidden="true" /><span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-md bg-gradient-to-b px-2 py-0.5 text-[10px] font-bold ${tone}`}>{label}</span></div>)}</div>
            </article>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="scroll-mt-28 px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center"><Eyebrow index="06">Pricing</Eyebrow></div>
            <h2 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-5xl">Simple, honest, <Accent>budget friendly.</Accent></h2>
            <p className="mt-5 text-base leading-7 text-[#5b6476]">Start free. Pay once only when you are ready to download.</p>
          </div>
          <div className="mx-auto mt-16 grid max-w-4xl items-stretch gap-5 md:grid-cols-2">
            <div className={`flex flex-col rounded-[28px] p-9 ${paperBorder}`}>
              <h3 className="text-base font-bold">Free</h3>
              <p className="mt-6 text-6xl font-extrabold tracking-[-0.06em]">₹0</p>
              <p className="mt-2 text-sm text-[#5b6476]">Build and preview as long as you like.</p>
              <div className="my-8 h-px bg-[#eef1f6]" />
              <ul className="flex-1 space-y-3.5 text-sm">{freeItems.map(item => <li key={item} className="flex gap-3"><Check size={17} className="mt-0.5 shrink-0 text-[#12b76a]" aria-hidden="true" />{item}</li>)}</ul>
              <a href="/builder/new" className="mt-10 inline-flex h-12 w-full items-center justify-center rounded-full text-sm font-bold shadow-[0_0_0_1px_rgba(10,15,28,0.1)] transition hover:bg-[#f6f8fb]">Start building</a>
            </div>
            <div className={`relative flex flex-col overflow-hidden rounded-[28px] p-9 text-white shadow-[0_40px_80px_-20px_rgba(11,59,224,0.5)] ${glowBorder}`}>
              <div aria-hidden="true" className="absolute -right-20 -top-24 size-64 rounded-full bg-[#0b3be0]/45 blur-3xl" />
              <div className="relative flex items-center justify-between"><h3 className="text-base font-bold">Day pass</h3><span className="rounded-full bg-gradient-to-r from-[#3d6bff] to-[#00b8f5] px-3 py-1 text-[11px] font-bold">Most popular</span></div>
              <p className="relative mt-6 flex items-baseline gap-2"><span className="text-6xl font-extrabold tracking-[-0.06em]">₹29</span><span className="text-sm text-white/55">/ 24 hours</span></p>
              <p className="relative mt-2 text-sm text-white/65">One-time payment. Never renews.</p>
              <div className="relative my-8 h-px bg-white/10" />
              <ul className="relative flex-1 space-y-3.5 text-sm text-white/90">{passItems.map(item => <li key={item} className="flex gap-3"><Check size={17} className="mt-0.5 shrink-0 text-[#00c2ff]" aria-hidden="true" />{item}</li>)}</ul>
              <a href="/builder/new" className="relative mt-10 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white text-sm font-bold text-[#0a0f1c] transition hover:bg-[#eef3ff]">Create my resume <ArrowRight size={16} aria-hidden="true" /></a>
              <p className="relative mt-4 flex items-center justify-center gap-2 text-xs text-white/55"><LockKeyhole size={13} aria-hidden="true" /> Secure payment by Razorpay · UPI, cards, net banking</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-28 border-t border-[#eef1f6] bg-white px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow index="07">FAQ</Eyebrow>
            <h2 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-5xl">Questions, <Accent>answered.</Accent></h2>
            <p className="mt-6 text-base leading-7 text-[#5b6476]">Still unsure? Write to us at <a href="mailto:hello@resumecircle.in" className="font-semibold text-[#0b3be0] underline decoration-[#0b3be0]/30 underline-offset-4">hello@resumecircle.in</a>.</p>
          </div>
          <div className="border-t border-[#e7ebf2]">
            {faqs.map(([question, answer]) => <details key={question} className="group border-b border-[#e7ebf2] py-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[17px] font-semibold tracking-tight">{question}<span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#f1f4f9] transition group-open:rotate-180 group-open:bg-[#0a0f1c] group-open:text-white"><ChevronDown size={16} aria-hidden="true" /></span></summary>
              <p className="mt-4 max-w-2xl pr-12 text-[15px] leading-7 text-[#5b6476]">{answer}</p>
            </details>)}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 py-20 lg:px-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] bg-[#0a0f1c] px-7 py-16 text-center text-white sm:px-12 lg:py-24">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_70%_at_50%_0%,rgba(11,59,224,0.55),transparent_70%),radial-gradient(30%_40%_at_50%_100%,rgba(0,184,245,0.2),transparent_70%)]" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent)]" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] sm:text-6xl">Your next application deserves a <Accent>better resume.</Accent></h2>
            <p className="mx-auto mt-6 max-w-md text-base leading-7 text-white/65">Start free in under a minute. Pay ₹29 only when you are ready to download.</p>
            <a href="/builder/new" className="mt-10 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-9 text-[15px] font-bold text-[#0a0f1c] shadow-[0_20px_40px_-10px_rgba(255,255,255,0.25)] transition hover:bg-[#eef3ff]">Create my resume <ArrowRight size={18} aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="overflow-hidden px-5 pt-16 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div><Logo className="h-12" /><p className="mt-4 max-w-xs text-sm leading-6 text-[#8a94a8]">Professional resumes for everyone, at a price that fits a single day of job hunting.</p></div>
          <FooterColumn title="Product" links={[['How it works', '#how-it-works'], ['Templates', '#templates'], ['Pricing', '#pricing'], ['Create a resume', '/builder/new']]} />
          <FooterColumn title="Support" links={[['FAQ', '#faq'], ['Contact us', '/contact'], ['Refunds & cancellation', '/refunds']]} />
          <FooterColumn title="Legal" links={[['Terms of service', '/terms'], ['Privacy policy', '/privacy']]} />
        </div>
        <div className="mx-auto mt-14 flex max-w-6xl flex-col justify-between gap-3 border-t border-[#eef1f6] pt-6 text-xs text-[#8a94a8] sm:flex-row">
          <p>© {new Date().getFullYear()} Resume Circle. All rights reserved.</p>
          <p className="flex items-center gap-2"><ShieldCheck size={14} aria-hidden="true" /> One-time payments. No subscriptions.</p>
        </div>
        <p aria-hidden="true" className="mx-auto mt-6 max-w-6xl select-none bg-gradient-to-b from-[#0a0f1c]/[0.07] to-transparent bg-clip-text text-center text-[19vw] font-extrabold leading-[0.8] tracking-[-0.06em] text-transparent lg:text-[200px]">resumecircle</p>
      </footer>
    </main>
  )
}

function BentoHead({ icon: Icon, title, tier }: { icon: typeof Sparkles; title: string; tier: string }) {
  return <div className="flex items-center justify-between gap-4">
    <h3 className="flex items-center gap-3 text-lg font-bold"><span className="grid size-10 place-items-center rounded-xl bg-white/[0.06] ring-1 ring-white/10"><Icon size={19} className="text-[#00c2ff]" aria-hidden="true" /></span>{title}</h3>
    <span className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ${tier === 'Free' ? 'bg-[#12b76a]/15 text-[#6ce9a6]' : 'bg-[#00b8f5]/15 text-[#7cc8ff]'}`}>{tier === 'Free' ? 'Free' : 'Day pass'}</span>
  </div>
}

function FooterColumn({ title, links }: { title: string; links: [string, string][] }) {
  return <div><p className="text-xs font-bold uppercase tracking-[0.16em]">{title}</p><div className="mt-4 flex flex-col gap-3 text-sm text-[#5b6476]">{links.map(([label, href]) => <a key={label} href={href} className="transition hover:text-[#0b3be0]">{label}</a>)}</div></div>
}
