import React from 'react'
import './nav.css'
import '../../../../public/menu.svg'

 function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="" className="nav__link">Homepage</a>
        </li>
        <li className="nav__item">
          <img src="menu.svg" alt="menu" className="nav__img" />
          <a href="" className="nav__link">Catalog</a>
        </li>
        <li className="nav__item">
          <a href="" className="nav__link">About us</a>
        </li>
        <li className="nav__item">
          <a href="" className="nav__link">blog</a>
        </li>
        <li className="nav__item">
          <a href="" className="nav__link">Billing & Shipping</a>
        </li>
      </ul>
    </nav>
  )
}
export default Nav