'use client'
import { useEffect } from 'react'

export default function AnimationProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('vis') }),
      { threshold: 0.09 }
    )
    document.querySelectorAll('.fu').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return <>{children}</>
}
