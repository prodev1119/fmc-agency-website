import { createBrowserClient } from "@supabase/ssr"

// Create a single Supabase client for client-side operations
// This client uses the public anon key and respects Row Level Security (RLS).
let supabase: ReturnType<typeof createBrowserClient> | undefined

export function createClientSupabaseClient() {
  if (!supabase) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseAnonKey) {
      // This error should ideally be caught during development setup
      // or handled gracefully in production, e.g., by disabling auth features.
      console.error(
        "Missing Supabase environment variables for client-side. Ensure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set.",
      )
      // Fallback to a dummy client or throw, depending on desired behavior
      throw new Error(
        "Supabase client not initialized: Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY.",
      )
    }
    supabase = createBrowserClient(supabaseUrl, supabaseAnonKey)
  }
  return supabase
}
