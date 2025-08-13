'use client'

import { useEffect, useRef } from 'react'

export function useCustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    let mouseX = 0, mouseY = 0
    let cursorX = 0, cursorY = 0
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    
    const animateCursor = () => {
      const dx = mouseX - cursorX
      const dy = mouseY - cursorY
      
      cursorX += dx * 0.1
      cursorY += dy * 0.1
      
      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorX - 10}px`
        cursorRef.current.style.top = `${cursorY - 10}px`
      }
      
      requestAnimationFrame(animateCursor)
    }
    
    document.addEventListener('mousemove', handleMouseMove)
    const animationId = requestAnimationFrame(animateCursor)
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])
  
  return { cursorRef }
}