import { getAllSections } from '@/lib/supabase'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Hypothese from '@/components/Hypothese'
import Solution from '@/components/Solution'
import SEOSection from '@/components/SEOSection'
import WebdesignSection from '@/components/WebdesignSection'
import Rezension from '@/components/Rezension'
import About from '@/components/About'
import Kontakt from '@/components/Kontakt'
import Footer from '@/components/Footer'

export const revalidate = 60

export default async function Home() {
  const sections = await getAllSections()

  return (
    <>
      <Hero data={sections.hero} />
      <Problem data={sections.problem} />
      <Hypothese />
      <Solution data={sections.solution} />
      <SEOSection />
      <WebdesignSection />
      <Rezension data={sections.rezension} />
      <About data={sections.about} />
      <Kontakt data={sections.kontakt} />
      <Footer data={sections.footer} />
    </>
  )
}
