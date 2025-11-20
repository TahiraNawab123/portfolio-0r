"use client"

import { useRef, useEffect, useState } from "react"

interface Tech {
  name: string
  color: string
}

export default function TechSphere() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  const technologies: Tech[] = [
    { name: "Python", color: "#3776ab" },
    { name: "C++", color: "#00599c" },
    { name: "TypeScript", color: "#3178c6" },
    { name: "React", color: "#61dafb" },
    { name: "Next.js", color: "#ffffff" },
    { name: "Tailwind", color: "#06b6d4" },
    { name: "FastAPI", color: "#009688" },
    { name: "Node.js", color: "#68a063" },
    { name: "Docker", color: "#2496ed" },
    { name: "Git", color: "#f1502f" },
    { name: "Firebase", color: "#ffa726" },
    { name: "MongoDB", color: "#13aa52" },
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientY - rect.top - rect.height / 2) / 10
      const y = (e.clientX - rect.left - rect.width / 2) / 10

      setRotation({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

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
      className="relative w-80 h-80 flex items-center justify-center"
      style={{
        perspective: "1000px",
      }}
    >
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        {/* Center core */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full shadow-lg shadow-primary/50 flex items-center justify-center">
            <span className="text-xs font-bold text-primary-foreground">tom</span>
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
              className="absolute w-12 h-12 flex items-center justify-center"
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
