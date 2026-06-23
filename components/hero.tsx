"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import MatrixRain from "@/components/matrix-rain"

interface HeroProps {
  onOpenTerminal: () => void
}

export default function Hero({ onOpenTerminal }: HeroProps) {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Fullstack Developer • Problem Solver • System Designer"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="home" className="relative min-h-screen pt-24 flex items-center justify-center overflow-hidden">
      <MatrixRain />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-5xl sm:text-7xl font-bold mb-4 text-primary neon-text">Tahira Nawab</h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-2">aka {"{ tom }"}</p>
        </motion.div>

        <motion.p variants={itemVariants} className="text-base sm:text-lg text-secondary mb-8 font-mono min-h-8">
          {">"}
          <span className="ml-2">{displayText}</span>
          <span className="ml-1 cursor-blink">|</span>
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed text-sm sm:text-base"
        >
          Fullstack dev crafting solutions with intention — from web apps to AI tools, automation utilities, and complex
          system designs. Sometimes for users, sometimes for innovation, always driven by clarity, logic, and purpose.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onOpenTerminal}
            className="px-6 py-3 bg-primary text-primary-foreground rounded border border-primary hover:bg-primary/80 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] font-mono text-sm"
          >
            {">"} explore projects
          </button>

          <a
            href="#contact"
            className="px-6 py-3 border border-secondary text-secondary rounded hover:bg-secondary/10 transition-all duration-300 font-mono text-sm"
          >
            get in touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
