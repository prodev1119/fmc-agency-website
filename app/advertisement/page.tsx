import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, DollarSign, CalendarDays, Star, PlusCircle } from "lucide-react"
import Link from "next/link"
import { createServerSupabaseClient } from "@/lib/supabase" // Import server-side Supabase client
import { iconMap } from "@/lib/icons" // Import iconMap

// Define the JobPosting type to match the database schema
interface JobPosting {
  id: string
  title: string
  type: string | null
  intro: string
  responsibilities: string[] | null
  requirements: string[] | null
  role_overview: string | null
  compensation: string
  collaboration_plan: string[] | null
  timeline: string
  summary: string
  note: string | null
  author: string
  icon_name: string
  color: string
  bg_color: string
  created_at: string
}

export default async function AdvertisementPage() {
  const supabase = createServerSupabaseClient()

  // Fetch job postings from Supabase
  const { data: jobPostings, error } = await supabase
    .from("job_postings")
    .select("*")
    .order("created_at", { ascending: false }) // Order by creation date

  if (error) {
    console.error("Error fetching job postings:", error)
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <p className="text-red-500">Failed to load job postings. Please try again later.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">How to be a team member of our agency</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join Future-Mind-Collective and contribute to cutting-edge AI projects. We're looking for passionate and
            talented individuals to grow with our global team.
          </p>
          {/* Button to Post New Job */}
          <div className="mt-8">
            <Link href="/advertisement/post">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                <PlusCircle className="h-4 w-4 mr-2" />
                Post New Job
              </Button>
            </Link>
          </div>
        </div>

        {/* Job Postings Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {jobPostings.length === 0 ? (
            <p className="col-span-full text-center text-gray-500">
              No job postings available yet. Be the first to post one!
            </p>
          ) : (
            jobPostings.map((job) => {
              const IconComponent = iconMap[job.icon_name] // Get the icon component from the map
              return (
                <Card key={job.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg ${job.bg_color} flex items-center justify-center`}>
                        {IconComponent && <IconComponent className={`h-6 w-6 ${job.color}`} />}
                      </div>
                      {job.type && (
                        <Badge variant="secondary" className="text-sm">
                          {job.type}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                    <CardDescription className="text-base">{job.intro}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {job.responsibilities && job.responsibilities.length > 0 && (
                      <div>
                        <h3 className="font-semibold mb-2 flex items-center">
                          <Briefcase className="h-4 w-4 mr-2 text-purple-600" />
                          Key Responsibilities:
                        </h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                          {job.responsibilities.map((res, idx) => (
                            <li key={idx}>{res}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {job.requirements && job.requirements.length > 0 && (
                      <div>
                        <h3 className="font-semibold mb-2 flex items-center">
                          <Star className="h-4 w-4 mr-2 text-blue-600" />
                          Requirements:
                        </h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                          {job.requirements.map((req, idx) => (
                            <li key={idx}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {job.role_overview && (
                      <div>
                        <h3 className="font-semibold mb-2">Role Overview:</h3>
                        <p className="text-gray-700 text-sm">{job.role_overview}</p>
                      </div>
                    )}

                    <div>
                      <h3 className="font-semibold mb-2 flex items-center">
                        <DollarSign className="h-4 w-4 mr-2 text-green-600" />
                        Compensation:
                      </h3>
                      <p className="text-gray-700 text-sm">{job.compensation}</p>
                    </div>

                    {job.collaboration_plan && job.collaboration_plan.length > 0 && (
                      <div>
                        <h3 className="font-semibold mb-2">Collaboration Plan:</h3>
                        <ul className="list-decimal list-inside space-y-1 text-gray-700 text-sm">
                          {job.collaboration_plan.map((plan, idx) => (
                            <li key={idx}>{plan}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div>
                      <h3 className="font-semibold mb-2 flex items-center">
                        <CalendarDays className="h-4 w-4 mr-2 text-orange-600" />
                        Timeline:
                      </h3>
                      <p className="text-gray-700 text-sm">{job.timeline}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Summary:</h3>
                      <p className="text-gray-700 text-sm">{job.summary}</p>
                    </div>

                    {job.note && (
                      <div className="border-t pt-4 mt-4 text-sm text-gray-600">
                        <p className="font-semibold">Note:</p>
                        <p>{job.note}</p>
                      </div>
                    )}

                    <div className="text-right text-xs text-gray-500">Best regards, {job.author}</div>
                  </CardContent>
                </Card>
              )
            })
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-slate-900 to-purple-900 text-white rounded-2xl p-12 mt-16">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Team?</h2>
          <p className="text-xl text-gray-300 mb-8">
            If you're passionate about AI and innovation, we encourage you to apply for our open positions.
          </p>
          <a href="mailto:thielecamden@gmail.com" className="inline-block">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100">
              Send Your Application
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
