"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface BrideSectionProps {
  name?: string
  bio?: string
  funFacts?: string[]
  imageSrc?: string
}

export function BrideSection({
  name = "The Bride",
  bio = "Loves chai, hates early mornings, and somehow said yes.",
  funFacts = ["Loves traveling", "Always late", "Surprisingly competitive"],
  imageSrc = "/images/bride.jpg",
}: BrideSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-wedding-cream py-20 px-6 flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold text-wedding-red text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Meet the Bride
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src={imageSrc}
                alt={`Photo of ${name}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

          {/* Text Content */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-wedding-dark mb-6">{name}</h3>
            <p className="text-lg md:text-xl text-wedding-dark/80 mb-8 leading-relaxed">{bio}</p>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-wedding-gold">Fun Facts:</h4>
              <ul className="space-y-3">
                {funFacts.map((fact, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-wedding-dark/70"
                    style={{
                      transitionDelay: `${600 + index * 100}ms`,
                    }}
                  >
                    <span className="text-wedding-red">✦</span>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
