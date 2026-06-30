import ArticlesList from '@/components/ArticlesList'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Artikel & Berita',
  description: 'Daftar artikel dan berita Mohamad Arif Arrahim.',
}

export default function ArticlesPage() {
  return (
    <main>
      <Navbar />
      <ArticlesList />
      <Footer />
    </main>
  )
}
