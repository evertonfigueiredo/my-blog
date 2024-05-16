import BlogMd from './(main)/blog-md'
import Destaque from './(main)/destaque'
import TwoSidedComponent from './_components/TwoSidedComponent'

export default function Home() {
  return (
    <main>
      <Destaque />
      <TwoSidedComponent title="Mais Artigos">
        <BlogMd />
      </TwoSidedComponent>
    </main>
  )
}
