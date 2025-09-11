import React from 'react'
import { darkColors, lightColors } from '../../../config/color'

const NavButton = ({
  label,
  onClick,
  mode = 'light',
  activeSection,
  sectionName,
}) => {

  const selected = activeSection === sectionName;

  return (
    <button
      onClick={onClick}
      className={`text-xl text-dark-primary-text hover:bg-dark-primary-hover exo-2-font-style px-3 py-2`}
    >
      {label}
    </button>
  )
}

export default NavButton