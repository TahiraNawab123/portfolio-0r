"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/30 bg-card/30 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="text-center sm:text-left">
            <p className="text-sm text-muted-foreground">© {currentYear} Tahira Nawab. All rights reserved.</p>
            <p className="text-xs text-muted-foreground/70 mt-1">
              Built with React, TypeScript, Tailwind CSS & Framer Motion
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href="#home" className="text-xs text-muted-foreground hover:text-primary transition-colors font-mono">
              ↑ Back to top
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
