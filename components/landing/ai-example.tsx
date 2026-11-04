'use client'

import { useState } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

// Static, clearly-labelled samples: the landing page never calls the AI, so free visitors cost nothing.
const examples = [
  {
    id: 'fresher', label: 'Fresher',
    role: 'B.Tech graduate · Software intern',
    before: ['did internship at a startup', 'made a college project website for events', 'know java and some react'],
    after: [
      'Completed a 3-month software internship, building and testing features for a live web product.',
      'Designed and launched a college events website used by students to register for fests.',
      'Built projects with Java and React, applying core data structures and component-based UI design.',
    ],
  },
  {
    id: 'developer', label: 'Developer',
    role: 'Backend developer · 3 years',
    before: ['worked on billing app', 'fixed lots of bugs', 'made api faster'],
    after: [
      'Developed and maintained the billing service, handling invoicing and payment workflows end to end.',
      'Diagnosed and resolved production defects, improving stability of customer-facing releases.',
      'Optimised slow API endpoints through query tuning and caching, cutting response times noticeably.',
    ],
  },
  {
    id: 'sales', label: 'Sales',
    role: 'Sales executive · 2 years',
    before: ['handled customers in my area', 'met targets most months', 'trained new joiners'],
    after: [
      'Managed a regional customer portfolio, building lasting relationships and repeat business.',
      'Consistently achieved monthly sales targets through structured follow-ups and pipeline tracking.',
      'Onboarded and coached new team members on product knowledge and sales process.',
    ],
  },
]

export function AiExample() {
  const [active, setActive] = useState(examples[1].id)
  const example = examples.find(item => item.id === active) ?? examples[0]
  return <div>
    <div role="tablist" aria-label="Example profile" className="flex flex-wrap gap-2">
      {examples.map(item => <button key={item.id} role="tab" aria-selected={item.id === active} onClick={() => setActive(item.id)} className={`h-9 rounded-full px-4 text-sm font-semibold transition ${item.id === active ? 'bg-[#0b1220] text-white' : 'bg-white text-[#4a5568] ring-1 ring-[#e3e8f2] hover:ring-[#b9c6e0]'}`}>{item.label}</button>)}
    </div>
    <div className="mt-6 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1.25fr]">
      <div className="rounded-3xl border border-dashed border-[#cdd5e3] bg-white/70 p-6">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8a94a8]">What you type</p>
        <p className="mt-1 text-sm text-[#8a94a8]">{example.role}</p>
        <ul className="mt-5 space-y-3 font-mono text-[13px] leading-6 text-[#4a5568]">{example.before.map(line => <li key={line} className="rounded-xl bg-[#f4f6fa] px-3 py-2">{line}</li>)}</ul>
      </div>
      <div className="grid place-items-center"><span className="grid size-11 rotate-90 place-items-center rounded-full bg-gradient-to-br from-[#0b3be0] to-[#00b8f5] text-white shadow-[0_10px_24px_rgba(11,59,224,0.3)] lg:rotate-0"><ArrowRight size={18} aria-hidden="true" /></span></div>
      <div className="relative rounded-3xl border border-[#cfe0ff] bg-white p-6 shadow-[0_24px_60px_rgba(11,59,224,0.10)]">
        <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#0b3be0]"><Sparkles size={14} aria-hidden="true" /> After AI writing</p>
        <p className="mt-1 text-sm text-[#8a94a8]">Same facts, written the way recruiters read.</p>
        <ul className="mt-5 space-y-3 text-[15px] leading-6 text-[#1f2937]">{example.after.map(line => <li key={line} className="flex gap-3"><span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[#0b3be0]" />{line}</li>)}</ul>
      </div>
    </div>
    <p className="mt-4 text-xs text-[#8a94a8]">Sample output for illustration. AI writing unlocks with the day pass and only uses details you provide.</p>
  </div>
}
