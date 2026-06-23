"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
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

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.5 },
    },
  }

  return (
    <section id="home" className="relative min-h-screen pt-24 flex items-center justify-center overflow-hidden bg-background">
      <MatrixRain />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center h-full">
          {/* Left side - Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left"
          >
            {/* Fullstack Developer Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-sm font-mono text-primary">Fullstack Developer</span>
                <div className="w-2 h-2 rounded-full bg-primary"></div>
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-3 text-white neon-text">Tahira Nawab</h1>
              <p className="text-xl sm:text-2xl text-primary mb-6 font-mono">aka {"{ tom }"}</p>
            </motion.div>

            {/* Role */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-primary mb-8 font-mono min-h-8">
              {">"}
              <span className="ml-2">{displayText}</span>
              <span className="ml-1 cursor-blink">|</span>
            </motion.p>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground max-w-xl mb-12 leading-relaxed text-sm sm:text-base"
            >
              Fullstack dev crafting solutions with intention — from web apps to AI tools, automation utilities, and complex
              system designs. Sometimes for users, sometimes for innovation, always driven by clarity, logic, and purpose.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenTerminal}
                className="px-8 py-3 bg-primary text-black font-bold rounded-lg border border-primary hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] font-mono text-sm w-fit flex items-center gap-2"
              >
                <span>→</span>
                <span>Explore Projects</span>
              </button>

              <a
                href="#contact"
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 font-mono text-sm w-fit flex items-center gap-2"
              >
                <span>📡</span>
                <span>Get In Touch</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Hero portrait merged with background */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex items-center justify-center relative h-full"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src="/hero-portrait.png"
                alt="Tahira Nawab - Neon Cyberpunk Portrait"
                width={600}
                height={700}
                className="w-full h-auto object-contain mix-blend-screen drop-shadow-[0_0_40px_rgba(34,197,94,0.5)] hover:drop-shadow-[0_0_60px_rgba(34,197,94,0.7)] transition-all duration-300"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
