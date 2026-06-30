import { summarySkills } from '@/data/content'

export default function About() {
  return (
    <section id="about" className="profile-panel p-6 lg:p-7">
      <p className="eyebrow">About Me</p>
      <h2 className="section-title">Executive Summary</h2>
      <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
        <p>
          Praktisi ekonomi syariah dan eksekutif industri jasa keuangan dengan
          pengalaman memimpin operasional, pengelolaan risiko, pengembangan
          bisnis, serta penerapan tata kelola perusahaan yang baik.
        </p>
        <p>
          Berpengalaman memastikan kepatuhan terhadap regulasi dan penerapan
          prinsip kehati-hatian serta prinsip syariah dalam operasional
          perusahaan.
        </p>
      </div>

      <div className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">
        {summarySkills.map((item) => (
          <div key={item} className="flex items-center gap-3 text-sm text-slate-800 transition duration-300 hover:translate-x-1">
            <span className="check-dot">
              ✓
            </span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
