'use client'

import { useEffect, useRef } from 'react'

const DESIGN_W = 1200
const DESIGN_H = 800

export default function GraphicFrame({ src, title }: { src: string; title: string }) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const frame = frameRef.current
    if (!wrap || !frame) return

    const resize = () => {
      const scale = wrap.clientWidth / DESIGN_W
      frame.style.transform = `scale(${scale})`
    }

    const ro = new ResizeObserver(resize)
    ro.observe(wrap)
    resize()

    // Lazy-load: only set src when wrapper enters viewport
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          frame.src = src
          io.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    io.observe(wrap)

    return () => { ro.disconnect(); io.disconnect() }
  }, [src])

  return (
    <div ref={wrapRef} className="gfx-wrap">
      <iframe
        ref={frameRef}
        width={DESIGN_W}
        height={DESIGN_H}
        allowFullScreen
        title={title}
        className="gfx-frame"
      />
    </div>
  )
}
