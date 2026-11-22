"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react"

const portraitUrl =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_%20%283%29-1s7hDCOjvwOLnCZXPxBO93jLEKjzWi.jpeg"

export default function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="home" className="portfolio-hero scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="hero-content"
      >
        <div className="hero-intro-row">
          <div className="hero-copy">
            <h1>Hi, I&apos;m Tahira</h1>
            <p className="hero-intro">
              Software engineering student at ITU and full-stack developer building thoughtful digital products that solve practical problems.
            </p>
          </div>
          <img src={portraitUrl} alt="Portrait of Tahira Nawab" className="hero-portrait" fetchPriority="high" />
        </div>
        <div className="hero-actions">
          <a className="button-primary" href="#projects">Explore my work <ArrowDown aria-hidden="true" /></a>
          <a className="button-quiet" href="#contact">Get in touch <ArrowUpRight aria-hidden="true" /></a>
        </div>
        <div className="hero-socials" aria-label="Social links">
          <a href="https://github.com/TahiraNawab123" target="_blank" rel="noreferrer"><Github aria-hidden="true" /> GitHub</a>
          <a href="https://www.linkedin.com/in/tahira-nawab" target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" /> LinkedIn</a>
          <a href="mailto:tahira.nawab.dev@gmail.com">tahira.nawab.dev@gmail.com <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </motion.div>
    </section>
  )
}
