"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "border-b border-border/50 bg-background/90 backdrop-blur-md"
          : "border-b border-border/20 bg-background/50 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg font-bold text-primary neon-text"
        >
          {">"} tom
        </motion.div>

        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item, idx) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + idx * 0.05 }}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        <motion.kbd
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="hidden sm:flex items-center gap-1 px-3 py-1.5 bg-card border border-border rounded text-xs text-muted-foreground"
        >
          <span>Ctrl</span>
          <span>+</span>
          <span>`</span>
        </motion.kbd>
      </div>
    </motion.nav>
  )
}
