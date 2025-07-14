import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/images/fmc-logo.png" alt="FMC Logo" width={32} height={32} className="rounded" />
              <span className="font-bold text-lg bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Future-Mind-Collective
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Transforming businesses with cutting-edge AI solutions, automation, and cloud architectures.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-purple-400" />
                <span>Fort Myers, FL</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-purple-400" />
                <a href="mailto:thielecamden@gmail.com" className="hover:text-purple-400">
                  thielecamden@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/services" className="hover:text-white">
                  AI Agents
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  ChatBots & VoiceBots
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Computer Vision
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Workflow Automation
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Cloud Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="font-semibold mb-4">Technologies</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/techniques" className="hover:text-white">
                  Python & AI/ML
                </Link>
              </li>
              <li>
                <Link href="/techniques" className="hover:text-white">
                  LangChain & OpenAI
                </Link>
              </li>
              <li>
                <Link href="/techniques" className="hover:text-white">
                  React & Next.js
                </Link>
              </li>
              <li>
                <Link href="/techniques" className="hover:text-white">
                  AWS & Cloud
                </Link>
              </li>
              <li>
                <Link href="/techniques" className="hover:text-white">
                  DevOps & MLOps
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/business" className="hover:text-white">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/about#contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/business" className="hover:text-white">
                  Business Solutions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Future-Mind-Collective. All rights reserved.</p>
          <p className="mt-2">Empowering businesses through AI innovation.</p>
        </div>
      </div>
    </footer>
  )
}
