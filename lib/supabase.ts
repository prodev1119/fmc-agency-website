import { createClient } from "@supabase/supabase-js"

// Create a single Supabase client for server-side operations
// This client can bypass Row Level Security (RLS) if using the service_role_key
// and is suitable for Server Actions and Route Handlers.
export function createServerSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY // Use service role key for server actions

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    throw new Error(
      "Missing Supabase environment variables. Ensure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set.",
    )
  }

  return createClient(supabaseUrl, supabaseServiceRoleKey)
}
