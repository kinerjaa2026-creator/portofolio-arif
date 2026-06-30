import About from '@/components/About'
import Awards from '@/components/Awards'
import Career from '@/components/Career'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import Education from '@/components/Education'
import Expertise from '@/components/Expertise'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import ScrollReveal from '@/components/ScrollReveal'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main>
      <ScrollReveal />
      <Navbar />
      <Hero />

      <section className="bg-slate-50 py-10">
        <div className="section-shell scroll-reveal grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <About />
          <Stats />
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="section-shell scroll-reveal grid gap-8 lg:grid-cols-[1fr_0.86fr_1fr]" data-scroll-delay="1">
          <Career />
          <Education />
          <Expertise />
        </div>
      </section>

      <section className="bg-slate-50 py-10">
        <div className="section-shell scroll-reveal grid gap-8 lg:grid-cols-[1fr_1fr_1fr]" data-scroll-delay="2">
          <Certifications />
          <Awards />
          <Contact />
        </div>
      </section>

      <div className="scroll-reveal" data-scroll-delay="1">
        <Testimonials />
      </div>
      <div className="scroll-reveal" data-scroll-delay="2">
        <Footer />
      </div>
    </main>
  )
}
