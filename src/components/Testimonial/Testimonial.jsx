import React, { useState } from 'react'
import './Testimonial.scss'
import { testimonialsData } from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import { motion } from 'framer-motion'

function Testimonial() {
  const [selected, setSelected] = useState(0)
  const testLength = testimonialsData.length
  const transition = { type: 'spring', duration: 3 }

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
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          src={testimonialsData[selected].image} alt="" />
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
