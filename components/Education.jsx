import { education } from '@/data/content'
import { IconLogo } from '@/components/Logos'

export default function Education() {
  return (
    <section id="education" className="profile-panel p-6 lg:p-7">
      <p className="eyebrow">Education</p>
      <div className="mt-6 grid gap-4">
          {education.map((item) => (
            <article
              key={item.degree}
              className="soft-card grid grid-cols-[64px_1fr] gap-4 p-4"
            >
              <IconLogo name="book" className="h-14 w-14 border-emerald-200 bg-emerald-50 text-emerald-700" />
              <div>
                <h3 className="text-sm font-semibold leading-5 text-slate-950">
                  {item.degree}
                </h3>
                <p className="mt-1 text-xs font-semibold leading-5 text-slate-700">
                  {item.institution}
                </p>
                <p className="mt-1 text-xs font-medium text-slate-950">
                  {item.period}
                </p>
              </div>
            </article>
          ))}
      </div>
    </section>
  )
}
