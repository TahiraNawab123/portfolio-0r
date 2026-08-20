"use client"

import { motion } from "framer-motion"

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative border-t border-border/40 bg-background/68 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-10 font-mono text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="text-primary">$</span>
            <span className="text-foreground"> experience</span>
          </h2>

          <div className="mb-12 max-w-2xl border-l border-primary/40 pl-5 text-sm leading-relaxed text-muted-foreground">
            <p>
              My work spans fullstack development, UI engineering, and practical software systems built with clarity and purpose.
            </p>
          </div>

          <div className="relative flex flex-col gap-0 border-l border-border/60">
            {/* Zee Outsourcing Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative border-b border-border/40 px-6 py-7 transition-colors duration-300 first:pt-0 last:border-b-0 hover:bg-card/30"
            >
              <span className="absolute -left-[5px] top-8 size-2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.8)] first:top-0" />
              <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-bold text-foreground">Web Developer</h3>
                <p className="text-sm text-primary font-mono">Zee Outsourcing Solutions</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                worked on end-to-end web solutions including frontend development, ui improvements, code structure, and
                client-side workflows. collaborated with clients, delivered clean interfaces, and ensured scalable
                design patterns.
              </p>
            </motion.div>

            {/* Nexium */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative border-b border-border/40 px-6 py-7 transition-colors duration-300 first:pt-0 last:border-b-0 hover:bg-card/30"
            >
              <span className="absolute -left-[5px] top-8 size-2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.8)] first:top-0" />
              <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-bold text-foreground">Software Engineering Intern</h3>
                <p className="text-sm text-primary font-mono">Nexium</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                gained practical exposure to development workflows, version control, documentation, and implementing
                features in real software environments. contributed to frontend logic, bug fixes, clean code practices,
                and small-scale system components.
              </p>
            </motion.div>

            {/* Technical projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative border-b border-border/40 px-6 py-7 transition-colors duration-300 first:pt-0 last:border-b-0 hover:bg-card/30"
            >
              <span className="absolute -left-[5px] top-8 size-2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.8)] first:top-0" />
              <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-bold text-foreground">Technical & Academic Projects</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                from legal-tech platforms to web apps, automation tools, and cli-based systems — delivered structured
                projects with proper architecture, documentation, and feature depth.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
