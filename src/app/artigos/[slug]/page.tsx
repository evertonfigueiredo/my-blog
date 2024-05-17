/* eslint-disable @typescript-eslint/no-explicit-any */
import Markdown from 'markdown-to-jsx'
import getPostMetadata from '@/lib/getPostMetaData'
import fs from 'fs'
import matter from 'gray-matter'
import { ReactNode } from 'react'
import './artigo.css'
import { LinkedInLogoIcon } from '@radix-ui/react-icons'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import path from 'path'

interface CustomComponentProps {
  children: ReactNode
  href?: string
  className?: string
}

const customComponents = {
  h1: ({ children }: CustomComponentProps) => (
    <h1 className="scroll-m-20 mb-5 text-5xl font-bold tracking-tight text-center">
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
    <p className="text-lg text-justify">{children}</p>
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
  const folders = ['artigos', 'destaque']
  let content = ''

  for (const folder of folders) {
    const filePath = path.join(process.cwd(), folder, `${slug}.md`)
    console.log(filePath)

    if (fs.existsSync(filePath)) {
      content = fs.readFileSync(filePath, 'utf8')
      break
    }
  }

  if (!content) {
    throw new Error(`Post with slug ${slug} not found in any folder`)
  }

  const matterResult = matter(content)
  return matterResult
}

export const generateStaticParams = async () => {
  const artigos = getPostMetadata('artigos')
  const destaque = getPostMetadata('destaque')
  const posts = [...artigos, ...destaque]
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
    <div className="space-y-4">
      <div className="flex justify-center mt-10">
        <div className="max-w-[680px]">
          <div className="flex mb-4 justify-center items-center">
            <Avatar>
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/98413014"
                alt="Everton Figueiredo"
              />
              <AvatarFallback>EF</AvatarFallback>
            </Avatar>
            <div className="mx-4">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button className="p-0 h-0" variant="link">
                    Everton Figueiredo
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/98413014"
                        alt="Everton Figueiredo"
                      />
                      <AvatarFallback>EF</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <a href="instagram.com/evertondev/">
                        <h4 className="text-sm font-semibold">@Evertondev</h4>
                      </a>
                      <p className="text-sm">Engenheiro de Software Júnior</p>
                      <div className="flex items-center pt-2">
                        <a
                          className="flex"
                          target="_blank"
                          href="https://www.linkedin.com/in/everton-figueiredo/"
                          rel="noreferrer"
                        >
                          <LinkedInLogoIcon className="mr-2 h-4 w-4 opacity-70" />{' '}
                          <span className="text-xs text-muted-foreground">
                            Everton Figueiredo
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              <p>
                {post.data.prep_time} de leitura · {post.data.date}
              </p>
            </div>
          </div>
        </div>
      </div>
      <main className="flex justify-center my-10">
        <article className="max-w-[680px] mx-2">
          <Markdown options={{ overrides: customComponents }}>
            {post.content}
          </Markdown>
        </article>
      </main>
    </div>
  )
}
