import { createBrowserClient } from "@supabase/ssr" // Changed import

// Create a single Supabase client for client-side operations
// This client uses the public anon key and respects Row Level Security (RLS).
let supabase: ReturnType<typeof createBrowserClient> | undefined

export function createClientSupabaseClient() {
  if (!supabase) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    console.log("Supabase Client Init: NEXT_PUBLIC_SUPABASE_URL:", supabaseUrl ? "Set" : "Not Set")
    console.log("Supabase Client Init: NEXT_PUBLIC_SUPABASE_ANON_KEY:", supabaseAnonKey ? "Set" : "Not Set")

    if (!supabaseUrl || !supabaseAnonKey) {
      console.error(
        "ERROR: Missing Supabase environment variables for client-side. Ensure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set.",
      )
      throw new Error(
        "Supabase client not initialized: Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY.",
      )
    }
    supabase = createBrowserClient(supabaseUrl, supabaseAnonKey)
    console.log("Supabase client created successfully.")
  }
  return supabase
}
