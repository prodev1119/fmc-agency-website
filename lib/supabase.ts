import { createServerComponentClient } from "@supabase/ssr" // Changed import
import { cookies } from "next/headers"

// Create a single Supabase client for server-side operations
// This client is used in Server Components and Server Actions.
export function createServerSupabaseClient() {
  // Use createServerComponentClient for Server Components and Server Actions
  // It automatically handles cookies for session management.
  return createServerComponentClient({ cookies })
}
