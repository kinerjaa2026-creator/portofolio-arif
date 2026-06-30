import { articles } from '@/data/content'
import { supabase } from '@/lib/supabaseClient'

export const localArticlesKey = 'portfolio_articles'

export function createSlug(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

export function getStoredArticles() {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    return JSON.parse(window.localStorage.getItem(localArticlesKey) || '[]')
  } catch {
    return []
  }
}

function normalizeArticle(row) {
  return {
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt || '',
    category: row.category || 'Artikel',
    date: row.created_at
      ? new Intl.DateTimeFormat('id-ID', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }).format(new Date(row.created_at))
      : row.date,
    image: row.image_url || row.image || '/images/hero-governance.png',
    content: Array.isArray(row.content)
      ? row.content
      : String(row.content || '')
          .split('\n')
          .map((item) => item.trim())
          .filter(Boolean),
  }
}

export async function getSupabaseArticles() {
  if (!supabase) {
    return []
  }

  const { data, error } = await supabase
    .from('articles')
    .select('title,slug,category,excerpt,content,image_url,created_at')
    .order('created_at', { ascending: false })

  if (error) {
    throw error
  }

  return data.map(normalizeArticle)
}

export async function getAllArticles() {
  try {
    const databaseArticles = await getSupabaseArticles()
    return [...databaseArticles, ...articles]
  } catch {
    return [...getStoredArticles(), ...articles]
  }
}

export async function getArticleBySlug(slug) {
  const allArticles = await getAllArticles()
  return allArticles.find((article) => article.slug === slug)
}

export async function saveArticle(article) {
  if (!supabase) {
    const storedArticles = getStoredArticles()
    window.localStorage.setItem(localArticlesKey, JSON.stringify([article, ...storedArticles]))
    return article
  }

  const { error } = await supabase.from('articles').insert({
    title: article.title,
    slug: article.slug,
    category: article.category,
    excerpt: article.excerpt,
    content: Array.isArray(article.content) ? article.content.join('\n\n') : article.content,
    image_url: article.image,
  })

  if (error) {
    throw error
  }

  return article
}
