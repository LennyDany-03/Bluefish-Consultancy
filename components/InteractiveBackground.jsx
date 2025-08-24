"use client"

import { useEffect, useRef } from "react"

export default function InteractiveBackground() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const createWaveParticle = () => {
      const particle = document.createElement("div")

      const size = Math.random() * 8 + 4
      const startX = Math.random() * window.innerWidth
      const startY = Math.random() * window.innerHeight
      const animationDuration = Math.random() * 15 + 10
      const opacity = Math.random() * 0.3 + 0.1

      const colors = [
        "rgba(37, 99, 235, 0.15)", // blue-600 primary
        "rgba(16, 185, 129, 0.12)", // emerald-500 secondary
        "rgba(107, 114, 128, 0.1)", // gray-500 neutral
        "rgba(17, 24, 39, 0.08)", // gray-900 text
        "rgba(75, 85, 99, 0.1)", // gray-600
      ]
      const color = colors[Math.floor(Math.random() * colors.length)]

      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${startX}px;
        top: ${startY}px;
        background: radial-gradient(circle, ${color} 0%, transparent 70%);
        border-radius: 50%;
        opacity: ${opacity};
        animation: waveFloat ${animationDuration}s ease-in-out infinite;
        pointer-events: none;
        filter: blur(1px);
      `

      container.appendChild(particle)

      setTimeout(() => {
        if (container.contains(particle)) {
          container.removeChild(particle)
        }
      }, animationDuration * 1000)
    }

    const createNetworkLine = () => {
      const line = document.createElement("div")

      const width = Math.random() * 200 + 100
      const height = 1
      const startX = Math.random() * (window.innerWidth - width)
      const startY = Math.random() * window.innerHeight
      const animationDuration = Math.random() * 8 + 6
      const opacity = Math.random() * 0.08 + 0.03

      line.style.cssText = `
        position: absolute;
        width: ${width}px;
        height: ${height}px;
        left: ${startX}px;
        top: ${startY}px;
        background: linear-gradient(90deg, transparent, rgba(37, 99, 235, ${opacity}), transparent);
        animation: networkPulse ${animationDuration}s ease-in-out infinite;
        pointer-events: none;
        transform-origin: center;
      `

      container.appendChild(line)

      setTimeout(() => {
        if (container.contains(line)) {
          container.removeChild(line)
        }
      }, animationDuration * 1000)
    }

    const particleInterval = setInterval(createWaveParticle, 300)
    const networkInterval = setInterval(createNetworkLine, 2000)

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e

      if (Math.random() > 0.9) {
        const trail = document.createElement("div")
        trail.style.cssText = `
          position: absolute;
          left: ${clientX}px;
          top: ${clientY}px;
          width: 6px;
          height: 6px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.4), transparent);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: trailFade 3s ease-out forwards;
          pointer-events: none;
        `
        container.appendChild(trail)

        setTimeout(() => {
          if (container.contains(trail)) {
            container.removeChild(trail)
          }
        }, 3000)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      clearInterval(particleInterval)
      clearInterval(networkInterval)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <>
      <style jsx>{`
        @keyframes waveFloat {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.1;
          }
          25% { 
            transform: translateY(-30px) translateX(20px) scale(1.2);
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-10px) translateX(-15px) scale(0.8);
            opacity: 0.2;
          }
          75% { 
            transform: translateY(-25px) translateX(10px) scale(1.1);
            opacity: 0.4;
          }
        }
        
        @keyframes networkPulse {
          0%, 100% { 
            opacity: 0;
            transform: scaleX(0.5);
          }
          50% { 
            opacity: 1;
            transform: scaleX(1);
          }
        }
        
        @keyframes trailFade {
          0% {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.3);
          }
        }
        
        @keyframes orbitalFloat {
          0% { transform: rotate(0deg) translateX(100px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
        }
        
        @keyframes morphGlow {
          0%, 100% { 
            opacity: 0.08; 
            transform: scale(1) rotate(0deg);
            border-radius: 50%;
          }
          33% { 
            opacity: 0.12; 
            transform: scale(1.2) rotate(120deg);
            border-radius: 30%;
          }
          66% { 
            opacity: 0.1; 
            transform: scale(0.9) rotate(240deg);
            border-radius: 60%;
          }
        }
      `}</style>

      <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gray-50">
          <div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-100/30 to-blue-200/20"
            style={{
              animation: "morphGlow 12s ease-in-out infinite",
              filter: "blur(40px)",
            }}
          ></div>

          <div
            className="absolute top-2/3 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-100/25 to-emerald-200/15"
            style={{
              animation: "morphGlow 15s ease-in-out infinite",
              animationDelay: "-5s",
              filter: "blur(50px)",
            }}
          ></div>

          <div
            className="absolute top-1/2 left-2/3 w-48 h-48 bg-gradient-to-r from-gray-200/20 to-gray-300/15"
            style={{
              animation: "morphGlow 10s ease-in-out infinite",
              animationDelay: "-8s",
              filter: "blur(35px)",
            }}
          ></div>

          <div className="absolute top-1/3 left-1/2 w-4 h-4">
            <div
              className="w-4 h-4 bg-blue-600/20 rounded-full"
              style={{ animation: "orbitalFloat 20s linear infinite" }}
            ></div>
          </div>

          <div className="absolute top-2/3 left-1/3 w-3 h-3">
            <div
              className="w-3 h-3 bg-emerald-500/25 rounded-full"
              style={{ animation: "orbitalFloat 25s linear infinite", animationDelay: "-10s" }}
            ></div>
          </div>
        </div>

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(37, 99, 235, 0.1) 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px, 120px 120px",
          }}
        ></div>

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(107, 114, 128, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(17, 24, 39, 0.04) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>
    </>
  )
}
