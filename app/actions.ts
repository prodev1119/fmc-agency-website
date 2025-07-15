"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)
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
    // In a real application, you would send an email or save to a database here.
    // For now, we'll just log the data and return a success message.
    console.log("Contact Form Submission:")
    console.log(`Name: ${firstName} ${lastName}`)
    console.log(`Email: ${email}`)
    console.log(`Company: ${company}`)
    console.log(`Project Type: ${projectType}`)
    console.log(`Message: ${message}`)

    // Example of sending an email using Resend (requires RESEND_API_KEY and CONTACT_EMAIL env vars)
    // You would need to set up these environment variables in your Vercel project settings.
    // For local development, you can add them to a .env.local file.
    // Learn more about Resend: https://resend.com/docs/send-emails
    if (process.env.RESEND_API_KEY && process.env.CONTACT_EMAIL) {
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
      console.warn("RESEND_API_KEY or CONTACT_EMAIL not set. Email sending skipped.")
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

  // Basic validation
  if (!title || !intro || !compensation || !timeline || !summary || !author || !iconName || !color || !bgColor) {
    return {
      success: false,
      message:
        "Please fill in all required fields (Title, Intro, Compensation, Timeline, Summary, Author, Icon, Color, Background Color).",
    }
  }

  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  try {
    const newJob = {
      title,
      type,
      intro,
      responsibilities: responsibilities ? responsibilities.split(",").map((s) => s.trim()) : undefined,
      requirements: requirements ? requirements.split(",").map((s) => s.trim()) : undefined,
      roleOverview,
      compensation,
      collaborationPlan: collaborationPlan ? collaborationPlan.split(",").map((s) => s.trim()) : undefined,
      timeline,
      summary,
      note,
      author,
      iconName, // Store icon name as string
      color,
      bgColor,
    }

    console.log("New Job Posting Submitted:", newJob)

    // In a real application, you would save this to a database.
    // For example, if using Supabase:
    // const { data, error } = await supabase.from('job_postings').insert([newJob]);
    // if (error) throw error;

    // You could also send an email notification to an admin about the new job
    if (process.env.RESEND_API_KEY && process.env.CONTACT_EMAIL) {
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
          <p>Check the console for full details.</p>
        `,
      })
    } else {
      console.warn("RESEND_API_KEY or CONTACT_EMAIL not set. Email notification for new job skipped.")
    }

    return {
      success: true,
      message: "Job posting submitted successfully! (Note: For persistence, a database is required.)",
    }
  } catch (error) {
    console.error("Error adding job posting:", error)
    return {
      success: false,
      message: "Failed to submit job posting. Please try again.",
    }
  }
}
