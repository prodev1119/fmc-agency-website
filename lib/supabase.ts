import { createServerComponentClient } from "@supabase/ssr"
import { cookies } from "next/headers"

// Directly export the Supabase client instance
const supabase = createServerComponentClient({ cookies })

export { supabase }
