export type Experience = { role: string; company: string; startDate?: string; endDate?: string; bullets: string[] }

export type ResumeContent = {
  personal: { name: string; email: string; phone?: string; location?: string; linkedin?: string; role: string; summary: string }
  skills: string[]
  experience: Experience[]
  education?: { school: string; degree: string; year: string }[]
  projects?: { name: string; description: string }[]
  certifications?: string[]
}

export const starterResume: ResumeContent = {
  personal: {
    name: 'Aarav Mehta', role: 'Product Designer', email: 'aarav@example.com',
    location: 'Bengaluru, India', summary: 'Product designer who turns complex workflows into clear, useful experiences.'
  },
  skills: ['Figma', 'Prototyping', 'Design systems', 'User research'],
  experience: [{ role: 'Product Designer', company: 'Northstar Labs', startDate: '2022', endDate: 'Present', bullets: ['Led a redesign that improved activation by 32%.', 'Created a scalable design system for product teams.'] }],
}
