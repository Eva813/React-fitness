import React, { useState } from 'react'
import './Testimonial.scss'
import { testimonialsData } from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'


function Testimonial() {
  const [selected, setSelected] = useState(0)
  const testLength = testimonialsData.length

  return (
    <div className='testimonial'>
      <div className="left-t">
        <span>WHAT THEY</span>
        <span className='stroke-text'>SAY ABOUT US</span>
        <span>
          {testimonialsData[selected].review}
        </span>
        <span>
          <span className='t-name'>
            {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
          <img
            onClick={() => {
              selected === 0 ? setSelected(testLength - 1) : setSelected((prev) => prev - 1)
            }}
            src={leftArrow} alt="" />
          <img
            onClick={() => {
              selected === (testLength - 1) ? setSelected(0) : setSelected((prev) => prev + 1)
            }}
            src={rightArrow} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Testimonial
