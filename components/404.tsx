"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function NotFound() {
  const [redirectCountdown, setRedirectCountdown] = useState(5)

  useEffect(() => {
    const timer = setInterval(() => {
      setRedirectCountdown((prev) => prev - 1)
    }, 1000)

    setTimeout(() => {
      window.location.href = "/"
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background text-foreground">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-6xl sm:text-8xl font-bold text-primary mb-4 neon-text">404</h1>
        <p className="text-2xl sm:text-3xl font-mono mb-2 text-foreground">Page Not Found</p>
        <p className="text-muted-foreground mb-8 font-mono">
          The path you're looking for doesn't exist in this system.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-card border-2 border-primary/30 rounded-lg p-6 mb-8 max-w-md mx-auto"
        >
          <p className="text-sm text-muted-foreground mb-2">Redirecting in:</p>
          <motion.p
            key={redirectCountdown}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="text-4xl font-bold text-primary"
          >
            {redirectCountdown}
          </motion.p>
        </motion.div>

        <a
          href="/"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded hover:bg-primary/80 transition-all font-mono hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]"
        >
          Go Home
        </a>
      </motion.div>
    </div>
  )
}
