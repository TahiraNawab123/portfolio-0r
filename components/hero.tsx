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
        initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="hero-content"
      >
        <div className="hero-copy">
          <div className="availability"><span className="availability-dot" /> Software Engineering Student <span className="availability-divider">/</span> Full-Stack Developer</div>
          <h1>Hi, I&apos;m Tahira <span className="hero-wave">(Tom)</span></h1>
          <p className="hero-intro">I build clean systems, solve real problems, and turn thoughtful ideas into useful digital experiences.</p>
          <div className="hero-actions">
            <a className="button-primary" href="#projects">Explore my work <ArrowDown aria-hidden="true" /></a>
            <a className="button-quiet" href="#contact">Let&apos;s talk <ArrowUpRight aria-hidden="true" /></a>
            <button className="terminal-trigger" type="button" onClick={onOpenTerminal} aria-label="Open portfolio terminal"><span>open terminal</span></button>
          </div>
          <div className="hero-socials" aria-label="Social links">
            <a href="https://github.com/TahiraNawab123" target="_blank" rel="noreferrer"><Github aria-hidden="true" /> GitHub</a>
            <a href="https://www.linkedin.com/in/tahira-nawab" target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" /> LinkedIn</a>
            <a href="mailto:tahira.nawab.dev@gmail.com">tahira.nawab.dev@gmail.com <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
        <motion.div
          className="hero-portrait-wrap"
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="hero-portrait-glow" />
          <img src={portraitUrl} alt="Portrait of Tahira Nawab" className="hero-portrait" fetchPriority="high" />
          <div className="portrait-caption"><span>TAHIRA NAWAB</span><span>AKA TOM</span></div>
        </motion.div>
      </motion.div>
      <div className="hero-footnote"><span>Scroll to explore</span><span className="hero-footnote-line" /></div>
    </section>
  )
}
