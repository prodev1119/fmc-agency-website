"use server"

import { Resend } from "resend"
import { createServerSupabaseClient } from "@/lib/supabase" // Import the function
import { revalidatePath } from "next/cache"

// Initialize Resend conditionally to avoid error if API key is missing
let resend: Resend | null = null
if (process.env.RESEND_API_KEY) {
  resend = new Resend(process.env.RESEND_API_KEY)
} else {
  console.warn("RESEND_API_KEY is not set. Email sending functionality will be skipped.")
}

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "thielecamden@gmail.com"

export async function submitContactForm(prevState: any, formData: FormData) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const company = formData.get("company") as string
  const projectType = formData.get("projectType") as string
  const message = formData.get("message") as string

  // Basic validation
  if (!firstName || !lastName || !email || !message) {
    return {
      success: false,
      message: "Please fill in all required fields (First Name, Last Name, Email, Message).",
    }
  }

  // Simulate a delay for demonstration purposes
  await new Promise((resolve) => setTimeout(resolve, 1000))

  try {
    console.log("Contact Form Submission:")
    console.log(`Name: ${firstName} ${lastName}`)
    console.log(`Email: ${email}`)
    console.log(`Company: ${company}`)
    console.log(`Project Type: ${projectType}`)
    console.log(`Message: ${message}`)

    if (resend && CONTACT_EMAIL) {
      await resend.emails.send({
        from: "onboarding@resend.dev", // Replace with your verified Resend domain
        to: CONTACT_EMAIL,
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        html: `
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "N/A"}</p>
          <p><strong>Project Type:</strong> ${projectType || "N/A"}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      })
    } else {
      console.warn("Resend client not initialized or CONTACT_EMAIL not set. Email sending skipped for contact form.")
    }

    return {
      success: true,
      message: "Your message has been sent successfully! We will get back to you soon.",
    }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return {
      success: false,
      message: "There was an error sending your message. Please try again later.",
    }
  }
}

export async function addJobPosting(prevState: any, formData: FormData) {
  const supabase = createServerSupabaseClient() // Use the function to get the client

  const title = formData.get("title") as string
  const type = formData.get("type") as string
  const intro = formData.get("intro") as string
  const responsibilities = formData.get("responsibilities") as string
  const requirements = formData.get("requirements") as string
  const roleOverview = formData.get("roleOverview") as string
  const compensation = formData.get("compensation") as string
  const collaborationPlan = formData.get("collaborationPlan") as string
  const timeline = formData.get("timeline") as string
  const summary = formData.get("summary") as string
  const note = formData.get("note") as string
  const author = formData.get("author") as string
  const iconName = formData.get("iconName") as string
  const color = formData.get("color") as string
  const bgColor = formData.get("bgColor") as string

  // Basic validation - only title, intro, compensation, timeline, author, icon, color, bgColor are required
  if (!title || !intro || !compensation || !timeline || !author || !iconName || !color || !bgColor) {
    return {
      success: false,
      message:
        "Please fill in all required fields (Title, Intro, Compensation, Timeline, Author, Icon, Color, Background Color).",
    }
  }

  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  try {
    const newJob = {
      title,
      type,
      intro,
      responsibilities: responsibilities || null, // Store as string or null
      requirements: requirements || null, // Store as string or null
      role_overview: roleOverview || null, // Match database column name
      compensation,
      collaboration_plan: collaborationPlan || null, // Store as string or null
      timeline,
      summary: summary || null, // Store as string or null
      note: note || null,
      author,
      icon_name: iconName, // Match database column name
      color,
      bg_color: bgColor, // Match database column name
    }

    // Insert into Supabase
    const { data, error } = await supabase.from("job_postings").insert([newJob]).select()

    if (error) {
      console.error("Supabase insert error:", error)
      // Provide a more specific error message to the user
      return {
        success: false,
        message: `Failed to submit job posting: ${error.message}. Please check your Supabase table schema.`,
      }
    }

    console.log("New Job Posting Submitted to Supabase:", data)

    // Revalidate the advertisement page to show the new job
    revalidatePath("/advertisement")

    if (resend && CONTACT_EMAIL) {
      await resend.emails.send({
        from: "onboarding@resend.dev", // Replace with your verified Resend domain
        to: CONTACT_EMAIL,
        subject: `New Job Posting: ${title}`,
        html: `
          <p>A new job posting has been submitted:</p>
          <p><strong>Title:</strong> ${title}</p>
          <p><strong>Type:</strong> ${type}</p>
          <p><strong>Intro:</strong> ${intro}</p>
          <p><strong>Compensation:</strong> ${compensation}</p>
          <p><strong>Author:</strong> ${author}</p>
          <p>Check the Supabase dashboard for full details.</p>
        `,
      })
    } else {
      console.warn("Resend client not initialized or CONTACT_EMAIL not set. Email notification for new job skipped.")
    }

    return {
      success: true,
      message: "Job posting submitted successfully and added to the page!",
    }
  } catch (error: any) {
    console.error("Error adding job posting:", error)
    return {
      success: false,
      message: `Failed to submit job posting: ${error.message || "An unexpected error occurred."}`,
    }
  }
}

export async function updateJobPosting(prevState: any, formData: FormData) {
  const supabase = createServerSupabaseClient() // Use the function to get the client

  const id = formData.get("id") as string
  const title = formData.get("title") as string
  const type = formData.get("type") as string
  const intro = formData.get("intro") as string
  const responsibilities = formData.get("responsibilities") as string
  const requirements = formData.get("requirements") as string
  const roleOverview = formData.get("roleOverview") as string
  const compensation = formData.get("compensation") as string
  const collaborationPlan = formData.get("collaborationPlan") as string
  const timeline = formData.get("timeline") as string
  const summary = formData.get("summary") as string
  const note = formData.get("note") as string
  const author = formData.get("author") as string
  const iconName = formData.get("iconName") as string
  const color = formData.get("color") as string
  const bgColor = formData.get("bgColor") as string

  if (!id || !title || !intro || !compensation || !timeline || !author || !iconName || !color || !bgColor) {
    return {
      success: false,
      message:
        "Please fill in all required fields (ID, Title, Intro, Compensation, Timeline, Author, Icon, Color, Background Color).",
    }
  }

  await new Promise((resolve) => setTimeout(resolve, 1500))

  try {
    const updatedJob = {
      title,
      type: type || null,
      intro,
      responsibilities: responsibilities || null,
      requirements: requirements || null,
      role_overview: roleOverview || null,
      compensation,
      collaboration_plan: collaborationPlan || null,
      timeline,
      summary: summary || null,
      note: note || null,
      author,
      icon_name: iconName,
      color,
      bg_color: bgColor,
    }

    const { data, error } = await supabase.from("job_postings").update(updatedJob).eq("id", id).select()

    if (error) {
      console.error("Supabase update error:", error)
      return {
        success: false,
        message: `Failed to update job posting: ${error.message}. Please check your Supabase table schema.`,
      }
    }

    console.log("Job Posting Updated in Supabase:", data)
    revalidatePath("/advertisement")

    return {
      success: true,
      message: "Job posting updated successfully!",
    }
  } catch (error: any) {
    console.error("Error updating job posting:", error)
    return {
      success: false,
      message: `Failed to update job posting: ${error.message || "An unexpected error occurred."}`,
    }
  }
}

// Corrected signature for deleteJobPosting
export async function deleteJobPosting(formData: FormData) {
  // Removed prevState
  console.log("Attempting to delete job posting...")
  const supabase = createServerSupabaseClient() // Use the function to get the client
  const id = formData.get("id") as string

  console.log("Received ID for deletion:", id)

  if (!id) {
    console.error("Delete Error: Job ID is missing.")
    return {
      success: false,
      message: "Job ID is required for deletion.",
    }
  }

  try {
    const { error } = await supabase.from("job_postings").delete().eq("id", id)

    if (error) {
      console.error("Supabase delete error:", error.message)
      console.error("Supabase delete error details:", error)
      return {
        success: false,
        message: `Failed to delete job posting: ${error.message}.`,
      }
    }

    console.log(`Job posting with ID ${id} deleted successfully.`)
    revalidatePath("/advertisement")

    return {
      success: true,
      message: "Job posting deleted successfully!",
    }
  } catch (error: any) {
    console.error("Caught unexpected error during job posting deletion:", error)
    return {
      success: false,
      message: `Failed to delete job posting: ${error.message || "An unexpected error occurred."}`,
    }
  }
}
