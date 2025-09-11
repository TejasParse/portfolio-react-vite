import React from 'react'
import { darkColors, lightColors } from '../../config/color'
import NavButton from './components/NavButton'

const TopNavbar = ({
  mode='dark',
  activeSection,
  scrollToSection,
}) => {

  return (
    <div className='w-full py-3 flex flex-row justify-between items-center bg-dark-primary-bg text-dark-primary-text'>
      <div className='flex gap-2'>
        <h1>{"<Tejas/>"}</h1>
      </div>
      <div className='flex gap-2'>
        <NavButton label='About Me' sectionName='AboutMe' onClick={() => scrollToSection("AboutMe")} mode={mode} activeSection />
        <NavButton label='Education' sectionName='Education' onClick={() => scrollToSection("Education")} mode={mode} activeSection />
        <NavButton label='Experience' sectionName='Experience' onClick={() => scrollToSection("Experience")} mode={mode} activeSection />
        <NavButton label='Projects' sectionName='Projects' onClick={() => scrollToSection("Projects")} mode={mode} activeSection />
        <NavButton label='Skills' sectionName='Skills' onClick={() => scrollToSection("Skills")} mode={mode} activeSection />
        <NavButton label='Achievements' sectionName='Achievements' onClick={() => scrollToSection("Achievements")} mode={mode} activeSection />
        <NavButton label='Leadership' sectionName='Leadership' onClick={() => scrollToSection("Leadership")} mode={mode} activeSection />
        <NavButton label='Speed Cubing' sectionName='SpeedCubing' onClick={() => scrollToSection("SpeedCubing")} mode={mode} activeSection />
      </div>
    </div>
  )
}

export default TopNavbar