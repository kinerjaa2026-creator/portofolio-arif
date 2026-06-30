import ArticleForm from '@/components/ArticleForm'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Input Berita',
  description: 'Form input berita dan artikel baru.',
}

export default function NewArticlePage() {
  return (
    <main>
      <Navbar />
      <ArticleForm />
      <Footer />
    </main>
  )
}
