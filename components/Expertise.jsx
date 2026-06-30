import { expertise } from '@/data/content'
import { IconLogo } from '@/components/Logos'

export default function Expertise() {
  return (
    <section id="expertise" className="profile-panel p-6 lg:p-7">
      <p className="eyebrow">Expertise</p>
      <div className="mt-6 grid gap-4">
          {expertise.map((item) => (
            <article
              key={item.title}
              className="grid grid-cols-[42px_1fr] gap-4 transition duration-300 hover:translate-x-1"
            >
              <IconLogo
                name={
                  item.title === 'Corporate Governance'
                    ? 'shield'
                    : item.title === 'Risk Management'
                      ? 'scale'
                      : item.title === 'Islamic Finance'
                        ? 'certificate'
                        : item.title === 'Business Development'
                          ? 'chart'
                          : 'briefcase'
                }
                className="bg-blue-700 text-white ring-4 ring-blue-50"
              />
              <div>
                <h3 className="text-sm font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-1 text-xs leading-5 text-slate-700">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
      </div>
    </section>
  )
}
