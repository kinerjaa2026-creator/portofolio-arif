import { certifications } from '@/data/content'

export default function Certifications() {
  return (
    <section className="profile-panel p-6 lg:p-7">
      <p className="eyebrow">Certifications</p>
      <div className="mt-5 grid gap-3">
          {certifications.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 text-sm leading-6 text-slate-800"
            >
              <span className="check-dot mt-1">
                ✓
              </span>
              {item}
            </div>
          ))}
      </div>
    </section>
  )
}
