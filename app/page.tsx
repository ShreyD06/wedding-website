"use client"

import { useState, useRef } from "react"
import { IntroSection } from "@/components/intro-section"
import { RevealSection } from "@/components/reveal-section"
import { BrideSection } from "@/components/bride-section"
import { CoupleSection } from "@/components/couple-section"

// =============================================
// CUSTOMIZE YOUR WEDDING REVEAL HERE
// =============================================

const WEDDING_CONFIG = {
  // The name that appears in the big reveal
  name: "SPARSH",

  // Bride section details
  bride: {
    name: "Meet Nirzari!",
    bio: "Future doctor in the making, she balances the intensity of medical school with a love for reading, traveling, painting, and getting a good workout in.",
    funFacts: ["Loves traveling", "Always late", "Surprisingly competitive"],
    // Replace with actual image path
    imageSrc: "/images/bride.jpg",
  },

  // Couple photos - add your image paths here
  coupleImages: [
    "/images/couple-1.jpg",
    "/images/couple-2.jpg",
    "/images/couple-3.jpg",
    "/images/couple-4.jpg",
    "/images/couple-5.jpg",
    "/images/couple-6.jpg",
  ],
}

// =============================================

export default function WeddingReveal() {
  const [showReveal, setShowReveal] = useState(false)
  const revealRef = useRef<HTMLDivElement>(null)

  const handleContinue = () => {
    setShowReveal(true)
    // Smooth scroll to reveal section
    setTimeout(() => {
      revealRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  return (
    <main className="scroll-smooth">
      {/* Stage 1: Intro */}
      <IntroSection onContinue={handleContinue} />

      {/* Stage 2: Big Reveal */}
      <div ref={revealRef}>
        <RevealSection isVisible={showReveal} name={WEDDING_CONFIG.name} />
      </div>

      {/* Stage 3: Meet the Bride */}
      {showReveal && (
        <BrideSection
          name={WEDDING_CONFIG.bride.name}
          bio={WEDDING_CONFIG.bride.bio}
          funFacts={WEDDING_CONFIG.bride.funFacts}
          imageSrc={WEDDING_CONFIG.bride.imageSrc}
        />
      )}

      {/* Stage 4: Couple Photos */}
      {showReveal && <CoupleSection images={WEDDING_CONFIG.coupleImages} />}
    </main>
  )
}
