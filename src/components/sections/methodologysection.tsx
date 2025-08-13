import AnimatedSection from '@/components/animatedsection'

export default function MethodologySection() {
  return (
    <AnimatedSection>
      <h2 className="text-terminal-white mb-3 text-lg relative">
        // methodology.md
        <span className="absolute -bottom-1 left-0 w-8 h-px bg-terminal-highlight animate-expand"></span>
      </h2>
      <div className="leading-relaxed text-sm text-terminal-gray-100">
        Every line of code tells a story. Every database query leaves a footprint. 
        I build systems that work in the dark, gather intelligence from data streams, 
        and construct digital infrastructure that operates beyond the surface web.
        <br /><br />
        My approach: Document nothing. Remember everything. Leave no traces except 
        in version control. The best security is the kind that doesn&apos;t announce itself.
        The most effective code is the kind that runs so smoothly, you forget it exists.
      </div>
    </AnimatedSection>
  )
}