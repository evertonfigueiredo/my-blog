import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from 'next-themes'
import Announcement from './(main)/announcement'
import Header from './_components/header'
import Footer from './_components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Everton Figueiredo - Engenheiro de software júnior',
  description:
    'Engenheiro de software júnior especializado em desenvolvimento web, com experiência em PHP, CRM, e ensino de tecnologias. Conheça insights valiosos sobre desenvolvimento de software e infraestrutura de TI em meu blog.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Announcement />
          <Header />
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
