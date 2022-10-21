import React from 'react'
import './Plans.scss'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className='plans-section'>
      <div className="plan-heading">
        <span>READY TO START </span>
        <span className='stroke-text'>YOUR JOURNEY</span>
        <span> NOW WITHUS</span>
      </div>
      <div className="plans">
        {plansData.map((p, i) => (
          <div className="plan" key={i}>
            {p.icon}
            <span>{p.name}</span>
            <span>$ {p.price}</span>
            <div className="features">
              {p.features.map((feature, i) => (
                <div className='feature'>
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>

              ))}
            </div>
            <div>
              <span>See more benefits -> </span>
            </div>
            <button className='btn'> Join Now</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Plans
