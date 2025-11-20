"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

interface TerminalProps {
  onClose: () => void
}

interface HistoryItem {
  type: "command" | "output"
  content: string
}

export default function Terminal({ onClose }: TerminalProps) {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<HistoryItem[]>([
    { type: "output", content: 'Welcome to Tahira\'s Terminal\nType "help" for available commands' },
  ])
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [history])

  const commands: Record<string, string> = {
    help: "Available commands:\n  help - Show this message\n  ls - List sections\n  whoami - About tom\n  open projects - View all projects\n  open about - About section\n  open experience - Experience & education\n  open contact - Contact info\n  clear - Clear terminal\n  status - Show portfolio stats",
    ls: "home/\n├── projects/\n│   ├── lexora/\n│   ├── usparity/\n│   ├── blog-summarizer/\n│   ├── quote-generator/\n│   ├── military-management/\n│   └── mms/\n├── about/\n├── experience/\n├── contact/\n└── readme.md",
    whoami:
      "Miss Genius: Fullstack dev writing logic with purpose.\nCurrently building impactful tech solutions that empower people and uplift communities.",
    status:
      "Portfolio Status:\n✓ Projects: 6 featured works\n✓ Tech Stack: 12+ technologies\n✓ Experience: Active development\n✓ Commits: 200+\n✓ Contributions: 1.2k",
    "open projects": "→ Scrolling to projects section...",
    "open about": "→ Scrolling to about section...",
    "open experience": "→ Scrolling to experience section...",
    "open contact": "→ Scrolling to contact section...",
    clear: "CLEAR",
  }

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()
    const response = commands[trimmed] || `Command not found: ${trimmed}\nType "help" for available commands`

    if (trimmed.startsWith("open ")) {
      const section = trimmed.replace("open ", "").toLowerCase()
      const sectionMap: Record<string, string> = {
        projects: "#projects",
        about: "#about",
        experience: "#experience",
        contact: "#contact",
      }
      if (sectionMap[section]) {
        const element = document.querySelector(sectionMap[section])
        element?.scrollIntoView({ behavior: "smooth" })
      }
    }

    setHistory([...history, { type: "command", content: `$ ${cmd}` }, { type: "output", content: response }])

    if (trimmed === "clear") {
      setHistory([])
    }

    setInput("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (input.trim()) {
        handleCommand(input)
      }
    } else if (e.key === "Escape") {
      onClose()
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-card border-2 border-primary rounded-lg w-full max-w-2xl max-h-96 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-card/50">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-primary" />
          </div>
          <span className="text-xs text-muted-foreground font-mono">tom@tahira ~ Terminal</span>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-3 font-mono text-sm bg-background/50">
          {history.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className={
                item.type === "command" ? "text-primary mb-2" : "text-muted-foreground mb-2 whitespace-pre-wrap"
              }
            >
              {item.content}
            </motion.div>
          ))}
          <div ref={endRef} />
        </div>

        <div className="flex items-center gap-2 px-4 py-2 border-t border-border bg-card/50">
          <span className="text-primary">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="type command..."
            className="flex-1 bg-transparent outline-none text-foreground placeholder-muted-foreground font-mono text-sm"
            autoFocus
          />
          <span className="text-primary cursor-blink">|</span>
        </div>
      </motion.div>
    </motion.div>
  )
}
