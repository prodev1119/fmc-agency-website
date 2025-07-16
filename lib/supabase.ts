import { createServerComponentClient } from "@supabase/ssr"
import { cookies } from "next/headers"

// Export a function that creates and returns the server-side Supabase client
export function createServerSupabaseClient() {
  console.log("createServerSupabaseClient called. Using createServerComponentClient from @supabase/ssr.")
  return createServerComponentClient({ cookies })
}
