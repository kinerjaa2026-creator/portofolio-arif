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
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-primary-dark/86 text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-md">
      <div className="section-shell flex h-[72px] items-center justify-between">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <BrandLogo />
          <span className="min-w-0">
            <span className="block truncate text-base font-semibold leading-5">
              Mohamad
              <br />
              Arif Arrahim
            </span>
            <span className="hidden text-[10px] font-medium text-slate-300 sm:block">
              Leading with Sharia Values
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {menu.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="border-b border-transparent pb-1 text-xs font-medium uppercase tracking-wide text-slate-100 transition duration-200 hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-400"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/cv-arif-arrahim.pdf"
            className="rounded-md bg-blue-700 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-white shadow-lg shadow-blue-950/30 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-600"
          >
            Download CV
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-md border border-white/20 text-xl text-white lg:hidden"
        >
          {isOpen ? 'x' : '='}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-white/10 bg-primary-dark px-4 py-3 lg:hidden">
          <div className="flex flex-col gap-1">
            {menu.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-slate-100 hover:bg-white/8"
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
