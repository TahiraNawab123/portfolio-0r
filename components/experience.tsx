"use client"

import { motion } from "framer-motion"

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/10"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-mono mb-12">
            <span className="text-primary">$</span>
            <span className="text-foreground"> experience</span>
          </h2>

          {/* Intro paragraph */}
          <div className="space-y-6 mb-12 text-muted-foreground leading-relaxed">
            <p className="text-sm">
              my work spans fullstack development, ui engineering, and real-world software systems. over time, i've
              contributed to different projects, handled client work, and built practical tools across web and
              command-line platforms.
            </p>
          </div>

          {/* Work experiences */}
          <div className="space-y-8">
            {/* Zee Outsourcing Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card border border-border/30 rounded p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="mb-4">
                <h3 className="text-lg font-bold text-foreground mb-1">Web Developer</h3>
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
              className="bg-card border border-border/30 rounded p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="mb-4">
                <h3 className="text-lg font-bold text-foreground mb-1">Software Engineering Intern</h3>
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
              className="bg-card border border-border/30 rounded p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="mb-4">
                <h3 className="text-lg font-bold text-foreground mb-1">Technical & Academic Projects</h3>
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
