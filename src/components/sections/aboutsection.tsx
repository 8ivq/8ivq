'use client'

import AnimatedSection from '@/components/animatedsection'
import { useTypewriter } from '@/hooks/usetypewriter'

const aboutText = `Another ghost in the machine. I craft digital experiences from the shadows, 
weaving code like secrets through fiber optic veins. My terminal never sleeps, 
and neither do the possibilities. Some call it development—I call it digital archaeology, 
excavating meaning from the void between zeros and ones.

I speak in multiple tongues: the ancient dialects of C++ and the modern whispers of React. 
My fingers dance across keyboards like rain on rooftops, leaving traces in databases 
and echoes in server logs. What you see working might be broken. What seems broken 
might be exactly as intended.

The network remembers everything. I just help it organize its thoughts.`

export default function AboutSection() {
  const { displayText } = useTypewriter(aboutText, 20, 2000)

  return (
    <AnimatedSection>
      <h2 className="text-terminal-white mb-3 text-lg relative">
        // about.txt
        <span className="absolute -bottom-1 left-0 w-8 h-px bg-terminal-highlight animate-expand"></span>
      </h2>
      <div className="leading-relaxed text-sm text-terminal-gray-100 whitespace-pre-line">
        {displayText}
      </div>
    </AnimatedSection>
  )
}