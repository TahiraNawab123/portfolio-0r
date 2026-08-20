"use client"

import { useEffect, useRef } from "react"

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
    const fontSize = 12
    let animationFrame = 0
    let columns = 0
    let drops: number[] = []
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(window.innerWidth * dpr)
      canvas.height = Math.floor(window.innerHeight * dpr)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      columns = Math.ceil(window.innerWidth / fontSize)
      drops = Array.from({ length: columns }, () => Math.random() * window.innerHeight)
    }

    const draw = () => {
      ctx.fillStyle = "rgba(5, 20, 10, 0.12)"
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
      ctx.fillStyle = "#22c55e"
      ctx.font = `${fontSize}px JetBrains Mono`
      ctx.globalAlpha = 0.38

      for (let i = 0; i < drops.length; i++) {
        ctx.fillText(chars.charAt(Math.floor(Math.random() * chars.length)), i * fontSize, drops[i])
        drops[i] += fontSize * 0.72
        if (drops[i] > window.innerHeight + fontSize) drops[i] = -Math.random() * window.innerHeight
      }

      ctx.globalAlpha = 1
      if (!reducedMotion) animationFrame = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener("resize", resize)
    draw()

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-[0.52]" aria-hidden="true" />
}
