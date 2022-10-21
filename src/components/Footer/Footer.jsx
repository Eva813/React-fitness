import React from 'react'
import './Footer.scss'
import GitHub from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin.png'

function Footer() {
  return (
    <div className='footer-section'>
      <hr />
      <div className="contact-info">
        <img src={GitHub} alt="github" />
        <img src={Instagram} alt="instagram" />
        <img src={Linkedin} alt="linkedin" />
      </div>

    </div>
  )
}

export default Footer
