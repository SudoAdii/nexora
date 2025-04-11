import Link from "next/link"
import { GlowButton } from "@/components/glow-button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-6">
      <h1 className="text-nexora-green text-9xl font-bold mb-4">404</h1>
      <h2 className="text-2xl md:text-4xl font-semibold mb-8">Page Not Found</h2>
      <p className="text-white/70 mb-12 text-center max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link href="/">
        <GlowButton>Return to Home</GlowButton>
      </Link>
    </div>
  )
}
