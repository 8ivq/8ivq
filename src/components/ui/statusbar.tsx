'use client'

import { useState, useEffect } from 'react'

export default function StatusBar() {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString())
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-terminal-bg/90 border-t border-terminal-border px-3 py-1 flex justify-between text-xs z-50">
      <div className="text-terminal-gray-300">
        Connected: █████████░ 90%
      </div>
      <div className="text-terminal-gray-500">
        Last seen: {currentTime} | Trace route: [ENCRYPTED]
      </div>
    </div>
  )
}