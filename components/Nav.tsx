'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-inner">
        <Link href="/" className="nav-logo">Timm <em>Schurig</em></Link>
        <ul className="nav-links">
          <li><a href="#problem">Problem</a></li>
          <li><a href="#solution">Lösung</a></li>
          <li><a href="#vorteile">Warum ich</a></li>
          <li><a href="#ueber">Über mich</a></li>
        </ul>
        <a href="#kontakt" className="nav-cta">Erstgespräch anfragen →</a>
      </div>
    </nav>
  )
}
