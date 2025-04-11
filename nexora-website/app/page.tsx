"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Download } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedBackground } from "@/components/animated-background"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="bg-black text-white w-full">
      <AnimatedBackground />

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/images/logo-icon.png" alt="Nexora Logo" width={24} height={24} className="w-6 h-6" />
            <span className="text-nexora-green text-xl font-medium glow-text-sm">NEXORA</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-white/80 hover:text-nexora-green hover:glow-text-sm transition-colors"
            >
              Features
            </Link>
            <Link
              href="#community"
              className="text-white/80 hover:text-nexora-green hover:glow-text-sm transition-colors"
            >
              Community
            </Link>
            <Link
              href="#roadmap"
              className="text-white/80 hover:text-nexora-green hover:glow-text-sm transition-colors"
            >
              Roadmap
            </Link>
            <Link href="#terms" className="text-white/80 hover:text-nexora-green hover:glow-text-sm transition-colors">
              Terms
            </Link>
            <Link href="#docs" className="text-white/80 hover:text-nexora-green hover:glow-text-sm transition-colors">
              Docs
            </Link>
          </nav>

          <Link
            href="#download"
            className="bg-black border border-nexora-green text-nexora-green rounded-full px-6 py-2 flex items-center gap-2 hover:bg-nexora-green/10 hover:glow-border transition-all"
          >
            Download
            <Download size={16} />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <motion.h1
            className="text-nexora-green text-7xl md:text-9xl font-bold mb-6 glow-text"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
          >
            NEXORA
          </motion.h1>
          <motion.h2
            className="text-nexora-green/70 text-4xl md:text-6xl font-bold uppercase tracking-wider glow-text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            THE FASTEST
          </motion.h2>
        </motion.div>

        {/* Chrome Extension Images */}
        <motion.div
          className="absolute top-1/4 left-10 opacity-50"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.5, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Image src="/images/chrome-extension-left.png" alt="Chrome Extension" width={150} height={150} />
        </motion.div>

        <motion.div
          className="absolute top-1/4 right-10 opacity-50"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.5, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Image src="/images/chrome-extension-right.png" alt="Chrome Extension" width={150} height={150} />
        </motion.div>

        {/* Animated Diamond */}
        <div className="absolute bottom-10 left-10">
          <motion.div
            className="w-16 h-16 border-2 border-nexora-green rounded-md"
            animate={{
              rotate: 45,
              boxShadow: ["0 0 5px #00ff9d", "0 0 20px #00ff9d", "0 0 5px #00ff9d"],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>
      </section>

      {/* Features Section - ensure this has enough height to enable scrolling */}
      <section id="features" className="py-20 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-nexora-green mb-12 glow-text-sm">Features</h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-black/30 border border-nexora-green/20 p-8 rounded-lg hover:border-nexora-green/50 hover:glow-border-sm transition-all">
              <h3 className="text-2xl font-semibold mb-4 text-white">Lightning Fast Performance</h3>
              <p className="text-white/70">
                Experience unmatched speed and efficiency with our optimized platform, ensuring your workflow is always
                smooth and responsive.
              </p>
            </div>

            <div className="bg-black/30 border border-nexora-green/20 p-8 rounded-lg hover:border-nexora-green/50 hover:glow-border-sm transition-all">
              <h3 className="text-2xl font-semibold mb-4 text-white">Seamless Integration</h3>
              <p className="text-white/70">
                Easily integrate with your existing tools and workflows through our comprehensive API and extension
                system.
              </p>
            </div>

            <div className="bg-black/30 border border-nexora-green/20 p-8 rounded-lg hover:border-nexora-green/50 hover:glow-border-sm transition-all">
              <h3 className="text-2xl font-semibold mb-4 text-white">Advanced Security</h3>
              <p className="text-white/70">
                Your data is protected with state-of-the-art encryption and security protocols, giving you peace of
                mind.
              </p>
            </div>

            <div className="bg-black/30 border border-nexora-green/20 p-8 rounded-lg hover:border-nexora-green/50 hover:glow-border-sm transition-all">
              <h3 className="text-2xl font-semibold mb-4 text-white">Intuitive Interface</h3>
              <p className="text-white/70">
                Our clean, modern design makes navigation effortless, allowing you to focus on what matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 px-6 bg-black/50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-nexora-green mb-12 glow-text-sm">Community</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/30 border border-nexora-green/20 p-6 rounded-lg hover:border-nexora-green/50 hover:glow-border-sm transition-all">
              <h3 className="text-xl font-semibold mb-3 text-white">Join Our Discord</h3>
              <p className="text-white/70 mb-4">
                Connect with thousands of Nexora users worldwide. Share ideas, get help, and collaborate on projects.
              </p>
              <Link href="#" className="text-nexora-green hover:underline hover:glow-text-sm">
                Join Now →
              </Link>
            </div>

            <div className="bg-black/30 border border-nexora-green/20 p-6 rounded-lg hover:border-nexora-green/50 hover:glow-border-sm transition-all">
              <h3 className="text-xl font-semibold mb-3 text-white">Community Events</h3>
              <p className="text-white/70 mb-4">
                Participate in regular meetups, webinars, and hackathons to enhance your skills and network.
              </p>
              <Link href="#" className="text-nexora-green hover:underline hover:glow-text-sm">
                View Calendar →
              </Link>
            </div>

            <div className="bg-black/30 border border-nexora-green/20 p-6 rounded-lg hover:border-nexora-green/50 hover:glow-border-sm transition-all">
              <h3 className="text-xl font-semibold mb-3 text-white">Contribute</h3>
              <p className="text-white/70 mb-4">
                Help shape the future of Nexora by contributing to our open-source projects and providing feedback.
              </p>
              <Link href="#" className="text-nexora-green hover:underline hover:glow-text-sm">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-nexora-green mb-12 glow-text-sm">Roadmap</h2>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <h3 className="text-2xl font-semibold text-nexora-green">Q2 2023</h3>
                <p className="text-white/50">Foundation</p>
              </div>
              <div className="md:w-3/4 bg-black/30 border border-nexora-green/20 p-6 rounded-lg">
                <p className="text-white/70">
                  Launch of core platform features, initial API release, and community building initiatives.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <h3 className="text-2xl font-semibold text-nexora-green">Q3 2023</h3>
                <p className="text-white/50">Expansion</p>
              </div>
              <div className="md:w-3/4 bg-black/30 border border-nexora-green/20 p-6 rounded-lg">
                <p className="text-white/70">
                  Introduction of advanced analytics, enhanced security features, and expanded integration capabilities.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <h3 className="text-2xl font-semibold text-nexora-green">Q4 2023</h3>
                <p className="text-white/50">Optimization</p>
              </div>
              <div className="md:w-3/4 bg-black/30 border border-nexora-green/20 p-6 rounded-lg">
                <p className="text-white/70">
                  Performance improvements, UI/UX refinements, and additional customization options.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <h3 className="text-2xl font-semibold text-nexora-green">Q1 2024</h3>
                <p className="text-white/50">Innovation</p>
              </div>
              <div className="md:w-3/4 bg-black/30 border border-nexora-green/20 p-6 rounded-lg">
                <p className="text-white/70">
                  Release of groundbreaking new features, expanded platform capabilities, and next-generation tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-nexora-green/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <Image src="/images/logo-icon.png" alt="Nexora Logo" width={24} height={24} className="w-6 h-6" />
            <span className="text-nexora-green text-xl font-medium glow-text-sm">NEXORA</span>
          </div>

          <div className="flex flex-wrap gap-8 justify-center">
            <Link
              href="#features"
              className="text-white/80 hover:text-nexora-green hover:glow-text-sm transition-colors"
            >
              Features
            </Link>
            <Link
              href="#community"
              className="text-white/80 hover:text-nexora-green hover:glow-text-sm transition-colors"
            >
              Community
            </Link>
            <Link
              href="#roadmap"
              className="text-white/80 hover:text-nexora-green hover:glow-text-sm transition-colors"
            >
              Roadmap
            </Link>
            <Link href="#terms" className="text-white/80 hover:text-nexora-green hover:glow-text-sm transition-colors">
              Terms
            </Link>
            <Link href="#docs" className="text-white/80 hover:text-nexora-green hover:glow-text-sm transition-colors">
              Docs
            </Link>
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              href="#download"
              className="bg-black border border-nexora-green text-nexora-green rounded-full px-6 py-2 flex items-center gap-2 hover:bg-nexora-green/10 hover:glow-border transition-all"
            >
              Download
              <Download size={16} />
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 text-center text-white/50 text-sm">
          © 2023 Nexora. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
