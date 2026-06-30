'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createSlug, saveArticle } from '@/components/ArticleHelpers'

export default function ArticleForm() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Berita')
  const [excerpt, setExcerpt] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState('')
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState('')

  function handleImageChange(event) {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => setImage(String(reader.result || ''))
    reader.readAsDataURL(file)
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setIsSaving(true)
    setError('')

    const slugBase = createSlug(title)
    const slug = `${slugBase}-${Date.now().toString(36)}`
    const article = {
      slug,
      title,
      category,
      excerpt,
      image,
      date: new Intl.DateTimeFormat('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(new Date()),
      content: content
        .split('\n')
        .map((item) => item.trim())
        .filter(Boolean),
    }

    try {
      await saveArticle(article)
      router.push(`/articles/${slug}`)
    } catch (requestError) {
      setError(requestError.message)
      setIsSaving(false)
    }
  }

  return (
    <section className="bg-slate-50 pb-16 pt-28">
      <div className="section-shell max-w-5xl">
        <p className="eyebrow">Input Berita</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-normal text-slate-950 md:text-5xl">
          Tambah berita atau artikel baru
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
          Isi judul, gambar, ringkasan, dan isi artikel. Untuk saat ini data
          tersimpan di browser ini melalui localStorage.
        </p>

        <form onSubmit={handleSubmit} className="profile-panel mt-9 grid gap-6 p-6 md:p-8">
          {error ? (
            <div className="rounded-md border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700">
              Gagal menyimpan ke Supabase: {error}
            </div>
          ) : null}

          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-700">Judul berita</span>
            <input
              required
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-blue-200 transition focus:border-blue-500 focus:ring-4"
              placeholder="Contoh: Strategi Tata Kelola Keuangan Syariah"
            />
          </label>

          <div className="grid gap-6 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-medium text-slate-700">Kategori</span>
              <input
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-blue-200 transition focus:border-blue-500 focus:ring-4"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-medium text-slate-700">Gambar berita</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="rounded-md border border-slate-200 bg-white px-4 py-2.5 text-sm file:mr-4 file:rounded-md file:border-0 file:bg-blue-700 file:px-3 file:py-2 file:text-sm file:font-medium file:text-white"
              />
            </label>
          </div>

          {image ? (
            <img src={image} alt="" className="h-64 w-full rounded-md object-cover" />
          ) : null}

          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-700">Ringkasan singkat</span>
            <textarea
              required
              rows={3}
              value={excerpt}
              onChange={(event) => setExcerpt(event.target.value)}
              className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm leading-7 outline-none ring-blue-200 transition focus:border-blue-500 focus:ring-4"
              placeholder="Tulis ringkasan 1-2 kalimat untuk kartu artikel."
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-700">Isi artikel</span>
            <textarea
              required
              rows={12}
              value={content}
              onChange={(event) => setContent(event.target.value)}
              className="rounded-md border border-slate-200 bg-white px-4 py-3 text-sm leading-7 outline-none ring-blue-200 transition focus:border-blue-500 focus:ring-4"
              placeholder="Tulis isi artikel. Pisahkan paragraf dengan baris baru."
            />
          </label>

          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              disabled={isSaving}
              className="rounded-md bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-1 hover:bg-blue-600 disabled:opacity-60"
            >
              {isSaving ? 'Menyimpan...' : 'Simpan Berita'}
            </button>
            <a
              href="/articles"
              className="rounded-md border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-1 hover:border-blue-200 hover:text-blue-700"
            >
              Lihat Daftar Artikel
            </a>
          </div>
        </form>
      </div>
    </section>
  )
}
