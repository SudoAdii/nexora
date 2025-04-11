import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-nexora-green mb-8 hover:underline">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-6xl font-bold text-nexora-green mb-12">Roadmap</h1>

        <div className="grid gap-12">
          <div className="grid gap-4">
            <h2 className="text-2xl font-semibold">Q2 2023: Foundation</h2>
            <p className="text-white/70 max-w-3xl">
              Launch of core platform features, initial API release, and community building initiatives.
            </p>
          </div>

          <div className="grid gap-4">
            <h2 className="text-2xl font-semibold">Q3 2023: Expansion</h2>
            <p className="text-white/70 max-w-3xl">
              Introduction of advanced analytics, enhanced security features, and expanded integration capabilities.
            </p>
          </div>

          <div className="grid gap-4">
            <h2 className="text-2xl font-semibold">Q4 2023: Optimization</h2>
            <p className="text-white/70 max-w-3xl">
              Performance improvements, UI/UX refinements, and additional customization options.
            </p>
          </div>

          <div className="grid gap-4">
            <h2 className="text-2xl font-semibold">Q1 2024: Innovation</h2>
            <p className="text-white/70 max-w-3xl">
              Release of groundbreaking new features, expanded platform capabilities, and next-generation tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
