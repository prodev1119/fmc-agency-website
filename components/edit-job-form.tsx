"use client"

import { useActionState } from "react"
import { updateJobPosting } from "@/app/actions" // Import the update action
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { availableIcons, iconMap } from "@/lib/icons"
import { Save, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import type { JobPosting } from "@/data/job-postings" // Import the type

interface EditJobFormProps {
  job: JobPosting
}

export default function EditJobForm({ job }: EditJobFormProps) {
  const [state, formAction, isPending] = useActionState(updateJobPosting, {
    success: false,
    message: "",
  })
  const router = useRouter()

  useEffect(() => {
    if (state?.success) {
      router.push("/advertisement") // Redirect to the job listings page on success
    }
  }, [state?.success, router])

  // Ensure icon is a string that exists in iconMap, default to 'Briefcase' if not
  const defaultIcon = availableIcons.includes(job.icon as string) ? (job.icon as string) : "Briefcase"

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold mb-2">Edit Job Posting</CardTitle>
        <CardDescription className="text-gray-600">
          Modify the details of the job posting for &quot;{job.title}&quot;.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-6">
          {/* Hidden input for job ID */}
          <input type="hidden" name="id" value={job.id} />

          <div>
            <label htmlFor="title" className="text-sm font-medium mb-2 block">
              Job Title <span className="text-red-500">*</span>
            </label>
            <Input id="title" name="title" placeholder="e.g., Talented Developer" defaultValue={job.title} required />
          </div>

          <div>
            <label htmlFor="type" className="text-sm font-medium mb-2 block">
              Job Type (Optional)
            </label>
            <Input id="type" name="type" placeholder="e.g., Remote, Hybrid, On-site" defaultValue={job.type} />
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
              defaultValue={job.intro}
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
              defaultValue={job.responsibilities}
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
              defaultValue={job.requirements}
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
              defaultValue={job.roleOverview}
            />
          </div>

          <div>
            <label htmlFor="compensation" className="text-sm font-medium mb-2 block">
              Compensation <span className="text-red-500">*</span>
            </label>
            <Input
              id="compensation"
              name="compensation"
              placeholder="e.g., $70/hour or $5/hr ~ $50/hr"
              defaultValue={job.compensation}
              required
            />
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
              defaultValue={job.collaborationPlan}
            />
          </div>

          <div>
            <label htmlFor="timeline" className="text-sm font-medium mb-2 block">
              Timeline <span className="text-red-500">*</span>
            </label>
            <Input
              id="timeline"
              name="timeline"
              placeholder="e.g., Long-term collaboration opportunity"
              defaultValue={job.timeline}
              required
            />
          </div>

          <div>
            <label htmlFor="summary" className="text-sm font-medium mb-2 block">
              Summary (Optional)
            </label>
            <Textarea
              id="summary"
              name="summary"
              placeholder="A concluding summary for applicants..."
              rows={2}
              defaultValue={job.summary}
            />
          </div>

          <div>
            <label htmlFor="note" className="text-sm font-medium mb-2 block">
              Note (Optional)
            </label>
            <Textarea
              id="note"
              name="note"
              placeholder="Any additional notes or disclaimers..."
              rows={2}
              defaultValue={job.note}
            />
          </div>

          <div>
            <label htmlFor="author" className="text-sm font-medium mb-2 block">
              Author <span className="text-red-500">*</span>
            </label>
            <Input id="author" name="author" placeholder="e.g., Camden" defaultValue={job.author} required />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label htmlFor="iconName" className="text-sm font-medium mb-2 block">
                Icon <span className="text-red-500">*</span>
              </label>
              <Select name="iconName" required defaultValue={defaultIcon}>
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
              <Input id="color" name="color" placeholder="e.g., text-purple-600" defaultValue={job.color} required />
            </div>
            <div>
              <label htmlFor="bgColor" className="text-sm font-medium mb-2 block">
                Background Color Class <span className="text-red-500">*</span>
              </label>
              <Input id="bgColor" name="bgColor" placeholder="e.g., bg-purple-50" defaultValue={job.bgColor} required />
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
                Saving Changes...
              </>
            ) : (
              <>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
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
  )
}
