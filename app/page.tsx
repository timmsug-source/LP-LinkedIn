import { getAllSections } from '@/lib/supabase'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import Vorteile from '@/components/Vorteile'
import Rezension from '@/components/Rezension'
import About from '@/components/About'
import Kontakt from '@/components/Kontakt'
import Footer from '@/components/Footer'

export const revalidate = 60 // revalidate every 60 seconds

export default async function Home() {
  const sections = await getAllSections()

  return (
    <>
      <Nav data={sections.nav} />
      <Hero data={sections.hero} />
      <Problem data={sections.problem} />
      <Solution data={sections.solution} />
      <Vorteile data={sections.vorteile} />
      <Rezension data={sections.rezension} />
      <About data={sections.about} />
      <Kontakt data={sections.kontakt} />
      <Footer data={sections.footer} />
    </>
  )
}
