import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-nexora-green mb-8 hover:underline">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-6xl font-bold text-nexora-green mb-12">Features</h1>

        <div className="grid gap-12">
          <div className="grid gap-4">
            <h2 className="text-2xl font-semibold">Lightning Fast Performance</h2>
            <p className="text-white/70 max-w-3xl">
              Nexora delivers unmatched speed and efficiency, ensuring your experience is always smooth and responsive.
            </p>
          </div>

          <div className="grid gap-4">
            <h2 className="text-2xl font-semibold">Seamless Integration</h2>
            <p className="text-white/70 max-w-3xl">
              Easily integrate with your existing workflow and tools with our comprehensive API and extension system.
            </p>
          </div>

          <div className="grid gap-4">
            <h2 className="text-2xl font-semibold">Advanced Security</h2>
            <p className="text-white/70 max-w-3xl">
              Your data is protected with state-of-the-art encryption and security protocols, giving you peace of mind.
            </p>
          </div>

          <div className="grid gap-4">
            <h2 className="text-2xl font-semibold">Intuitive Interface</h2>
            <p className="text-white/70 max-w-3xl">
              Our clean, modern design makes navigation effortless, allowing you to focus on what matters most.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
