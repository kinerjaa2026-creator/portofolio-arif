'use client'

import { useState } from 'react'
import { BrandLogo } from '@/components/Logos'

const menu = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Expertise', href: '/#expertise' },
  { label: 'Journey', href: '/#journey' },
  { label: 'Artikel', href: '/articles' },
  { label: 'Input Berita', href: '/admin/articles/new' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/[0.96] text-slate-950 shadow-[0_10px_30px_rgba(15,23,42,0.12)] backdrop-blur-2xl backdrop-saturate-150">
      <div className="section-shell flex h-[84px] items-center justify-between">
        <a href="#home" className="flex min-w-0 items-center">
          <BrandLogo />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {menu.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="border-b border-transparent pb-1 text-xs font-semibold uppercase tracking-wide text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:border-blue-700 hover:text-blue-700"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/cv-arif-arrahim.pdf"
            className="rounded-md bg-blue-700 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-white shadow-lg shadow-blue-900/20 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-600"
          >
            Download CV
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-md border border-slate-300 text-xl text-slate-950 lg:hidden"
        >
          {isOpen ? 'x' : '='}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white/[0.98] px-4 py-3 shadow-lg shadow-slate-950/10 backdrop-blur-2xl lg:hidden">
          <div className="flex flex-col gap-1">
            {menu.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-slate-800 hover:bg-slate-100 hover:text-blue-700"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  )
}
