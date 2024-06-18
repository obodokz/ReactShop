import React from 'react'
import './footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__logo'>
            <img src={footer_logo} alt="" />
            <p>МАГАЗИНЧИК</p>
        </div>
        <ul className='footer__links'>
            <li>Компания</li>
            <li>Продукты</li>
            <li>Офисы</li>
            <li>О нас</li>
            <li>Контакты</li>
        </ul>
        <div className='footer__socials-icon'>
            <div className="footer__icons-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer__icons-container">
                <img src={pintester_icon} alt="" />
            </div>
            <div className="footer__icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer__copyright">
            <hr />
            <p>Copyright @ 2024 - All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer