import React, { useState } from 'react'
import './Header.scss'
import Logo from '../../assets/logo2.png'
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll'

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className='header'>
      <img className='logo' src={Logo} alt="Logo" />
      {(menuOpen === false && mobile === true) ?
        <div
          className='bars'
          onClick={() => setMenuOpen(true)}

        ><img className='bars-img' src={Bars} alt="" /></div> : <ul className='header-menu'>
          <li >
            <Link
              onClick={() => setMenuOpen(false)}
              to='home'
              activeClass='active'
              span={true}
              smooth={true}
            > Home</Link>

          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to='programs'
              span={true}
              smooth={true}
            >Programs</Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              to='resons-part'
              span={true}
              smooth={true}
            >About us</Link>
          </li>
          <li >
            <Link
              onClick={() => setMenuOpen(false)}
              to='plans'
              span={true}
              smooth={true}
            >Plans</Link>
          </li>
          <li ><Link
            onClick={() => setMenuOpen(false)}
            to='testimonial'
            span={true}
            smooth={true}
          > Testmonials</Link></li>
        </ul>
      }

    </div>
  )
}

export default Header
