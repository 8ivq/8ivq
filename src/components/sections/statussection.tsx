import AnimatedSection from '@/components/animatedsection'

export default function StatusSection() {
  return (
    <AnimatedSection>
      <h2 className="text-terminal-white mb-3 text-lg relative">
        // current_status.log
        <span className="absolute -bottom-1 left-0 w-8 h-px bg-terminal-highlight animate-expand"></span>
      </h2>
      <div className="leading-relaxed text-sm text-terminal-gray-100">
        Status: Active but invisible. Currently between projects and possibilities, 
        maintaining servers that exist in the spaces between documentation. 
        The code compiles, the tests pass, but something deeper lurks in the architecture.
        <br /><br />
        Last deployment: Success with warnings. Next iteration: Unknown. 
        The repository holds more than just source code—it contains the digital DNA 
        of systems that breathe on their own.
      </div>
    </AnimatedSection>
  )
}