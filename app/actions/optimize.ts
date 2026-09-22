'use server'

import { GoogleGenerativeAI } from '@google/generative-ai'
import type { ResumeContent } from '@/lib/resume-types'

export async function optimizeResume(content: ResumeContent, jobDescription: string): Promise<ResumeContent> {
  if (jobDescription.trim().length < 40) throw new Error('Paste a fuller job description (at least 40 characters).')
  const key = process.env.GEMINI_API_KEY
  if (!key) throw new Error('AI tailoring is not configured yet. Add GEMINI_API_KEY to enable it.')
  const model = new GoogleGenerativeAI(key).getGenerativeModel({ model: 'gemini-2.5-flash', generationConfig: { responseMimeType: 'application/json' } })
  const prompt = `You are a precise resume editor. Rewrite only using facts already present. Never invent employers, responsibilities, qualifications, metrics, tools, education, or certifications. Analyze the job description for legitimate relevant keywords, improve experience bullets, and reorder/add only demonstrated skills. Return ONLY valid JSON matching this exact ResumeContent shape: {personal:{name,email,phone?,location?,linkedin?,role,summary},skills:string[],experience:[{role,company,startDate?,endDate?,bullets:string[]}],education?,projects?,certifications?}.\n\nRESUME:\n${JSON.stringify(content)}\n\nJOB DESCRIPTION:\n${jobDescription}`
  const result = await model.generateContent(prompt)
  try { return JSON.parse(result.response.text()) as ResumeContent } catch { throw new Error('The AI response was not valid resume data. Please try again.') }
}
