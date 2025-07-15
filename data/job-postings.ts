import { Users, Code } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface JobPosting {
  id: number
  title: string
  type: string
  intro: string
  responsibilities?: string[]
  requirements?: string[]
  roleOverview?: string
  compensation: string
  collaborationPlan?: string[]
  timeline: string
  summary: string
  note?: string
  author: string
  icon: LucideIcon
  color: string
  bgColor: string
}

export const jobPostings: JobPosting[] = [
  {
    id: 1,
    title: "US Native Interviewer for Project Development Agency",
    type: "Remote",
    intro:
      "Hello, everyone! 💕 We are a development agency serving US clients, and we're seeking assistance from US citizens. If you're a US citizen interested in earning competitive income through straightforward support work, please send me a direct message. We are seeking a talented 📹caller to serve as an interviewer for the meeting of our agency's high-income US client projects. I'm currently handling this role myself while juggling team and project management responsibilities and it's very 💪hard for me. Since no one on our team is yet qualified for this position, I'm seeking a talented individual to take it on.",
    responsibilities: [
      "Communicate effectively with US clients on behalf of our developer",
      "Leverage advanced technical expertise (AI, Automation, Full-Stack development, etc.)",
      "Conduct professional video interviews with exceptional customer service",
    ],
    requirements: [
      "US citizenship (verification required)",
      "Bachelor's degree or higher (world-class university preferred)",
      "Native English proficiency",
      "Expert-level technical skills with ability to answer complex client questions confidently",
      "Availability during US business hours",
    ],
    roleOverview:
      "Upon receiving project orders, you will be provided with client details, project requirements, and technical specifications. You will then interview clients on behalf of our developers and facilitate the hiring process.",
    compensation:
      "$70/hour or $50 for interviews under 30 minutes and $100 for interviews over 30 minutes. Alternative compensation structures negotiable",
    collaborationPlan: [
      "Begin by demonstrating your qualifications through our chat conversation.",
      "Next, submit a brief demo video via Loom showing your enthusiasm for this position. The video should include both our names, a short self-introduction, and your motivation for applying.",
      "Once approved, we'll proceed to contract starting.",
    ],
    timeline: "This is a long-term collaboration opportunity for qualified candidates.",
    summary: "🦄 If you meet these requirements, don't miss this opportunity. Feel free to message me directly.",
    note: "Real US native citizens are warmly welcomed, regardless of qualifications. And if you are not a genuine US citizen, your efforts to obtain the above will be futile.😍 Best regards, Camden",
    author: "Camden",
    icon: Users,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    id: 2,
    title: "Talented Developer",
    type: "Remote",
    intro:
      "We are a development agency serving US clients, and we are seeking a talented developer who can help us with development as a team member for high income.",
    compensation: "$5/hr ~ $50/hr",
    timeline: "This is a long-term collaboration opportunity for qualified candidates.",
    summary: "🦄 Those who think they are excellent developers, regardless of nationality, please apply.",
    note: "In order to be successfully hired, you must first apply by sharing your face photo, hourly rate, Majoy/Tech skill, Education Bacgroud, and a brief introduction, along with your Resume. Those who do not meet the requirements cannot be hired.😍 Best regards, Camden",
    author: "Camden",
    icon: Code,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
]
