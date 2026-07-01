import { profile } from '@/data/content'
import { BrandLogo } from '@/components/Logos'

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#071728] py-8 text-white">
      <div className="section-shell grid gap-8 border-t border-white/10 pt-7 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white">
            Let&apos;s Connect
          </p>
          <div className="mt-4 grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={`tel:${profile.phone}`}>{profile.phone}</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              M. Arif Arrahim, S.Sos., CIMM
            </a>
            <span>{profile.location}</span>
          </div>
        </div>

        {/* <div className="flex items-center gap-4 lg:justify-end">
          <BrandLogo className='h-14 w-[220px] sm:h-16 sm:w-[280px]'  />
          <div>
            <p className="text-lg font-semibold">
              Mohamad Arif Arrahim, S.Sos., CIMM
            </p>
            <p className="text-sm text-blue-400">Leading with Sharia Values</p>
            <p className="mt-2 text-xs text-slate-400">
              &copy; 2026 All Rights Reserved
            </p>
          </div>
        </div> */}
      </div>
    </footer>
  )
}
