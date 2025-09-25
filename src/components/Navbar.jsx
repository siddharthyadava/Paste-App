import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row gap-4 place-content-evenly'>
      <NavLink
      to={"/"}
      className={({ isActive }) =>
          isActive
            ? "text-blue-600 font-bold"
            : "text-gray-700 hover:text-blue-500"
        }>
        Home
      </NavLink>

      <NavLink
      to={"/pastes"}
      className={({ isActive }) =>
          isActive
            ? "text-blue-600 font-bold"
            : "text-gray-700 hover:text-blue-500"
        }>
        Pastes
      </NavLink>
    </div>
  )
}

export default Navbar
