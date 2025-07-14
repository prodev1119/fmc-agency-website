import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, MessageSquare, Mic, Eye, Workflow, Cloud, Code, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: Brain,
      title: "Generative AI Agents",
      description: "Custom AI agents for content creation, customer support, and business automation",
      features: [
        "Content creation automation",
        "Intelligent customer support",
        "Business process automation",
        "Custom AI workflows",
      ],
      color: "text-pink-600",
      bgColor: "bg-pink-50",
    },
    {
      icon: MessageSquare,
      title: "AI-Enabled Applications",
      description: "ChatBots and VoiceBots for improving customer engagement and support",
      features: [
        "Intelligent ChatBots",
        "Voice-enabled applications",
        "Multi-platform integration",
        "Natural language processing",
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Code,
      title: "LLM Integration & Management",
      description: "Deploy and manage large language models for high-level language processing",
      features: ["OpenAI API integration", "Custom model deployment", "RAG implementation", "Prompt engineering"],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Automate workflows and integrate APIs to save time and minimize errors",
      features: ["Process automation", "API integrations", "Error reduction systems", "Efficiency optimization"],
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Eye,
      title: "Computer Vision Solutions",
      description: "Image processing using Computer Vision & Deep Learning technologies",
      features: ["Image recognition", "Object detection (YOLO)", "Visual transformers (ViT)", "GAN implementations"],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: Cloud,
      title: "Scalable Cloud AI",
      description: "Build and deploy scalable AI solutions in the cloud with MLOps",
      features: ["Cloud deployment", "MLOps pipelines", "Scalable architecture", "Performance monitoring"],
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive AI solutions designed to transform your business operations, enhance efficiency,
            and drive growth through cutting-edge technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
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

        {/* Additional Services */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Additional Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Mic className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Voice AI Solutions</h3>
              <p className="text-sm text-gray-600">Vapi, VoiceBot, SynthFlow, VoiceFlow, STT, TTS implementations</p>
            </div>
            <div className="text-center">
              <Code className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">API Development</h3>
              <p className="text-sm text-gray-600">Powerful APIs for workflow automation and system integration</p>
            </div>
            <div className="text-center">
              <Cloud className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">DevOps & MLOps</h3>
              <p className="text-sm text-gray-600">CI/CD pipelines, Docker, Kubernetes, and cloud infrastructure</p>
            </div>
          </div>
        </div>

        {/* Technology Stack Preview */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-6">Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {[
              "Python",
              "PyTorch",
              "TensorFlow",
              "OpenAI API",
              "LangChain",
              "React",
              "Next.js",
              "Node.js",
              "AWS",
              "Docker",
              "Kubernetes",
            ].map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-sm">
                {tech}
              </Badge>
            ))}
          </div>
          <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700">
            <Link href="/techniques" className="flex items-center">
              View Full Tech Stack <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-slate-900 to-purple-900 text-white rounded-2xl p-12">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-6">Let's discuss how our AI solutions can transform your business</p>
          <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100">
            <Link href="/about#contact">Contact Us Today</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
