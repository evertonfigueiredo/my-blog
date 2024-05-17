import Link from 'next/link'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PostPreview(props: any) {
  const { post } = props
  return (
    <Link href={`/artigos/${post.slug}`} className="hover:text-gray-800">
      <div className="space-y-2">
        <h3 className="text-3xl font-bold">{post.title}</h3>
        <p className="text-lg">{post.bio}</p>
        <p>
          <span className="text-blue-700 text-sm">{post.date}</span>
          <span className="text-gray-500 text-sm">
            {' '}
            — {post.prep_time} de leitura
          </span>
        </p>
      </div>
    </Link>
  )
}
