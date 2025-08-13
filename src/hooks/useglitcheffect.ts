'use client'

import { useRef } from 'react'

export function useGlitchEffect() {
  const ref = useRef<HTMLElement>(null)
  
  const triggerGlitch = () => {
    if (ref.current) {
      const randomX = (Math.random() - 0.5) * 4
      const randomY = (Math.random() - 0.5) * 4
      
      ref.current.style.transform = `translate(${randomX}px, ${randomY}px)`
      
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.transform = ''
        }
      }, 100)
    }
  }
  
  return { ref, triggerGlitch }
}