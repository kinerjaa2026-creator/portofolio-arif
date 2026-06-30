import ArticleDetail from '@/components/ArticleDetail'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ArticleDetailPage({ params }) {
  return (
    <main>
      <Navbar />
      <ArticleDetail slug={params.slug} />
      <Footer />
    </main>
  )
}
