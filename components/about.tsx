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
          <h2>About</h2>
        </div>
        <div className="about-copy">
          <p>I&apos;m Tahira Nawab, a software engineering student at Information Technology University (ITU) and a full-stack developer.</p>
          <p>I enjoy turning ideas into reliable products, from web applications and automation tools to legal-tech platforms. My focus is on clear interfaces, thoughtful engineering, and software that solves real problems.</p>
        </div>
      </motion.div>
    </section>
  )
}
