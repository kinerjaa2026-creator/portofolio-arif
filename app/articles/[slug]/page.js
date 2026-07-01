import ArticleDetail from '@/components/ArticleDetail'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default async function ArticleDetailPage({ params }) {
  const { slug } = await params

  return (
    <main>
      <Navbar />
      <ArticleDetail slug={slug} />
      <Footer />
    </main>
  )
}
