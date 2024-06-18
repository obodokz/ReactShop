import React from 'react'
import './newsletter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Получить эксклюзивные предложения на Email</h1>
        <p>Подпишись на рассылку и оставайся в теме</p>
        <div>
            <input type="email" placeholder='Ваш Email'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter