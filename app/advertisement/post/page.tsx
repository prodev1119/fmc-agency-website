"use client"

import { useActionState } from "react"
import { addJobPosting } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { availableIcons, iconMap } from "@/lib/icons"
import { PlusCircle, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react" // Import useState
import { createClientSupabaseClient } from "@/lib/supabase-client" // Import client-side Supabase client

export default function PostJobPage() {
  const [state, formAction, isPending] = useActionState(addJobPosting, {
    success: false,
    message: "",
  })
  const router = useRouter()
  const supabase = createClientSupabaseClient()
  const [loadingAuth, setLoadingAuth] = useState(true) // New state for auth loading
  const [user, setUser] = useState<any>(null) // New state for user

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      if (!session) {
        router.push("/login") // Redirect to login if no session
      } else {
        setUser(session.user)
        setLoadingAuth(false)
      }
    }
    checkUser()

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        router.push("/login")
      } else {
        setUser(session.user)
      }
    })

    return () => {
      authListener.unsubscribe()
    }
  }, [router, supabase])

  useEffect(() => {
    if (state?.success) {
      router.push("/advertisement") // Redirect to the job listings page on success
    }
  }, [state?.success, router])

  if (loadingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
        <span className="ml-2 text-gray-600">Loading authentication...</span>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold mb-2">Post a New Job Opening</CardTitle>
            <CardDescription className="text-gray-600">
              Fill out the details below to add a new job posting to your agency's recruitment page.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-6">
              <div>
                <label htmlFor="title" className="text-sm font-medium mb-2 block">
                  Job Title <span className="text-red-500">*</span>
                </label>
                <Input id="title" name="title" placeholder="e.g., Talented Developer" required />
              </div>

              <div>
                <label htmlFor="type" className="text-sm font-medium mb-2 block">
                  Job Type (Optional)
                </label>
                <Input id="type" name="type" placeholder="e.g., Remote, Hybrid, On-site" defaultValue="Remote" />
              </div>

              <div>
                <label htmlFor="intro" className="text-sm font-medium mb-2 block">
                  Introduction <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="intro"
                  name="intro"
                  placeholder="A brief introduction to the role and agency..."
                  rows={3}
                  required
                />
              </div>

              <div>
                <label htmlFor="responsibilities" className="text-sm font-medium mb-2 block">
                  Key Responsibilities (Optional)
                </label>
                <Textarea
                  id="responsibilities"
                  name="responsibilities"
                  placeholder="e.g., Communicate with clients, Leverage technical expertise"
                  rows={2}
                />
              </div>

              <div>
                <label htmlFor="requirements" className="text-sm font-medium mb-2 block">
                  Requirements (Optional)
                </label>
                <Textarea
                  id="requirements"
                  name="requirements"
                  placeholder="e.g., US citizenship, Bachelor's degree"
                  rows={2}
                />
              </div>

              <div>
                <label htmlFor="roleOverview" className="text-sm font-medium mb-2 block">
                  Role Overview (Optional)
                </label>
                <Textarea
                  id="roleOverview"
                  name="roleOverview"
                  placeholder="Detailed description of the role..."
                  rows={3}
                />
              </div>

              <div>
                <label htmlFor="compensation" className="text-sm font-medium mb-2 block">
                  Compensation <span className="text-red-500">*</span>
                </label>
                <Input id="compensation" name="compensation" placeholder="e.g., $70/hour or $5/hr ~ $50/hr" required />
              </div>

              <div>
                <label htmlFor="collaborationPlan" className="text-sm font-medium mb-2 block">
                  Collaboration Plan (Optional)
                </label>
                <Textarea
                  id="collaborationPlan"
                  name="collaborationPlan"
                  placeholder="e.g., Chat conversation, Demo video, Contract starting"
                  rows={2}
                />
              </div>

              <div>
                <label htmlFor="timeline" className="text-sm font-medium mb-2 block">
                  Timeline <span className="text-red-500">*</span>
                </label>
                <Input id="timeline" name="timeline" placeholder="e.g., Long-term collaboration opportunity" required />
              </div>

              <div>
                <label htmlFor="summary" className="text-sm font-medium mb-2 block">
                  Summary (Optional)
                </label>
                <Textarea id="summary" name="summary" placeholder="A concluding summary for applicants..." rows={2} />
              </div>

              <div>
                <label htmlFor="note" className="text-sm font-medium mb-2 block">
                  Note (Optional)
                </label>
                <Textarea id="note" name="note" placeholder="Any additional notes or disclaimers..." rows={2} />
              </div>

              <div>
                <label htmlFor="author" className="text-sm font-medium mb-2 block">
                  Author <span className="text-red-500">*</span>
                </label>
                <Input id="author" name="author" placeholder="e.g., Camden" defaultValue="Camden" required />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label htmlFor="iconName" className="text-sm font-medium mb-2 block">
                    Icon <span className="text-red-500">*</span>
                  </label>
                  <Select name="iconName" required defaultValue="Users">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select an icon" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableIcons.map((icon) => {
                        const IconComponent = iconMap[icon]
                        return (
                          <SelectItem key={icon} value={icon}>
                            <div className="flex items-center">
                              {IconComponent && <IconComponent className="h-4 w-4 mr-2" />}
                              {icon}
                            </div>
                          </SelectItem>
                        )
                      })}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="color" className="text-sm font-medium mb-2 block">
                    Text Color Class <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="color"
                    name="color"
                    placeholder="e.g., text-purple-600"
                    defaultValue="text-purple-600"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="bgColor" className="text-sm font-medium mb-2 block">
                    Background Color Class <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="bgColor"
                    name="bgColor"
                    placeholder="e.g., bg-purple-50"
                    defaultValue="bg-purple-50"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                disabled={isPending}
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Posting Job...
                  </>
                ) : (
                  <>
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Post Job
                  </>
                )}
              </Button>
              {state?.message && (
                <p className={`mt-4 text-center text-sm ${state.success ? "text-green-600" : "text-red-600"}`}>
                  {state.message}
                </p>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
