/* eslint-disable @typescript-eslint/no-explicit-any */
import TwoSidedComponent from '@/app/_components/TwoSidedComponent'
import Markdown from 'markdown-to-jsx'
import getPostMetadata from '@/lib/getPostMetaData'
import fs from 'fs'
import matter from 'gray-matter'
import { ReactNode } from 'react'
import './artigo.css'

interface CustomComponentProps {
  children: ReactNode
  href?: string
  className?: string
}

const customComponents = {
  h1: ({ children }: CustomComponentProps) => (
    <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
      {children}
    </h1>
  ),
  h2: ({ children }: CustomComponentProps) => (
    <h2 className="text-3xl font-bold">{children}</h2>
  ),
  h3: ({ children }: CustomComponentProps) => (
    <h3 className="text-2xl font-bold">{children}</h3>
  ),
  p: ({ children }: CustomComponentProps) => (
    <p className="text-lg">{children}</p>
  ),
  ol: ({ children }: CustomComponentProps) => (
    <ol className="list-decimal pl-6">{children}</ol>
  ),
  li: ({ children }: CustomComponentProps) => (
    <li className="mb-1">{children}</li>
  ),
  a: ({ href, children }: CustomComponentProps) => (
    <a href={href} className="text-blue-500 hover:underline">
      {children}
    </a>
  ),
  strong: ({ children }: CustomComponentProps) => (
    <strong className="font-bold">{children}</strong>
  ),
  pre: ({ children }: CustomComponentProps) => (
    <pre className="bg-gray-100 p-4 rounded">{children}</pre>
  ),
  code: ({ className, children }: CustomComponentProps) => {
    // Extrair a linguagem do classname
    const language = className?.replace('lang-', '')
    return <code className={`language-${language}`}>{children}</code>
  },
}

function getPostContent(slug: string) {
  const folder = 'artigos/'
  const file = folder + `${slug}.md`
  const content = fs.readFileSync(file, 'utf8')

  const matterResult = matter(content)
  return matterResult
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata('artigos')
  return posts.map((post) => ({ slug: post.slug }))
}

interface GenerateMetadataProps {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: GenerateMetadataProps) {
  const id = params?.slug ? ' - ' + params?.slug : ''
  return {
    title: `Everton Figueiredo ${id.replaceAll('_', ' ')}`,
  }
}

export default function ArtigoPage(props: any) {
  const slug = props.params.slug
  const post = getPostContent(slug)

  return (
    <TwoSidedComponent title="Aproveite a leitura">
      <main>
        <article>
          <Markdown options={{ overrides: customComponents }}>
            {post.content}
          </Markdown>
        </article>
      </main>
    </TwoSidedComponent>
  )
}
