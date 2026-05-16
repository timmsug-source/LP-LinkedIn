import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import Vorteile from '@/components/Vorteile'
import Rezension from '@/components/Rezension'
import About from '@/components/About'
import Kontakt from '@/components/Kontakt'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Vorteile />
      <Rezension />
      <About />
      <Kontakt />
      <Footer />
    </>
  )
}
