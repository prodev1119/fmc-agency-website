import { createServerComponentClient } from "@supabase/ssr"
import { cookies } from "next/headers"

export function createServerSupabaseClient() {
  return createServerComponentClient({ cookies })
}
