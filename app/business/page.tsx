import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Target,
  Lightbulb,
  Users,
  Heart,
  Zap,
  Clock,
  HeadphonesIcon,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

export default function BusinessPage() {
  const businessServices = [
    {
      icon: Target,
      title: "Unique AI Strategy & Implementation",
      description:
        "We create an AI plan that's appropriate for your unique business goals and will easily fit with your existing processes.",
      features: [
        "Custom AI roadmap development",
        "Seamless integration with existing systems",
        "Clear planning and realistic timelines",
        "Measurable ROI focus",
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Lightbulb,
      title: "Cutting-Edge AI Applications",
      description:
        "Stay ahead of competition with the latest AI tools for marketing automation, intelligent chatbots, and data analytics.",
      features: [
        "Marketing automation solutions",
        "Intelligent chatbot implementation",
        "Advanced data analytics",
        "Revenue generation systems",
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Users,
      title: "Technical & Business Expertise",
      description:
        "We combine deep technical knowledge with business experience to help you understand and leverage AI's true value.",
      features: [
        "Strategic AI consulting",
        "Technical implementation guidance",
        "Business value assessment",
        "Organizational AI adoption",
      ],
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
  ]

  const whyClientsLove = [
    {
      icon: Heart,
      title: "Custom Solutions for Clients",
      description:
        "We listen well to your needs and customize every project to deliver the highest quality, effective outcomes that work for you.",
      color: "text-pink-600",
    },
    {
      icon: TrendingUp,
      title: "Result Driven",
      description: "We want to develop innovative AI solutions that can help your business grow and create impact.",
      color: "text-purple-600",
    },
    {
      icon: Clock,
      title: "Fast Turnaround & On-Time Delivery",
      description:
        "We understand that deadlines are important for your business, so we prioritize fast workflows and delivering every project on time with no quality sacrifice.",
      color: "text-blue-600",
    },
    {
      icon: HeadphonesIcon,
      title: "Continued Support & Maintenance",
      description:
        "The end of a project is the beginning of ongoing support, updates, and optimization to ensure your AI solutions continuously work their best as your business grows.",
      color: "text-green-600",
    },
  ]

  const businessBenefits = [
    {
      title: "Enhanced Efficiency",
      description: "Automate repetitive tasks and streamline workflows",
      icon: Zap,
    },
    {
      title: "Improved Customer Experience",
      description: "Deliver personalized, intelligent customer interactions",
      icon: Users,
    },
    {
      title: "Revenue Growth",
      description: "Create new revenue streams through AI-powered solutions",
      icon: TrendingUp,
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead with cutting-edge AI implementations",
      icon: Sparkles,
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Business Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with AI solutions designed to enhance efficiency, improve customer experience, and
            drive sustainable growth.
          </p>
        </div>

        {/* How We Help Your Business */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">How We Can Help Your Business</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {businessServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${service.bgColor} flex items-center justify-center mb-4`}>
                    <service.icon className={`h-6 w-6 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Business Benefits */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Business Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <benefit.icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Clients Love Working With Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Clients Love Working With Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {whyClientsLove.map((reason, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <reason.icon className={`h-8 w-8 ${reason.color} mr-3`} />
                    <CardTitle className="text-xl">{reason.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{reason.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Our Approach */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Our Business Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-3">Strategic Planning</h3>
              <p className="text-gray-600 text-sm">
                We start by understanding your business goals, challenges, and existing processes to create a tailored
                AI strategy that delivers measurable results.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-3">Innovation Focus</h3>
              <p className="text-gray-600 text-sm">
                We leverage the latest AI technologies and best practices to create innovative solutions that give you a
                competitive advantage in your market.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-3">Partnership Approach</h3>
              <p className="text-gray-600 text-sm">
                We work as your technology partner, providing ongoing support and guidance to ensure your AI solutions
                continue to deliver value as your business grows.
              </p>
            </div>
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Industries We Serve</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Startups",
              "E-commerce",
              "Healthcare",
              "Finance",
              "Manufacturing",
              "Education",
              "Real Estate",
              "Marketing",
              "Customer Service",
              "SaaS",
            ].map((industry, index) => (
              <Badge key={index} variant="secondary" className="text-sm px-4 py-2">
                {industry}
              </Badge>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-slate-900 to-purple-900 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how AI can provide valuable benefits to your business when done correctly. We pride ourselves
            on ensuring your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100">
              <Link href="/about#contact" className="flex items-center">
                Start Your AI Journey <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
            >
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
