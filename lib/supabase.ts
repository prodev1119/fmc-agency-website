import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs" // Import for server actions
import { cookies } from "next/headers" // Import cookies

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

  // Use createRouteHandlerClient for Server Actions to handle cookies correctly
  // This ensures the session is properly managed for authenticated users
  return createRouteHandlerClient({ cookies })
}
