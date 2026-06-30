import { insights } from '@/data/content'
import { IconLogo } from '@/components/Logos'

export default function Contact() {
  return (
    <section id="insights" className="profile-panel p-6 lg:p-7">
      <p className="eyebrow">Thought Leadership</p>
      <div className="mt-5 grid gap-4">
        {insights.map((item, index) => (
          <a
            key={item.title}
            href={`/articles/${item.slug}`}
            className="grid grid-cols-[76px_1fr] gap-4 rounded-md p-1 transition duration-300 hover:bg-slate-50"
          >
            <div className="relative grid h-14 place-items-center overflow-hidden rounded-md bg-[linear-gradient(135deg,#0b1f33,#1d4ed8)]">
              <IconLogo name="article" className="border-white/20 bg-white/10 text-white" />
              <span className="absolute bottom-1 right-2 text-[10px] font-semibold text-white/70">
                0{index + 1}
              </span>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-5 text-slate-950">
                {item.title}
              </h3>
              <p className="mt-1 text-xs leading-5 text-slate-700">
                {item.desc}
              </p>
            </div>
          </a>
        ))}
        <a href="/articles" className="mt-1 text-sm font-semibold text-blue-700">
          Lihat semua artikel -&gt;
        </a>
      </div>
    </section>
  )
}
