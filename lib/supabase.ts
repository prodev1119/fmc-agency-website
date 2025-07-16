import { createServerComponentClient } from "@supabase/ssr"
import { cookies } from "next/headers"

export function createServerSupabaseClient() {
  console.log("createServerSupabaseClient called. Using createServerComponentClient from @supabase/ssr.")
  return createServerComponentClient({ cookies })
}
