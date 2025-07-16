import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs" // Import for server actions
import { cookies } from "next/headers" // Import cookies

// Create a single Supabase client for server-side operations
// This client is used in Server Components and Server Actions.
export function createServerSupabaseClient() {
  // Use createRouteHandlerClient for Server Actions to handle cookies correctly
  // This ensures the session is properly managed for authenticated users
  return createRouteHandlerClient({ cookies })
}
