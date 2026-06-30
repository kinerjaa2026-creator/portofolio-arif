import { career } from '@/data/content'
import { IconLogo } from '@/components/Logos'

export default function Career() {
  return (
    <section id="journey" className="profile-panel p-6 lg:p-7">
      <p className="eyebrow">Career Journey</p>
      <div className="mt-6 space-y-4">
          {career.map((item) => (
            <article
              key={`${item.year}-${item.title}`}
              className="grid grid-cols-[42px_1fr] gap-4 transition duration-300 hover:translate-x-1"
            >
              <div className="flex flex-col items-center">
                <IconLogo name="briefcase" className="bg-blue-700 text-white ring-4 ring-blue-50" />
                <span className="mt-2 h-full min-h-8 w-px bg-blue-200" />
              </div>
            <div className="rounded-md p-1 transition duration-300 hover:bg-slate-50">
                <p className="text-xs font-semibold text-slate-950">{item.year}</p>
                <h3 className="text-base font-semibold leading-5 text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-slate-700">
                  {item.company}
                </p>
              </div>
            </article>
          ))}
      </div>
    </section>
  )
}
