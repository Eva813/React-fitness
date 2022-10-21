import React from 'react'
import './Reasons.scss'
import image1 from '../../assets/img1.jpg'
import image2 from '../../assets/img2.jpg'
import image3 from '../../assets/img3.jpg'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'

const Reasons = () => {
  return (
    <div className='reasons' id='resons-part'>
      <div className="left-r">
        <span>some reasons</span>
        <div><span className='stroke-text'>Why </span>
          <span>choose us ? </span></div>

        <div className="tick-list">
          <div>
            <img src={tick} alt=""></img>
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src={tick} alt=""></img>
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt=""></img>
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt=""></img>
            <span>RELIABLE PARTNERS</span>
          </div>
          <div className="brand-img">
            <img src={nb} alt="Newbalance" />
            <img src={adidas} alt="Adidas" />
            <img src={nike} alt="Nike" />
          </div>
        </div>
      </div>

      <div className="right-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>

    </div>
  )
}

export default Reasons
