export default function GlitchBackground() {
  return (
    <div 
      className="fixed top-0 left-0 w-full h-full -z-10 animate-drift"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(60, 60, 60, 0.02) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(80, 80, 80, 0.02) 0%, transparent 50%)
        `
      }}
    />
  )
}