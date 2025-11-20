"use client"

import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import TechSphere from "@/components/tech-sphere"

export default function About() {
  const containerRef = useRef(null)
  const [isFullMode, setIsFullMode] = useState(true)
  const [displayText, setDisplayText] = useState("")

  const fullText = `i'm tahira nawab — also known as tom — a software engineering student at Information Technology University (ITU).
i build systems that make sense: clean logic, purposeful design, and tech that actually solves real problems.
my work sits across full-stack development, backend engineering, system design, and digital product building.
from web apps to automation tools and legal-tech platforms, i enjoy turning ideas into functional, stable products.
outside code, i'm into reading, design philosophy, productivity systems, and experimenting with minimal setups.`

  const tldrText = "building clean systems, solving real problems, and crafting useful digital experiences."

  useEffect(() => {
    const textToType = isFullMode ? fullText : tldrText
    setDisplayText("")
    let index = 0
    const speed = isFullMode ? 30 : 40

    const timer = setInterval(() => {
      if (index <= textToType.length) {
        setDisplayText(textToType.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, speed)

    return () => clearInterval(timer)
  }, [isFullMode, fullText, tldrText])

  return (
    <section id="about" ref={containerRef} className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-5xl sm:text-6xl font-bold">
            <span className="text-primary">{"{"}</span>
            <span className="text-foreground"> about </span>
            <span className="text-primary">{"}"}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Typing text */}
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base font-mono whitespace-pre-wrap min-h-24">
              {displayText}
              <span className="ml-1 cursor-blink">|</span>
            </p>

            {/* Toggle pills */}
            <div className="flex gap-2">
              <button
                onClick={() => setIsFullMode(true)}
                className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                  isFullMode
                    ? "bg-primary text-primary-foreground"
                    : "border border-primary/30 text-primary hover:border-primary/60"
                }`}
              >
                FULL
              </button>
              <button
                onClick={() => setIsFullMode(false)}
                className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                  !isFullMode
                    ? "bg-secondary text-secondary-foreground"
                    : "border border-secondary/30 text-secondary hover:border-secondary/60"
                }`}
              >
                TL;DR
              </button>
            </div>

            {/* Education section stays minimal */}
            <div className="pt-4 border-t border-border/30">
              <p className="text-accent font-mono text-xs mb-2">education</p>
              <div className="text-muted-foreground text-xs">
                <p className="text-foreground font-semibold">Software Engineering</p>
                <p className="text-muted-foreground/80">Information Technology University (ITU, Lahore)</p>
              </div>
            </div>
          </motion.div>

          {/* Tech Sphere */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <TechSphere />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
