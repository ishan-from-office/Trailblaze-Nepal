import React from 'react'
import MenuItem from './MenuItem'
import { AnimatePresence } from 'framer-motion'
const DropDown = ({ submenu, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1


  const dropdownClass = depthLevel > 1 ? 'dropdown-submenu' : ''
  return (
    <>
      <ul className={`dropdown ${dropdownClass} ${dropdown ? 'show' : ''}`}>
        {submenu?.map((sub, index) => (
          <AnimatePresence>
            <MenuItem menu={sub} key={index} depthLevel={depthLevel} />
          </AnimatePresence>
        ))}
      </ul>
    </>
  )
}

export default DropDown
