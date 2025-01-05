import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <img src={assets.logo} alt=""/>
      <ul>
          <NavLink>
            <li>HOME</li>
            <hr/>
          </NavLink>
          <NavLink>
            <li>TOP TECHNICIANS</li>
            <hr/>
          </NavLink>
          <NavLink>
            <li>FIND JOBS</li>
            <hr/>
          </NavLink>
          <NavLink>
            <li>ABOUT</li>
            <hr/>
          </NavLink>
          <NavLink>
            <li>CONTACT</li>
            <hr/>
          </NavLink>
      </ul>

      <div>
         <button>
            Create Account
         </button>
      </div>
    </div>
  )
}

export default Navbar
