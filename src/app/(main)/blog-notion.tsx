import { notion } from '@/services/notion'

export default async function BlogNotion() {
  const database = await notion.databases.query({
    database_id: '4269839ac6d74784994f444e71c14dd7',
  })

  return (
    <div>
      {database.results.length > 0 ? (
        database.results.map((result) => (
          <div key={result.id}>
            <h2>{result.properties.Nome.title[0].text.content}</h2>
            {/* Adicione outros campos conforme necessário */}
          </div>
        ))
      ) : (
        <p>Não existem postagens.</p>
      )}
    </div>
  )
}
