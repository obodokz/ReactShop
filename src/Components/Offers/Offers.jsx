import React from 'react'
import './offers.css'
import exclucive_img from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY THE BEST SELLERS PRODUCTS</p>
            <button>Try Now</button>
        </div>
        <div className='offers-right'>
            <img src={exclucive_img} alt="" />
        </div>
    </div>
  )
}

export default Offers