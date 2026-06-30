import { awards } from '@/data/content'
import { IconLogo } from '@/components/Logos'

export default function Awards() {
  return (
    <section className="profile-panel p-6 lg:p-7">
      <p className="eyebrow">Recognitions & Awards</p>
      <div className="mt-5 grid gap-4">
          {awards.map((item) => (
            <article
              key={`${item.title}-${item.year}`}
              className="grid grid-cols-[42px_1fr] gap-4 transition duration-300 hover:translate-x-1"
            >
              <IconLogo name="trophy" className="border-amber-200 bg-amber-50 text-amber-700" />
              <div>
                <h3 className="text-sm font-semibold leading-5 text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs leading-5 text-slate-700">
                  {item.org}
                </p>
                <p className="text-xs font-medium text-slate-950">{item.year}</p>
              </div>
            </article>
          ))}
      </div>
    </section>
  )
}
