"use client"

import { useEffect, useState } from "react"
import { Confetti } from "./confetti"

interface RevealSectionProps {
  isVisible: boolean
  name?: string
}

export function RevealSection({ isVisible, name = "YOUR NAME" }: RevealSectionProps) {
  const [showText, setShowText] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [showElephants, setShowElephants] = useState(false)

  useEffect(() => {
    if (isVisible) {
      // Delay text appearance for dramatic effect
      const textTimer = setTimeout(() => {
        setShowText(true)
      }, 400)

      const confettiTimer = setTimeout(() => {
        setShowConfetti(true)
      }, 600)

      const elephantTimer = setTimeout(() => {
        setShowElephants(true)
      }, 800)

      return () => {
        clearTimeout(textTimer)
        clearTimeout(confettiTimer)
        clearTimeout(elephantTimer)
      }
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <section className="min-h-screen bg-gradient-to-br from-wedding-red via-wedding-gold to-wedding-crimson flex items-center justify-center px-6 relative overflow-hidden">
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <Confetti isActive={showConfetti} />

      {/* Left elephant — flipped to face right (inward) */}
      <div
        className={`absolute bottom-0 left-0 w-40 md:w-56 lg:w-72 z-20 transition-opacity duration-300 ${showElephants ? "opacity-100 animate-slide-in-left" : "opacity-0"
          }`}
      >
        <img
          src="/images/elephant.png"
          alt="Decorated Indian wedding elephant"
          className="w-full object-contain drop-shadow-2xl"
          style={{ mixBlendMode: "multiply" }}
        />
      </div>

      {/* Right elephant — natural orientation, already faces left (inward) */}
      <div
        className={`absolute bottom-0 right-0 w-40 md:w-56 lg:w-72 z-20 transition-opacity duration-300 ${showElephants ? "opacity-100 animate-slide-in-right" : "opacity-0"
          }`}
      >
        <img
          src="/images/elephant.png"
          alt="Decorated Indian wedding elephant"
          className="w-full object-contain drop-shadow-2xl"
          style={{ mixBlendMode: "multiply" }}
        />
      </div>

      <div
        className={`text-center z-10 transition-all duration-700 ${showText ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
      >
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-pink-400 drop-shadow-2xl animate-bounce-once">
          <span className="block mb-4 text-yellow-300">{name}</span>
          <span className="block text-yellow-300">IS GETTING MARRIED!!!</span>
        </h1>
        <div className="mt-8 flex justify-center gap-4 text-5xl md:text-7xl">
          <span className="animate-bounce" style={{ animationDelay: "0s" }}>
            💍
          </span>
          <span className="animate-bounce" style={{ animationDelay: "0.1s" }}>
            🎉
          </span>
          <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
            ❤️
          </span>
        </div>
      </div>
    </section>
  )
}
