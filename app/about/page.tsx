import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Mail, Globe, Users, Briefcase, GraduationCap, Send, MessageSquare } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the team behind Future-Mind-Collective and learn about our mission to transform businesses through
            innovative AI solutions.
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Future-Mind-Collective is a development agency based in Fort Myers, FL, serving clients across the United
              States. We specialize in leveraging cutting-edge AI technologies to help businesses transform their
              operations and achieve sustainable growth.
            </p>
            <p className="text-gray-600 mb-6">
              Our international team brings together diverse expertise from developers across the US, India, China,
              Pakistan, and other countries, creating a unique blend of perspectives and technical skills.
            </p>
            <div className="flex items-center mb-4">
              <MapPin className="h-5 w-5 text-purple-600 mr-2" />
              <span className="font-semibold">Based in Fort Myers, Florida</span>
            </div>
            <div className="flex items-center mb-4">
              <Globe className="h-5 w-5 text-blue-600 mr-2" />
              <span className="font-semibold">Serving US Clients Nationwide</span>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 text-green-600 mr-2" />
              <span className="font-semibold">International Development Team</span>
            </div>
          </div>
          <div>
            <Image
              src="/images/fmc-logo.png"
              alt="Future-Mind-Collective Logo"
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>
        </div>

        {/* Team Section - Camden Thiele */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Leadership</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-gradient-to-br from-purple-200 to-pink-200">
                  <Image
                    src="/images/camden-thiele.png"
                    alt="Camden Thiele - Co-founder & Project Manager"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-2xl">Camden Thiele</CardTitle>
                <CardDescription className="text-lg">Co-founder & Project Manager</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-semibold mb-4 flex items-center justify-center">
                      <Briefcase className="h-5 w-5 mr-2 text-purple-600" />
                      Professional Background
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Business Owner & Senior AI Engineer</li>
                      <li>• 25 years old, based in the United States</li>
                      <li>• Extensive experience in GenAI and automation</li>
                      <li>• Expert in project management and client relations</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4 flex items-center justify-center">
                      <GraduationCap className="h-5 w-5 mr-2 text-blue-600" />
                      Expertise Areas
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Natural Language Processing</li>
                      <li>• Computer Vision & Deep Learning</li>
                      <li>• Cloud Architecture & MLOps</li>
                      <li>• AI Strategy & Implementation</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Camden leads our team with a passion for AI engineering and creating positive social value through
                  technology. His vision drives our mission to help businesses leverage AI for growth, efficiency, and
                  innovation.
                </p>
                <div className="flex justify-center">
                  <Badge variant="secondary" className="text-sm">
                    Available for consultation
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Global Team */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Our Global Development Team</h2>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">International Expertise</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our diverse team of developers brings together talent from multiple countries, creating a rich blend of
                perspectives, skills, and cultural insights that enhance our problem-solving capabilities.
              </p>
            </div>
            <div className="grid md:grid-cols-5 gap-4 text-center">
              {[
                { country: "United States", flag: "🇺🇸" },
                { country: "India", flag: "🇮🇳" },
                { country: "China", flag: "🇨🇳" },
                { country: "Pakistan", flag: "🇵🇰" },
                { country: "& More", flag: "🌍" },
              ].map((location, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl mb-2">{location.flag}</div>
                  <div className="font-semibold text-sm">{location.country}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
              <p className="text-gray-600 mb-8">
                Ready to transform your business with AI? We'd love to hear about your project and discuss how we can
                help you achieve your goals.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-purple-600 mr-3" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:thielecamden@gmail.com" className="text-purple-600 hover:underline">
                      thielecamden@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-gray-600">Fort Myers, Florida, USA</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-green-600 mr-3" />
                  <div>
                    <div className="font-semibold">Service Area</div>
                    <div className="text-gray-600">United States & International</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2 text-purple-600" />
                    Send us a message
                  </CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">First Name</label>
                        <Input placeholder="John" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Last Name</label>
                        <Input placeholder="Doe" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input type="email" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Company</label>
                      <Input placeholder="Your Company Name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Project Type</label>
                      <Input placeholder="AI Chatbot, Automation, etc." />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Message</label>
                      <Textarea placeholder="Tell us about your project and how we can help..." rows={4} />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center bg-gradient-to-r from-slate-900 to-purple-900 text-white rounded-2xl p-12">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We want to further our career in AI engineering and create positive social value by using AI. We believe AI
            can provide valuable benefits to your business when done correctly, and we pride ourselves on ensuring your
            success.
          </p>
        </div>
      </div>
    </div>
  )
}
