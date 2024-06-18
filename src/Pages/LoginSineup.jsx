import React from 'react'
import './CSS/loginsignup.css'

const LoginSineup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup__container">
        <h1>Войти</h1>
        <div className="loginsignup__fields">
          <input type="text" placeholder='Ваше имя' />
          <input type="email" placeholder='Электронная почта' />
          <input type="password" placeholder='Пароль' />
        </div>
        <button>Продолжить</button>
        <p className='loginsignup__login'>Уже есть аккаунт? <span>Войти здесь</span></p>
        <div className='loginsignup__agree'>
          <input type="checkbox" name='' id = '' />
          <p>Продолжая, я соглашаюсь с правилами пользования и принимаю лицензионное соглашение!</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSineup