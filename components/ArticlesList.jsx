'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { getAllArticles } from '@/components/ArticleHelpers'

export default function ArticlesList() {
  const [items, setItems] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    getAllArticles()
      .then(setItems)
      .catch((requestError) => setError(requestError.message))
  }, [])

  return (
    <section className="bg-slate-50 pb-16 pt-28">
      <div className="section-shell">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Artikel & Berita</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-normal text-slate-950 md:text-5xl">
              Kumpulan insight profesional
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              Artikel seputar ekonomi syariah, tata kelola, manajemen risiko,
              dan pengembangan bisnis.
            </p>
          </div>
          <a
            href="/admin/articles/new"
            className="inline-flex w-fit rounded-md bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-1 hover:bg-blue-600"
          >
            Input Berita Baru
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {error ? (
            <div className="profile-panel p-5 text-sm text-red-700 md:col-span-2 lg:col-span-3">
              Gagal membaca artikel dari Supabase: {error}
            </div>
          ) : null}

          {items.map((article) => (
            <a
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="soft-card group overflow-hidden"
            >
              <div className="relative h-52 bg-slate-200">
                {article.image ? (
                  article.image.startsWith('data:') ? (
                    <img
                      src={article.image}
                      alt=""
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <Image
                      src={article.image}
                      alt=""
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                  )
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/55 to-transparent" />
              </div>
              <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-blue-700">
                  {article.category}
                </p>
                <h2 className="mt-3 text-xl font-semibold leading-7 text-slate-950">
                  {article.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {article.excerpt}
                </p>
                <p className="mt-5 text-xs font-medium text-slate-500">
                  {article.date}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
