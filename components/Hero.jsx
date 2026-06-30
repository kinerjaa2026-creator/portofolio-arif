import Image from 'next/image'
import { profile } from '@/data/content'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-primary-dark pt-16 text-white"
    >
      <Image
        src="/images/hero-governance.png"
        alt=""
        fill
        priority
        className="object-cover opacity-30"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,13,28,0.98),rgba(2,18,38,0.88),rgba(2,18,38,0.28))]" />

      <div className="section-shell relative grid min-h-[620px] items-end gap-8 pt-24 md:grid-cols-[1.05fr_0.95fr] lg:min-h-[690px]">
        <div className="reveal pb-12 md:pb-20">
          <p className="eyebrow mb-5 text-blue-400">Executive Profile</p>
          <h1 className="font-sans text-4xl font-bold leading-[1.08] tracking-normal sm:text-5xl lg:text-6xl xl:text-7xl">
            {profile.name},{' '}
            <span className="text-accent-light">{profile.title}</span>
          </h1>
          <p className="reveal reveal-delay-1 mt-5 max-w-3xl text-base font-medium leading-8 text-amber-200 lg:text-lg">
            {profile.roleLine}
          </p>
          <blockquote className="reveal reveal-delay-2 mt-7 max-w-xl border-l-2 border-accent pl-5 text-lg italic leading-8 text-slate-100">
            &quot;{profile.quote}&quot;
          </blockquote>
          <div className="reveal reveal-delay-3 mt-9 flex flex-wrap gap-4">
            <a
              href="#about"
              className="rounded-md bg-blue-700 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white shadow-lg shadow-blue-950/30 transition duration-200 hover:-translate-y-1 hover:bg-blue-600"
            >
              View Profile
            </a>
            <a
              href="/cv_M.arif_arrahim.pdf"
              className="rounded-md border border-accent/60 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white transition duration-200 hover:-translate-y-1 hover:bg-accent hover:text-primary-dark"
            >
              Download CV
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-accent/60 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white transition duration-200 hover:-translate-y-1 hover:bg-accent hover:text-primary-dark"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>

        <div className="float-slow relative hidden h-[560px] self-end md:block lg:h-[610px]">
          <Image
            src="/images/executive-portrait.png"
            alt="Professional executive portrait placeholder"
            fill
            priority
            className="object-cover object-top"
            sizes="(min-width: 768px) 48vw, 100vw"
          />
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-primary-dark to-transparent" />
        </div>
      </div>
    </section>
  )
}
