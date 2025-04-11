import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-nexora-green mb-8 hover:underline">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-6xl font-bold text-nexora-green mb-12">Community</h1>

        <div className="grid gap-12">
          <div className="grid gap-4">
            <h2 className="text-2xl font-semibold">Join Our Growing Community</h2>
            <p className="text-white/70 max-w-3xl">
              Connect with thousands of Nexora users worldwide. Share ideas, get help, and collaborate on projects.
            </p>
          </div>

          <div className="grid gap-4">
            <h2 className="text-2xl font-semibold">Community Events</h2>
            <p className="text-white/70 max-w-3xl">
              Participate in regular meetups, webinars, and hackathons to enhance your skills and network with
              like-minded professionals.
            </p>
          </div>

          <div className="grid gap-4">
            <h2 className="text-2xl font-semibold">Contribute to Nexora</h2>
            <p className="text-white/70 max-w-3xl">
              Help shape the future of Nexora by contributing to our open-source projects and providing valuable
              feedback.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
