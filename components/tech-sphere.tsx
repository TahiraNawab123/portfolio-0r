"use client"

import { useRef, useEffect, useState } from "react"

interface Tech {
  name: string
  color: string
}

export default function TechSphere() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: -20, y: -30 })
  const [isInteracting, setIsInteracting] = useState(false)

  const technologies: Tech[] = [
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "HTML", color: "#E34C26" },
    { name: "CSS", color: "#563D7C" },
    { name: "React", color: "#61DAFB" },
    { name: "Next.js", color: "#ffffff" },
    { name: "Tailwind CSS", color: "#06B6D4" },
    { name: "Node.js", color: "#68A063" },
    { name: "MongoDB", color: "#13AA52" },
    { name: "PostgreSQL", color: "#336791" },
    { name: "Docker", color: "#2496ED" },
    { name: "Kubernetes", color: "#326CE5" },
    { name: "Firebase", color: "#FFA726" },
    { name: "Databases", color: "#F27C4E" },
    { name: "Linux", color: "#FCC624" },
    { name: "Vercel", color: "#000000" },
    { name: "Git", color: "#F1502F" },
    { name: "GitHub", color: "#ffffff" },
    { name: "Figma", color: "#A259FF" },
    { name: "Vite", color: "#646CFF" },
    { name: "WebSockets", color: "#00D9FF" },
    { name: "Postman", color: "#FF6C37" },
  ]

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !isInteracting) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientY - rect.top - rect.height / 2) / 10
      const y = (e.clientX - rect.left - rect.width / 2) / 10

      setRotation({ x, y })
    }

    const handleMouseEnter = () => setIsInteracting(true)
    const handleMouseLeave = () => {
      setIsInteracting(false)
      // Reset to nice default angle
      setRotation({ x: -20, y: -30 })
    }

    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)
      window.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter)
      container.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isInteracting])

  // Distribute technologies on a sphere
  const getTechPosition = (index: number) => {
    const total = technologies.length
    const phi = Math.acos(1 - (2 * index) / total)
    const theta = Math.sqrt(total * Math.PI) * phi

    const radius = 150
    const x = radius * Math.cos(theta) * Math.sin(phi)
    const y = radius * Math.sin(theta) * Math.sin(phi)
    const z = radius * Math.cos(phi)

    return { x, y, z }
  }

  return (
    <div
      ref={containerRef}
      className="relative flex h-80 w-80 items-center justify-center"
      style={{
        perspective: "1000px",
      }}
    >
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: isInteracting ? "transform 0.05s ease-out" : "transform 0.6s ease-out",
        }}
      >
        {/* Center core */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/50">
            <span className="text-xs font-bold text-primary-foreground">Skills</span>
          </div>
        </div>

        {/* Tech nodes */}
        {technologies.map((tech, index) => {
          const pos = getTechPosition(index)
          const distance = Math.sqrt(pos.x ** 2 + pos.y ** 2 + pos.z ** 2)
          const scale = (distance + 200) / 400

          return (
            <div
              key={tech.name}
              className="absolute flex h-12 w-12 items-center justify-center"
              style={{
                transform: `translateX(${pos.x}px) translateY(${pos.y}px) translateZ(${pos.z}px) scale(${scale})`,
                transformStyle: "preserve-3d",
                opacity: Math.max(0.3, scale),
              }}
            >
              <div
                className="w-full h-full rounded-lg border-2 border-current flex items-center justify-center text-xs font-mono font-bold text-center px-1 hover:shadow-lg transition-all duration-300"
                style={{
                  color: tech.color,
                  borderColor: tech.color,
                  backgroundColor: `${tech.color}10`,
                  boxShadow: scale > 0.8 ? `0 0 15px ${tech.color}40` : "none",
                }}
              >
                {tech.name}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
