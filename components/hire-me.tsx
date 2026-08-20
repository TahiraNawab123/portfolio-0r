"use client"

import { motion } from "framer-motion"
import { ArrowRight, Linkedin } from "lucide-react"

export default function HireMe() {
  return (
    <section className="relative bg-gradient-to-b from-background to-card/10 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-12">
            <h2 className="font-mono text-4xl font-bold sm:text-5xl">
              <span className="text-primary">$</span>
              <span className="text-foreground"> ready to hire?</span>
            </h2>
          </div>

          <div className="flex flex-col gap-8 border-t border-border/50 pt-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              If you&apos;re looking for a developer to build thoughtful web apps, AI tools, or automation systems, let&apos;s talk.
            </p>
            <a
              href="https://www.linkedin.com/in/tahira-nawab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded border border-secondary px-6 py-3 font-mono text-sm text-secondary hover:bg-secondary/10"
            >
              <Linkedin size={16} />
              <span>View my profile</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
