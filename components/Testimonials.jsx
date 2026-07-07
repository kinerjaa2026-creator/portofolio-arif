'use client'

import { useEffect, useState } from 'react'
import { testimonials as staticTestimonials } from '@/data/content'
import { supabase } from '@/lib/supabaseClient'

const localTestimonialsKey = 'portfolio_testimonials'

function getInitials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

function getStoredTestimonials() {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    return JSON.parse(window.localStorage.getItem(localTestimonialsKey) || '[]')
  } catch {
    return []
  }
}

function normalizeTestimonial(row) {
  return {
    id: row.id || `${row.name}-${row.created_at || Date.now()}`,
    quote: row.quote,
    name: row.name,
    role: row.role || 'Testimonial',
  }
}

async function getSupabaseTestimonials() {
  if (!supabase) {
    return []
  }

  const { data, error } = await supabase
    .from('testimonials')
    .select('id,name,role,quote,created_at')
    .order('created_at', { ascending: false })

  if (error) {
    throw error
  }

  return data.map(normalizeTestimonial)
}

async function saveTestimonial(testimonial) {
  if (!supabase) {
    const storedTestimonials = getStoredTestimonials()
    window.localStorage.setItem(
      localTestimonialsKey,
      JSON.stringify([testimonial, ...storedTestimonials]),
    )
    return testimonial
  }

  const { data, error } = await supabase
    .from('testimonials')
    .insert({
      name: testimonial.name,
      role: testimonial.role,
      quote: testimonial.quote,
    })
    .select('id,name,role,quote,created_at')
    .single()

  if (error) {
    throw error
  }

  return normalizeTestimonial(data)
}

export default function Testimonials() {
  const [items, setItems] = useState(staticTestimonials)
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [quote, setQuote] = useState('')
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    async function loadTestimonials() {
      try {
        const databaseTestimonials = await getSupabaseTestimonials()
        setItems([...databaseTestimonials, ...staticTestimonials])
      } catch {
        setItems([...getStoredTestimonials(), ...staticTestimonials])
      }
    }

    loadTestimonials()
  }, [])

  async function handleSubmit(event) {
    event.preventDefault()
    setIsSaving(true)
    setError('')
    setSuccess('')

    const testimonial = {
      id: `local-${Date.now()}`,
      name: name.trim(),
      role: role.trim() || 'Testimonial',
      quote: quote.trim(),
    }

    try {
      const savedTestimonial = await saveTestimonial(testimonial)
      setItems((currentItems) => [savedTestimonial, ...currentItems])
      setName('')
      setRole('')
      setQuote('')
      setSuccess('Testimoni berhasil disimpan.')
    } catch (requestError) {
      setError(requestError.message)
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <section className="bg-primary-dark py-8 text-white">
      <div className="section-shell">
        <div className="mb-5 flex items-center gap-5">
          <div className="h-px flex-1 bg-white/20" />
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-200">
            Testimonial
          </p>
          <div className="h-px flex-1 bg-white/20" />
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <form
            onSubmit={handleSubmit}
            className="rounded-md border border-white/10 bg-white/[0.06] p-4 shadow-[0_18px_48px_rgba(0,0,0,0.18)] backdrop-blur-md lg:p-5"
          >
            <h2 className="text-xl font-semibold">Tulis Testimoni</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Testimoni yang masuk akan tampil di daftar sebelah kanan.
            </p>

            {error ? (
              <div className="mt-5 rounded-md border border-red-300/40 bg-red-500/10 p-3 text-sm leading-6 text-red-100">
                Gagal menyimpan testimoni: {error}
              </div>
            ) : null}

            {success ? (
              <div className="mt-5 rounded-md border border-emerald-300/40 bg-emerald-500/10 p-3 text-sm leading-6 text-emerald-100">
                {success}
              </div>
            ) : null}

            <div className="mt-4 grid gap-3">
              <label className="grid gap-2">
                <span className="text-sm font-medium text-slate-200">Nama</span>
                <input
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="rounded-md border border-white/10 bg-white px-4 py-3 text-sm text-slate-950 outline-none ring-blue-200 transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4"
                  placeholder="Nama pemberi testimoni"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-slate-200">Jabatan / Relasi</span>
                <input
                  value={role}
                  onChange={(event) => setRole(event.target.value)}
                  className="rounded-md border border-white/10 bg-white px-4 py-3 text-sm text-slate-950 outline-none ring-blue-200 transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4"
                  placeholder="Contoh: Rekan Bisnis"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-slate-200">Testimoni</span>
                <textarea
                  required
                  rows={3}
                  value={quote}
                  onChange={(event) => setQuote(event.target.value)}
                  className="rounded-md border border-white/10 bg-white px-4 py-3 text-sm leading-7 text-slate-950 outline-none ring-blue-200 transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4"
                  placeholder="Tulis testimoni singkat."
                />
              </label>

              <button
                type="submit"
                disabled={isSaving}
                className="rounded-md bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:-translate-y-1 hover:bg-blue-600 disabled:opacity-60"
              >
                {isSaving ? 'Menyimpan...' : 'Kirim Testimoni'}
              </button>
            </div>
          </form>

          <div className="grid max-h-[430px] gap-3 overflow-y-auto pr-2 sm:max-h-[500px] lg:max-h-[540px]">
            {items.map((item) => (
              <article
                key={item.id || item.name}
                className="rounded-md border border-white/10 bg-white/[0.05] p-4 transition duration-300 hover:bg-white/10"
              >
                <p className="text-4xl font-semibold leading-none text-blue-500">
                  &quot;
                </p>
                <p className="-mt-3 text-sm italic leading-6 text-slate-100">
                  {item.quote}
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-xs font-semibold text-primary-dark">
                    {getInitials(item.name)}
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
      </div>
    </section>
  )
}
