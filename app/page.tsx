import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Brain, Code, Cloud, Zap, Users, Globe, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-6">
                <Image
                  src="/images/fmc-logo.png"
                  alt="Future-Mind-Collective Logo"
                  width={200}
                  height={200}
                  className="mx-auto lg:mx-0"
                />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Future-Mind-Collective
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-gray-300">
                Transforming businesses with cutting-edge AI solutions, automation, and cloud architectures
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                >
                  <Link href="/services" className="flex items-center">
                    Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
                >
                  <Link href="/about">Meet Our Team</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6 text-center">
                    <Brain className="h-8 w-8 mx-auto mb-2 text-pink-400" />
                    <h3 className="font-semibold mb-1">AI & ML</h3>
                    <p className="text-sm text-gray-300">Advanced AI solutions</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6 text-center">
                    <Zap className="h-8 w-8 mx-auto mb-2 text-purple-400" />
                    <h3 className="font-semibold mb-1">Automation</h3>
                    <p className="text-sm text-gray-300">Workflow optimization</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6 text-center">
                    <Cloud className="h-8 w-8 mx-auto mb-2 text-blue-400" />
                    <h3 className="font-semibold mb-1">Cloud</h3>
                    <p className="text-sm text-gray-300">Scalable infrastructure</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6 text-center">
                    <Globe className="h-8 w-8 mx-auto mb-2 text-cyan-400" />
                    <h3 className="font-semibold mb-1">Global Team</h3>
                    <p className="text-sm text-gray-300">Worldwide expertise</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Who We Are</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a development agency serving US clients, leveraging our extensive experience with GenAI, automation,
              and cloud technologies to help businesses harness the transformative power of AI.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Based in Fort Myers, FL</h3>
              <p className="text-gray-600 mb-6">
                Led by Camden Thiele, our international team of developers from the US, India, China, Pakistan, and more
                countries brings diverse expertise and perspectives to every project.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Long experience with GenAI and Natural Language Processing</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Expertise in Computer Vision and Voice AI</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Specialization in cloud architectures for enterprise solutions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Focus on scalable solutions and measurable ROI</span>
                </div>
              </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-6 w-6 mr-2 text-purple-600" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    We believe AI can provide valuable benefits to your business when done correctly. Our aim is to
                    provide scalable solutions to enhance efficiency, productivity, and commercially generate new growth
                    areas through automation.
                  </p>
                  <p className="text-gray-600">
                    We pride ourselves on ensuring your success and want to further our career in AI engineering while
                    creating positive social value through AI.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600">Comprehensive AI solutions tailored to your business needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Brain className="h-10 w-10 text-pink-600 mb-2" />
                <CardTitle>Generative AI Agents</CardTitle>
                <CardDescription>
                  Custom AI agents for content creation, customer support, and business automation
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Code className="h-10 w-10 text-purple-600 mb-2" />
                <CardTitle>AI-Enabled Applications</CardTitle>
                <CardDescription>
                  ChatBots, VoiceBots, and custom applications for enhanced customer engagement
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Cloud className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle>Cloud AI Solutions</CardTitle>
                <CardDescription>
                  Scalable AI deployment in the cloud with MLOps that grows with your business
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
            >
              <Link href="/services" className="flex items-center">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Clients Love Working With Us</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="font-semibold mb-2">Custom Solutions</h3>
              <p className="text-gray-600 text-sm">
                We listen to your needs and customize every project for effective outcomes
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Result Driven</h3>
              <p className="text-gray-600 text-sm">
                Innovative AI solutions that help your business grow and create impact
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Fast Turnaround</h3>
              <p className="text-gray-600 text-sm">
                On-time delivery with no quality sacrifice, understanding your deadlines
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Ongoing Support</h3>
              <p className="text-gray-600 text-sm">
                Continued support, updates, and optimization as your business grows
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Let's discuss how we can help you leverage AI for growth and efficiency
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100">
              <Link href="/about#contact">Get In Touch</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
            >
              <Link href="/business">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
