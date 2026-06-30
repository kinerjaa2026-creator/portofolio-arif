import { profile, stats } from '@/data/content'
import { IconLogo } from '@/components/Logos'

export default function Stats() {
  return (
    <section className="profile-panel p-6 lg:p-7">
      <p className="eyebrow">Leadership Snapshot</p>
      <div className="mt-5 rounded-md border border-slate-200 bg-slate-50/70 p-4">
        <div className="grid grid-cols-2 divide-slate-200 overflow-hidden rounded-md bg-white sm:grid-cols-5 sm:divide-x">
          {stats.map((item) => (
            <div key={item.label} className="px-3 py-5 text-center transition duration-300 hover:bg-blue-50/70">
              <IconLogo name={item.icon} className="mx-auto h-10 w-10" />
              <p className="mt-4 font-serif text-4xl font-semibold text-slate-950">
                {item.value}
              </p>
              <p className="mx-auto mt-1 max-w-[110px] text-xs font-semibold leading-4 text-slate-800">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <blockquote className="mt-5 rounded-md bg-primary-dark p-6 text-lg font-medium italic leading-8 text-white shadow-[0_18px_44px_rgba(11,31,51,0.22)]">
          <span className="mr-5 align-top text-5xl font-semibold not-italic text-blue-600">
            &quot;
          </span>
          {profile.leadershipQuote}
          <footer className="mt-3 text-right text-sm font-medium not-italic text-blue-400">
            Mohamad Arif Arrahim
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
