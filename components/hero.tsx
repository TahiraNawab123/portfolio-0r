"use client"

import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import MatrixRain from "@/components/matrix-rain"

interface HeroProps {
  onOpenTerminal: () => void
}

const portraitUrl =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_%20%283%29-1s7hDCOjvwOLnCZXPxBO93jLEKjzWi.jpeg"

export default function Hero({ onOpenTerminal }: HeroProps) {
  const [displayText, setDisplayText] = useState("")
  const shouldReduceMotion = useReducedMotion()
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
        staggerChildren: shouldReduceMotion ? 0 : 0.14,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.65, ease: "easeOut" },
    },
  }

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <MatrixRain />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,hsl(var(--primary)/0.11),transparent_28%),linear-gradient(90deg,hsl(var(--background))_0%,transparent_65%)]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-14 lg:flex-row lg:justify-between lg:gap-16"
      >
        <div className="w-full max-w-2xl text-center lg:text-left">
          <motion.div variants={itemVariants}>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-primary neon-text sm:text-6xl lg:text-7xl">
              Tahira Nawab
            </h1>
            <p className="mt-4 font-mono text-lg text-muted-foreground sm:text-xl">aka &#123; tom &#125;</p>
          </motion.div>

          <motion.p variants={itemVariants} className="mt-6 min-h-8 font-mono text-xs text-secondary sm:text-sm">
            <span className="text-primary">{">"}</span>
            <span className="ml-2">{displayText}</span>
            <span className="ml-1 cursor-blink text-primary">|</span>
          </motion.p>

          <motion.p variants={itemVariants} className="mx-auto mt-5 max-w-lg text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            Fullstack dev building web apps, AI tools, and automation systems with clarity, logic, and purpose.
          </motion.p>


          <motion.div variants={itemVariants} className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <button
              onClick={onOpenTerminal}
              className="rounded border border-primary bg-primary px-6 py-3 font-mono text-sm text-primary-foreground hover:bg-primary/80 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
            >
              {">"} explore projects
            </button>
            <a
              href="#contact"
              className="rounded border border-secondary px-6 py-3 font-mono text-sm text-secondary hover:bg-secondary/10"
            >
              get in touch
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="relative w-full max-w-[20rem] shrink-0 sm:max-w-[23rem] lg:max-w-[25rem]"
          animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
          transition={shouldReduceMotion ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="portrait-frame relative aspect-[4/5] overflow-hidden border border-primary/60 bg-card shadow-[0_0_45px_hsl(var(--primary)/0.13)]">
            <img
              src={portraitUrl}
              alt="Monochrome portrait representing Tahira Nawab"
              className="portrait-image h-full w-full object-cover"
              fetchPriority="high"
              decoding="async"
            />
            <div className="portrait-scanlines absolute inset-0" aria-hidden="true" />
            <div className="portrait-vignette absolute inset-0" aria-hidden="true" />
            <div className="absolute inset-x-4 top-4 flex justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
              <span>tom.exe</span>
              <span>01 / 01</span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between border-t border-primary/40 pt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-primary/80">
              <span>signal: green</span>
              <span>online</span>
            </div>
          </div>
          <span className="absolute -bottom-3 -left-3 size-7 border-b border-l border-primary" aria-hidden="true" />
          <span className="absolute -right-3 -top-3 size-7 border-r border-t border-primary" aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  )
}
