import React from 'react'
import './Hero.scss'
import Header from '../Header/Header'
import hero_image_back from '../../assets/hero_image_back.png'

import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import shero from '../../assets/shero_img.png'

import { motion } from 'framer-motion'

const Hero = () => {
  const transition = { type: 'spring', duration: 3 }
  return (
    <div className='hero'>
      <div className='left-h'>
        <Header />
        <div className='slogan'>
          <motion.div
            initial={{ left: '166px' }}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: 'tween' }}
          >

          </motion.div>
          <span>The best Fitness in the City</span>
        </div>

        {/* Heading */}
        <div className='hero-text'>
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>
          <div><span>Ideal body</span></div>
          <div>
            <span>In here we will help you to shape and build your ideal body and live up your life to fullest
            </span>
          </div>
        </div>
        {/* 製作圖像區塊 */}
        <div className="figure">
          <div>
            <span>+ 100 </span>
            <span>EXPERT COACHES</span></div>
          <div>
            <span>+ 908</span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span>+ 978 </span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>

        {/* 按鈕區塊 */}
        <div className="hero-btns">
          <button className='btn'>Get Started</button>
          <button className='btn'>Learn More</button>
        </div>
      </div>
      <div className='right-h'>
        <button className='btn'>Join Now</button>
        <motion.div className="heart-rate"
          initial={{ right: '-1rem' }}
          whileInView={{ left: '5rem' }}
          transition={{ ...transition, type: 'tween' }}
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        <img src={shero} alt="people" className='hero-img' />
        <div className='blur blur-hero'></div>
        {/* <img src={hero_image_back} alt="" className='hero-img-back' /> */}
        <div className="calories-img">
          <img src={Calories} alt="" srcset="" />
          <div>
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Hero
