"use client"

import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-primary mb-6 font-mono">CONTACT</h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border border-primary/30 rounded p-4 font-mono text-sm"
        >
          <div className="space-y-2 text-xs">
            <div className="text-primary">
              <span className="text-muted-foreground">$</span>
              <span className="ml-2">connect --channels</span>
            </div>

            <div className="text-foreground">
              <span className="text-primary">email:</span>
              <span className="ml-2">
                <a href="mailto:tahira.nawab.dev@gmail.com" className="hover:text-secondary transition-colors">
                  tahira.nawab.dev@gmail.com
                </a>
              </span>
            </div>

            <div className="text-foreground">
              <span className="text-primary">linkedin:</span>
              <span className="ml-2">
                <a
                  href="https://www.linkedin.com/in/tahira-nawab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  linkedin.com/in/tahira-nawab
                </a>
              </span>
            </div>

            <div className="text-foreground">
              <span className="text-primary">github:</span>
              <span className="ml-2">
                <a
                  href="https://github.com/TahiraNawab123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  github.com/TahiraNawab123
                </a>
              </span>
            </div>

            <div className="text-foreground">
              <span className="text-primary">twitter:</span>
              <span className="ml-2">
                <a
                  href="https://x.com/TahiraDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors"
                >
                  @TahiraDev
                </a>
              </span>
            </div>

            <div className="text-primary mt-3">
              <span className="text-muted-foreground">$</span>
              <span className="text-muted-foreground ml-2 animate-pulse">_</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
