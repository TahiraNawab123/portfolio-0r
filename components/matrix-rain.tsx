"use client"

import { useEffect, useRef } from "react"

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
    const fontSize = 16
    const columns = Math.ceil(canvas.width / fontSize)
    const drops: number[] = Array(columns)
      .fill(0)
      .map(() => Math.random() * canvas.height)

    const draw = () => {
      ctx.fillStyle = "rgba(5, 20, 10, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#22c55e"
      ctx.font = `${fontSize}px JetBrains Mono`
      ctx.globalAlpha = 0.5

      for (let i = 0; i < drops.length; i++) {
        const char = chars.charAt(Math.floor(Math.random() * chars.length))
        ctx.fillText(char, i * fontSize, drops[i])

        drops[i] += fontSize

        if (drops[i] > canvas.height) {
          drops[i] = 0
        }
      }

      ctx.globalAlpha = 1
      requestAnimationFrame(draw)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    draw()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 opacity-20 pointer-events-none" />
}
