import getPostMetadata from '@/lib/getPostMetaData'

export default function Destaque() {
  const postMetadata = getPostMetadata('destaque')
  const destaque = postMetadata[0]
  return (
    <article className="py-6 max-w-screen-xl mx-auto flex justify-between items-center dm:p-9 p-2">
      <a
        className="gh-card-link space-y-8 hover:text-gray-800"
        href={`/artigos/${destaque.slug}`}
      >
        <header className="gh-card-header space-y-2">
          <div className="gh-article-meta">
            <span className="gh-card-date text-blue-700 text-sm">
              Mais recente — <time dateTime="2024-05-01">{destaque.date}</time>
            </span>
          </div>
          <h2 className="gh-article-title gh-card-title font-bold text-6xl ">
            {destaque.title}
          </h2>
        </header>

        <p className="gh-article-excerpt text-xl">{destaque.bio}</p>

        <footer className="gh-card-meta">
          <span className="gh-card-duration text-sm text-gray-500">
            {destaque.prep_time} de leitura
          </span>
        </footer>
      </a>
    </article>
  )
}
