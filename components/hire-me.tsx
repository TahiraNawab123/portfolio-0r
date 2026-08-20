"use client"

import { motion } from "framer-motion"
import { ArrowRight, Linkedin } from "lucide-react"

export default function HireMe() {
  return (
    <section className="relative border-t border-border/40 bg-background/68 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-10 font-mono text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="text-primary">$</span>
            <span className="text-foreground"> available_for_work</span>
          </h2>

          <div className="relative border-l border-primary/40 pl-5">
            <span className="absolute -left-[5px] top-1 size-2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.8)]" />
            <div className="flex flex-col gap-7 border-b border-border/40 pb-8 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-secondary">Open to collaborations</p>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  I&apos;m available for fullstack products, AI tools, and automation systems where clear thinking turns into useful software.
                </p>
              </div>
              <a
                href="https://www.linkedin.com/in/tahira-nawab"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex shrink-0 items-center justify-center gap-2 font-mono text-sm text-secondary transition-colors hover:text-primary"
              >
                <Linkedin size={16} />
                <span>Start a conversation</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
