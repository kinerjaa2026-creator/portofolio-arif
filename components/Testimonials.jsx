import { testimonials } from '@/data/content'

export default function Testimonials() {
  return (
    <section className="bg-primary-dark py-10 text-white">
      <div className="section-shell">
        <div className="mb-6 flex items-center gap-5">
          <div className="h-px flex-1 bg-white/20" />
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-200">
            Testimonial
          </p>
          <div className="h-px flex-1 bg-white/20" />
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:divide-x md:divide-white/20">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-md px-2 py-2 transition duration-300 hover:bg-white/5 md:px-6">
              <p className="text-5xl font-semibold leading-none text-blue-600">
                &quot;
              </p>
              <p className="-mt-4 text-sm italic leading-6 text-slate-100">
                {item.quote}
              </p>
              <div className="mt-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-xs font-semibold text-primary-dark">
                  {item.name
                    .split(' ')
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join('')}
                </span>
                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-slate-300">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
