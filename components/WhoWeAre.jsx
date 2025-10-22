"use client"

import { useRef, useEffect, useState } from "react"
import DotGrid from "./DotGrid"
import { gsap } from "gsap"
import Image from "next/image"

const WhoWeAre = () => {
  const [casesCount, setCasesCount] = useState(0)
  const [rating, setRating] = useState(0)
  const sectionRef = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true

            // Animate cases counter
            gsap.to(
              { val: 0 },
              {
                val: 500,
                duration: 2,
                ease: "power2.out",
                onUpdate: function () {
                  setCasesCount(Math.floor(this.targets()[0].val))
                },
              },
            )

            // Animate rating counter
            gsap.to(
              { val: 0 },
              {
                val: 5.0,
                duration: 2,
                ease: "power2.out",
                onUpdate: function () {
                  setRating(this.targets()[0].val.toFixed(1))
                },
              },
            )

            // Animate content
            gsap.from(".who-we-are-content", {
              opacity: 0,
              y: 50,
              duration: 1,
              ease: "power3.out",
              clearProps: "all",
            })

            gsap.from(".stat-card", {
              opacity: 0,
              scale: 0.9,
              duration: 0.6,
              stagger: 0.15,
              ease: "back.out(1.7)",
              delay: 0.3,
              clearProps: "all",
            })

            gsap.from(".cta-section", {
              opacity: 0,
              y: 30,
              duration: 0.8,
              ease: "power3.out",
              delay: 0.8,
              clearProps: "all",
            })
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center py-12 md:py-16 px-4"
    >
      {/* Dot Grid Background */}
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#151c24ff"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-transparent via-[#5227FF]/5 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="who-we-are-content space-y-4 md:space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Simplifying Complex PF Challenges <span className="text-[#5227FF] inline-block">Since 2022</span>
              </h2>
            </div>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl">
              At <span className="font-semibold text-white">BlueFish Consultancy</span>, we specialize in resolving the
              toughest Provident Fund cases for employees, employers, and SEZ units across India. Our approach is{" "}
              <span className="font-semibold text-[#5227FF]">transparent</span>,{" "}
              <span className="font-semibold text-[#5227FF]">fast</span>, and fully{" "}
              <span className="font-semibold text-[#5227FF]">compliant</span> with EPFO norms — bringing clarity to
              every case we handle.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-[#5227FF]/10 border border-[#5227FF]/30 rounded-full text-[#5227FF] font-semibold text-sm md:text-base backdrop-blur-sm">
                Transparent
              </span>
              <span className="px-4 py-2 bg-[#5227FF]/10 border border-[#5227FF]/30 rounded-full text-[#5227FF] font-semibold text-sm md:text-base backdrop-blur-sm">
                Fast
              </span>
              <span className="px-4 py-2 bg-[#5227FF]/10 border border-[#5227FF]/30 rounded-full text-[#5227FF] font-semibold text-sm md:text-base backdrop-blur-sm">
                Compliant
              </span>
            </div>

            <div className="pt-4 border-t border-gray-700/50">
              <p className="text-base md:text-lg italic text-gray-400">
                "Turning PF confusion into clarity — one case at a time."
              </p>
            </div>
          </div>

          {/* Right Column - Stats & CTA */}
          <div className="space-y-4">
            <div className="grid gap-3">
              {/* Stat Card 1 */}
              <div className="stat-card group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 rounded-xl p-4 hover:border-[#5227FF]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#5227FF]/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#5227FF]/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                    📍
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-0.5">Pan India Coverage</h3>
                    <p className="text-xs text-gray-400">Serving clients across all states</p>
                  </div>
                </div>
              </div>

              {/* Stat Card 2 */}
              <div className="stat-card group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 rounded-xl p-4 hover:border-[#5227FF]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#5227FF]/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#5227FF]/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                    ⚙️
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-0.5">{casesCount}+ Cases Resolved</h3>
                    <p className="text-xs text-gray-400">Successfully handled and closed</p>
                  </div>
                </div>
              </div>

              {/* Stat Card 3 */}
              <div className="stat-card group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 rounded-xl p-4 hover:border-[#5227FF]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#5227FF]/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#5227FF]/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                    ⭐
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-0.5">{rating} Client Rating</h3>
                    <p className="text-xs text-gray-400">Trusted by our clients</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="cta-section space-y-3 pt-3">
              <div className="relative rounded-xl overflow-hidden border border-white/10 group">
                <Image
                  src="/Client.png"
                  alt="Professional consultancy team"
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg md:text-xl font-bold text-white text-center">
                    Ready to Simplify Your PF Journey?
                  </h3>
                </div>
              </div>

              <button
                onClick={() => {
                  const nextSection = document.querySelector("#expertise")
                  if (nextSection) {
                    nextSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="w-full bg-[#5227FF] hover:bg-[#6B3FFF] text-white font-semibold text-base md:text-lg py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#5227FF]/40 hover:-translate-y-1 active:translate-y-0"
              >
                Explore Our Expertise ↓
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
