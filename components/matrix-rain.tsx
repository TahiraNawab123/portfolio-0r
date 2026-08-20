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
    const fontSize = 16
    let animationFrame = 0
    let columns = 0
    let drops: number[] = []

    const resize = () => {
      canvas.width = Math.floor(window.innerWidth * 0.58)
      canvas.height = window.innerHeight
      columns = Math.ceil(canvas.width / fontSize)
      drops = Array(columns).fill(0).map(() => Math.random() * canvas.height)
    }

    const draw = () => {
      ctx.fillStyle = "rgba(5, 20, 10, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "#22c55e"
      ctx.shadowBlur = 0
      ctx.font = `${fontSize}px JetBrains Mono`
      ctx.globalAlpha = 0.5

      for (let i = 0; i < drops.length; i++) {
        ctx.fillText(chars.charAt(Math.floor(Math.random() * chars.length)), i * fontSize, drops[i])
        drops[i] += fontSize
        if (drops[i] > canvas.height) drops[i] = 0
      }

      ctx.globalAlpha = 1
      animationFrame = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener("resize", resize)
    animationFrame = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-y-0 left-0 z-0 w-[58vw] max-w-[58rem] opacity-20" aria-hidden="true" />
}
