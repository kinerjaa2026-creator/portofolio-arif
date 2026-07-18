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

      <div className="section-shell relative grid min-h-[640px] items-end gap-8 pt-20 md:min-h-[620px] md:grid-cols-[1.05fr_0.95fr] md:pt-24 lg:min-h-[690px]">
        <div className="float-slow pointer-events-none absolute bottom-0 right-[-72px] top-8 z-0 w-[88vw] max-w-[360px] opacity-90 sm:right-[-28px] sm:max-w-[430px] md:relative md:bottom-auto md:right-auto md:top-auto md:col-start-2 md:row-start-1 md:block md:h-[560px] md:w-auto md:max-w-none md:self-end md:opacity-100 lg:h-[610px]">
          <Image
            src="/images/arif-branded-portrait.png"
            alt="Mohamad Arif Arrahim professional executive portrait"
            fill
            priority
            className="object-cover object-[56%_top] md:object-top"
            sizes="(min-width: 768px) 48vw, 88vw"
          />
          <div className="absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-primary-dark via-primary-dark/75 to-transparent md:w-1/3" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary-dark via-primary-dark/70 to-transparent md:hidden" />
        </div>

        <div className="reveal relative z-10 max-w-[86%] pb-12 sm:max-w-[72%] md:col-start-1 md:row-start-1 md:max-w-none md:pb-20">
          <p className="eyebrow mb-5 text-blue-400">Executive Profile</p>
          <h1 className="font-sans text-[clamp(2rem,10vw,3rem)] font-bold leading-[1.08] tracking-normal sm:text-5xl lg:text-6xl xl:text-7xl">
            {profile.name},{' '}
            <span className="text-accent-light">{profile.title}</span>
          </h1>
          <p className="reveal reveal-delay-1 mt-5 max-w-3xl text-base font-medium leading-8 text-amber-200 lg:text-lg">
            {profile.roleLine}
          </p>
          <blockquote className="reveal reveal-delay-2 mt-7 max-w-xl border-l-2 border-accent pl-5 text-lg italic leading-8 text-slate-100">
            &quot;{profile.quote}&quot;
          </blockquote>
          <div className="reveal reveal-delay-3 mt-9 flex flex-wrap gap-3 sm:gap-4">
            <a
              href="#about"
              className="rounded-md bg-blue-700 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-white shadow-lg shadow-blue-950/30 transition duration-200 hover:-translate-y-1 hover:bg-blue-600 sm:px-6"
            >
              View Profile
            </a>
            <a
              href="/cv_M.arif_arrahim.pdf"
              className="rounded-md border border-accent/60 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-white transition duration-200 hover:-translate-y-1 hover:bg-accent hover:text-primary-dark sm:px-6"
            >
              Download CV
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-accent/60 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-white transition duration-200 hover:-translate-y-1 hover:bg-accent hover:text-primary-dark sm:px-6"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
