import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Renuja Janith | Full Stack Developer',
  description: 'Portfolio of Renuja Janith - Full Stack Developer specializing in modern web technologies',
  keywords: ['Full Stack Developer', 'Next.js', 'React', 'Node.js', 'Portfolio'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}