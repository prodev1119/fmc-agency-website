import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Explicitly check for environment variables and provide a clear error message
if (!supabaseUrl) {
  throw new Error(
    "Missing NEXT_PUBLIC_SUPABASE_URL environment variable. " +
      "Please ensure it's set in your .env.local file and restart your development server.",
  )
}

if (!supabaseAnonKey) {
  throw new Error(
    "Missing NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable. " +
      "Please ensure it's set in your .env.local file and restart your development server.",
  )
}

// Create a single Supabase client for interacting with your database
// This is for client-side usage (e.g., in 'use client' components)
export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey)

// For server-side usage (e.g., in Server Actions or Route Handlers)
// This client should not be exposed to the client-side
export const createServerSupabaseClient = () => {
  // For server-side, we can re-use the already validated variables
  return createClient(supabaseUrl, supabaseAnonKey)
}
