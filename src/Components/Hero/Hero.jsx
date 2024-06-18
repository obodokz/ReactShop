import React from 'react'
import './hero.css'
import Hand_icon from '../Assets/hand_icon.png'
import Arrow_icon from '../Assets/arrow.png'
import Hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero__left'>
            <h2>НОВОЕ ПОСТУПЛЕНИЕ!</h2>
            <div>
                <div className='hand__icon'>
                    <p>новое</p>
                    <img src={Hand_icon} alt="" />
                </div>
                <p>коллекции</p>
                <p>для всех</p>
            </div>
            <div className='hero__lates_btn'>
                <div>Свежая Коллекция</div>
                <img src={Arrow_icon} alt="" />
            </div>
        </div>

        <div className='hero__right'>
            <img src={Hero_image} alt="" />
        </div>
    </div>
  )
}

export default Hero