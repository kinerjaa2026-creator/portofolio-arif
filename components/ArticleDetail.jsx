'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { getArticleBySlug } from '@/components/ArticleHelpers'

export default function ArticleDetail({ slug }) {
  const [article, setArticle] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getArticleBySlug(slug)
      .then(setArticle)
      .catch(() => setArticle(null))
      .finally(() => setIsLoading(false))
  }, [slug])

  if (isLoading) {
    return (
      <section className="bg-slate-50 pb-16 pt-28">
        <div className="section-shell">
          <div className="profile-panel p-8 text-sm text-slate-600">
            Memuat artikel...
          </div>
        </div>
      </section>
    )
  }

  if (!article) {
    return (
      <section className="bg-slate-50 pb-16 pt-28">
        <div className="section-shell">
          <div className="profile-panel p-8">
            <p className="eyebrow">Artikel</p>
            <h1 className="mt-3 text-3xl font-semibold text-slate-950">
              Artikel tidak ditemukan
            </h1>
            <a href="/articles" className="mt-6 inline-block text-sm font-semibold text-blue-700">
              Kembali ke daftar artikel
            </a>
          </div>
        </div>
      </section>
    )
  }

  const paragraphs = Array.isArray(article.content)
    ? article.content
    : String(article.content || '')
        .split('\n')
        .filter(Boolean)

  return (
    <article className="bg-slate-50 pb-16 pt-28">
      <div className="section-shell max-w-5xl">
        <a href="/articles" className="text-sm font-semibold text-blue-700">
          &lt;- Kembali ke artikel
        </a>

        <header className="mt-6">
          <p className="eyebrow">{article.category}</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-950 md:text-5xl">
            {article.title}
          </h1>
          <p className="mt-4 text-sm font-medium text-slate-500">{article.date}</p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {article.excerpt}
          </p>
        </header>

        <div className="relative mt-9 h-[300px] overflow-hidden rounded-md bg-slate-200 shadow-[0_18px_48px_rgba(15,23,42,0.12)] md:h-[440px]">
          {article.image ? (
            article.image.startsWith('data:') ? (
              <img src={article.image} alt="" className="h-full w-full object-cover" />
            ) : (
              <Image src={article.image} alt="" fill className="object-cover" sizes="100vw" />
            )
          ) : null}
        </div>

        <div className="profile-panel mt-9 p-6 md:p-9">
          <div className="space-y-6 text-base leading-8 text-slate-700">
            {paragraphs.map((paragraph, index) => (
              <p key={`${article.slug}-${index}`}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
