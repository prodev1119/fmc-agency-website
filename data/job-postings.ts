export interface JobPosting {
  id: string // UUID from database
  title: string
  type: string | null // Can be null if not provided
  intro: string
  responsibilities: string[] | null // Array of strings, can be null
  requirements: string[] | null // Array of strings, can be null
  role_overview: string | null // Matches database column name
  compensation: string
  collaboration_plan: string[] | null // Matches database column name, array of strings, can be null
  timeline: string
  summary: string
  note: string | null
  author: string
  icon_name: string // Matches database column name
  color: string
  bg_color: string // Matches database column name
  created_at: string // Timestamp from database
}

// The jobPostings array is no longer defined here; it's fetched from Supabase.
// The iconMap and availableIcons are now in lib/icons.ts
