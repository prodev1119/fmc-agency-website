import { createServerSupabaseClient } from "@/lib/supabase" // Import the function
import { notFound, redirect } from "next/navigation" // Import redirect
import EditJobForm from "@/components/edit-job-form"
import type { JobPosting } from "@/data/job-postings" // Import the type

interface EditJobPageProps {
  params: {
    id: string
  }
}

export default async function EditJobPage({ params }: EditJobPageProps) {
  const supabase = createServerSupabaseClient() // Use the function to get the client
  const { id } = params

  // Server-side check for authentication
  const {
    data: { session },
  } = await supabase.auth.getSession()
  if (!session) {
    redirect("/login") // Redirect to login if not authenticated
  }

  const { data: jobPosting, error } = await supabase.from("job_postings").select("*").eq("id", id).single()

  if (error || !jobPosting) {
    console.error("Error fetching job posting for edit:", error)
    notFound() // Render not-found.js if job is not found or error occurs
  }

  // Convert database string arrays back to JS arrays for the form if needed,
  // though the form expects single strings for Textarea.
  // Ensure the data matches the JobPosting interface for type safety in the client component.
  const formattedJobPosting: JobPosting = {
    id: jobPosting.id,
    title: jobPosting.title,
    type: jobPosting.type || "",
    intro: jobPosting.intro,
    responsibilities: jobPosting.responsibilities || "",
    requirements: jobPosting.requirements || "",
    roleOverview: jobPosting.role_overview || "", // Match DB column name
    compensation: jobPosting.compensation,
    collaborationPlan: jobPosting.collaboration_plan || "", // Match DB column name
    timeline: jobPosting.timeline,
    summary: jobPosting.summary || "",
    note: jobPosting.note || "",
    author: jobPosting.author,
    icon: jobPosting.icon_name, // Pass icon_name as string, EditJobForm will map it
    color: jobPosting.color,
    bgColor: jobPosting.bg_color, // Match DB column name
  }

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <EditJobForm job={formattedJobPosting} />
      </div>
    </div>
  )
}
