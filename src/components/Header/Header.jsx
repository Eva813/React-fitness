import React from 'react'
import './Header.scss'
import Logo from '../../assets/logo.png'


const Header = () => {
  return (
    <div className='header'>
      <img className='logo' src={Logo} alt="Logo" />
      <ul className='header-menu'>
        <li>Home</li>
        <li>Programs</li>
        <li>About us</li>
        <li>Plans</li>
        <li>Testmonials</li>
      </ul>
    </div>
  )
}

export default Header
