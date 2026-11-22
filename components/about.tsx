"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="portfolio-section">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true }}
      >
        <div className="section-heading">
          <p className="section-kicker">01 / About</p>
          <h2>A little about me</h2>
        </div>
        <div className="about-copy">
          <p>I&apos;m Tahira Nawab — also known as Tom — a software engineering student at Information Technology University (ITU).</p>
          <p>I build systems that make sense: clean logic, purposeful design, and tech that actually solves real problems.</p>
          <p>My work sits across full-stack development, backend engineering, system design, and digital product building.</p>
          <p>From web apps to automation tools and legal-tech platforms, I enjoy turning ideas into functional, stable products.</p>
          <p>Outside code, I&apos;m into reading, design philosophy, productivity systems, and experimenting with minimal setups.</p>
          <p className="about-summary">In brief: building clean systems, solving real problems, and crafting useful digital experiences.</p>
          <div className="education-note">
            <span className="detail-label">Education</span>
            <div><strong>Software Engineering</strong><span>Information Technology University (ITU, Lahore)</span></div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
