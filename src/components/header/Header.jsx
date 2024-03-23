import React from 'react'
import '../../../public/Logo.svg'
import '../../../public/search.svg'
import '../../../public/Icon_bag.svg'
import Nav from './nav/Nav'
import './header.css'

function Header() {
  return (
    <header className='header'>
        <div className="header-container">
            <img src="Logo.svg" alt="logo" />
            <Nav />
        </div>
        <div className="header-container2">
            <button className="header__btn">contact us</button>
            <img src="search.svg" alt="search" className="header__search" />
            <img src="Icon_bag.svg" alt="bag" className="header__bag" />
        </div>
    </header>
  )
}
export default Header