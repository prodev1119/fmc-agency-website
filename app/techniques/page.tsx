import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Brain, Mic, Eye, Globe, Workflow, Cloud, Database, Monitor, Cpu } from "lucide-react"

export default function TechniquesPage() {
  const techCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      technologies: ["Python", "C/C++/C#", "Java", "SQL", "JavaScript", "R"],
    },
    {
      icon: Brain,
      title: "AI/ML Frameworks",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      technologies: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "Hugging Face", "OpenCV"],
    },
    {
      icon: Brain,
      title: "LLM & NLP",
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      technologies: [
        "RAG",
        "ChatBot",
        "OpenAI API",
        "LangChain/LangGraph",
        "Prompt Engineering",
        "Vector Embedding",
        "Pinecone",
        "DeepSpeed",
        "Llama",
        "Gemini",
      ],
    },
    {
      icon: Mic,
      title: "Voice AI",
      color: "text-green-600",
      bgColor: "bg-green-50",
      technologies: ["Vapi", "VoiceBot", "SynthFlow", "VoiceFlow", "STT", "TTS"],
    },
    {
      icon: Eye,
      title: "Computer Vision",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      technologies: ["OpenCV", "GAN", "ViT (Vision Transformer)", "YOLO", "CVAT", "CNN"],
    },
    {
      icon: Globe,
      title: "Full Stack Development",
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
      technologies: [
        "PHP",
        "MERN Stack",
        "Node.js",
        "React",
        "Next.js",
        "Django",
        "HTML5",
        "CSS3",
        "jQuery",
        "Bootstrap",
        "MUI",
        "Shadcn",
      ],
    },
    {
      icon: Workflow,
      title: "Automation & Integration",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      technologies: [
        "n8n",
        "Make.com",
        "Zapier",
        "Replit",
        "WordPress",
        "Shopify",
        "Web Scraping",
        "LC/NC",
        "GitHub/GitLab",
        "Xano",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-red-600",
      bgColor: "bg-red-50",
      technologies: ["Docker", "AWS", "Azure", "GCP", "Kubernetes", "OpenStack", "DevOps/MLOps", "CI/CD"],
    },
    {
      icon: Code,
      title: "API Development",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      technologies: ["Postman", "Axios", "Swagger", "Amazon API", "REST", "GraphQL"],
    },
    {
      icon: Database,
      title: "Databases",
      color: "text-teal-600",
      bgColor: "bg-teal-50",
      technologies: ["Pinecone", "ChromaDB", "MongoDB", "PostgreSQL", "MySQL", "Redis"],
    },
    {
      icon: Monitor,
      title: "Operating Systems",
      color: "text-gray-600",
      bgColor: "bg-gray-50",
      technologies: ["Windows", "Linux", "macOS"],
    },
  ]

  const specializations = [
    {
      title: "Natural Language Processing",
      description: "Advanced text processing, sentiment analysis, and language understanding",
      icon: Brain,
      color: "text-purple-600",
    },
    {
      title: "Computer Vision",
      description: "Image recognition, object detection, and visual AI solutions",
      icon: Eye,
      color: "text-orange-600",
    },
    {
      title: "Voice AI",
      description: "Speech recognition, text-to-speech, and voice-enabled applications",
      icon: Mic,
      color: "text-green-600",
    },
    {
      title: "MLOps & Deployment",
      description: "Scalable model deployment, monitoring, and maintenance",
      icon: Cloud,
      color: "text-blue-600",
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Technical Expertise</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies and frameworks to deliver robust, scalable AI solutions that drive
            business transformation.
          </p>
        </div>

        {/* Specializations */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Core Specializations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializations.map((spec, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <spec.icon className={`h-10 w-10 mx-auto mb-2 ${spec.color}`} />
                  <CardTitle className="text-lg">{spec.title}</CardTitle>
                  <CardDescription>{spec.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Technology Stack</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {techCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${category.bgColor} flex items-center justify-center mb-4`}>
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Advanced Capabilities */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Advanced AI Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4 flex items-center">
                <Brain className="h-5 w-5 mr-2 text-purple-600" />
                Deep Learning
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Neural network architectures</li>
                <li>• Transfer learning</li>
                <li>• Custom model training</li>
                <li>• Model optimization</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 flex items-center">
                <Cpu className="h-5 w-5 mr-2 text-blue-600" />
                AI Infrastructure
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• GPU acceleration</li>
                <li>• Distributed training</li>
                <li>• Model serving</li>
                <li>• Performance monitoring</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 flex items-center">
                <Database className="h-5 w-5 mr-2 text-green-600" />
                Data Engineering
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Data pipeline design</li>
                <li>• Vector databases</li>
                <li>• ETL processes</li>
                <li>• Data quality assurance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Methodology */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Our Development Methodology</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Analysis</h3>
              <p className="text-sm text-gray-600">Understanding your requirements and technical constraints</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Design</h3>
              <p className="text-sm text-gray-600">Architecting scalable and efficient AI solutions</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Development</h3>
              <p className="text-sm text-gray-600">Building with best practices and cutting-edge technologies</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-600 font-bold">4</span>
              </div>
              <h3 className="font-semibold mb-2">Deployment</h3>
              <p className="text-sm text-gray-600">Seamless deployment with ongoing support and optimization</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
