'use client'

import { useEffect, useState } from 'react'

const terminalLines = [
  { type: 'prompt', content: 'user@localhost:~$' },
  { type: 'command', content: 'whoami' },
  { type: 'output', content: '8ivq - Digital Architect | Code Whisperer | Data Hunter' },
  { type: 'prompt', content: 'user@localhost:~$' },
  { type: 'command', content: 'status --current' },
  { type: 'output', content: 'Currently: Building bridges between ideas and implementation...' }
]

export default function Terminal() {
  const [flickerOpacity, setFlickerOpacity] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.1) {
        setFlickerOpacity(0.8)
        setTimeout(() => setFlickerOpacity(1), 50)
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div 
      className="bg-terminal-gray-900 border border-terminal-border rounded p-3 font-mono mt-6 relative text-sm transition-opacity duration-50"
      style={{ opacity: flickerOpacity }}
    >
      <div className="absolute -top-3 left-2 text-terminal-gray-500 text-base tracking-wider">
        ●●●
      </div>
      
      {terminalLines.map((line, index) => (
        <div 
          key={index}
          className={`my-1 opacity-0 animate-fadeInUp-delay-${Math.floor(index / 2) + 1}`}
        >
          {line.type === 'prompt' && (
            <>
              <span className="text-terminal-gray-200">{line.content}</span>
              {index < terminalLines.length - 1 && terminalLines[index + 1].type === 'command' && (
                <span className="text-terminal-white ml-1">{terminalLines[index + 1].content}</span>
              )}
            </>
          )}
          {line.type === 'output' && (
            <span className="text-terminal-gray-400 ml-4">{line.content}</span>
          )}
        </div>
      ))}
    </div>
  )
}