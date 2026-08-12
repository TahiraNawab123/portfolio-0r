"use client"

import { motion } from "framer-motion"
import { ArrowRight, Linkedin } from "lucide-react"

export default function HireMe() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border border-primary/30 rounded-lg p-8 sm:p-12 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
        >
          <div className="flex flex-col items-center text-center gap-6">
            <div className="max-w-2xl">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-secondary">Open to opportunities</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">Ready to hire?</h2>
              <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
                If you&apos;re looking to hire a developer, let&apos;s talk. Let&apos;s create something amazing together.
              </p>
            </div>

            <a
              href="https://www.linkedin.com/in/tahira-nawab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-secondary text-secondary rounded hover:bg-secondary/10 transition-all duration-300 font-mono text-sm group"
            >
              <Linkedin size={16} />
              <span>View my profile</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
