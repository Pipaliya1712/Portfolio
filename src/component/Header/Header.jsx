import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header>
        <nav className='pt-28'>
            <div className="flex space flex jcb">
              <div className='p15 fs24 tcFFFFFF'>I'M PARTH PIPALIYA</div>
              <ul className="flex jcc ls">
                  <li> <NavLink to="" className={({isActive}) => `p20 ${isActive? "tc00D6B4" : "tc999999 hc" } navlink`}> ABOUT </NavLink></li>
                  <li> <NavLink to="portfolio" className={({isActive}) => `p20 ${isActive? "tc00D6B4" : "tc999999 hc" } navlink`}> PORTFOLIO </NavLink></li>
                  <li> <NavLink to="contact" className={({isActive}) => `p20 ${isActive? "tc00D6B4" : "tc999999 hc" } navlink`}> CONTACT </NavLink></li>
              </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header
