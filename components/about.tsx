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
          <p>I&apos;m Tahira Nawab, a software engineering student at Information Technology University and a full-stack developer.</p>
          <p>I build web applications, automation tools, and legal-tech products, bringing ideas from early concepts to useful, reliable software. My work combines clear user experiences with practical engineering, with a focus on technology that addresses real needs.</p>
        </div>
      </motion.div>
    </section>
  )
}
