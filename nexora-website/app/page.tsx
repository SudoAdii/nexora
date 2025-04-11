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
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-gradient-to-b from-black via-zinc-900 to-black text-white w-full font-sans">
      <AnimatedBackground />

      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
          scrollY > 10 ? "backdrop-blur-md bg-black/30 border-b border-nexora-green/10" : ""
        }`}
        role="navigation"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/images/logo-icon.png" alt="Nexora Logo" width={24} height={24} />
            <span className="text-nexora-green text-xl font-semibold glow-text-sm">NEXORA</span>
          </div>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {["features", "community", "roadmap", "terms", "docs"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className="text-white/80 hover:text-nexora-green hover:glow-text-sm transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </nav>

          <Link
            href="#download"
            className="bg-black border border-nexora-green text-nexora-green rounded-full px-6 py-2 flex items-center gap-2 hover:bg-nexora-green/10 hover:scale-105 transition-transform duration-300 shadow-[0_0_10px_#00ff9d50]"
          >
            Download <Download size={16} />
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <motion.h1
            className="text-7xl md:text-9xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-nexora-green via-white to-nexora-green drop-shadow-[0_0_20px_#00ff9d] blur-[0.2px]"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            NEXORA
          </motion.h1>

          <motion.h2
            className="text-nexora-green/70 text-4xl md:text-6xl font-bold uppercase tracking-wider glow-text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            The Fastest WAY TO TRADE
          </motion.h2>
        </motion.div>

        {/* Hero Decorations */}
        <motion.div
          className="absolute top-1/4 left-10 opacity-50"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.5, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Image src="/images/chrome-extension-left.png" alt="Extension Left" width={150} height={150} className="drop-shadow-[0_0_20px_#00ff9d50]" />
        </motion.div>

        <motion.div
          className="absolute top-1/4 right-10 opacity-50"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.5, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Image src="/images/chrome-extension-right.png" alt="Extension Right" width={150} height={150} className="drop-shadow-[0_0_20px_#00ff9d50]" />
        </motion.div>

        {/* Animated Element */}
        <motion.div
          className="absolute bottom-10 left-10 w-16 h-16 border-2 border-nexora-green rounded-md"
          animate={{
            rotate: 45,
            boxShadow: ["0 0 5px #00ff9d", "0 0 20px #00ff9d", "0 0 5px #00ff9d"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </section>

      {/* Features */}
      <motion.section
        id="features"
        className="py-20 px-6 min-h-screen"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-nexora-green mb-12 glow-text-sm">Features</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { title: "Lightning Fast Performance", text: "Experience unmatched speed and efficiency with our optimized platform." },
              { title: "Seamless Integration", text: "Integrate easily through our powerful APIs and extension support." },
              { title: "Advanced Security", text: "Your data stays safe with state-of-the-art encryption protocols." },
              { title: "Intuitive Interface", text: "A modern interface that keeps you focused and in control." },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-nexora-green/20 hover:border-nexora-green/60 p-8 rounded-2xl shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <h3 className="text-2xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-white/70">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-nexora-green/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <Image src="/images/logo-icon.png" alt="Nexora Logo" width={24} height={24} />
            <span className="text-nexora-green text-xl font-medium glow-text-sm">NEXORA</span>
          </div>

          <div className="flex flex-wrap gap-8 justify-center">
            {["features", "community", "roadmap", "terms", "docs"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className="text-white/80 hover:text-nexora-green hover:glow-text-sm transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </div>

          <div className="mt-6 md:mt-0">
            <Link
              href="#download"
              className="bg-black border border-nexora-green text-nexora-green rounded-full px-6 py-2 flex items-center gap-2 hover:bg-nexora-green/10 hover:scale-105 transition-transform duration-300 shadow-[0_0_10px_#00ff9d50]"
            >
              Download <Download size={16} />
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} Nexora. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
