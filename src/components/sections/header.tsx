'use client'

import { useTypewriter } from '@/hooks/usetypewriter'

export default function Header() {
  const { displayText, isComplete } = useTypewriter('fullstack_developer.exe', 100, 2000)

  return (
    <header className="text-center mb-8 relative">
      <h1 className="text-4xl md:text-6xl font-bold font-mono text-terminal-white relative inline-block animate-flicker">
        8ivq
        <span className="absolute top-0 left-0.5 text-glitch-1 -z-10 animate-glitch-1">
          8ivq
        </span>
        <span className="absolute top-0 -left-0.5 text-glitch-2 -z-10 animate-glitch-2">
          8ivq
        </span>
      </h1>
      <p className="text-sm text-terminal-gray-400 mt-2 tracking-widest overflow-hidden border-r-2 border-terminal-border whitespace-nowrap">
        {displayText}
        {!isComplete && <span className="animate-pulse">|</span>}
      </p>
    </header>
  )
}