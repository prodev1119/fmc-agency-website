import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Brain,
  Mic,
  Eye,
  Shield,
  Scale,
  Globe,
  DollarSign,
  Palette,
  TrendingUp,
  Users,
  Zap,
  Home,
  FileText,
  UserCheck,
  Heart,
  Video,
  GraduationCap,
  Search,
  Workflow,
} from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Customer Success Platform",
      client: "ServiceNow",
      category: "Enterprise AI",
      icon: Brain,
      image: "/placeholder.svg?height=300&width=500&text=AI+Customer+Success+Dashboard",
      description:
        "Cutting-edge customer support intelligence platform leveraging Anthropic's Claude 3 Opus and GPT-4o with advanced RAG architecture.",
      technologies: ["Claude 3 Opus", "GPT-4o", "LangChain", "Pinecone", "AWS Lambda", "Weaviate"],
      results: [
        "32% reduction in support ticket volume",
        "41% decrease in resolution time",
        "28% improvement in CSAT scores",
        "$4.2M annualized savings",
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      id: 2,
      title: "Multi-Modal Content Engine",
      client: "The Honest Company",
      category: "Marketing AI",
      icon: Palette,
      image: "/placeholder.svg?height=300&width=500&text=Content+Generation+Platform",
      description:
        "Enterprise-scale generative AI content platform combining Claude 3 Opus and GPT-4o for cross-channel marketing content creation.",
      technologies: ["Claude 3 Opus", "GPT-4o", "Llama 3 70B", "DALL-E 3", "Azure Kubernetes", "Next.js"],
      results: [
        "73% reduction in content production time",
        "47% increase in email engagement",
        "52% improvement in social conversion",
        "10,000+ content pieces monthly",
      ],
      color: "text-pink-600",
      bgColor: "bg-pink-50",
    },
    {
      id: 3,
      title: "MedVoice Healthcare Interface",
      client: "Intermountain Healthcare",
      category: "Healthcare AI",
      icon: Mic,
      image: "/placeholder.svg?height=300&width=500&text=Healthcare+Voice+Assistant",
      description:
        "Multilingual voice-enabled healthcare assistant with 94% transcription accuracy across medical terminology.",
      technologies: ["Azure Speech Services", "Deepgram Nova-2", "Microsoft Bot Framework", "Vapi", "Epic FHIR"],
      results: [
        "43% reduction in administrative calls",
        "78% increase in digital engagement",
        "37% decrease in missed appointments",
        "$3.2M annual savings",
      ],
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      id: 4,
      title: "RetailVision AI Platform",
      client: "GameStop",
      category: "Computer Vision",
      icon: Eye,
      image: "/placeholder.svg?height=300&width=500&text=Retail+Computer+Vision",
      description:
        "Real-time computer vision platform transforming security cameras into intelligent retail sensors with YOLOv8-XL.",
      technologies: ["YOLOv8-XL", "ByteTrack", "NVIDIA A10G", "AWS EKS", "Segment Anything Model"],
      results: [
        "32% reduction in inventory shrinkage",
        "27% improvement in conversion rates",
        "43% decrease in out-of-stock situations",
        "$8.7M annualized savings",
      ],
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      id: 5,
      title: "SecureVision Intelligence Platform",
      client: "Exelon Corporation",
      category: "Security AI",
      icon: Shield,
      image: "/placeholder.svg?height=300&width=500&text=Security+Intelligence+Platform",
      description:
        "Multi-modal security intelligence platform for critical infrastructure with 99.3% precision in threat detection.",
      technologies: ["YOLOv8-XL", "Grounding DINO", "MaxViT", "NVIDIA Jetson Orin", "AWS Outposts"],
      results: [
        "93% reduction in false positives",
        "64% decrease in security breaches",
        "11-minute faster response time",
        "$4.3M cost avoidance",
      ],
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      id: 6,
      title: "LegalMind Contract Analysis",
      client: "JPMorgan Chase",
      category: "Legal AI",
      icon: Scale,
      image: "/placeholder.svg?height=300&width=500&text=Legal+Contract+Analysis",
      description:
        "AI-powered contract analysis platform with specialized LegalBERT transformers for risk intelligence.",
      technologies: ["Claude 3 Opus", "LegalBERT", "Hugging Face PEFT", "Azure Confidential Computing"],
      results: [
        "46% reduction in document review time",
        "87% accuracy in risk identification",
        "52% decrease in junior associate hours",
        "$3.8M additional revenue",
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: 7,
      title: "GlobalVoice Multilingual Platform",
      client: "Royal Caribbean Group",
      category: "Voice AI",
      icon: Globe,
      image: "/placeholder.svg?height=300&width=500&text=Multilingual+Voice+Platform",
      description:
        "Enterprise-grade multilingual voice platform with Whisper v3 and custom acoustic models for 9 languages.",
      technologies: ["Whisper v3", "Nvidia NeMo", "ElevenLabs", "Google Cloud Translation", "Tacotron 3"],
      results: [
        "41% reduction in handle time",
        "93% translation accuracy",
        "29% increase in first-call resolution",
        "$4.2M annual savings",
      ],
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
    },
    {
      id: 8,
      title: "WealthGenius Financial Intelligence",
      client: "Regions Bank",
      category: "FinTech AI",
      icon: DollarSign,
      image: "/placeholder.svg?height=300&width=500&text=Financial+Intelligence+Platform",
      description: "Hyper-personalized financial advisory platform with multi-agent system and Monte Carlo analysis.",
      technologies: ["Claude 3 Opus", "GPT-4o", "Neo4j", "Plaid API", "PyMC3", "Next.js 14"],
      results: [
        "27% increase in investment assets",
        "41% growth in product adoption",
        "68% reduction in client attrition",
        "$14.2M incremental revenue",
      ],
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      id: 9,
      title: "ArtisticAI Image Transformation",
      client: "Industrial Light & Magic",
      category: "Creative AI",
      icon: Palette,
      image: "/placeholder.svg?height=300&width=500&text=AI+Image+Transformation",
      description:
        "Professional-grade creative image transformation with Stable Diffusion XL Turbo and custom GigaGAN models.",
      technologies: ["Stable Diffusion XL", "GigaGAN", "ControlNet", "Real-ESRGAN", "AWS P4d", "React"],
      results: [
        "78% reduction in enhancement time",
        "4.2x increase in iteration speed",
        "92% artist adoption rate",
        "$3.7M cost savings per production",
      ],
      color: "text-violet-600",
      bgColor: "bg-violet-50",
    },
    {
      id: 10,
      title: "Supply Chain Demand Forecasting",
      client: "Chewy, Inc.",
      category: "Predictive Analytics",
      icon: TrendingUp,
      image: "/placeholder.svg?height=300&width=500&text=Supply+Chain+Forecasting",
      description: "Sophisticated demand forecasting system with Random Forests, LSTM networks, and Facebook Prophet.",
      technologies: ["scikit-learn", "Prophet", "LSTM", "AWS S3", "Dash", "Random Forest"],
      results: [
        "15% reduction in stockouts",
        "23% decrease in excess inventory",
        "18% improvement in turnover",
        "11% reduction in shipping costs",
      ],
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      id: 11,
      title: "BrandPulse Social Intelligence",
      client: "Procter & Gamble",
      category: "Social Analytics",
      icon: Users,
      image: "/placeholder.svg?height=300&width=500&text=Social+Intelligence+Platform",
      description:
        "Real-time social listening platform with multilingual BERT models and anomaly detection for crisis prevention.",
      technologies: ["BERT-multilingual", "DeBERTa v3", "SpaCy", "Prophet", "n8n", "Next.js 13"],
      results: [
        "73% faster crisis detection",
        "47% reduction in negative sentiment",
        "62% improvement in response time",
        "$4.2M estimated savings",
      ],
      color: "text-teal-600",
      bgColor: "bg-teal-50",
    },
    {
      id: 12,
      title: "FraudShield Transaction Intelligence",
      client: "Chewy, Inc.",
      category: "Security AI",
      icon: Shield,
      image: "/placeholder.svg?height=300&width=500&text=Fraud+Detection+Platform",
      description: "Real-time fraud detection with XGBoost ensembles and behavioral biometrics using TensorFlow.js.",
      technologies: ["XGBoost", "LightGBM", "TensorFlow.js", "Azure Synapse", "SHAP", "React"],
      results: [
        "94.7% fraud detection rate",
        "78% reduction in false positives",
        "$4.2M monthly fraud prevention",
        "$1.8M additional revenue",
      ],
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
    {
      id: 13,
      title: "HomeHarmony Voice Control",
      client: "Royal Caribbean Group",
      category: "IoT AI",
      icon: Home,
      image: "/placeholder.svg?height=300&width=500&text=Smart+Cabin+Voice+Control",
      description: "Enterprise-grade voice control system for smart cruise environments with Whisper Large v3.",
      technologies: ["Whisper Large v3", "Vapi", "NVIDIA Riva", "Rasa NLU", "Node-RED", "React Native"],
      results: [
        "94% guest adoption rate",
        "83% reduction in support tickets",
        "42% increase in feature utilization",
        "$4.2M premium revenue",
      ],
      color: "text-lime-600",
      bgColor: "bg-lime-50",
    },
    {
      id: 14,
      title: "DocuMind Document Processing",
      client: "Allianz Group",
      category: "Document AI",
      icon: FileText,
      image: "/placeholder.svg?height=300&width=500&text=Document+Processing+Platform",
      description:
        "Intelligent document processing with Google Document AI and custom DETR models for 150+ form types.",
      technologies: ["Google Document AI", "DETR", "TrOCR", "PaddleOCR", "SpaCy", "Azure API Management"],
      results: [
        "93% reduction in processing time",
        "78% decrease in payment errors",
        "46% improvement in compliance",
        "$12.7M annual savings",
      ],
      color: "text-stone-600",
      bgColor: "bg-stone-50",
    },
    {
      id: 15,
      title: "TalentSphere Recruitment Platform",
      client: "Accenture",
      category: "HR AI",
      icon: UserCheck,
      image: "/placeholder.svg?height=300&width=500&text=AI+Recruitment+Platform",
      description:
        "Intelligent recruitment optimization with DeBERTaV3 and Neo4j skills taxonomy for 7,800+ technical skills.",
      technologies: ["DeBERTaV3", "Neo4j", "OpenAI Embeddings", "Azure Cognitive Search", "React", "Chakra UI"],
      results: [
        "61% reduction in time-to-hire",
        "47% improvement in offer acceptance",
        "84% decrease in screening time",
        "$14.2M annual savings",
      ],
      color: "text-sky-600",
      bgColor: "bg-sky-50",
    },
    {
      id: 16,
      title: "SentimentFlow Customer Experience",
      client: "Salesforce",
      category: "Customer AI",
      icon: Heart,
      image: "/placeholder.svg?height=300&width=500&text=Customer+Experience+Platform",
      description: "Enterprise customer experience intelligence with RoBERTa-large and XLM-RoBERTa for 17 languages.",
      technologies: ["RoBERTa-large", "XLM-RoBERTa", "LLaMA 3 8B", "BERTopic", "XGBoost", "Next.js 13"],
      results: [
        "67% reduction in resolution time",
        "41% decrease in customer churn",
        "53% improvement in first-contact resolution",
        "$17.3M revenue preservation",
      ],
      color: "text-rose-600",
      bgColor: "bg-rose-50",
    },
    {
      id: 17,
      title: "VideoGenius Media Intelligence",
      client: "Warner Bros. Discovery",
      category: "Media AI",
      icon: Video,
      image: "/placeholder.svg?height=300&width=500&text=Video+Intelligence+Platform",
      description: "Enterprise media intelligence with YOLOv8-X, CLIP, and TimeSformer for 750,000+ hours of content.",
      technologies: ["YOLOv8-X", "CLIP", "TimeSformer", "Whisper Large v3", "Google Cloud TPU", "React"],
      results: [
        "87% reduction in manual tagging",
        "42% increase in content discoverability",
        "217% improvement in search precision",
        "$28.4M additional revenue",
      ],
      color: "text-fuchsia-600",
      bgColor: "bg-fuchsia-50",
    },
    {
      id: 18,
      title: "LearningOS Education Platform",
      client: "Coursera",
      category: "EdTech AI",
      icon: GraduationCap,
      image: "/placeholder.svg?height=300&width=500&text=Adaptive+Learning+Platform",
      description:
        "Hyper-personalized AI education platform with Neo4j knowledge graphs and Claude 3 Opus for adaptive learning.",
      technologies: ["Claude 3 Opus", "Neo4j", "OpenAI Embeddings", "AWS SageMaker", "Next.js 13", "Three.js"],
      results: [
        "78% course completion rate",
        "43% improvement in retention",
        "62% reduction in time-to-proficiency",
        "$7.8M additional revenue",
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      id: 19,
      title: "VisualMatch Retail Search",
      client: "Nordstrom",
      category: "Visual AI",
      icon: Search,
      image: "/placeholder.svg?height=300&width=500&text=Visual+Search+Platform",
      description:
        "Enterprise visual search platform with CLIP and DINOv2 for 1.2M+ fashion products across luxury brands.",
      technologies: ["CLIP", "DINOv2", "Segment Anything Model", "Pinecone", "Azure Kubernetes", "React Native"],
      results: [
        "32% increase in conversion rate",
        "47% higher average order value",
        "28% reduction in search abandonment",
        "$42M incremental revenue",
      ],
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      id: 20,
      title: "OmniFlow Integration Platform",
      client: "JPMorgan Chase",
      category: "Automation",
      icon: Workflow,
      image: "/placeholder.svg?height=300&width=500&text=Workflow+Orchestration+Platform",
      description:
        "Enterprise integration platform with n8n, Make.com, and Temporal for 1,200+ automated workflow sequences.",
      technologies: ["n8n", "Make.com", "Temporal", "Azure Form Recognizer", "Google Kubernetes", "React"],
      results: [
        "83% reduction in manual processing",
        "91% decrease in data entry errors",
        "67% faster process execution",
        "$34.2M annual cost savings",
      ],
      color: "text-gray-600",
      bgColor: "bg-gray-50",
    },
  ]

  const categories = [
    "All Projects",
    "Enterprise AI",
    "Computer Vision",
    "Voice AI",
    "Security AI",
    "Healthcare AI",
    "FinTech AI",
    "Marketing AI",
    "Creative AI",
    "Document AI",
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of cutting-edge AI solutions that have transformed businesses across industries. Each
            project showcases our expertise in delivering measurable results through innovative technology.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">20+</div>
            <div className="text-gray-600">Major Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">$200M+</div>
            <div className="text-gray-600">Business Impact</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
            <div className="text-gray-600">Industries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.slice(0, 6).map((project) => (
            <Card key={project.id} className="hover:shadow-lg transition-shadow overflow-hidden">
              <div
                className={`relative h-48 ${project.bgColor} bg-gradient-to-br from-white to-current flex items-center justify-center`}
              >
                <project.icon className={`h-16 w-16 ${project.color} opacity-80`} />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90">
                    {project.category}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center mb-2">
                  <div className={`w-10 h-10 rounded-lg ${project.bgColor} flex items-center justify-center mr-3`}>
                    <project.icon className={`h-5 w-5 ${project.color}`} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription className="text-sm font-medium text-purple-600">{project.client}</CardDescription>
                  </div>
                </div>
                <CardDescription className="text-sm">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-sm">Key Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-sm">Key Results:</h4>
                  <ul className="space-y-1">
                    {project.results.slice(0, 2).map((result, index) => (
                      <li key={index} className="text-xs text-gray-600 flex items-center">
                        <div className="w-1 h-1 bg-green-500 rounded-full mr-2"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Complete Project Portfolio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(6).map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow">
                <div
                  className={`relative h-32 ${project.bgColor} bg-gradient-to-br from-white to-current flex items-center justify-center`}
                >
                  <project.icon className={`h-10 w-10 ${project.color} opacity-80`} />
                  <div className="absolute top-2 left-2">
                    <Badge variant="secondary" className="bg-white/90 text-xs">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center mb-2">
                    <div className={`w-8 h-8 rounded-lg ${project.bgColor} flex items-center justify-center mr-2`}>
                      <project.icon className={`h-4 w-4 ${project.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-base leading-tight">{project.title}</CardTitle>
                      <CardDescription className="text-xs font-medium text-purple-600">
                        {project.client}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">{project.description}</p>
                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="text-xs text-gray-600">
                    <div className="flex items-center">
                      <div className="w-1 h-1 bg-green-500 rounded-full mr-2"></div>
                      {project.results[0]}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Highlights */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Technologies We've Mastered</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <Brain className="h-10 w-10 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Large Language Models</h3>
              <p className="text-sm text-gray-600">GPT-4o, Claude 3 Opus, LLaMA 3, Gemini</p>
            </div>
            <div className="text-center">
              <Eye className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Computer Vision</h3>
              <p className="text-sm text-gray-600">YOLOv8, CLIP, SAM, Stable Diffusion</p>
            </div>
            <div className="text-center">
              <Mic className="h-10 w-10 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Voice & Speech</h3>
              <p className="text-sm text-gray-600">Whisper, Vapi, ElevenLabs, Azure Speech</p>
            </div>
            <div className="text-center">
              <Zap className="h-10 w-10 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Cloud & Infrastructure</h3>
              <p className="text-sm text-gray-600">AWS, Azure, GCP, Kubernetes</p>
            </div>
          </div>
        </div>

        {/* Industry Impact */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Industries We've Transformed</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "Financial Services",
              "Healthcare",
              "Retail & E-commerce",
              "Media & Entertainment",
              "Technology",
              "Energy & Utilities",
              "Legal Services",
              "Education",
              "Manufacturing",
              "Travel & Hospitality",
            ].map((industry, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm border">
                <div className="font-semibold text-sm">{industry}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-slate-900 to-purple-900 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your AI Transformation?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join industry leaders who have already transformed their operations with our AI solutions. Let's discuss how
            we can deliver similar results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100">
              <Link href="/about#contact">Start Your Project</Link>
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
