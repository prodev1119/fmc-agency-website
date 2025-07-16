"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Chrome } from "lucide-react"
import { createClientSupabaseClient } from "@/lib/supabase-client"
import { useState } from "react"

export default function LoginPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleGoogleSignIn = async () => {
    setLoading(true)
    setError(null)
    try {
      const supabase = createClientSupabaseClient()
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`, // Redirect back to your app after OAuth
        },
      })

      if (error) {
        setError(error.message)
        console.error("Error signing in with Google:", error.message)
      } else {
        // If data is returned, it means the redirect is happening
        // No need to do anything here, the redirect will handle the rest
        console.log("Google sign-in initiated, redirecting...")
      }
    } catch (err: any) {
      setError("An unexpected error occurred during sign-in.")
      console.error("Unexpected error:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold mb-2">Log In</CardTitle>
          <CardDescription className="text-gray-600">
            Sign in to access exclusive features and manage job postings.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white"
            disabled={loading}
          >
            {loading ? (
              "Redirecting..."
            ) : (
              <>
                <Chrome className="h-5 w-5" />
                Sign in with Google
              </>
            )}
          </Button>
          {error && <p className="text-red-500 text-center text-sm">{error}</p>}
        </CardContent>
      </Card>
    </div>
  )
}
