import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-nexora-green mb-8 hover:underline">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-6xl font-bold text-nexora-green mb-12">Documentation</h1>

        <div className="grid gap-12">
          <div className="grid gap-4">
            <h2 className="text-2xl font-semibold">Getting Started</h2>
            <p className="text-white/70 max-w-3xl">
              Learn how to install and set up Nexora for your project. Follow our step-by-step guide to get up and
              running quickly.
            </p>
          </div>

          <div className="grid gap-4">
            <h2 className="text-2xl font-semibold">API Reference</h2>
            <p className="text-white/70 max-w-3xl">
              Comprehensive documentation of all API endpoints, parameters, and response formats to help you integrate
              Nexora into your applications.
            </p>
          </div>

          <div className="grid gap-4">
            <h2 className="text-2xl font-semibold">Tutorials</h2>
            <p className="text-white/70 max-w-3xl">
              Detailed tutorials covering common use cases and advanced features to help you make the most of Nexora.
            </p>
          </div>

          <div className="grid gap-4">
            <h2 className="text-2xl font-semibold">FAQs</h2>
            <p className="text-white/70 max-w-3xl">
              Answers to frequently asked questions about Nexora, its features, and common troubleshooting issues.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
