import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-nexora-green mb-8 hover:underline">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-6xl font-bold text-nexora-green mb-12">Terms of Service</h1>

        <div className="grid gap-8 text-white/80">
          <div>
            <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using Nexora, you agree to be bound by these Terms of Service and all applicable laws and
              regulations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on Nexora for personal,
              non-commercial transitory viewing only.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">3. Disclaimer</h2>
            <p>
              The materials on Nexora are provided on an 'as is' basis. Nexora makes no warranties, expressed or
              implied, and hereby disclaims and negates all other warranties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">4. Limitations</h2>
            <p>
              In no event shall Nexora or its suppliers be liable for any damages arising out of the use or inability to
              use the materials on Nexora.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">5. Revisions</h2>
            <p>
              The materials appearing on Nexora could include technical, typographical, or photographic errors. Nexora
              does not warrant that any of the materials are accurate, complete or current.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
