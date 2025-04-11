"use client"

import { ArrowLeft, Download } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { GlowButton } from "@/components/glow-button"

export default function DownloadPage() {
  const [downloadStarted, setDownloadStarted] = useState(false)

  const handleDownload = () => {
    setDownloadStarted(true)
    // Simulate download - in a real app, this would trigger the actual download
    setTimeout(() => {
      setDownloadStarted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-nexora-green mb-8 hover:underline">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-6xl font-bold text-nexora-green mb-12">Download Nexora</h1>

        <div className="grid gap-12 max-w-3xl">
          <p className="text-white/70">
            Get started with Nexora today. Download our latest version and experience the fastest platform available.
          </p>

          <div className="grid gap-8">
            <div className="border border-nexora-green/30 rounded-lg p-6 bg-black/50">
              <h2 className="text-2xl font-semibold mb-4">Nexora v1.0.2</h2>
              <p className="text-white/70 mb-6">Latest stable release with performance improvements and bug fixes.</p>
              <GlowButton onClick={handleDownload} className="flex items-center gap-2">
                {downloadStarted ? "Downloading..." : "Download Now"}
                <Download size={16} />
              </GlowButton>
            </div>

            <div className="border border-white/10 rounded-lg p-6 bg-black/50">
              <h2 className="text-2xl font-semibold mb-4">Nexora Beta v1.1.0</h2>
              <p className="text-white/70 mb-6">
                Preview the upcoming features and improvements. For testing purposes only.
              </p>
              <GlowButton onClick={handleDownload} className="flex items-center gap-2">
                {downloadStarted ? "Downloading..." : "Download Beta"}
                <Download size={16} />
              </GlowButton>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">System Requirements</h3>
            <ul className="list-disc list-inside text-white/70 space-y-2">
              <li>Windows 10/11 or macOS 10.15+</li>
              <li>4GB RAM minimum (8GB recommended)</li>
              <li>500MB free disk space</li>
              <li>Internet connection for updates and online features</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
