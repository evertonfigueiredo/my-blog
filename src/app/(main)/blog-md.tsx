import getPostMetadata from '@/lib/getPostMetaData'
import PostPreview from './post-preview'

export default async function BlogMd() {
  const postMetadata = getPostMetadata('artigos')

  return (
    <div className="space-y-5 py-5">
      {postMetadata.map((post, postIndex) => {
        return <PostPreview key={postIndex} post={post} />
      })}
    </div>
  )
}
