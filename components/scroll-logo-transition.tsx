"use client"

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"

export default function ScrollLogoTransition() {
  const { scrollY } = useScroll()
  const shouldReduceMotion = useReducedMotion()
  const opacity = useTransform(scrollY, [0, 160, 420], [1, 0.8, 0])
  const y = useTransform(scrollY, [0, 420], [0, 120])
  const scale = useTransform(scrollY, [0, 420], [1, 0.72])

  if (shouldReduceMotion) return null

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="pointer-events-none fixed left-1/2 top-24 z-20 hidden -translate-x-1/2 font-mono text-primary md:block"
      aria-hidden="true"
    >
      <span className="text-lg neon-text">a</span>
    </motion.div>
  )
}
