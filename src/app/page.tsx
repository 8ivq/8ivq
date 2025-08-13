import CustomCursor from '@/components/ui/customcursor'
import GlitchBackground from '@/components/ui/glitchbackground'
import Header from '@/components/sections/header'
import AboutSection from '@/components/sections/aboutsection'
import StatusSection from '@/components/sections/statussection'
import SkillsGrid from '@/components/sections/skillsgrid'
import Terminal from '@/components/ui/terminal'
import MethodologySection from '@/components/sections/methodologysection'
import StatusBar from '@/components/ui/statusbar'

export default function Home() {
  return (
    <>
      <CustomCursor />
      <GlitchBackground />
      
      <div className="max-w-4xl mx-auto p-4 relative">
        <Header />
        
        <div className="grid gap-6 mb-8">
          <AboutSection />
          <StatusSection />
          <SkillsGrid />
          <Terminal />
          <MethodologySection />
        </div>
      </div>
      
      <StatusBar />
    </>
  )
}