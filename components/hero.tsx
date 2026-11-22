"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react"

const portraitUrl =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_%20%283%29-1s7hDCOjvwOLnCZXPxBO93jLEKjzWi.jpeg"

export default function Hero({ onOpenTerminal }: { onOpenTerminal: () => void }) {
  const reduceMotion = useReducedMotion()

  return (
    <section id="home" className="portfolio-hero scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="hero-content"
      >
        <div className="hero-profile">
          <img src={portraitUrl} alt="Portrait of Tahira Nawab" className="hero-portrait" fetchPriority="high" />
          <div>
            <p className="hero-name">Tahira Nawab <span>(Tom)</span></p>
            <p className="hero-role">Software Engineering Student · Full-Stack Developer</p>
          </div>
        </div>
        <h1>Building thoughtful software for real-world problems.</h1>
        <p className="hero-intro">
          I&apos;m Tahira, a software engineering student and developer focused on clean systems, useful products, and well-crafted digital experiences.
        </p>
        <div className="hero-actions">
          <a className="button-primary" href="#projects">Explore my work <ArrowDown aria-hidden="true" /></a>
          <a className="button-quiet" href="#contact">Get in touch <ArrowUpRight aria-hidden="true" /></a>
          <button className="terminal-trigger" type="button" onClick={onOpenTerminal}>open terminal</button>
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
