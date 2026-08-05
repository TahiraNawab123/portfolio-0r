"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface Tech {
  name: string
  color: string
  bgColor: string
}

export default function TechSphere() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  const technologies: Tech[] = [
    { name: "JavaScript", color: "#F7DF1E", bgColor: "#F7DF1E" },
    { name: "TypeScript", color: "#3178C6", bgColor: "#3178C6" },
    { name: "HTML", color: "#E34C26", bgColor: "#E34C26" },
    { name: "CSS", color: "#563D7C", bgColor: "#563D7C" },
    { name: "React", color: "#61DAFB", bgColor: "#61DAFB" },
    { name: "Next.js", color: "#FFFFFF", bgColor: "#FFFFFF" },
    { name: "Tailwind CSS", color: "#06B6D4", bgColor: "#06B6D4" },
    { name: "Node.js", color: "#68A063", bgColor: "#68A063" },
    { name: "MongoDB", color: "#13AA52", bgColor: "#13AA52" },
    { name: "PostgreSQL", color: "#336791", bgColor: "#336791" },
    { name: "Docker", color: "#2496ED", bgColor: "#2496ED" },
    { name: "Kubernetes", color: "#326CE5", bgColor: "#326CE5" },
    { name: "Firebase", color: "#FFA726", bgColor: "#FFA726" },
    { name: "Databases", color: "#F27C4E", bgColor: "#F27C4E" },
    { name: "Linux", color: "#FCC624", bgColor: "#FCC624" },
    { name: "Vercel", color: "#000000", bgColor: "#000000" },
    { name: "Git", color: "#F1502F", bgColor: "#F1502F" },
    { name: "GitHub", color: "#FFFFFF", bgColor: "#FFFFFF" },
    { name: "Figma", color: "#A259FF", bgColor: "#A259FF" },
    { name: "Vite", color: "#646CFF", bgColor: "#646CFF" },
    { name: "WebSockets", color: "#00D9FF", bgColor: "#00D9FF" },
    { name: "Postman", color: "#FF6C37", bgColor: "#FF6C37" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  // Determine text color based on background color
  const getTextColor = (bgColor: string) => {
    const lightColors = ["#FFFFFF", "#FCC624", "#F7DF1E", "#61DAFB", "#06B6D4", "#00D9FF"]
    return lightColors.includes(bgColor) ? "#000000" : "#FFFFFF"
  }

  return (
    <motion.div
      className="w-full max-w-2xl flex items-center justify-center py-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="grid grid-cols-4 gap-4 sm:gap-5 lg:gap-6 w-full px-4">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            variants={itemVariants}
            whileHover={{ scale: 1.15, y: -5 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => setHoveredTech(tech.name)}
            onMouseLeave={() => setHoveredTech(null)}
            className="relative group"
          >
            <div
              className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 border-2 relative overflow-hidden"
              style={{
                backgroundColor: `${tech.bgColor}15`,
                borderColor: tech.color,
                boxShadow:
                  hoveredTech === tech.name
                    ? `0 0 20px ${tech.color}60, 0 0 40px ${tech.color}30, inset 0 0 20px ${tech.color}20`
                    : `0 0 10px ${tech.color}30, inset 0 0 10px ${tech.color}10`,
              }}
            >
              {/* Animated background glow on hover */}
              {hoveredTech === tech.name && (
                <motion.div
                  layoutId="glow"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `radial-gradient(circle, ${tech.color}20 0%, transparent 70%)`,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}

              <div className="relative z-10 text-center px-2">
                <p
                  className="font-mono font-bold text-xs sm:text-sm lg:text-base leading-tight break-words"
                  style={{
                    color: tech.color,
                  }}
                >
                  {tech.name}
                </p>
              </div>
            </div>

            {/* Tooltip on hover */}
            {hoveredTech === tech.name && (
              <motion.div
                className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded px-3 py-1 text-xs font-mono whitespace-nowrap z-50 pointer-events-none"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
              >
                <span className="text-foreground">{tech.name}</span>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
