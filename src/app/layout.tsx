import type { Metadata } from 'next'
import { Space_Mono, Inconsolata } from 'next/font/google'
import './globals.css'

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
})

const inconsolata = Inconsolata({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-inconsolata',
})

export const metadata: Metadata = {
  title: '8ivq - About',
  description: 'Fullstack developer portfolio - Digital architect, code whisperer, data hunter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} ${inconsolata.variable} font-inconsolata bg-terminal-bg text-terminal-text overflow-x-hidden cursor-none select-none`}>
        {children}
      </body>
    </html>
  )
}