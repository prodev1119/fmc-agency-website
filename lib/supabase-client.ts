import { createBrowserClient } from "@supabase/ssr"

// Create a single Supabase client for client-side operations
// This client uses the public anon key and respects Row Level Security (RLS).
let supabase: ReturnType<typeof createBrowserClient> | undefined

export function createClientSupabaseClient() {
  if (!supabase) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error(
        "Missing Supabase environment variables. Ensure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set.",
      )
    }
    supabase = createBrowserClient(supabaseUrl, supabaseAnonKey)
  }
  return supabase
}
