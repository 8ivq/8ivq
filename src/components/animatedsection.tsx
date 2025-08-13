'use client'

import { ReactNode } from 'react'
// ???
interface AnimatedSectionProps {
  children: ReactNode
  className?: string
}

export default function AnimatedSection({ children, className = '' }: AnimatedSectionProps) {
  return (
    <section className={`bg-terminal-gray-800/60 border border-terminal-border rounded p-5 relative backdrop-blur-sm transition-all duration-300 hover:border-terminal-highlight hover:shadow-lg hover:shadow-terminal-gray-500/10 ${className}`}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-terminal-border to-transparent animate-scan"></div>
      {children}
    </section>
  )
}