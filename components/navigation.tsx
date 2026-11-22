"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import TerminalWindow from "./terminal-window"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export default function Navigation() {
  const [showTerminal, setShowTerminal] = useState(false)

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="site-header"
      >
        <nav className="site-nav" aria-label="Main navigation">
          <a className="site-mark" href="#home" aria-label="Tahira Nawab, home">tn<span>.</span></a>
          <div className="site-nav-links">
            {navItems.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
          </div>
          <button type="button" className="nav-terminal" onClick={() => setShowTerminal(true)} aria-label="Open terminal"><span>terminal</span></button>
        </nav>
      </motion.header>
      <AnimatePresence>{showTerminal && <TerminalWindow onClose={() => setShowTerminal(false)} />}</AnimatePresence>
    </>
  )
}
