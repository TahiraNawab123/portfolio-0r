"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface TerminalWindowProps {
  onClose: () => void
}

export default function TerminalWindow({ onClose }: TerminalWindowProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const scrollRef = useRef<HTMLDivElement>(null)

  const fullText = `TahiraOS (tahira-terminal)

OS: TahiraOS 1.0
Host: tahiranawab.vercel.app
Kernel: Human-Powered Logic
Uptime: 19 years
Shell: zsh 5.8
Resolution: 1920x1080
CPU: Creative Core (∞ Threads)
GPU: Vision Engine (Integrated)
Memory: Infinite Ideas / 256GB RAM

tahira@portfolio:~ $ whoami
I'm a fullstack developer crafting impactful tech solutions.
Building things that matter, one commit at a time.

tahira@portfolio:~ $ _`

  useEffect(() => {
    if (!isTyping) return

    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1))
        index++
      } else {
        setIsTyping(false)
        clearInterval(interval)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [isTyping, fullText])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [displayedText])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
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
      onKeyDown={handleKeyDown}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-background border border-primary/40 rounded-lg w-full max-w-3xl max-h-[70vh] flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Top Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-primary/20 bg-card/30">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-primary" />
          </div>
          <span className="text-xs text-muted-foreground font-mono">tom@tahira</span>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-primary transition-colors text-lg leading-none"
          >
            ✕
          </button>
        </div>

        {/* Terminal Content */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto px-6 py-4 font-mono text-sm bg-background/50 text-primary whitespace-pre-wrap break-words"
        >
          {displayedText}
          {isTyping && <span className="animate-pulse">▌</span>}
        </div>
      </motion.div>
    </motion.div>
  )
}
