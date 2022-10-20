import React from 'react'
import './programs.scss'
import { programsData } from '../../data/programsData'
import RrightArrow from '../../assets/rightArrow.png'

const programs = () => {
  return (
    <div className='programs'>
      <div className='programs-heading'>
        <span className='stroke-text'>EXPLORE OUR</span>
        <span>PROGRAMS</span>
        <span className='stroke-text'>TO SHAPE YOU</span>
      </div>

      <div className="program-categories">
        {programsData.map((p) => (
          <div className="category">
            {p.image}
            <span>{p.heading}</span>
            <span>{p.details}</span>
            <div className='join'><span >Join Now </span> <img src={RrightArrow} alt="arrow" /></div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default programs
