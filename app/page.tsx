import { getAllSections } from '@/lib/supabase'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Hypothese from '@/components/Hypothese'
import Leistungen from '@/components/Leistungen'
import About from '@/components/About'
import Rezension from '@/components/Rezension'
import Projekte from '@/components/Projekte'
import Prozess from '@/components/Prozess'
import Tools from '@/components/Tools'
import FAQ from '@/components/FAQ'
import CTAWhatsApp from '@/components/CTAWhatsApp'
import Footer from '@/components/Footer'

export const revalidate = 60

export default async function Home() {
  const sections = await getAllSections()

  return (
    <>
      <Hero data={sections.hero} />
      <Problem data={sections.problem} />
      <Hypothese />
      <Leistungen />
      <About data={sections.about} />
      <Rezension data={sections.rezension} />
      <Projekte />
      <Prozess />
      <Tools />
      <FAQ />
      <CTAWhatsApp />
      <Footer data={sections.footer} />
    </>
  )
}
