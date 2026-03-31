"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface IntroSectionProps {
  onContinue: () => void
}

const lines = [
  "Welcome.",
  "I've been working on something.",
  "It's not a hackathon project...",
  "It's something better.",
]

export function IntroSection({ onContinue }: IntroSectionProps) {
  const [visibleLines, setVisibleLines] = useState<number>(0)
  const [typedText, setTypedText] = useState<string[]>(["", "", "", ""])
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    if (visibleLines >= lines.length) {
      const buttonTimer = setTimeout(() => {
        setShowButton(true)
      }, 500)
      return () => clearTimeout(buttonTimer)
    }

    const currentLine = lines[visibleLines]
    let charIndex = 0

    const typeInterval = setInterval(() => {
      if (charIndex <= currentLine.length) {
        setTypedText((prev) => {
          const newText = [...prev]
          newText[visibleLines] = currentLine.slice(0, charIndex)
          return newText
        })
        charIndex++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          setVisibleLines((prev) => prev + 1)
        }, 800)
      }
    }, 50)

    return () => clearInterval(typeInterval)
  }, [visibleLines])

  return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl w-full space-y-6 text-center">
        {typedText.map((text, index) => (
          <p
            key={index}
            className={`text-white text-xl md:text-2xl lg:text-3xl font-light tracking-wide transition-opacity duration-500 ${
              index <= visibleLines ? "opacity-100" : "opacity-0"
            }`}
            style={{ minHeight: "2rem" }}
          >
            {text}
            {index === visibleLines && index < lines.length && (
              <span className="animate-pulse">|</span>
            )}
          </p>
        ))}
      </div>

      <div
        className={`mt-16 transition-all duration-700 ${
          showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <Button
          onClick={onContinue}
          variant="outline"
          className="border-white/30 text-white bg-transparent hover:bg-white/10 hover:border-white/50 px-8 py-6 text-lg font-light tracking-wider transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
        >
          Continue
        </Button>
      </div>
    </section>
  )
}
