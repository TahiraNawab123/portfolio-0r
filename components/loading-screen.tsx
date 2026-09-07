"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useEffect, useState } from "react"

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const startedAt = performance.now()
    const duration = shouldReduceMotion ? 350 : 1450
    let frame = 0

    const tick = (now: number) => {
      const nextProgress = Math.min(100, Math.round(((now - startedAt) / duration) * 100))
      setProgress(nextProgress)
      if (nextProgress < 100) {
        frame = requestAnimationFrame(tick)
      } else {
        window.setTimeout(onComplete, shouldReduceMotion ? 0 : 220)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(frame)
    }
  }, [onComplete, shouldReduceMotion])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      aria-label={`Loading portfolio ${progress}%`}
      role="status"
    >
      <div className="flex w-[min(18rem,calc(100vw-3rem))] flex-col items-center gap-6 font-mono">
        <div className="relative flex size-28 items-center justify-center rounded-full border border-primary/30">
          <motion.div
            className="absolute inset-2 rounded-full border border-primary"
            animate={shouldReduceMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
          />
          <span className="text-4xl font-bold text-primary neon-text">a</span>
        </div>
        <div className="w-full space-y-2">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            <span>initializing portfolio</span>
            <span className="text-primary">{progress}%</span>
          </div>
          <div className="h-px w-full overflow-hidden bg-border">
            <motion.div className="h-full bg-primary" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
