"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface CoupleSectionProps {
  images?: string[]
}

// Default placeholder images - replace with actual couple images
const defaultImages = [
  "/images/couple-1.jpg",
  "/images/couple-2.jpg",
  "/images/couple-3.jpg",
  "/images/couple-4.jpg",
  "/images/couple-5.jpg",
  "/images/couple-6.jpg",
]

export function CoupleSection({ images = defaultImages }: CoupleSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-wedding-cream to-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold text-wedding-red text-center mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Our Journey Together
        </h2>
        <p
          className={`text-center text-wedding-dark/60 mb-16 text-lg transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Some of our favorite moments
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative aspect-square rounded-xl overflow-hidden shadow-lg transition-all duration-700 hover:shadow-2xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: `${300 + index * 100}ms`,
              }}
            >
              <Image
                src={image}
                alt={`Couple photo ${index + 1}`}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Footer Message */}
        <div
          className={`text-center mt-20 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-2xl md:text-3xl text-wedding-gold font-semibold mb-4">
            More details coming soon!
          </p>
          <p className="text-wedding-dark/60">Stay tuned for the wedding date and venue 💕</p>
        </div>
      </div>
    </section>
  )
}
