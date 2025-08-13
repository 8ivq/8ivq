'use client'

import { useGlitchEffect } from '@/hooks/useglitcheffect'

const skillCategories = [
  {
    title: 'Frontend Arsenal',
    skills: ['Next.js', 'React', 'CSS3', 'JavaScript', 'Angular', 'HTML5', 'jQuery', 'Vue.js', 'Figma']
  },
  {
    title: 'Backend Weapons',
    skills: ['Node.js', 'Express.js', 'Python', 'C++', 'Lua', 'MongoDB', 'MySQL', 'Cassandra', 'Arduino']
  },
  {
    title: 'System Tools',
    skills: ['Linux', 'Git', 'Bash', 'Terminal', 'Docker']
  },
  {
    title: 'Research Methods',
    skills: ['Network Analysis', 'Data Mining', 'Pattern Recognition', 'Information Gathering', 'Digital Forensics']
  }
]

function SkillTag({ skill }: { skill: string }) {
  const { ref } = useGlitchEffect()

  return (
    <span
      ref={ref}
      className="bg-terminal-gray-600/80 text-terminal-text px-2 py-1 rounded text-xs border border-terminal-highlight transition-all duration-300 hover:border-terminal-gray-400 hover:text-terminal-white hover:-translate-y-0.5 relative overflow-hidden group"
    >
      <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-terminal-gray-100/20 to-transparent transition-left duration-500 group-hover:left-full"></span>
      {skill}
    </span>
  )
}

export default function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      {skillCategories.map((category, index) => (
        <div key={index} className="bg-terminal-gray-800/80 border border-terminal-border rounded p-4 relative overflow-hidden">
          <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-terminal-gray-500/5 to-transparent animate-shimmer"></div>
          
          <h3 className="text-terminal-gray-300 text-sm mb-3 uppercase tracking-wide">
            {category.title}
          </h3>
          <div className="flex flex-wrap gap-1">
            {category.skills.map((skill, skillIndex) => (
              <SkillTag key={skillIndex} skill={skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}