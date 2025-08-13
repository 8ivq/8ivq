'use client'

import { useState, useEffect } from 'react'

export function useTypewriter(text: string, speed: number = 50, delay: number = 0) {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  
  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    
    const startTyping = () => {
      let i = 0
      const typeChar = () => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1))
          i++
          timeoutId = setTimeout(typeChar, speed)
        } else {
          setIsComplete(true)
        }
      }
      typeChar()
    }
    
    timeoutId = setTimeout(startTyping, delay)
    
    return () => clearTimeout(timeoutId)
  }, [text, speed, delay])
  
  return { displayText, isComplete }
}