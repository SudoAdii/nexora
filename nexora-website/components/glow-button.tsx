"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface GlowButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function GlowButton({ children, className, onClick }: GlowButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      className={cn(
        "relative px-6 py-2 rounded-full border border-nexora-green text-nexora-green font-medium transition-all duration-300",
        isHovered ? "bg-nexora-green/20 glow-border-sm" : "bg-transparent",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <span
        className={cn(
          "relative z-10 transition-all duration-300",
          isHovered ? "text-white glow-text-sm" : "text-nexora-green",
        )}
      >
        {children}
      </span>
    </button>
  )
}
