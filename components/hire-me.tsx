"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail, Linkedin } from "lucide-react"

export default function HireMe() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border border-primary/30 rounded p-8 sm:p-10 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
        >
          <div className="flex flex-col items-center text-center space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-primary">Ready to hire?</h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                If you&apos;re looking to hire a developer, let&apos;s talk. Get in touch and let&apos;s create something amazing together.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="mailto:tahira.nawab.dev@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded border border-primary hover:bg-primary/80 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] font-mono text-sm group"
              >
                <Mail size={16} />
                <span>Get in touch</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

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
          </div>
        </motion.div>
      </div>
    </section>
  )
}
